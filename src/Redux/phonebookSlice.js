import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { login, logOut, fetchRefresh, register } from './operationsAuth';

const initialState = {
  contacts: {
    items: [],
  },
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  refreshed: false,
  isLoading: false,
  error: null,
  filter: '',
};

export const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.refreshed = false;
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = [...state.contacts.items, action.payload];
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = state.contacts.items.filter(
        item => item.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [register.pending]: state => {
      state.error = null;
    },
    [register.fulfilled]: (state, action) => {
      state.auth.user = action.payload.user;
    },
    [register.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.auth.token = null;
    },
    [logOut.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: state => {
      state.auth.user = { name: null, email: null };
      state.auth.token = null;
      state.auth.isLoggedIn = false;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchRefresh.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchRefresh.fulfilled]: (state, action) => {
      state.refreshed = true;
      state.isLoading = false;
      // state.auth.user = action.payload;
    },
    [fetchRefresh.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.auth.user = { name: null, email: null };
    },
  },
});
export const { setFilterValue } = phonebookSlice.actions;

const persistConfig = {
  key: 'local-key',
  storage,
  whitelist: ['auth'],
};
export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);
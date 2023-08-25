import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('api/contacts');
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
      }
    }
    
);
  
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone, email }, thunkAPI) => {
    try {
      const response = await axios.post('api/contacts', {
        name,
        phone,
        email,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  if (token) {
    return (axios.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  axios.defaults.headers.common.authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await axios.post('/users/signup', data);
      setToken(result.token);
      console.log('Registered')
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await axios.post('/users/login', data);
      setToken(result.token);
      console.log(result.token);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/login', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    setToken();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (token) => {
    if (token === null) return
    setToken(token);
    try {
    const { data } = await axios.post('/users/current');
    return data;
  } catch (error) {
    console.log(error);
  }
});
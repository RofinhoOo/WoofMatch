// api.js
import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000'; // Cambia esto según la URL de tu backend

const api = axios.create({
  baseURL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/profile');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;

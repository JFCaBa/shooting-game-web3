import axios from 'axios';
import { authService } from './authService';
import { API_BASE_URL } from '@/src/services/apiConfig';

const api = axios.create({
  baseURL: API_BASE_URL
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = authService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiService = {
  async getBalance() {
    const response = await api.get('/players/balance');
    return response.data;
  },

  async transfer(to: string, amount: number) {
    const response = await api.post('/players/transfer', { to, amount });
    return response.data;
  },

  async getProfile() {
    const response = await api.get('/players/profile');
    console.log(response.data);
    return response.data;
  },

  async getTransactions() {
    const response = await api.get('/players/transactions');
    return response.data;
  }
};
import { API_BASE_URL } from '@/src/config/apiConfig';
import axios from 'axios';
const Cookies = require('js-cookie');

const TOKEN_KEY = 'auth_token';

export interface LoginCredentials {
  email: string;
  password: string;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const response = await axios.post(`${API_BASE_URL}/players/login`, credentials);
    const { token } = response.data;
    Cookies.set(TOKEN_KEY, token);
    return token;
  },

  logout() {
    Cookies.remove(TOKEN_KEY);
  },

  getToken() {
    return Cookies.get(TOKEN_KEY);
  },

  isAuthenticated() {
    return !!this.getToken();
  }
};
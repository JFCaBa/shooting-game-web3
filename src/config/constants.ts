import dotenv from 'dotenv';

dotenv.config();

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const API_ENDPOINTS = {
  PLAYERS: '/api/v1/players',
  ACHIEVEMENTS: '/api/v1/achievements',
  LEADERBOARD: '/api/v1/leaderboard',
  TOKENS: '/api/v1/tokens',
} as const;

export const API_ERROR_MESSAGES = {
  GENERAL: 'An error occurred. Please try again later.',
  UNAUTHORIZED: 'Please login to continue.',
  NOT_FOUND: 'Resource not found.',
  RATE_LIMITED: 'Too many requests. Please try again later.',
} as const;
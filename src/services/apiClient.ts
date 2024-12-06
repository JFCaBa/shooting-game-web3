// src/services/apiClient.ts
import { API_BASE_URL } from '@/src/config/constants';

export interface PlayerStats {
  id: string;
  username: string;
  level: number;
  experience: number;
  kills: number;
  deaths: number;
  matchesPlayed: number;
  matchesWon: number;
  winRate: number;
  accuracy: number;
  lastPlayed: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unlockedAt: string;
  progress: number;
  maxProgress: number;
  isCompleted: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  username: string;
  score: number;
  winRate: number;
  kills: number;
  deaths: number;
}

export interface TokenClaimResponse {
  success: boolean;
  amount: string;
  transactionHash?: string;
  message?: string;
}

class ApiClient {
  private baseUrl: string;
  private authToken?: string;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || API_BASE_URL;
  }

  setAuthToken(token: string) {
    this.authToken = token;
  }

  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(this.authToken && { Authorization: `Bearer ${this.authToken}` }),
      ...options.headers,
    };

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || 'An error occurred');
    }

    return response.json();
  }

  // Player related endpoints
  async getPlayerStats(playerId: string): Promise<PlayerStats> {
    return this.fetch<PlayerStats>(`/api/v1/players/${playerId}`);
  }

  async updatePlayerProfile(playerId: string, data: Partial<PlayerStats>): Promise<PlayerStats> {
    return this.fetch<PlayerStats>(`/api/v1/players/${playerId}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // Achievement related endpoints
  async getAchievements(playerId: string): Promise<Achievement[]> {
    return this.fetch<Achievement[]>(`/api/v1/players/${playerId}/achievements`);
  }

  async claimAchievement(playerId: string, achievementId: string): Promise<Achievement> {
    return this.fetch<Achievement>(
      `/api/v1/players/${playerId}/achievements/${achievementId}/claim`,
      { method: 'POST' }
    );
  }

  // Leaderboard related endpoints
  async getLeaderboard(
    timeFrame: 'daily' | 'weekly' | 'monthly' | 'allTime',
    page: number = 1,
    limit: number = 100
  ): Promise<LeaderboardEntry[]> {
    return this.fetch<LeaderboardEntry[]>(
      `/api/v1/leaderboard?timeFrame=${timeFrame}&page=${page}&limit=${limit}`
    );
  }

  // Token related endpoints
  async claimTokens(playerId: string): Promise<TokenClaimResponse> {
    return this.fetch<TokenClaimResponse>(
      `/api/v1/players/${playerId}/claim-tokens`,
      { method: 'POST' }
    );
  }
}

// Export a singleton instance
export const apiClient = new ApiClient();
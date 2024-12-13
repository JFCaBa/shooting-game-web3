// src/services/achievementService.ts
import { API_BASE_URL } from './apiConfig';

export interface Achievement {
  _id: string;
  playerId: string;
  type: 'kills' | 'hits' | 'accuracy';
  milestone: number;
  unlockedAt: string;
  reward: number;
}

export class AchievementService {
  private baseUrl = API_BASE_URL;

  async getPlayerAchievements(playerId: string): Promise<Achievement[]> {
    const response = await fetch(`${this.baseUrl}/players/${playerId}/achievements`);
    if (!response.ok) throw new Error('Failed to fetch achievements');
    return response.json();
  }

  async getAchievementConfig(): Promise<Achievement[]> {
    const response = await fetch(`${this.baseUrl}/achievements/config`);
    if (!response.ok) throw new Error('Failed to fetch achievement config');
    return response.json();
  }
}
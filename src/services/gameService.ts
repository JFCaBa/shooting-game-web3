import { API_BASE_URL } from '@/src/config/apiConfig';

export class GameService {
  async getPlayerStats(playerId: string) {
    const response = await fetch(`${API_BASE_URL}/players/${playerId}`);
    return response.json();
  }

  async getAchievements(playerId: string) {
    const response = await fetch(`${API_BASE_URL}/players/${playerId}/achievements`);
    return response.json();
  }

  async claimTokens(playerId: string) {
    const response = await fetch(`${API_BASE_URL}/players/${playerId}/claim`, {
      method: 'POST',
    });
    return response.json();
  }
}
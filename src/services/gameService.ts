const API_URL = process.env.NEXT_PUBLIC_API_URL;

export class GameService {
  async getPlayerStats(playerId: string) {
    const response = await fetch(`${API_URL}/api/v1/players/${playerId}`);
    return response.json();
  }

  async getAchievements(playerId: string) {
    const response = await fetch(`${API_URL}/api/v1/players/${playerId}/achievements`);
    return response.json();
  }

  async claimTokens(playerId: string) {
    const response = await fetch(`${API_URL}/api/v1/players/${playerId}/claim`, {
      method: 'POST',
    });
    return response.json();
  }
}
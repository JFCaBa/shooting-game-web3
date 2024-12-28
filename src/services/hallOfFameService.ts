import { API_BASE_URL } from '@/src/services/apiConfig';

export interface PlayerStats {
  _id: string;
  playerId: string;
  nickName: string;
  stats: {
    hits: number;
    kills: number;
    droneHits: number;
  };
}

export class HallOfFameService {
  private baseUrl = API_BASE_URL;

  async getTopPlayers(): Promise<PlayerStats[]> {
    const response = await fetch(`${this.baseUrl}/halloffame/kills`);
    if (!response.ok) throw new Error('Failed to fetch top players');
    return response.json();
  }
}

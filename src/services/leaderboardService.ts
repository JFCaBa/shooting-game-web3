import { API_BASE_URL } from './apiConfig';

export interface LeaderboardPlayer {
    _id: string;
    playerId: string;
    stats: {
      hits: number;
      kills: number;
      droneHits: number;
    };
  }

  export class LeaderboardService {
    private baseUrl = API_BASE_URL;

      async getTopPlayers(): Promise<LeaderboardPlayer[]> {
        const response = await fetch(`${this.baseUrl}/halloffame/kills`);
        if (!response.ok) throw new Error('Failed to fetch top players');
        return response.json();
      }
  }
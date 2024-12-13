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
  
    async getTopPlayers(category: 'kills' | 'hits' | 'drones'): Promise<LeaderboardPlayer[]> {
      // Map 'drones' category to 'droneHits' in the API URL
      const apiCategory = category === 'drones' ? 'droneHits' : category;
      const response = await fetch(`${this.baseUrl}/halloffame/${apiCategory}`);
      if (!response.ok) throw new Error('Failed to fetch leaderboard');
      return response.json();
    }
  }
import { API_BASE_URL } from '@/src/services/apiConfig';

export class PlayerService {
    private baseUrl = API_BASE_URL;
  
    async getTokenBalance(playerId: string) {
      const response = await fetch(`${this.baseUrl}/players/${playerId}/tokens`);
      if (!response.ok) throw new Error('Failed to fetch token balance');
      return response.json();
    }
  
    async transferTokens(fromPlayerId: string, toWalletAddress: string, amount: number) {
      const response = await fetch(`${this.baseUrl}/players/transfer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromPlayerId, toWalletAddress, amount })
      });
      if (!response.ok) throw new Error('Failed to transfer tokens');
      return response.json();
    }
  
    async claimAdReward(walletAddress: string) {
      const response = await fetch(`${this.baseUrl}/players/adReward`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress })
      });
      if (!response.ok) throw new Error('Failed to claim reward');
      return response.json();
    }
  
    async getPlayerStats(playerId: string) {
      const response = await fetch(`${this.baseUrl}/players/${playerId}/stats`);
      if (!response.ok) throw new Error('Failed to fetch player stats');
      return response.json();
    }
  }
  
  
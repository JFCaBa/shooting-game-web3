export interface TokenBalance {
    mintedBalance: number;
    totalBalance: number;
  }
  
  export interface PlayerStats {
    stats: {
      kills: number;
      hits: number;
      deaths: number;
      accuracy: number;
      survivalStart: string;
    };
    lastActive: string;
  }
  
  export interface Achievement {
    id: string;
    name: string;
    description: string;
    timestamp: string;
    reward: number;
  }
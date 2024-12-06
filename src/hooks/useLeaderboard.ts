// src/hooks/useLeaderboard.ts
import { useState, useEffect } from 'react';

export interface Player {
  rank: number;
  username: string;
  score: number;
  winRate: number;
  kills: number;
  deaths: number;
  gamesPlayed: number;
  matchesWon: number;
}

export interface LeaderboardFilters {
  timeFrame: 'daily' | 'weekly' | 'monthly' | 'allTime';
  sortField: 'score' | 'winRate' | 'kills' | 'gamesPlayed';
  sortOrder: 'asc' | 'desc';
}

export const useLeaderboard = (filters: LeaderboardFilters) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      try {
        // Replace with actual API call
        const response = await mockFetchLeaderboard(filters);
        setPlayers(response);
        setError(null);
      } catch (err) {
        setError('Failed to fetch leaderboard data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, [filters]);

  return {
    players,
    isLoading,
    error
  };
};

// Mock API call - replace with actual implementation
const mockFetchLeaderboard = async (filters: LeaderboardFilters): Promise<Player[]> => {
  // Simulated API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const mockPlayers: Player[] = [
    {
      rank: 1,
      username: "ProGamer123",
      score: 15000,
      winRate: 75.5,
      kills: 1250,
      deaths: 400,
      gamesPlayed: 200,
      matchesWon: 151
    },
    // Add more mock data as needed
  ];

  return mockPlayers;
};
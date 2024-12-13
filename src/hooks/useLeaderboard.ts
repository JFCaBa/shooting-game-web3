import { useQuery } from '@tanstack/react-query';
import { LeaderboardService } from '@/src/services/leaderBoardService';

const leaderboardService = new LeaderboardService();

export const useLeaderboard = (category: 'kills' | 'hits' | 'drones') => {
  return useQuery({
    queryKey: ['leaderboard', category],
    queryFn: () => leaderboardService.getTopPlayers(category),
  });
};
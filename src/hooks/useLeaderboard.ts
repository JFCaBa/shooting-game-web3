import { useQuery } from '@tanstack/react-query';
import { LeaderboardService } from '@/src/services/leaderboardService';

const leaderboardService = new LeaderboardService();

export const useLeaderboard = () => {
  return useQuery({
    queryKey: ['leaderboard'],
    queryFn: () => leaderboardService.getTopPlayers(),
  });
};
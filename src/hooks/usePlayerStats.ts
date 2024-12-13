// src/hooks/usePlayerStats.ts
import { useQuery } from '@tanstack/react-query';
import { PlayerService } from '@/src/services/playerService';

const playerService = new PlayerService();

export const usePlayerStats = (playerId: string) => {
  return useQuery({
    queryKey: ['playerStats', playerId],
    queryFn: () => playerService.getPlayerStats(playerId),
    enabled: !!playerId,
  });
};

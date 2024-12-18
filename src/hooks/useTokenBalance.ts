import { useQuery } from '@tanstack/react-query';
import { PlayerService } from '@/src/services/playerService';

const playerService = new PlayerService();

export const useTokenBalance = (playerId: string) => {
  return useQuery({
    queryKey: ['tokenBalance', playerId],
    queryFn: () => playerService.getTokenBalance(playerId),
    enabled: !!playerId,
  });
};

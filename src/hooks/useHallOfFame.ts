import { useQuery } from '@tanstack/react-query';
import { HallOfFameService, PlayerStats } from '@/src/services/hallOfFameService';

const hallOfFameService = new HallOfFameService();

export const useHallOfFame = (type: 'kills' | 'hits' | 'drones') => {
  return useQuery<PlayerStats[]>({
    queryKey: ['hallOfFame'],
    queryFn: () => hallOfFameService.getTopPlayers(),
  });
};
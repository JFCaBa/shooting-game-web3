// src/hooks/useAchievements.ts
import { useQuery } from '@tanstack/react-query';
import { AchievementService, Achievement } from '@/src/services/achievementService';

const achievementService = new AchievementService();

export const useAchievements = (playerId?: string) => {
  return useQuery<Achievement[]>({
    queryKey: ['achievements', playerId],
    queryFn: () => achievementService.getPlayerAchievements(playerId as string),
    enabled: !!playerId,
  });
};
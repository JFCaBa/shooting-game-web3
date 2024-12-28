import { useQuery } from '@tanstack/react-query';
import { useAuth } from '@/src/providers/AuthProvider';
import { apiService } from '@/src/services/apiService';

export interface Achievement {
  _id: string;
  playerId: string;
  nickName: string;
  type: 'kills' | 'hits' | 'accuracy';
  milestone: number;
  unlockedAt: string;
  reward: number;
}

export const useAchievements = () => {
  const { isAuthenticated } = useAuth();

  return useQuery<Achievement[]>({
    queryKey: ['playerAchievements'],
    queryFn: () => apiService.getAchievements(),
    enabled: isAuthenticated,
  });
};

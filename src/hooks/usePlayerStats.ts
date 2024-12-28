import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/src/services/apiService';
import { useAuth } from '@/src/providers/AuthProvider';

export const usePlayerStats = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ['playerStats'],
    queryFn: () => apiService.getProfile(),
    enabled: isAuthenticated
  });
};
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/src/services/apiService';
import { useAuth } from '@/src/providers/AuthProvider';

export const useTokenBalance = () => {
  const { isAuthenticated } = useAuth();

  return useQuery({
    queryKey: ['tokenBalance'],
    queryFn: () => apiService.getBalance(),
    enabled: isAuthenticated
  });
};
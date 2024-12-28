import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/src/services/apiService';
import { useAuth } from '@/src/providers/AuthProvider';

export const useTokenTransfer = () => {
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: ({ to, amount }: { to: string; amount: string }) => {
      if (!isAuthenticated) {
        throw new Error('User must be authenticated to transfer tokens');
      }
      return apiService.transfer(to, parseInt(amount));
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tokenBalance'] });
    },
  });

  return {
    transfer: mutate,
    isLoading,
    isAuthenticated
  };
};
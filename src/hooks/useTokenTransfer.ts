import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@/src/services/apiService';

export const useTokenTransfer = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: ({ to, amount }: { to: string; amount: string }) => 
      apiService.transfer(to, parseInt(amount)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tokenBalance'] });
    }
  });

  return {
    transfer: mutate,
    isLoading
  };
};
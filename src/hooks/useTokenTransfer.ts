// src/hooks/useTokenTransfer.ts
import { useWriteContract, useWatchContractEvent } from 'wagmi';
import { GAME_TOKEN_ADDRESS, GAME_TOKEN_ABI } from '@/src/config/web3Config';

export const useTokenTransfer = () => {
  const { data: hash, isPending, writeContract } = useWriteContract();

  const transfer = (to: string, amount: string) => {
    writeContract({
      address: GAME_TOKEN_ADDRESS,
      abi: GAME_TOKEN_ABI,
      functionName: 'transfer',
      args: [to, amount],
    });
  };

  return { 
    transfer, 
    isLoading: isPending,
    hash 
  };
};
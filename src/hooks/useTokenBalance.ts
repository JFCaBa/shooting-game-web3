import { useContractRead } from 'wagmi';
import { GAME_TOKEN_ADDRESS, GAME_TOKEN_ABI } from '@/config/web3Config';

export const useTokenBalance = (address?: string) => {
  return useContractRead({
    address: GAME_TOKEN_ADDRESS,
    abi: GAME_TOKEN_ABI,
    functionName: 'balanceOf',
    args: [address],
    enabled: !!address,
  });
};

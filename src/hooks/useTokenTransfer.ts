import { useContractWrite, useWaitForTransaction } from 'wagmi';
import { GAME_TOKEN_ADDRESS, GAME_TOKEN_ABI } from '@/config/web3Config';

export const useTokenTransfer = () => {
  const { write, data } = useContractWrite({
    address: GAME_TOKEN_ADDRESS,
    abi: GAME_TOKEN_ABI,
    functionName: 'transfer',
  });

  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
  });

  const transfer = (to: string, amount: string) => {
    write({ args: [to, amount] });
  };

  return { transfer, isLoading };
};
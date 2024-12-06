// src/components/tokens/TokenPurchase.tsx
import { useState } from 'react';
import { useAccount, useContractWrite, useWatchContractEvent } from 'wagmi';
import { GAME_TOKEN_ADDRESS, GAME_TOKEN_ABI, OWNER_ADDRESS } from '@/src/config/web3Config';
import { parseEther } from 'viem';

export const TokenPurchase = () => {
  const [amount, setAmount] = useState('');
  const [isPending, setIsPending] = useState(false);
  const { address } = useAccount();
  
  const { writeContract, isError } = useContractWrite({
    abi: GAME_TOKEN_ABI,
    address: GAME_TOKEN_ADDRESS,
    functionName: 'mint',
  });

  useWatchContractEvent({
    address: GAME_TOKEN_ADDRESS,
    abi: GAME_TOKEN_ABI,
    eventName: 'Transfer',
    onLogs(logs) {
      setIsPending(false);
    },
  });

  const handlePurchase = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !address) return;

    setIsPending(true);
    await writeContract({
      args: [address, parseEther(amount)],
    });
  };

  return (
    <form onSubmit={handlePurchase} className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Purchase Tokens</h2>
      <div className="space-y-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount of tokens"
          className="w-full p-2 border rounded"
          min="0"
          step="0.1"
        />
        <button
          type="submit"
          disabled={ isPending || !amount}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isPending ? 'Processing...' : 'Purchase'}
        </button>
      </div>
    </form>
  );
};
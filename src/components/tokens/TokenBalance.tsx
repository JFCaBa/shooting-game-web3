import React from 'react';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';

export const TokenBalance = () => {
  const { data: balance, isLoading } = useTokenBalance();

  if (isLoading) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2">Game Tokens</h2>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Game Tokens</h2>
      <p className="text-gray-600">Balance: {balance?.amount || 0} SHOT</p>
    </div>
  );
};
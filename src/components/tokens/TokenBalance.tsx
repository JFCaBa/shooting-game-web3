import React from 'react';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';
import { usePlayerStats } from '@/src/hooks/usePlayerStats';


export const TokenBalance = () => {
  const { data: playerStats, isLoading } = usePlayerStats();

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
      <p className="text-gray-600">Balance: {playerStats?.player ? (Number(playerStats.player.mintedBalance) + Number(playerStats.player.pendingBalance)).toString() : '0'} SHOT</p>
    </div>
  );
};
import React from 'react';
import { useTokenBalance } from '@/hooks/useTokenBalance';
import { useAccount } from 'wagmi';

export const TokenBalance = () => {
 const { address } = useAccount();
 const { data: balance, isLoading } = useTokenBalance(address);

 if (isLoading) return <div className="p-4">Loading...</div>;

 return (
   <div className="p-4 bg-white rounded-lg shadow">
     <h2 className="text-lg font-semibold mb-2">Game Tokens</h2>
     <p className="text-gray-600">Balance: {balance?.toString() || '0'} GAME</p>
   </div>
 );
};
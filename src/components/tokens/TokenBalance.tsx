// src/components/tokens/TokenBalance.tsx
import React from 'react';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';
import { useAccount } from 'wagmi';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Coins } from 'lucide-react';

export const TokenBalance = () => {
  const { address } = useAccount();
  const { data: balance, isLoading } = useTokenBalance(address);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Game Tokens</CardTitle>
        <Coins className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex items-center space-x-2">
            <div className="h-6 w-24 animate-pulse rounded bg-muted"></div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="text-2xl font-bold">{balance?.toString() || '0'}</div>
            <p className="text-sm text-muted-foreground">GAME</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
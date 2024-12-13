import React from 'react';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';
import { Card, CardHeader, CardContent, CardTitle } from '@/src/components/ui/card';
import { Coins } from 'lucide-react';

export const TokenDisplay = ({ playerId }: { playerId: string }) => {
  const { data: balance, isLoading } = useTokenBalance(playerId);

  if (isLoading) return <div>Loading balance...</div>;
  if (!balance) return null;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Token Balance</CardTitle>
        <Coins className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Minted Balance:</span>
            <span className="font-bold">{balance.mintedBalance}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Balance:</span>
            <span className="font-bold">{balance.totalBalance}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
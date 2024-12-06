// src/components/tokens/TokenTransfer.tsx
import { useState } from 'react';
import { useTokenTransfer } from '@/src/hooks/useTokenTransfer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { SendHorizontal } from 'lucide-react';

export const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const { transfer, isLoading, hash } = useTokenTransfer();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipient || !amount) return;
    transfer(recipient, amount);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SendHorizontal className="h-5 w-5" />
          Transfer Tokens
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="recipient">
              Recipient Address
            </label>
            <input
              id="recipient"
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="0x..."
              className="w-full px-3 py-2 bg-background border rounded-md text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="amount">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              min="0"
              step="0.1"
              className="w-full px-3 py-2 bg-background border rounded-md text-sm"
            />
          </div>
          {hash && (
            <div className="text-sm text-green-500">
              Transaction submitted! Hash: {hash}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            disabled={isLoading || !recipient || !amount} 
            className="w-full"
          >
            {isLoading ? 'Transferring...' : 'Transfer Tokens'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
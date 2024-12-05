import { useState } from 'react';
import { useTokenTransfer } from '@/hooks/useTokenTransfer';

export const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const { transfer, isLoading } = useTokenTransfer();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await transfer(recipient, amount);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Transfer Tokens</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient Address"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {isLoading ? 'Transferring...' : 'Transfer'}
        </button>
      </div>
    </form>
  );
};
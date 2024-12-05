import { useAccount, useBalance } from 'wagmi';

export const WalletInfo = () => {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Wallet Info</h2>
      <p className="text-gray-600">Address: {address}</p>
      <p className="text-gray-600">Balance: {balance?.formatted} {balance?.symbol}</p>
    </div>
  );
};
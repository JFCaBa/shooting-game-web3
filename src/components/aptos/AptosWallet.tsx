import React, { useEffect, useState } from "react";
import { useAptos } from "@/src/providers/AptosProvider";

export const AptosWallet = () => {
  const { aptosService, isConnected, connect, disconnect } = useAptos();
  const [balance, setBalance] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (isConnected && aptosService?.getAccount()) {
        setLoading(true);
        setError(null);
        try {
          const account = aptosService.getAccount();
          if (account) {
            const address = account.accountAddress.toString(); // Use accountAddress
            const accountBalance = await aptosService.getBalance(address);
            setBalance(accountBalance);
          }
        } catch (err) {
          console.error("Failed to fetch balance:", err);
          setError("Unable to fetch balance. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBalance();
  }, [isConnected, aptosService]);

  const handleConnect = async () => {
    try {
      setError(null);
      await connect();
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      setError("Unable to connect wallet. Please try again.");
    }
  };

  const handleDisconnect = () => {
    disconnect();
    setBalance("0");
    setError(null);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Aptos Wallet</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : isConnected ? (
        <div className="space-y-2">
          <p className="text-gray-600">Balance: {balance} APT</p>
          <button
            onClick={handleDisconnect}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Connect Aptos Wallet
        </button>
      )}
    </div>
  );
};
import React, { createContext, useContext, useState } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { AptosService } from '../services/aptosService';
import { web3auth } from '../config/web3Config';
import { AptosContextType } from '../types/aptos';

const AptosContext = createContext<AptosContextType>({
  web3auth: null,
  aptosService: null,
  isConnecting: false,
  isConnected: false,
  connect: async () => {},
  disconnect: async () => {},
});

export const useAptos = () => useContext(AptosContext);

export function AptosProvider({ children }: { children: React.ReactNode }) {
  const [aptosService] = useState(new AptosService());
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const connect = async () => {
    if (!web3auth) return;
    
    try {
      setIsConnecting(true);
      setError(null);
      
      await web3auth.initModal();
      const web3authProvider = await web3auth.connect();
      
      if (!web3authProvider) {
        throw new Error("Failed to connect to Web3Auth");
      }

      // Get the private key
      const privateKey = await web3authProvider.request({ 
        method: "private_key"
      });

      if (!privateKey) {
        throw new Error("Failed to get private key from wallet");
      }

      // Connect with the private key
      await aptosService.connectWithPrivateKey(privateKey as string);
      setIsConnected(true);
      
    } catch (error: any) {
      console.error("Error connecting wallet:", error);
      setError(error.message || "Failed to connect wallet");
      setIsConnected(false);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = async () => {
    if (!web3auth) return;
    try {
      await web3auth.logout();
      setIsConnected(false);
      setError(null);
    } catch (error: any) {
      console.error("Error disconnecting wallet:", error);
      setError(error.message || "Failed to disconnect wallet");
    }
  };

  return (
    <AptosContext.Provider
      value={{
        web3auth,
        aptosService,
        isConnecting,
        isConnected,
        connect,
        disconnect,
      }}
    >
      {children}
    </AptosContext.Provider>
  );
}
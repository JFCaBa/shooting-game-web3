import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from "@web3auth/modal";
import { CommonPrivateKeyProvider } from "@web3auth/base-provider";
import { WEB3AUTH_NETWORK } from "@web3auth/base";
import { APTOS_CHAIN_CONFIG, WEB3AUTH_CLIENT_ID } from '@/src/config/aptosConfig';
import { AptosService } from '@/src/services/aptosService';

interface AptosContextType {
  web3auth: Web3Auth | null;
  aptosService: AptosService | null;
  isConnecting: boolean;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

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
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [aptosService] = useState(new AptosService());
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const privateKeyProvider = new CommonPrivateKeyProvider({
          config: { chainConfig: APTOS_CHAIN_CONFIG },
        });

        const web3authInstance = new Web3Auth({
          clientId: WEB3AUTH_CLIENT_ID,
          web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
          chainConfig: APTOS_CHAIN_CONFIG,
        });

        await web3authInstance.initModal();
        setWeb3auth(web3authInstance);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const connect = async () => {
    if (!web3auth) return;
    try {
      setIsConnecting(true);
      const provider = await web3auth.connect();
      if (provider) {
        const privateKey = await provider.request({ method: "private_key" });
        await aptosService.initializeAccount(privateKey as string);
        setIsConnected(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnect = async () => {
    if (!web3auth) return;
    await web3auth.logout();
    setIsConnected(false);
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
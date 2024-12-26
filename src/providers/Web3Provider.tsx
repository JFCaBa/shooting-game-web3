// src/providers/Web3Provider.tsx
import { WagmiProvider, createConfig, useDisconnect } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, bscTestnet } from 'wagmi/chains';
import { useEffect } from 'react';

const config = getDefaultConfig({
  appName: 'Shooting Game',
  projectId: 'shootingdapp.com',
  chains: [bscTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

function DisconnectHandler() {
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const handleOffline = () => {
      disconnect();
    };

    window.addEventListener('offline', handleOffline);
    return () => window.removeEventListener('offline', handleOffline);
  }, [disconnect]);

  return null;
}

export function Web3Provider({ children }: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <DisconnectHandler />
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
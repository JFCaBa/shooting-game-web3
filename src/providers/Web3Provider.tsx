// src/providers/Web3Provider.tsx
import { WagmiProvider, createConfig } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, bscTestnet } from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Shooting Game',
  projectId: 'onedayvpn.com', // You need to add your WalletConnect project ID here
  chains: [bscTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export function Web3Provider({ children }: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
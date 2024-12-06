// src/providers/Web3Provider.tsx
import React from 'react';
import { WagmiProvider, createConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { gameChain } from '@/src/config/web3Config';
import { http } from 'viem';

const config = createConfig({
 chains: [gameChain],
 transports: {
   [gameChain.id]: http()
 },
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
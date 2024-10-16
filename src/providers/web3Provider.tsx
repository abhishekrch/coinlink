'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig, WagmiProvider } from 'wagmi';
import { ConnectKitProvider, getDefaultConfig, SIWEProvider } from 'connectkit';
import { mainnet, polygon, polygonZkEvmCardona } from 'wagmi/chains';

const config = createConfig(
  getDefaultConfig({
    // Your dApps chains
    chains: [mainnet, polygonZkEvmCardona, polygon],
    transports: {
      // RPC URL for each chain
      [mainnet.id]: http(
        `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
      ),
      [polygonZkEvmCardona.id]: http(
        `https://polygonzkevm-cardona.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
      ),
      [polygon.id]: http(
        `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
      ),
    },

    // Required API Keys
    walletConnectProjectId:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? '',

    // Required App Info
    appName: 'Coin Link',

  })
);

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
          <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
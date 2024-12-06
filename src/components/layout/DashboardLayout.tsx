// src/components/layout/DashboardLayout.tsx
import React from 'react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Layout } from 'lucide-react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-xl font-bold text-purple-500">
                🎮 Shooting Game
              </Link>
              {isConnected && (
                <div className="hidden md:block ml-10">
                  <div className="flex items-baseline space-x-4">
                    <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
                      Dashboard
                    </Link>
                    <Link href="/tokens" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Tokens
                    </Link>
                    <Link href="/achievements" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Achievements
                    </Link>
                    <Link href="/leaderboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
                      Leaderboard
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <ConnectButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {!isConnected ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Welcome to Shooting Game</h2>
            <p className="text-gray-400 mb-8">Connect your wallet to access the game dashboard</p>
            <ConnectButton />
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
// src/components/layout/Header.tsx
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => {
  return (
    <header className="bg-[#1c1c24] text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-semibold">
            Shooting Game
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white">Dashboard</Link>
            <Link href="/tokens" className="text-gray-300 hover:text-white">Tokens</Link>
            <Link href="/achievements" className="text-gray-300 hover:text-white">Achievements</Link>
            <Link href="/leaderboard" className="text-gray-300 hover:text-white">Leaderboard</Link>
          </div>
        </div>
        
        <div>
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
};
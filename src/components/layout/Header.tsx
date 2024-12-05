// src/components/layout/Header.tsx
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Shooting Game</h1>
        <div className="flex items-center gap-4">
          <Link href="/tokens" className="hover:text-gray-300">Tokens</Link>
          <Link href="/achievements" className="hover:text-gray-300">Achievements</Link>
        </div>
      </nav>
    </header>
  );
};


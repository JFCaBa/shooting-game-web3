import { useState } from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1c1c24] text-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-semibold whitespace-nowrap">
            Shooting Game
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
          <Link href="/tokens" className="text-gray-300 hover:text-white">Tokens</Link>
          <Link href="/achievements" className="text-gray-300 hover:text-white">Achievements</Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">Leaderboard</Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ConnectButton />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1c1c24] text-white border-t border-gray-700">
          <ul className="flex flex-col gap-2 px-4 py-2">
            <li>
              <Link href="/" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/tokens" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Tokens
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Achievements
              </Link>
            </li>
            <li>
              <Link href="/leaderboard" className="block text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                Leaderboard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
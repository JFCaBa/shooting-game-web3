import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">
            Shooting Game
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <Link href="/tokens" className="hover:text-gray-300">Tokens</Link>
            <Link href="/achievements" className="hover:text-gray-300">Achievements</Link>
            <Link href="/leaderboard" className="hover:text-gray-300">Leaderboard</Link>
            <ConnectButton />
          </div>
        </div>
      </nav>
    </header>
  )
}
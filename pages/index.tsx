import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { TokenBalance } from '@/components/tokens/TokenBalance'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <ConnectButton />
      <TokenBalance />
    </div>
  )
}
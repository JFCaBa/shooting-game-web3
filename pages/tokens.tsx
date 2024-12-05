import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { TokenBalance } from '@/components/tokens/TokenBalance'
import { TokenTransfer } from '@/components/tokens/TokenTransfer'

export default function Tokens() {
 return (
   <div className="container mx-auto p-4 space-y-4">
     <ConnectButton />
     <TokenBalance />
     <TokenTransfer />
   </div>
 )
}
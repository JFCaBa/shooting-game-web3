import { useAccount } from 'wagmi'
import { TokenBalance } from '@/src/components/tokens/TokenBalance'
import { TokenTransfer } from '@/src/components/tokens/TokenTransfer'
import { BuyTokens } from '@/src/components/tokens/BuyTokens'

export default function Tokens() {
  const { isConnected } = useAccount()

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isConnected ? (
        <div className="space-y-6">
          <TokenBalance />
          <TokenTransfer />
        </div>
      ) : (
        <BuyTokens />
      )}
    </div>
  )
}

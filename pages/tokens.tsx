import { useAuth } from '@/src/providers/AuthProvider';
import { TokenBalance } from '@/src/components/tokens/TokenBalance'
import { TokenTransfer } from '@/src/components/tokens/TokenTransfer'
import { BuyTokens } from '@/src/components/tokens/BuyTokens'

export default function Tokens() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isAuthenticated ? (
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

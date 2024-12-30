import { useAuth } from '@/src/providers/AuthProvider';
import { TokenBalance } from '@/src/components/tokens/TokenBalance'
import { TokenTransfer } from '@/src/components/tokens/TokenTransfer'
import { BuyTokens } from '@/src/components/tokens/BuyTokens'
import { AptosProvider } from '@/src/providers/AptosProvider'
import { AptosWallet } from '@/src/components/aptos/AptosWallet'

export default function Tokens() {
  const { isAuthenticated } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isAuthenticated ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Game Tokens</h2>
              <TokenBalance />
              <TokenTransfer />
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-bold">Aptos Tokens</h2>
              <AptosProvider>
                <AptosWallet />
              </AptosProvider>
            </div>
          </div>
        </div>
      ) : (
        <BuyTokens />
      )}
    </div>
  )
}
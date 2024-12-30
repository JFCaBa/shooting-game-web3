import { useWallet } from '@aptos-labs/wallet-adapter-react'

export const AptosWallet = () => {
  const { wallet, connect, disconnect, account } = useWallet()
  const isConnected = !!account

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected Wallet: {account?.address}</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <div>
          <button onClick={() => wallet && connect(wallet.name)}>Connect Wallet</button>
        </div>
      )}
    </div>
  )
}
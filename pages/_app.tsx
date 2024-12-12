import type { AppProps } from 'next/app'
import { Web3Provider } from '@/src/providers/Web3Provider'
import { Layout } from '@/src/components/layout/Layout'
import '@rainbow-me/rainbowkit/styles.css'
import '@/src/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3Provider>
  )
}
// src/config/aptosConfig.ts
import { AptosConfig, Network } from '@aptos-labs/ts-sdk'
import { PetraWallet } from 'petra-plugin-wallet-adapter'

export const aptosConfig = new AptosConfig({ network: Network.TESTNET })

export const wallets = [new PetraWallet()]
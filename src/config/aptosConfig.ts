import { AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const APTOS_CHAIN_CONFIG = {
  chainNamespace: "other",
  chainId: "0x7E6",
  rpcTarget: "https://rpc.ankr.com/http/aptos_testnet/v1",
  displayName: "Aptos Testnet",
  blockExplorerUrl: "https://explorer.aptoslabs.com/testnet",
  blockExplorer: "https://explorer.aptoslabs.com/testnet",
  ticker: "APT",
  tickerName: "Aptos",
} as const;
  

export const aptosConfig = new AptosConfig({ network: Network.TESTNET });

export const WEB3AUTH_CLIENT_ID = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || "";
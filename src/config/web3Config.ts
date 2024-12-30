import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";

const clientId = process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string;

if (!clientId) {
  throw new Error("WEB3AUTH_CLIENT_ID is required");
}

export const web3auth = new Web3Auth({
  clientId,
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.OTHER,
    chainId: "0x1", // Testnet chainId
    rpcTarget: "https://fullnode.testnet.aptoslabs.com/v1",
    displayName: "Aptos Testnet",
    blockExplorer: "https://explorer.aptoslabs.com/testnet",
    ticker: "APT",
    tickerName: "Aptos",
  },
  web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
});
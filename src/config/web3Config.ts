import { bscTestnet } from "wagmi/chains";
import dotenv from 'dotenv';

dotenv.config();

export const GAME_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
export const OWNER_ADDRESS = process.env.NEXT_PUBLIC_OWNER_ADDRESS;

export const GAME_TOKEN_ABI = [
  {
    type: 'function',
    name: 'balanceOf',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'totalSupply',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: 'supply', type: 'uint256' }],
  },
];

export const gameChain = bscTestnet;
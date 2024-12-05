import { bscTestnet } from "wagmi/chains";
import dotenv from 'dotenv';

dotenv.config();

export const GAME_TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
export const OWNER_ADDRESS = process.env.NEXT_PUBLIC_OWNER_ADDRESS;

export const GAME_TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)", 
  "function mint(address to, uint256 amount) returns (bool)",
  "event Transfer(address indexed from, address indexed to, uint256 value)"
];

export const gameChain = bscTestnet;
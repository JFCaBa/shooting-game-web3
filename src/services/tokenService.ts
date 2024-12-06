import { GAME_TOKEN_ABI, GAME_TOKEN_ADDRESS } from "@/src/config/web3Config";
import { Contract, ethers } from "ethers";
import dotenv from 'dotenv';

dotenv.config();

export class TokenService {
  private contract: Contract;

  constructor(provider: any) {
    this.contract = new Contract(GAME_TOKEN_ADDRESS, GAME_TOKEN_ABI, provider);
  }

  async getBalance(address: string): Promise<string> {
    return this.contract.balanceOf(address);
  }

  async transfer(to: string, amount: string): Promise<ethers.ContractTransaction> {
    return this.contract.transfer(to, amount);
  }

  async approve(spender: string, amount: string): Promise<ethers.ContractTransaction> {
    return this.contract.approve(spender, amount);
  }
}
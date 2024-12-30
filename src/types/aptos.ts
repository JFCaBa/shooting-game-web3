import { Web3Auth } from "@web3auth/modal";
import { AptosService } from "../services/aptosService";

export interface AptosContextType {
  web3auth: Web3Auth | null;
  aptosService: AptosService | null;
  isConnecting: boolean;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
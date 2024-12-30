import { Account, Aptos, AptosConfig, Network, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";

export class AptosService {
  private aptos: Aptos;
  private account: Account | null = null;

  constructor() {
    const config = new AptosConfig({ network: Network.TESTNET });
    this.aptos = new Aptos(config);
  }

  async connectWithPrivateKey(privateKey: string): Promise<void> {
    try {
      // Clean and validate the private key
      const cleanKey = privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey;
      
      if (!/^[0-9a-fA-F]{64}$/.test(cleanKey)) {
        throw new Error("Invalid private key format");
      }

      // Create private key bytes
      const privateKeyBytes = new Uint8Array(Buffer.from(cleanKey, 'hex'));
      const privateKeyObject = new Ed25519PrivateKey(privateKeyBytes);
      
      // Create account from private key
      this.account = Account.fromPrivateKey({ privateKey: privateKeyObject });
      
      // Log the address
      const address = this.account.accountAddress.toString();
      console.log("Connected with address:", address);

      // No need to verify resources immediately - will be checked when needed
      return;
    } catch (error) {
      console.error("Error in connectWithPrivateKey:", error);
      this.account = null;
      throw error;
    }
  }

  getAccount(): Account | null {
    return this.account;
  }

  async getBalance(address: string): Promise<string> {
    try {
      console.log("Fetching balance for address:", address);
      const resources = await this.aptos.account.getAccountResources({ 
        accountAddress: address 
      });

      const coinResource = resources.find((r) => 
        r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>"
      ) as { data: { coin: { value: string } } } | undefined;

      const balance = coinResource?.data.coin.value || "0";
      console.log("Balance fetched:", balance);
      return balance;
    } catch (error: any) {
      console.error("Error in getBalance:", error);
      if (error.response?.data?.error_code === "account_not_found") {
        return "0";
      }
      throw error;
    }
  }

  async transfer(to: string, amount: string): Promise<void> {
    if (!this.account) throw new Error("Account not initialized");
    
    try {
      const transaction = await this.aptos.transaction.build.simple({
        sender: this.account.accountAddress.toString(),
        data: {
          function: "0x1::coin::transfer",
          typeArguments: ["0x1::aptos_coin::AptosCoin"],
          functionArguments: [to, amount],
        },
      });

      const senderAuthenticator = await this.aptos.transaction.sign({
        signer: this.account,
        transaction,
      });

      const committedTxn = await this.aptos.transaction.submit.simple({
        transaction,
        senderAuthenticator,
      });

      await this.aptos.waitForTransaction({ transactionHash: committedTxn.hash });
    } catch (error) {
      console.error("Error during transfer:", error);
      throw error;
    }
  }
}
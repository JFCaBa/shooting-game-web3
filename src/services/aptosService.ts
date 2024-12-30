import { Account, Aptos, AptosConfig, Network, Ed25519PrivateKey } from "@aptos-labs/ts-sdk";

export class AptosService {
  private aptos: Aptos;
  private account: Account | null = null;

  constructor() {
    this.aptos = new Aptos(new AptosConfig({ network: Network.TESTNET }));
  }

  async initializeAccount(privateKey: string): Promise<Account> {
    try {
      const privateKeyBytes = Uint8Array.from(
        privateKey.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))
      );
      const privateKeyObject = new Ed25519PrivateKey(privateKeyBytes); // Correct type for privateKey
      this.account = Account.fromPrivateKey({ privateKey: privateKeyObject });
      return this.account;
    } catch (error) {
      console.error("Error initializing account:", error);
      throw new Error("Failed to initialize account.");
    }
  }

  getAccount(): Account | null {
    return this.account;
  }

  async getBalance(address: string): Promise<string> {
    try {
      const resources = await this.aptos.account.getAccountResources({ accountAddress: address });
      const coinResource = resources.find((resource) =>
        resource.type.includes("0x1::coin::CoinStore")
      ) as { data: { coin: { value: string } } } | undefined;
      return coinResource?.data.coin.value || "0";
    } catch (error) {
      console.error("Error fetching balance:", error);
      throw new Error("Failed to fetch balance.");
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
      throw new Error("Transfer failed.");
    }
  }

  async requestAirdrop(amount: number = 1000): Promise<void> {
    if (!this.account) throw new Error("Account not initialized");

    try {
      const transaction = await this.aptos.fundAccount({
        accountAddress: this.account.accountAddress.toString(),
        amount,
      });

      await this.aptos.waitForTransaction({
        transactionHash: transaction.hash,
      });
    } catch (error) {
      console.error("Error requesting airdrop:", error);
      throw new Error("Airdrop request failed.");
    }
  }
}
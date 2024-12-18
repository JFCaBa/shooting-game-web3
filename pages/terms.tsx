
export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
    <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">1. Game Tokens and Virtual Assets</h2>
      <div className="space-y-2">
        <p>1.1. Game tokens (GAME) are digital assets on the blockchain.</p>
        <p>1.2. Tokens can be earned through gameplay, achievements, and purchases.</p>
        <p>1.3. We reserve the right to modify token distribution mechanics.</p>
        <p>1.4. Token transactions are irreversible and governed by smart contracts.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">2. Player Conduct</h2>
      <div className="space-y-2">
        <p>2.1. Players must not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use cheats, exploits, or unauthorized modifications</li>
          <li>Manipulate gameplay or token mechanics</li>
          <li>Share accounts or transfer accounts</li>
          <li>Engage in any form of harassment or abuse</li>
        </ul>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">3. Account and Wallet Security</h2>
      <div className="space-y-2">
        <p>3.1. You are responsible for maintaining the security of your wallet.</p>
        <p>3.2. Lost wallet access may result in loss of tokens and progress.</p>
        <p>3.3. We cannot reverse blockchain transactions or recover lost tokens.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">4. Leaderboards and Achievements</h2>
      <div className="space-y-2">
        <p>4.1. Rankings are determined by player performance metrics.</p>
        <p>4.2. We reserve the right to reset or modify leaderboards.</p>
        <p>4.3. Achievements and rewards may be adjusted for game balance.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">5. Service Modifications</h2>
      <div className="space-y-2">
        <p>5.1. We may modify, suspend, or discontinue services.</p>
        <p>5.2. Game mechanics and features may be updated or changed.</p>
        <p>5.3. Smart contracts may be upgraded for security or functionality.</p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">6. Termination</h2>
      <div className="space-y-2">
        <p>6.1. We may terminate accounts for terms violations.</p>
        <p>6.2. Terminated accounts may lose access to game features.</p>
        <p>6.3. Blockchain assets remain on-chain but may be unusable.</p>
      </div>
    </section>

    <section className="space-y-4 mt-8">
      <p className="italic">By using our services, you agree to these terms and conditions.</p>
    </section>
  </div>
  );
}
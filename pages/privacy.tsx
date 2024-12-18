
export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
    <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
    
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
      <div className="space-y-2">
        <h3 className="text-xl font-medium">1.1 Personal Information</h3>
        <p>- Wallet address</p>
        <p>- Username and player profile</p>
        <p>- Game statistics and achievements</p>
        <p>- In-game transaction history</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-medium">1.2 Gameplay Information</h3>
        <p>- Game scores and performance metrics</p>
        <p>- Match history and player interactions</p>
        <p>- Achievement records</p>
        <p>- Token balances and transactions</p>
      </div>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>To manage your game account and provide gaming services</li>
        <li>To process in-game transactions and token transfers</li>
        <li>To maintain leaderboards and achievement systems</li>
        <li>To improve game performance and user experience</li>
        <li>To ensure fair play and prevent cheating</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">3. Blockchain Data</h2>
      <p>Please note that blockchain transactions are public and immutable. This includes:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Token transfers and balances</li>
        <li>Smart contract interactions</li>
        <li>Wallet addresses involved in transactions</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">4. Data Security</h2>
      <p>We implement appropriate security measures to protect your information, including:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Encryption of sensitive data</li>
        <li>Regular security audits</li>
        <li>Secure smart contract implementation</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">5. Contact Us</h2>
      <p>For any privacy-related questions, please contact us through our social media channels.</p>
    </section>
  </div>
  );
}
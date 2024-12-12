import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { StatsCard } from '@/src/components/dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Target, Trophy, Swords, Timer } from 'lucide-react';

export default function Dashboard() {
  const { isConnected } = useAccount();

  const stats = [
    { title: 'Total Score', value: '15,234', icon: <Trophy className="h-4 w-4 text-yellow-500" /> },
    { title: 'Accuracy', value: '76%', icon: <Target className="h-4 w-4 text-red-500" /> },
    { title: 'Games Played', value: '142', icon: <Timer className="h-4 w-4 text-blue-500" /> },
    { title: 'K/D Ratio', value: '2.4', icon: <Swords className="h-4 w-4 text-green-500" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isConnected ? (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Game Dashboard</h1>
            <p className="text-muted-foreground">View your game statistics and progress</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatsCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Games</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((game) => (
                    <div key={game} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Game #{game}</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-500">Victory</p>
                        <p className="text-sm text-muted-foreground">15 kills</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progression</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Level Progress</span>
                      <span className="text-sm font-medium">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Rank Progress</span>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Connect to Access Dashboard</h2>
          <p className="mb-6">Please connect your wallet to view your game statistics</p>
          <ConnectButton />
        </div>
      )}
    </div>
  );
}
// src/pages/dashboard.tsx
import { useAccount } from 'wagmi';
import { StatsCard } from '@/src/components/dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Target, Trophy, Swords, Timer, Cpu } from 'lucide-react';
import { HallOfFame } from '@/src/components/hallOfFame/HallOfFame';
import { usePlayerStats } from '@/src/hooks/usePlayerStats';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';

export default function Dashboard() {
  const { isConnected, address } = useAccount();
  const { data: playerStats } = usePlayerStats(address as string);
  const { data: tokenBalance } = useTokenBalance(address as string);

  const stats = [
    {
      title: 'Total Score',
      value: tokenBalance?.totalBalance.toString() || '0',
      icon: <Trophy className="h-4 w-4 text-yellow-500" />
    },
    {
      title: 'Accuracy',
      value: playerStats?.stats.accuracy ? `${playerStats.stats.accuracy}%` : '0%',
      icon: <Target className="h-4 w-4 text-red-500" />
    },
    {
      title: 'Kills',
      value: playerStats?.stats.kills.toString() || '0',
      icon: <Swords className="h-4 w-4 text-blue-500" />  // Changed from Timer to Swords
    },
    {
      title: 'Drone Hits',  // Added drone hits stat
      value: playerStats?.stats.droneHits.toString() || '0',
      icon: <Cpu className="h-4 w-4 text-green-500" />
    },
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
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Last Active</span>
                    <span>{playerStats?.lastActive ? new Date(playerStats.lastActive).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Survival Time</span>
                    <span>{playerStats?.stats.survivalStart ? new Date(playerStats.stats.survivalStart).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Hits</span>
                    <span>{playerStats?.stats.hits || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Drone Hits</span>
                    <span>{playerStats?.stats.droneHits || 0}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <HallOfFame />
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Connect to Access Dashboard</h2>
          <p className="mb-6">Please connect your wallet to view your game statistics</p>
        </div>
      )}
    </div>
  );
}

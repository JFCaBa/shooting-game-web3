import { useAuth } from '@/src/providers/AuthProvider';
import { StatsCard } from '@/src/components/dashboard/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Target, Trophy, Swords, Timer, Cpu } from 'lucide-react';
import { HallOfFame } from '@/src/components/hallOfFame/HallOfFame';
import { usePlayerStats } from '@/src/hooks/usePlayerStats';

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const { data: playerStats } = usePlayerStats();

  const stats = [
    {
      title: 'Total Balance',
      value: playerStats?.player ? (Number(playerStats.player.mintedBalance) + Number(playerStats.player.pendingBalance)).toString() : '0',
      icon: <Trophy className="h-4 w-4 text-yellow-500" />
    },
    {
      title: 'Accuracy',
      value: playerStats?.player?.stats?.accuracy ? `${playerStats.player.stats.accuracy}%` : '0%',
      icon: <Target className="h-4 w-4 text-red-500" />
    },
    {
      title: 'Kills',
      value: playerStats?.player?.stats?.kills?.toString() || '0',
      icon: <Swords className="h-4 w-4 text-blue-500" />
    },
    {
      title: 'Drone Hits',
      value: playerStats?.player?.stats?.droneHits?.toString() || '0',
      icon: <Cpu className="h-4 w-4 text-green-500" />
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isAuthenticated ? (
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
                    <span>{playerStats?.player?.lastActive ? new Date(playerStats.player.lastActive).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Survival Time</span>
                    <span>{playerStats?.player?.stats?.survivalStart ? new Date(playerStats.player.stats.survivalStart).toLocaleDateString() : 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Hits</span>
                    <span>{playerStats?.player?.stats?.hits || 0}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Drone Hits</span>
                    <span>{playerStats?.player?.stats?.droneHits || 0}</span>
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
          <p className="mb-6">Please login to your account to view your game statistics</p>
        </div>
      )}
    </div>
  );
}
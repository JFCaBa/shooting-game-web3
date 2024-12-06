import React from 'react';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { useAccount } from 'wagmi';
import { useTokenBalance } from '@/src/hooks/useTokenBalance';
import { Trophy, Target, Clock, Sword, Award, Coins } from 'lucide-react';

export default function Dashboard() {
  const { address } = useAccount();
  const { data: tokenBalance } = useTokenBalance(address);

  const stats = [
    {
      name: 'Total Games',
      value: '127',
      icon: Target,
      description: 'Games played this season'
    },
    {
      name: 'Win Rate',
      value: '68%',
      icon: Trophy,
      description: 'Average win rate'
    },
    {
      name: 'Game Tokens',
      value: tokenBalance?.toString() || '0',
      icon: Coins,
      description: 'Available GAME tokens'
    },
    {
      name: 'Play Time',
      value: '47h',
      icon: Clock,
      description: 'Total time played'
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Game Dashboard</h1>
          <Button variant="outline" className="gap-2">
            <Sword className="h-4 w-4" />
            Start Game
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.name}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.name}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Sharpshooter', description: 'Hit 100 perfect shots', time: '2h ago' },
                  { name: 'Survivor', description: 'Win 5 matches in a row', time: '1d ago' },
                  { name: 'Team Player', description: 'Assist 50 teammates', time: '2d ago' },
                ].map((achievement, i) => (
                  <div key={i} className="flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">{achievement.name}</p>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                    <div className="ml-auto text-sm text-muted-foreground">
                      {achievement.time}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Claim Rewards</p>
                  <p className="text-sm text-muted-foreground">
                    150 GAME tokens available
                  </p>
                </div>
                <Button>Claim</Button>
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Daily Mission</p>
                  <p className="text-sm text-muted-foreground">
                    Win 3 matches (1/3)
                  </p>
                </div>
                <Button variant="outline">View</Button>
              </div>

              <div className="flex items-center justify-between space-x-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Tournament</p>
                  <p className="text-sm text-muted-foreground">
                    Starts in 2h 15m
                  </p>
                </div>
                <Button variant="secondary">Register</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
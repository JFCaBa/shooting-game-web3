import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Swords, Target, Crosshair, Medal, Cpu } from 'lucide-react';
import { useLeaderboard } from '@/src/hooks/useLeaderboard';

export default function Leaderboard() {
  const [category, setCategory] = useState<'kills' | 'hits' | 'drones'>('kills');
  const { data: players, isLoading } = useLeaderboard(category);

  const getCategoryIcon = (position: number, category: string) => {
    const icons = {
      kills: <Swords className="h-6 w-6" />,
      hits: <Target className="h-6 w-6" />,
      drones: <Cpu className="h-6 w-6" />
    };
    return icons[category as keyof typeof icons];
  };

  const formatPlayerName = (playerId: string | null | undefined) => {
    if (!playerId) return 'Unknown Player';
    return `...${playerId.slice(-4)}`;
  };

  return (
    <div className="space-y-6 container mx-auto px-4 py-8 mt-16">
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
        <div>
          <h1 className="text-2xl font-bold">Hall of Fame</h1>
          <p className="text-muted-foreground">Top players rankings and stats</p>
        </div>

        <div className="flex space-x-2">
          <Button 
            variant={category === 'kills' ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory('kills')}
          >
            <Swords className="h-4 w-4 mr-2" />
            Top Kills
          </Button>
          <Button 
            variant={category === 'hits' ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory('hits')}
          >
            <Target className="h-4 w-4 mr-2" />
            Top Hits
          </Button>
          <Button 
            variant={category === 'drones' ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory('drones')}
          >
            <Cpu className="h-4 w-4 mr-2" />
            Top Drones
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div>Loading leaderboard...</div>
      ) : players && players.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {players.slice(0, 3).map((player, index) => (
              <Card key={index} className={
                index === 0 ? "border-yellow-500" :
                index === 1 ? "border-gray-400" :
                "border-amber-700"
              }>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full ${
                      index === 0 ? "bg-yellow-500/10 text-yellow-500" :
                      index === 1 ? "bg-gray-400/10 text-gray-400" :
                      "bg-amber-700/10 text-amber-700"
                    }`}>
                      {getCategoryIcon(index, category)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Rank #{index + 1}
                      </p>
                      <p className="text-xl font-bold">
                        {formatPlayerName(player.playerId)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {category === 'kills' ? 
                          `${player.stats?.kills || 0} kills` : 
                          category === 'hits' ? 
                          `${player.stats?.hits || 0} hits` :
                          `${player.stats?.droneHits || 0} drones`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Rank</th>
                      <th className="py-3 px-4 text-left">Player</th>
                      <th className="py-3 px-4 text-left">Kills</th>
                      <th className="py-3 px-4 text-left">Hits</th>
                      <th className="py-3 px-4 text-left">Drones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {index < 3 && (
                              <Medal className={`h-4 w-4 ${
                                index === 0 ? "text-yellow-500" :
                                index === 1 ? "text-gray-400" :
                                "text-amber-700"
                              }`} />
                            )}
                            #{index + 1}
                          </div>
                        </td>
                        <td className="py-3 px-4 font-medium">
                          {formatPlayerName(player.playerId)}
                        </td>
                        <td className="py-3 px-4">{player.stats?.kills || 0}</td>
                        <td className="py-3 px-4">{player.stats?.hits || 0}</td>
                        <td className="py-3 px-4">{player.stats?.droneHits || 0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <div className="text-center p-8">
          <p>No leaderboard data available</p>
        </div>
      )}
    </div>
  );
}
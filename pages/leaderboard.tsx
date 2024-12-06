// pages/leaderboard.tsx
import React, { useState } from 'react';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Trophy, Medal, Swords, Target, ArrowUp, ArrowDown } from 'lucide-react';

interface Player {
  rank: number;
  username: string;
  score: number;
  winRate: number;
  kills: number;
  deaths: number;
  gamesPlayed: number;
  matchesWon: number;
}

type SortField = 'score' | 'winRate' | 'kills' | 'gamesPlayed';

export default function Leaderboard() {
  const [timeFrame, setTimeFrame] = useState<'daily' | 'weekly' | 'monthly' | 'allTime'>('weekly');
  const [sortField, setSortField] = useState<SortField>('score');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  // Mock data - replace with actual API call
  const players: Player[] = [
    {
      rank: 1,
      username: "ProGamer123",
      score: 15000,
      winRate: 75.5,
      kills: 1250,
      deaths: 400,
      gamesPlayed: 200,
      matchesWon: 151
    },
    {
      rank: 2,
      username: "SharpShooter",
      score: 14500,
      winRate: 72.0,
      kills: 1180,
      deaths: 450,
      gamesPlayed: 190,
      matchesWon: 137
    },
    {
      rank: 3,
      username: "VictoryQueen",
      score: 14000,
      winRate: 70.5,
      kills: 1100,
      deaths: 380,
      gamesPlayed: 185,
      matchesWon: 130
    },
    // Add more players as needed
  ];

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold">Leaderboard</h1>
            <p className="text-muted-foreground">Top players rankings and stats</p>
          </div>

          {/* Time Frame Filter */}
          <div className="flex space-x-2">
            {(['daily', 'weekly', 'monthly', 'allTime'] as const).map((time) => (
              <Button 
                key={time}
                variant={timeFrame === time ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeFrame(time)}
              >
                {time.charAt(0).toUpperCase() + time.slice(1).replace('Time', ' Time')}
              </Button>
            ))}
          </div>
        </div>

        {/* Top Players Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {players.slice(0, 3).map((player, index) => (
            <Card key={player.username} className={
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
                    <Trophy className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Rank #{player.rank}
                    </p>
                    <p className="text-xl font-bold">{player.username}</p>
                    <p className="text-sm text-muted-foreground">
                      {player.score.toLocaleString()} points
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leaderboard Table */}
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
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('score')}>
                      <div className="flex items-center gap-1">
                        Score {getSortIcon('score')}
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('winRate')}>
                      <div className="flex items-center gap-1">
                        Win Rate {getSortIcon('winRate')}
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('kills')}>
                      <div className="flex items-center gap-1">
                        K/D {getSortIcon('kills')}
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort('gamesPlayed')}>
                      <div className="flex items-center gap-1">
                        Games {getSortIcon('gamesPlayed')}
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player) => (
                    <tr key={player.username} className="border-b">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          {player.rank <= 3 && (
                            <Medal className={`h-4 w-4 ${
                              player.rank === 1 ? "text-yellow-500" :
                              player.rank === 2 ? "text-gray-400" :
                              "text-amber-700"
                            }`} />
                          )}
                          #{player.rank}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-medium">{player.username}</td>
                      <td className="py-3 px-4">{player.score.toLocaleString()}</td>
                      <td className="py-3 px-4">{player.winRate}%</td>
                      <td className="py-3 px-4">{(player.kills/player.deaths).toFixed(2)}</td>
                      <td className="py-3 px-4">{player.gamesPlayed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
// src/components/hallOfFame/HallOfFame.tsx
import React, { useState } from 'react';
import { useHallOfFame } from '@/src/hooks/useHallOfFame';
import { Card, CardHeader, CardContent, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { Target, Crosshair } from 'lucide-react';
import { PlayerStats } from '@/src/services/hallOfFameService';


export const HallOfFame = () => {
  const [currentView, setCurrentView] = useState<'kills' | 'hits'>('kills');
  const { data: players, isLoading } = useHallOfFame(currentView);

  if (isLoading) return <div>Loading leaderboard...</div>;
  if (!players) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hall of Fame</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant={currentView === 'kills' ? 'default' : 'outline'}
            onClick={() => setCurrentView('kills')}
            size="sm"
          >
            <Target className="h-4 w-4 mr-2" />
            Top Kills
          </Button>
          <Button
            variant={currentView === 'hits' ? 'default' : 'outline'}
            onClick={() => setCurrentView('hits')}
            size="sm"
          >
            <Crosshair className="h-4 w-4 mr-2" />
            Top Hits
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {(players as PlayerStats[]).map((player, index) => (
            <div
              key={player.playerId}
              className="flex items-center justify-between p-2 rounded-lg bg-muted/50"
            >
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">#{index + 1}</span>
                <span>{player.playerId ? player.playerId.slice(-4) : 'Unknown'}</span>
              </div>
              <span className="font-bold">
                {currentView === 'kills' ? player.stats.kills : player.stats.hits}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
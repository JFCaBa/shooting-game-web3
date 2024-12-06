// pages/profile.tsx
import React from 'react';
import { useAccount } from 'wagmi';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { 
  Trophy, 
  Target, 
  Clock, 
  User, 
  Edit, 
  Shield, 
  Crosshair,
  Medal,
  Gamepad2,
  Swords
} from 'lucide-react';

export default function Profile() {
  const { address } = useAccount();
  
  const playerStats = {
    rank: "Diamond",
    level: 42,
    experience: 8750,
    nextLevel: 10000,
    winRate: "67%",
    accuracy: "78%",
    gamesPlayed: 386,
    killDeathRatio: "2.4",
    playtime: "127h"
  };

  const recentMatches = [
    { map: "Dust Valley", result: "Victory", kills: 12, deaths: 3, xp: 450, date: "2h ago" },
    { map: "Neon City", result: "Defeat", kills: 8, deaths: 7, xp: 280, date: "5h ago" },
    { map: "Arctic Base", result: "Victory", kills: 15, deaths: 4, xp: 520, date: "1d ago" }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Player_{address?.substring(2, 8)}</h1>
                  <p className="text-muted-foreground">Joined December 2024</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">{playerStats.rank} Rank</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm">Level {playerStats.level}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress and Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* XP Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>XP Progress</span>
                    <span>{playerStats.experience} / {playerStats.nextLevel}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(playerStats.experience / playerStats.nextLevel) * 100}%` }}
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {playerStats.nextLevel - playerStats.experience} XP needed for next level
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Combat Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crosshair className="h-5 w-5" />
                Combat Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                  <p className="text-2xl font-bold">{playerStats.winRate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                  <p className="text-2xl font-bold">{playerStats.accuracy}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">K/D Ratio</p>
                  <p className="text-2xl font-bold">{playerStats.killDeathRatio}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Games Played</p>
                  <p className="text-2xl font-bold">{playerStats.gamesPlayed}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Matches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              Recent Matches
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMatches.map((match, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      match.result === 'Victory' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                    }`}>
                      <Swords className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{match.map}</p>
                      <p className={`text-sm ${
                        match.result === 'Victory' ? 'text-green-500' : 'text-red-500'
                      }`}>{match.result}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{match.kills}/{match.deaths} K/D</p>
                    <p className="text-sm text-muted-foreground">+{match.xp} XP</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{match.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Medal className="h-5 w-5" />
              Top Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Sharpshooter Elite", description: "Maintain 90% accuracy for 5 consecutive matches", progress: 80 },
                { name: "Victory Streak", description: "Win 10 matches in a row", progress: 60 },
                { name: "Master Tactician", description: "Win 100 matches total", progress: 75 }
              ].map((achievement, index) => (
                <div key={index} className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <h3 className="font-medium">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all"
                      style={{ width: `${achievement.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-right text-muted-foreground">{achievement.progress}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
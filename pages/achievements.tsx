import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Trophy, Target, Swords, Medal, Star } from 'lucide-react';

export default function Achievements() {
  const { isConnected } = useAccount();

  const achievements = [
    {
      title: "First Victory",
      description: "Win your first game",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      progress: 100,
      completed: true,
    },
    {
      title: "Sharpshooter",
      description: "Achieve 80% accuracy in a single game",
      icon: <Target className="h-6 w-6 text-red-500" />,
      progress: 75,
      completed: false,
    },
    {
      title: "Veteran",
      description: "Play 100 games",
      icon: <Medal className="h-6 w-6 text-blue-500" />,
      progress: 42,
      completed: false,
    },
    {
      title: "Kill Streak",
      description: "Get 10 kills without dying",
      icon: <Swords className="h-6 w-6 text-green-500" />,
      progress: 90,
      completed: false,
    },
    {
      title: "Legend",
      description: "Reach the top of the leaderboard",
      icon: <Star className="h-6 w-6 text-purple-500" />,
      progress: 20,
      completed: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isConnected ? (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Achievements</h1>
            <p className="text-muted-foreground">Track your progress and unlock rewards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className={achievement.completed ? "border-yellow-500" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gray-100">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <div className="mt-2">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm font-medium">{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${achievement.completed ? 'bg-yellow-500' : 'bg-blue-600'}`}
                            style={{ width: `${achievement.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Connect to View Achievements</h2>
          <p className="mb-6">Connect your wallet to track your achievements</p>
          <ConnectButton />
        </div>
      )}
    </div>
  );
}
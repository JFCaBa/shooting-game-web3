import { useAuth } from '@/src/providers/AuthProvider';
import { Card, CardContent } from '@/src/components/ui/card';
import { Trophy, Target, Swords } from 'lucide-react';
import { useAchievements } from '@/src/hooks/useAchievements';
import { Achievement } from '@/src/services/achievementService';

const getAchievementIcon = (type: Achievement['type']) => {
  const icons = {
    'kills': <Swords className="h-6 w-6 text-green-500" />,
    'hits': <Target className="h-6 w-6 text-red-500" />,
    'accuracy': <Trophy className="h-6 w-6 text-yellow-500" />
  };
  return icons[type];
};

export default function Achievements() {
  const { isAuthenticated } = useAuth();
  const { data: achievements, isLoading } = useAchievements();

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      {isAuthenticated ? (
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Achievements</h1>
            <p className="text-muted-foreground">Track your progress and unlock rewards</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isLoading ? (
              <div>Loading achievements...</div>
            ) : (
              achievements?.map((achievement) => (
                <Card key={achievement._id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-gray-100">
                        {getAchievementIcon(achievement.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold capitalize">
                          {achievement.type} Achievement
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Reached {achievement.milestone}% {achievement.type}
                        </p>
                        <div className="mt-2">
                          <p className="text-sm text-yellow-600">
                            Reward: {achievement.reward} tokens
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Unlocked: {new Date(achievement.unlockedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="text-center p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Connect to View Achievements</h2>
          <p className="mb-6">Login to your account to track your achievements</p>
        </div>
      )}
    </div>
  );
}
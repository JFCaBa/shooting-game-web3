// pages/achievements.tsx
import React from 'react';
import DashboardLayout from '@/src/components/layout/DashboardLayout';
import { AchievementCard } from '@/src/components/achievements/AchievementCard';
import { AchievementProgress } from '@/src/components/achievements/AchievementProgress';
import { useAchievements } from '@/src/hooks/useAchievements';
import { Trophy } from 'lucide-react';

export default function Achievements() {
  const { achievements, isLoading } = useAchievements();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Achievements</h1>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-white">Total Score: 1,250</span>
          </div>
        </div>

        <AchievementProgress />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            achievements?.map((achievement) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
              />
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
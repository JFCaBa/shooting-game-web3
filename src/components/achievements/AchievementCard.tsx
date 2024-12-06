// src/components/achievements/AchievementCard.tsx
import React from 'react';
import { Trophy, Lock } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  maxProgress: number;
  completed: boolean;
  locked: boolean;
  reward: number;
}

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            achievement.completed ? 'bg-yellow-500/20' : 'bg-gray-700'
          }`}>
            {achievement.locked ? (
              <Lock className="h-5 w-5 text-gray-400" />
            ) : (
              <Trophy className={`h-5 w-5 ${
                achievement.completed ? 'text-yellow-500' : 'text-gray-400'
              }`} />
            )}
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">{achievement.title}</h3>
            <p className="text-sm text-gray-400">{achievement.description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{achievement.progress}/{achievement.maxProgress}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-purple-500 rounded-full h-2 transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {achievement.reward > 0 && (
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-400">Reward</span>
          <span className="text-sm font-medium text-purple-400">{achievement.reward} GAME</span>
        </div>
      )}
    </div>
  );
};
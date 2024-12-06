// src/hooks/useAchievements.ts
import { useState, useEffect } from 'react';

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

export const useAchievements = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const mockAchievements: Achievement[] = [
      {
        id: '1',
        title: 'First Blood',
        description: 'Win your first match',
        progress: 1,
        maxProgress: 1,
        completed: true,
        locked: false,
        reward: 100
      },
      {
        id: '2',
        title: 'Sharpshooter',
        description: 'Achieve 90% accuracy in a match',
        progress: 80,
        maxProgress: 100,
        completed: false,
        locked: false,
        reward: 200
      },
      {
        id: '3',
        title: 'Veteran',
        description: 'Play 100 matches',
        progress: 45,
        maxProgress: 100,
        completed: false,
        locked: false,
        reward: 500
      }
    ];

    setAchievements(mockAchievements);
    setIsLoading(false);
  }, []);

  return { achievements, isLoading };
};
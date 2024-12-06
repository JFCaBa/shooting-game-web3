// src/components/achievements/AchievementProgress.tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';

export const AchievementProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievement Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total Progress</span>
              <span>45/100</span>
            </div>
            <div className="h-2 bg-secondary rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: '45%' }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
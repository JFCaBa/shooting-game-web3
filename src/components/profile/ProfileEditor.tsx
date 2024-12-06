// src/components/profile/ProfileEditor.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/src/components/ui/card';
import { Button } from '@/src/components/ui/button';
import { User, Camera } from 'lucide-react';

interface ProfileData {
  username: string;
  bio: string;
  avatar?: string;
}

export const ProfileEditor = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    username: '',
    bio: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update logic here
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center space-y-4">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center relative group">
              {profileData.avatar ? (
                <img 
                  src={profileData.avatar} 
                  alt="Profile" 
                  className="h-full w-full rounded-full object-cover" 
                />
              ) : (
                <User className="h-12 w-12 text-muted-foreground" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-6 w-6 text-white" />
              </div>
            </div>
            <Button variant="outline" size="sm" type="button">
              Change Avatar
            </Button>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={profileData.username}
              onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
              className="w-full px-3 py-2 bg-background border rounded-md"
              placeholder="Enter username"
            />
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
              className="w-full px-3 py-2 bg-background border rounded-md h-24 resize-none"
              placeholder="Tell us about yourself"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
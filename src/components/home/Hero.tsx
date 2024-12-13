import React, { useState } from 'react';
import { Apple, Smartphone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const [showAndroidAlert, setShowAndroidAlert] = useState(false);

  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <img
          src="images/game-preview.jpg"
          alt="Game Preview"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Shooting Game</h1>
        <p className="text-xl mb-8">Experience the next generation of Web3 gaming</p>
        
        {/* Updated styling for the 1 SHOT = 1 $SHOT text */}
        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
          <p className="text-2xl font-bold text-white">1 SHOT = 1 $SHOT</p>
        </div>
        
        <p className="text-xl mb-8 text-center md:text-lg">
          The reward rate decreases as more players join. Act fast to maximize your rewards!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://testflight.apple.com/join/Jrsf4tTc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Apple className="h-6 w-6" />
            App Store
          </a>
          <button
            onClick={() => setShowAndroidAlert(true)}
            className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Smartphone className="h-6 w-6" />
            Google Play
          </button>
        </div>
        {showAndroidAlert && (
          <Alert className="mt-4 bg-white text-black max-w-md">
            <AlertTitle>Coming Soon!</AlertTitle>
            <AlertDescription>
              The Android version of our game is currently in development. Stay tuned for updates!
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
};
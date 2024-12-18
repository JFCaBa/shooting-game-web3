// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Instagram, MessageSquare, X } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <Instagram
            className="h-5 w-5 hover:text-gray-300 cursor-pointer transition-colors"
            onClick={() => window.open('https://instagram.com', '_blank')}
          />
          <MessageSquare
            className="h-5 w-5 hover:text-gray-300 cursor-pointer transition-colors"
            onClick={() => window.open('https://discord.com', '_blank')}
          />
          <X
            className="h-5 w-5 hover:text-gray-300 cursor-pointer transition-colors"
            onClick={() => window.open('https://x.com', '_blank')}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col text-right space-y-2">
          <Link
            href="/privacy"
            className="hover:text-gray-300 transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-gray-300 transition-colors text-sm"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
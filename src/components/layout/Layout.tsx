import { Navigation } from '@/src/components/layout/Navigation'
import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
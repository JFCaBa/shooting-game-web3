// src/pages/tokens.tsx
import React from 'react';
import { TokenBalance } from '@/src/components/tokens/TokenBalance';
import { TokenTransfer } from '@/src/components/tokens/TokenTransfer';
import { TokenPurchase } from '@/src/components/tokens/TokenPurchase';
import DashboardLayout from '@/src/components/layout/DashboardLayout';

export default function Tokens() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <TokenBalance />
        <TokenPurchase />
        <TokenTransfer />
      </div>
    </DashboardLayout>
  );
}
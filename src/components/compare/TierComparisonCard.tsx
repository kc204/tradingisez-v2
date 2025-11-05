
import React from 'react';
import type { PropFirm, AccountTier } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TierComparisonCardProps {
  firm: PropFirm;
  tier: AccountTier;
}

const formatCurrency = (value: number | undefined) => {
    if (value === undefined || value === null) return 'N/A';
    return `$${value.toLocaleString()}`;
}

const MetricRow: React.FC<{ label: string; value: string | React.ReactNode; highlight?: boolean }> = ({ label, value, highlight }) => (
    <div className={`flex justify-between items-center py-2 md:py-4 border-b border-border/30 last:border-b-0 ${highlight ? 'bg-primary/10 px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg' : ''}`}>
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-base md:text-lg font-bold text-foreground text-right">{value}</span>
    </div>
);


const TierComparisonCard: React.FC<TierComparisonCardProps> = ({ firm, tier }) => {
  const profitTargetValue = Array.isArray(tier.profitTargetPercentage) 
    ? tier.profitTargetPercentage.join('% / ') + '%' 
    : tier.profitTargetPercentage 
    ? `${tier.profitTargetPercentage}%` 
    : 'N/A';
    
  const drawdownValue = tier.drawdownRules 
    ? tier.drawdownRules 
    : tier.drawdownPercentage 
    ? `${tier.drawdownPercentage}% Max` 
    : 'N/A';

  const dailyLossValue = tier.dailyLossLimitPercentage ? `${tier.dailyLossLimitPercentage}%` : 'None';
  
  const activationFeeValue = tier.activationFee ? formatCurrency(tier.activationFee) : 'None';

  return (
     <div className="bg-card/80 border border-border/30 rounded-2xl p-4 md:p-8 flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-primary/50 hover:scale-[1.02]">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-primary">{tier.name || `$${(tier.size / 1000)}K ${tier.challengeType}`}</h3>
        <div className="space-y-1 md:space-y-2 flex-grow">
            <MetricRow label="Price" value={formatCurrency(tier.evaluationFee)} />
            <MetricRow label="Activation Fee" value={activationFeeValue} highlight={!tier.activationFee} />
            <MetricRow label="Profit Target" value={profitTargetValue} />
            <MetricRow label="Max Drawdown" value={drawdownValue} />
             <MetricRow label="Daily Loss Limit" value={dailyLossValue} highlight={dailyLossValue === 'None'}/>
            <MetricRow label="Profit Split" value={firm.profitSplit || 'N/A'} />
        </div>
        <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg py-4 md:py-6">
            <Link href={`/firms/${firm.slug}`}>
                View Full Review
            </Link>
        </Button>
    </div>
  );
};

export default TierComparisonCard;

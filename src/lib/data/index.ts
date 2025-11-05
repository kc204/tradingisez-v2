import type { PropFirm } from '../types';

import { alphaCapital, alphaCapitalAccountTiers } from './firms/alpha-capital';
import { apexTraderFunding, apexTraderFundingAccountTiers } from './firms/apex-trader-funding';
import { bulenox, bulenoxAccountTiers } from './firms/bulenox';
import { daytraders, daytradersAccountTiers } from './firms/daytraders';
import { e8Markets, e8MarketsAccountTiers } from './firms/e8-markets';
import { earn2Trade, earn2TradeAccountTiers } from './firms/earn2trade';
import { the5ers, the5ersAccountTiers } from './firms/the5ers';
import { ftmo, ftmoAccountTiers } from './firms/ftmo';
import { fundingticks, fundingticksAccountTiers } from './firms/fundingticks';
import { maven, mavenAccountTiers } from './firms/maven';
import { myFundedFutures, myFundedFuturesAccountTiers } from './firms/my-funded-futures';
import { oanda, oandaAccountTiers } from './firms/oanda-prop-trader';
import { takeProfitTrader, tptAccountTiers } from './firms/take-profit-trader';
import { topstep, topstepAccountTiers } from './firms/topstep';
import { tradeify, tradeifyAccountTiers } from './firms/tradeify';

// Export individual data for potential direct use
export * from './firms/alpha-capital';
export * from './firms/apex-trader-funding';
export * from './firms/bulenox';
export * from './firms/daytraders';
export * from './firms/e8-markets';
export * from './firms/earn2trade';
export * from './firms/the5ers';
export * from './firms/ftmo';
export * from './firms/fundingticks';
export * from './firms/maven';
export * from './firms/my-funded-futures';
export * from './firms/oanda-prop-trader';
export * from './firms/take-profit-trader';
export * from './firms/topstep';
export * from './firms/tradeify';
export * from './global-offers';
export * from './free-resources';

// --- Aggregated Data ---

// Combine all firms into a single array
export const mockPropFirms: PropFirm[] = [
  e8Markets,
  earn2Trade,
  oanda,
  apexTraderFunding,
  maven,
  ftmo,
  the5ers,
  alphaCapital,
  topstep,
  takeProfitTrader,
  myFundedFutures,
  tradeify,
  bulenox,
  daytraders,
  fundingticks,
];

// Combine all account tiers for the comparison table
const allTiers = [
  ...tptAccountTiers,
  ...myFundedFuturesAccountTiers,
  ...tradeifyAccountTiers,
  ...bulenoxAccountTiers,
  ...fundingticksAccountTiers,
  ...topstepAccountTiers,
  ...alphaCapitalAccountTiers,
  ...the5ersAccountTiers,
  ...ftmoAccountTiers,
  ...mavenAccountTiers,
  ...apexTraderFundingAccountTiers,
  ...oandaAccountTiers,
  ...earn2TradeAccountTiers,
  ...e8MarketsAccountTiers,
];

// Generate flattened data for the main comparison table
export const ALL_CHALLENGES_DATA = mockPropFirms.flatMap(firm => {
  if (!firm.accountTiers || firm.accountTiers.length === 0) {
    return [];
  }
  return firm.accountTiers.map(tier => {
    
    // Default profit target
    let profitTarget: number | (number | null)[] | null = tier.profitTargetPercentage || null;
    let dailyLoss: number | (number | null)[] | null = tier.dailyLossLimitPercentage || null;
    let maxLoss: number | (number | null)[] | null = tier.drawdownPercentage || null;

    if (Array.isArray(tier.profitTargetPercentage)) {
        profitTarget = tier.profitTargetPercentage;
    } else if (firm.slug === 'ftmo' && tier.challengeType === '2-Step') {
      profitTarget = [10, 5];
    }


    return {
        id: `${firm.slug}-${tier.id}`,
        firmId: firm.slug,
        firmName: firm.name,
        logoUrl: firm.logoUrl,
        trustpilotRating: firm.rating || 0,
        trustpilotReviewCount: firm.rating ? Math.floor(firm.rating * (250 + (parseInt(firm.id, 10) % 10) * 10)) : 50,
        accountSize: tier.size,
        maxAllocation: firm.maxAccountSize || 0,
        steps: tier.challengeType?.includes('Step') ? parseInt(tier.challengeType.split('-')[0], 10) : 0,
        isInstant: tier.challengeType?.toLowerCase().includes('instant') || false,
        price: tier.evaluationFee,
        paymentType: firm.fundingModels?.includes('1-Step') ? 'Monthly' : 'One Time', // Simplified logic
        promoDiscountPercent: firm.offerBadgeLabel ? parseInt(firm.offerBadgeLabel.match(/(\d+)%?/)?.[1] || '0', 10) : 0,
        activationFee: tier.activationFee,
        profitTarget: profitTarget,
        dailyLoss: dailyLoss,
        maxLoss: maxLoss,
        profitSplit: firm.profitSplit ? parseInt(firm.profitSplit.match(/\d+/)?.[0] || '80', 10) : 80,
        payoutFrequency: firm.payoutFrequency || 'Varies',
        affiliateLink: firm.affiliateLink,
        challengeType: firm.instrumentTypes?.includes('Futures') ? 'futures' : 'cfd',
    };
  });
});

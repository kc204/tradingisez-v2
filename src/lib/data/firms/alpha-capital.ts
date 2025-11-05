import type { PropFirm, AccountTier } from '../../types';

export const alphaCapitalAccountTiers: AccountTier[] = [
  // Alpha Pro (2 Steps)
  { id: 'ac-pro-5k', name: '$5,000 Alpha Pro', size: 5000, evaluationFee: 50.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-pro-10k', name: '$10,000 Alpha Pro', size: 10000, evaluationFee: 97.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-pro-25k', name: '$25,000 Alpha Pro', size: 25000, evaluationFee: 197.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-pro-50k', name: '$50,000 Alpha Pro', size: 50000, evaluationFee: 297.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-pro-100k', name: '$100,000 Alpha Pro', size: 100000, evaluationFee: 497.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-pro-200k', name: '$200,000 Alpha Pro', size: 200000, evaluationFee: 997.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  // Alpha Swing (2 Steps)
  { id: 'ac-swing-5k', name: '$5,000 Alpha Swing', size: 5000, evaluationFee: 70.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-swing-10k', name: '$10,000 Alpha Swing', size: 10000, evaluationFee: 147.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-swing-100k', name: '$100,000 Alpha Swing', size: 100000, evaluationFee: 577.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ac-swing-200k', name: '$200,000 Alpha Swing', size: 200000, evaluationFee: 1097.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
];

export const alphaCapital: PropFirm = {
    id: '10',
    slug: 'alpha-capital',
    name: 'Alpha Capital',
    logoUrl: '/images/alphacapital_logo.jpg',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Andrew Blaylock and George Kohler',
    dateCreated: 'November 2021',
    briefDescription: 'UK-based prop firm offering multi-step CFD trading evaluations with flexible payout options and a wide range of platforms.',
    fullReview: `Alpha Capital, established in the UK, provides comprehensive evaluation programs for CFD traders across FX, Metals, Indices, and other commodities. They offer various multi-step evaluation plans, including the Alpha Pro (2-step) and Alpha Swing (2-step), catering to different trading strategies. A key feature is their flexible payout system, allowing traders to choose between biweekly payouts or on-demand withdrawals once a 2% profit is achieved (subject to consistency rules). They support popular trading platforms like MT5, cTrader, DXTrade, and TradeLocker. Alpha Capital enforces specific rules regarding inactivity, average trade duration, and news trading on funded accounts to promote disciplined risk management. Successful traders can manage up to $300,000 in a qualified analyst account.`,
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:30 (1-Step), 1:100 (2-Steps), 1:50 (3-Steps)</li>
  <li><strong>Metals:</strong> 1:9 (1-Step & 3-Steps), 1:30 (2-Steps)</li>
  <li><strong>Indices:</strong> 1:10 (1-Step & 3-Steps), 1:20 (2-Steps)</li>
  <li><strong>Other Commodities:</strong> 1:10 (All plans)</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>Raw Accounts:</strong> $5 per lot on FX, Metals, Indices, and Commodities.</li>
  <li><strong>Standard Accounts:</strong> $0 commission.</li>
</ul>
<h3>Key Firm Rules</h3>
<h4>Consistency Rule</h4>
<p>The on-demand payout option requires that no single trading day's profit accounts for more than 40% of the total profit. A minimum of 2% gross profit is also required for withdrawal.</p>
<h4>General Policies</h4>
<ul>
  <li><strong>Inactivity:</strong> All accounts are deactivated after 30 days of inactivity and cannot be restored.</li>
  <li><strong>All or Nothing:</strong> "All or nothing" high-risk trading practices are prohibited.</li>
  <li><strong>Average Trade Duration:</strong> The average duration of all trades must be over 2 minutes. At least 50% of any requested profit must come from trades lasting longer than 2 minutes.</li>
  <li><strong>Order Block Spamming:</strong> Placing multiple orders in a very short period is prohibited.</li>
  <li><strong>Risk Management:</strong> Consistently risking or losing 2% or more on a single trade is not allowed.</li>
  <li><strong>Qualified Analyst Allocation:</strong> Maximum allocation per trading strategy is $300,000.</li>
</ul>
<h4>News Trading on Qualified Analyst Accounts</h4>
<ul>
  <li><strong>Swing accounts:</strong> Allowed, but trades opened within 2 minutes of a news release must be held for longer than 2 minutes.</li>
  <li><strong>Alpha Pro accounts:</strong> Restricted for 2 minutes before and after high-impact news.</li>
  <li><strong>Alpha One, Alpha Pro 6%, Alpha Three accounts:</strong> Restricted for 5 minutes before and after high-impact news.</li>
  <li><strong>Evaluation Programs:</strong> News trading is permitted without restriction.</li>
</ul>
<h4>Drawdown on Alpha One Accounts</h4>
<p>If your 6% trailing maximum drawdown resets to the initial balance after achieving a 6% profit, you must maintain a profit buffer to continue trading. Withdrawing all profits will lead to account closure.</p>
<h4>Maximum Lot Sizes on Funded Accounts</h4>
<ul>
    <li><strong>Alpha Swing:</strong> $5k: 1.25 lots; $10k: 2.5; $25k: 5; $50k: 10; $100k: 20; $200k: 40; $300k: 60.</li>
    <li><strong>Alpha One, Pro, Pro 6%, Three:</strong> $5k: 2.5 lots; $10k: 5; $25k: 10; $50k: 20; $100k: 40; $200k: 80; $300k: 120.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<p>You can choose between Biweekly Payouts or 2% On-Demand Payouts for the Alpha Pro, Alpha Pro 6%, and Alpha Three plans. The Alpha Swing and Alpha One plans only offer the 2% On-Demand option.</p>
<ul>
    <li><strong>Biweekly Payouts:</strong> Processed every 14 days with a minimum withdrawal of $100 in gross profits.</li>
    <li><strong>2% On-Demand Payouts:</strong> Request a payout anytime if you have met the 40% Best Day Rule and have at least 2% gross profits in your account.</li>
</ul>`,
    payoutFrequency: "Bi-weekly or On-Demand",
    pros: [
      'Multiple evaluation programs (2-step, 3-step, etc.)',
      'Flexible payout options (Biweekly or On-Demand)',
      'Supports a wide range of trading platforms (MT5, cTrader, DXTrade, TradeLocker)',
      'Allows news trading during evaluation phases',
      'Clear leverage and commission structures'
    ],
    cons: [
      'Strict inactivity rule (30 days)',
      'Consistency rules apply to on-demand payouts',
      'Specific restrictions on news trading for different funded account types',
      'Average trade duration rule may not suit all strategies'
    ],
    keyFeatures: [
      'CFD Trading (FX, Metals, Indices)',
      '2-Step Evaluation Programs (Alpha Pro, Alpha Swing)',
      'Biweekly and On-Demand Payouts',
      'Supports MT5, cTrader, DXTrade, TradeLocker',
      'Clear risk management and news trading rules'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80%' },
      { label: 'Instruments', value: 'CFDs (FX, Metals, Indices)' },
      { label: 'Platforms', value: 'cTrader, DXTrade, MT5, TradeLocker' },
      { label: 'Payouts', value: 'Biweekly or On-Demand' }
    ],
    fundingModels: ['2-Step', '3-Step'],
    profitSplit: '80%',
    drawdownRules: '5% Daily Loss, 10% Max Loss',
    profitTarget: '10% (Phase 1), 5% (Phase 2)',
    assets: ['FX', 'Metals', 'Indices', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'DXTrade', 'MT5', 'TradeLocker'],
    broker: 'ACG Markets',
    paymentMethods: ['Credit/Debit Card', 'Crypto', 'PayPal'],
    payoutMethods: ['Bank Transfer', 'Riseworks', 'Wise'],
    rating: 4.6,
    minAccountSize: 5000,
    maxAccountSize: 200000,
    minChallengeCost: 50,
    maxChallengeCost: 1097,
    challengeType: '2-Step & 3-Step',
    accountTiers: alphaCapitalAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Belarus", code: "BY" }, { name: "Burundi", code: "BI" },
      { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Eritrea", code: "ER" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Libya", code: "LY" }, { name: "Myanmar", code: "MM" },
      { name: "North Korea", code: "KP" }, { name: "Region of Crimea", code: "UA-43" }, { name: "Russia", code: "RU" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
      { name: "Yemen", code: "YE" }, { name: "Zimbabwe", code: "ZW" }
    ],
  };

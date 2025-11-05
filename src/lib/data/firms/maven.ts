import type { PropFirm, AccountTier } from '../../types';

export const mavenAccountTiers: AccountTier[] = [
  // 1-Step Challenges
  { id: 'maven-1step-5k-std', name: '$5,000 1-Step (Standard)', size: 5000, evaluationFee: 19.00, platform: 'MT5/Match Trader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-10k-std', name: '$10,000 1-Step (Standard)', size: 10000, evaluationFee: 38.00, platform: 'MT5/Match Trader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-20k-std', name: '$20,000 1-Step (Standard)', size: 20000, evaluationFee: 76.00, platform: 'MT5/Match Trader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-50k-std', name: '$50,000 1-Step (Standard)', size: 50000, evaluationFee: 190.00, platform: 'MT5/Match Trader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-100k-std', name: '$100,000 1-Step (Standard)', size: 100000, evaluationFee: 380.00, platform: 'MT5/Match Trader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-2k-ctrader', name: '$2,000 1-Step (cTrader)', size: 2000, evaluationFee: 35.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-5k-ctrader', name: '$5,000 1-Step (cTrader)', size: 5000, evaluationFee: 39.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-10k-ctrader', name: '$10,000 1-Step (cTrader)', size: 10000, evaluationFee: 58.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-20k-ctrader-opt1', name: '$20,000 1-Step (cTrader)', size: 20000, evaluationFee: 76.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-20k-ctrader-opt2', name: '$20,000 1-Step (cTrader Opt 2)', size: 20000, evaluationFee: 96.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-50k-ctrader', name: '$50,000 1-Step (cTrader)', size: 50000, evaluationFee: 210.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  { id: 'maven-1step-100k-ctrader', name: '$100,000 1-Step (cTrader)', size: 100000, evaluationFee: 400.00, platform: 'cTrader', challengeType: '1-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 3, drawdownPercentage: 5 },
  
  // 2-Steps Challenges
  { id: 'maven-2step-5k-std', name: '$5,000 2-Step (Standard)', size: 5000, evaluationFee: 22.00, platform: 'MT5/Match Trader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-10k-std', name: '$10,000 2-Step (Standard)', size: 10000, evaluationFee: 44.00, platform: 'MT5/Match Trader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-20k-std', name: '$20,000 2-Step (Standard)', size: 20000, evaluationFee: 88.00, platform: 'MT5/Match Trader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-50k-std', name: '$50,000 2-Step (Standard)', size: 50000, evaluationFee: 220.00, platform: 'MT5/Match Trader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-100k-std', name: '$100,000 2-Step (Standard)', size: 100000, evaluationFee: 440.00, platform: 'MT5/Match Trader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-2k-ctrader-opt1', name: '$2,000 2-Step (cTrader)', size: 2000, evaluationFee: 19.00, platform: 'cTrader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-2k-ctrader-opt2', name: '$2,000 2-Step (cTrader Opt 2)', size: 2000, evaluationFee: 39.00, platform: 'cTrader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-5k-ctrader', name: '$5,000 2-Step (cTrader)', size: 5000, evaluationFee: 42.00, platform: 'cTrader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-10k-ctrader', name: '$10,000 2-Step (cTrader)', size: 10000, evaluationFee: 64.00, platform: 'cTrader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },
  { id: 'maven-2step-20k-ctrader', name: '$20,000 2-Step (cTrader)', size: 20000, evaluationFee: 108.00, platform: 'cTrader', challengeType: '2-Step', profitTargetPercentage: 8, dailyLossLimitPercentage: 4, drawdownPercentage: 8 },

  // 3-Steps Challenges
  { id: 'maven-3step-2k-std', name: '$2,000 3-Step (Standard)', size: 2000, evaluationFee: 13.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-5k-std', name: '$5,000 3-Step (Standard)', size: 5000, evaluationFee: 17.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-10k-std', name: '$10,000 3-Step (Standard)', size: 10000, evaluationFee: 34.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-20k-std', name: '$20,000 3-Step (Standard)', size: 20000, evaluationFee: 68.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-50k-std', name: '$50,000 3-Step (Standard)', size: 50000, evaluationFee: 170.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-100k-std', name: '$100,000 3-Step (Standard)', size: 100000, evaluationFee: 299.00, platform: 'MT5/Match Trader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-2k-ctrader', name: '$2,000 3-Step (cTrader)', size: 2000, evaluationFee: 33.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-5k-ctrader', name: '$5,000 3-Step (cTrader)', size: 5000, evaluationFee: 37.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-10k-ctrader', name: '$10,000 3-Step (cTrader)', size: 10000, evaluationFee: 54.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-20k-ctrader', name: '$20,000 3-Step (cTrader)', size: 20000, evaluationFee: 88.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-50k-ctrader', name: '$50,000 3-Step (cTrader)', size: 50000, evaluationFee: 190.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-3step-100k-ctrader', name: '$100,000 3-Step (cTrader)', size: 100000, evaluationFee: 319.00, platform: 'cTrader', challengeType: '3-Step', profitTargetPercentage: 3, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },

  // Instant Funding
  { id: 'maven-instant-2k-std', name: '$2,000 Instant (Standard)', size: 2000, evaluationFee: 19.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-5k-std', name: '$5,000 Instant (Standard)', size: 5000, evaluationFee: 29.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-10k-std', name: '$10,000 Instant (Standard)', size: 10000, evaluationFee: 58.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-20k-std', name: '$20,000 Instant (Standard)', size: 20000, evaluationFee: 116.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-50k-std', name: '$50,000 Instant (Standard)', size: 50000, evaluationFee: 290.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-100k-std', name: '$100,000 Instant (Standard)', size: 100000, evaluationFee: 549.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-2k-ctrader', name: '$2,000 Instant (cTrader)', size: 2000, evaluationFee: 39.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-5k-ctrader', name: '$5,000 Instant (cTrader)', size: 5000, evaluationFee: 49.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-10k-ctrader', name: '$10,000 Instant (cTrader)', size: 10000, evaluationFee: 78.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-20k-ctrader', name: '$20,000 Instant (cTrader)', size: 20000, evaluationFee: 136.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-50k-ctrader', name: '$50,000 Instant (cTrader)', size: 50000, evaluationFee: 409.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-instant-100k-ctrader', name: '$100,000 Instant (cTrader)', size: 100000, evaluationFee: 569.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },

  // Instant Mini
  { id: 'maven-mini-2k-std', name: '$2,000 Instant Mini (Standard)', size: 2000, evaluationFee: 19.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-5k-std', name: '$5,000 Instant Mini (Standard)', size: 5000, evaluationFee: 22.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-10k-std', name: '$10,000 Instant Mini (Standard)', size: 10000, evaluationFee: 44.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-20k-std', name: '$20,000 Instant Mini (Standard)', size: 20000, evaluationFee: 88.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-50k-std', name: '$50,000 Instant Mini (Standard)', size: 50000, evaluationFee: 220.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-100k-std', name: '$100,000 Instant Mini (Standard)', size: 100000, evaluationFee: 440.00, platform: 'MT5/Match Trader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-2k-ctrader', name: '$2,000 Instant Mini (cTrader)', size: 2000, evaluationFee: 39.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-5k-ctrader', name: '$5,000 Instant Mini (cTrader)', size: 5000, evaluationFee: 42.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-10k-ctrader', name: '$10,000 Instant Mini (cTrader)', size: 10000, evaluationFee: 64.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-20k-ctrader', name: '$20,000 Instant Mini (cTrader)', size: 20000, evaluationFee: 108.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-50k-ctrader', name: '$50,000 Instant Mini (cTrader)', size: 50000, evaluationFee: 240.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
  { id: 'maven-mini-100k-ctrader', name: '$100,000 Instant Mini (cTrader)', size: 100000, evaluationFee: 460.00, platform: 'cTrader', challengeType: 'Instant Funding', profitTargetPercentage: null, dailyLossLimitPercentage: 2, drawdownPercentage: 3 },
];

export const maven: PropFirm = {
    id: '13',
    slug: 'maven',
    name: 'Maven',
    logoUrl: '/images/maven_logo.png',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Jon Alexander',
    dateCreated: 'November 2022',
    briefDescription: 'A versatile prop firm from Saint Lucia offering Instant, 1-Step, 2-Step, and 3-Step CFD challenges with a unique 20% consistency rule for withdrawals.',
    fullReview: `Maven is a modern prop firm based in Saint Lucia, offering an exceptionally wide array of funding programs for CFD traders. Their offerings are diverse, including Instant Funding (with regular and 'Mini' immediate payout versions), and multi-step challenges (1-Step, 2-Steps, 3-Steps). This variety caters to virtually every type of trader, from those who want to prove their skills over multiple phases to those who prefer direct funding. A core feature across their Instant programs is a strict 20% consistency rule, which dictates that no single trading day can account for more than 20% of total profits for a withdrawal to be eligible. The firm enforces several unique rules, such as a 1% floating PnL limit on instant accounts and a ban on copy trading and most EAs. With an 80% profit split and bi-weekly payouts, Maven positions itself as a competitive option for traders who can operate within their specific risk management framework.`,
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:75</li>
  <li><strong>Metals:</strong> 1:20</li>
  <li><strong>Indices:</strong> 1:20</li>
  <li><strong>Crypto:</strong> 1:2</li>
  <li><strong>Other Commodities:</strong> 1:20</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>FX:</strong> $4 per lot</li>
  <li><strong>Metals, Indices, Crypto, Other Commodities:</strong> $0</li>
</ul>
<h3>Key Firm Rules</h3>
<h4>Consistency Rule (Instant Funding Only)</h4>
<p>A 20% consistency score is required for withdrawals. This means your single best trading day cannot exceed 20% of your total profit. Formula: (Biggest winning day &divide; Total profit) &times; 100%. If your score is too high, you must continue trading to lower it before requesting a payout.</p>
<h4>Prohibited Gambling Practices</h4>
<ul>
  <li><strong>Excessive Scalping:</strong> Holding 50% or more of trades for less than a minute.</li>
  <li><strong>Martingale:</strong> Opening 5 simultaneous positions in drawdown on the same pair.</li>
  <li><strong>All-In Trading:</strong> Making a single trade with no stop-loss or risking more than the drawdown limit to pass or fail a challenge.</li>
</ul>
<h4>News Trading</h4>
<p>Trades cannot be opened or closed within 2 minutes before or after a red folder news event. Violations will disqualify an account.</p>
<h4>Funded Stage Profit Consistency (over $5,000)</h4>
<p>If total profits exceed $5,000, no single trading day or single trade can account for more than 50% of the total profit.</p>
<h4>Account Restoration</h4>
<p>A "Buyback" fee can be paid to restore a funded account without a new challenge.</p>
<h4>Technical and Other Rules</h4>
<ul>
  <li><strong>Copy Trading & EAs:</strong> Prohibited.</li>
  <li><strong>IP Address Rule:</strong> IP address for all phases and the live account must be from the same geographical region unless proof of travel is provided.</li>
  <li><strong>Instant Program Floating PnL Rule:</strong> Account equity cannot drop more than 1% below the balance.</li>
  <li><strong>Instant Program Minimum Withdrawal:</strong> A minimum profit of 3% is required to request a payout.</li>
</ul>
<h3>Maven Mini Rules</h3>
<ul>
  <li><strong>Payout:</strong> One-time payout account. Account is closed after withdrawal.</li>
  <li><strong>Trade Limit:</strong> Only 1 trade can be open at a time.</li>
  <li><strong>Floating PnL:</strong> 1% maximum loss in floating PnL.</li>
  <li><strong>Withdrawal:</strong> Requires 3% profit target and a consistency score of 20% or lower.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<ul>
  <li><strong>Profit Split:</strong> 80%</li>
  <li><strong>Withdrawal Frequency:</strong> Every 10 business days.</li>
  <li><strong>Withdrawal Cap:</strong> A maximum of $10,000 can be withdrawn per two withdrawal cycles. Account balances are reset after two cycles.</li>
</ul>`,
    payoutFrequency: "Every 10 business days",
    pros: [
      'Extremely wide variety of funding programs (Instant, 1, 2, and 3-Step)',
      'Offers "Mini" instant accounts with immediate payout options',
      'Clear rules on leverage and commissions',
      'Ability to "buyback" a failed funded account',
    ],
    cons: [
      'Strict 20% consistency rule for Instant Funding withdrawals',
      'News trading is restricted',
      'Copy trading and EAs are prohibited',
      'Withdrawal cap of $10,000 per two cycles can be limiting',
      'IP address must remain in the same geographical region'
    ],
    keyFeatures: [
      'Instant, 1-Step, 2-Step, and 3-Step Challenges',
      '80% Profit Split',
      'Strict consistency and news trading rules',
      'CFD Trading on FX, Metals, Indices, Crypto'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80%' },
      { label: 'Funding Models', value: 'Instant, 1/2/3-Step' },
      { label: 'Platforms', value: 'cTrader, Match Trader, MT5' },
      { label: 'Assets', value: 'CFDs' }
    ],
    fundingModels: ['Instant Funding', '1-Step', '2-Step', '3-Step'],
    profitSplit: '80%',
    drawdownRules: 'Varies by program (2-4% Daily, 3-8% Max)',
    profitTarget: 'Varies by program',
    assets: ['FX', 'Metals', 'Indices', 'Crypto', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'Match Trader', 'MT5'],
    broker: 'Datafeed Provider',
    paymentMethods: ['Credit/Debit Card', 'Crypto', 'Korapay'],
    payoutMethods: ['Bank Transfer', 'Crypto'],
    rating: 4.7,
    minAccountSize: 2000,
    maxAccountSize: 100000,
    minChallengeCost: 13.00,
    maxChallengeCost: 569.00,
    challengeType: 'Instant, 1-Step, 2-Step, or 3-Step',
    accountTiers: mavenAccountTiers,
    restrictedCountries: [
        { name: "Afghanistan", code: "AF" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "British Virgin Islands", code: "VG" }, { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" },
        { name: "China", code: "CN" }, { name: "Congo (Congo-Brazzaville)", code: "CG" }, { name: "Congo (Kinshasa)", code: "CD" },
        { name: "Cuba", code: "CU" }, { name: "Eritrea", code: "ER" }, { name: "Guinea", code: "GN" }, { name: "Haiti", code: "HT" },
        { name: "Hong Kong", code: "HK" }, { name: "Iran", code: "IR" }, { name: "Lebanon", code: "LB" }, { name: "Libya", code: "LY" },
        { name: "Mali", code: "ML" }, { name: "Moldova", code: "MD" }, { name: "Myanmar", code: "MM" }, { name: "Nicaragua", code: "NI" },
        { name: "North Korea", code: "KP" }, { name: "Palestinian Territory", code: "PS" }, { name: "Papua New Guinea", code: "PG" },
        { name: "Russia", code: "RU" }, { name: "Saint Helena", code: "SH" }, { name: "Saint Lucia", code: "LC" },
        { name: "Saint Pierre and Miquelon", code: "PM" }, { name: "Samoa", code: "WS" }, { name: "Sierra Leone", code: "SL" },
        { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" },
        { name: "Tunisia", code: "TN" }, { name: "Ukraine", code: "UA" }, { name: "Vanuatu", code: "VU" }, { name: "Venezuela", code: "VE" },
        { name: "Yemen", code: "YE" }, { name: "Zimbabwe", code: "ZW" }
    ],
  };

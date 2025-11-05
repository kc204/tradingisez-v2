import type { PropFirm, AccountTier } from '../../types';

export const the5ersAccountTiers: AccountTier[] = [
  // High Stakes (2-Step)
  { id: '5ers-hs-5k', name: '$5,000 High Stakes', size: 5000, evaluationFee: 39, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: '5ers-hs-10k', name: '$10,000 High Stakes', size: 10000, evaluationFee: 78, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: '5ers-hs-20k', name: '$20,000 High Stakes', size: 20000, evaluationFee: 165, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: '5ers-hs-60k', name: '$60,000 High Stakes', size: 60000, evaluationFee: 329, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: '5ers-hs-100k', name: '$100,000 High Stakes', size: 100000, evaluationFee: 545, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  // Hyper-Growth (1-Step)
  { id: '5ers-hg-5k', name: '$5,000 Hyper-Growth', size: 5000, evaluationFee: 260, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6, challengeType: 'Instant Funding' },
  { id: '5ers-hg-10k', name: '$10,000 Hyper-Growth', size: 10000, evaluationFee: 450, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6, challengeType: 'Instant Funding' },
  { id: '5ers-hg-20k', name: '$20,000 Hyper-Growth', size: 20000, evaluationFee: 850, profitTargetPercentage: 10, dailyLossLimitPercentage: 3, drawdownPercentage: 6, challengeType: 'Instant Funding' },
  // Bootcamp (3-Step)
  { id: '5ers-bc-100k', name: '$100,000 Bootcamp', size: 100000, evaluationFee: 95, activationFee: 215, profitTargetPercentage: 6, dailyLossLimitPercentage: 3, drawdownPercentage: 5, challengeType: '3-Step' },
  { id: '5ers-bc-250k', name: '$250,000 Bootcamp', size: 250000, evaluationFee: 225, activationFee: 350, profitTargetPercentage: 6, dailyLossLimitPercentage: 3, drawdownPercentage: 5, challengeType: '3-Step' },
];

export const the5ers: PropFirm = {
    id: '11',
    slug: 'the5ers',
    name: 'The5ers',
    logoUrl: '/images/the5ers_logo.png',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Saul Lokier',
    dateCreated: 'January 2016',
    briefDescription: 'A well-established prop firm from Israel offering diverse programs like Hyper-Growth (Instant Funding), High Stakes (2-Step), and a low-cost Bootcamp (3-Step) challenge for CFD traders on MT5.',
    fullReview: `Founded in 2016, The5ers is one of the more established firms in the industry, offering a variety of programs to suit different trader profiles. Their main offerings include the Hyper-Growth program for instant funding, the High Stakes 2-step challenge for experienced traders seeking high leverage, and the unique low-cost Bootcamp 3-step challenge. They operate exclusively on the MT5 platform and provide access to a wide range of CFD instruments including FX, Metals, Indices, and Crypto. Profit splits are scalable, starting from 50%-80% and going up to 100%. The firm has specific rules regarding EAs, copy trading, and news trading, which vary between programs, emphasizing a tailored risk management approach for each funding path.`,
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:30 (Instant), 1:100 (2-Steps), 1:10 (3-Steps)</li>
  <li><strong>Metals:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Indices:</strong> 1:8 (Instant), 1:25 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Energy:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
  <li><strong>Crypto:</strong> 1:1 (Instant), 1:2 (2-Steps), N/A (3-Steps)</li>
  <li><strong>Other Commodities:</strong> 1:10 (Instant), 1:33 (2-Steps), 1:3 (3-Steps)</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>FX & Metals:</strong> $4 per Standard Lot</li>
  <li><strong>Indices, Energy, Crypto, Other Commodities:</strong> No Commissions</li>
</ul>
<h3>Firm Rules</h3>
<h4>News Trading</h4>
<ul>
  <li>Allowed in Hyper-Growth and Bootcamp programs, but using bracket strategies around news is prohibited.</li>
  <li>Prohibited in the High Stakes program from 2 minutes before until 2 minutes after high-impact news.</li>
</ul>
<h4>Copy Trading</h4>
<ul>
  <li>Allowed for High Stakes and Hyper-Growth programs.</li>
  <li>Not permitted to take same trades if managing over $500,000.</li>
  <li>Copying from an external account is only allowed if it belongs to the same trader.</li>
  <li>Third-party copy trading is not allowed.</li>
  <li>Copy trading between two Bootcamp accounts is not allowed.</li>
</ul>
<h4>Expert Advisors (EAs)</h4>
<ul>
  <li>Allowed only if they set a Stop Loss (SL) on every position.</li>
  <li>Prohibited EAs include those that copy signals, perform tick scalping, latency/reverse/hedge arbitrage, or use emulators.</li>
</ul>
<h4>High Stakes Program Specific Rules</h4>
<p>A minimum of 3 profitable days is required. A profitable day is defined as a day where closed positions generate a profit of at least 0.5% of the initial balance.</p>
<h4>Bootcamp Program Specific Rules</h4>
<ul>
    <li>A stop-loss is mandatory for all positions.</li>
    <li>The stop-loss must not risk more than 2% of the account balance per position.</li>
    <li>A 3% daily pause (soft breach) applies during the funded stage.</li>
    <li>5 risk violations (e.g., no SL, or risking more than 2%) lead to automatic account termination.</li>
</ul>
<h4>Prohibited Practices</h4>
<p>Taking consistent one-sided bets, exploiting price discrepancies (arbitrage), using bracket strategies around news, and exploiting system errors are all prohibited.</p>
<h4>Inactivity Rule</h4>
<p>Accounts with no new orders for over 30 consecutive calendar days will expire.</p>`,
    payoutRules: `<h3>Payout Policy</h3>
<ul>
  <li><strong>Payout Frequency:</strong> Bi-weekly.</li>
  <li><strong>Profit Split:</strong> Starts at 50% for Bootcamp/Hyper-Growth and 80% for High Stakes, with scaling plans to reach 100%.</li>
</ul>`,
    payoutFrequency: "Bi-weekly",
    pros: [
      'Multiple diverse funding programs (Instant, 2-Step, 3-Step)',
      'Long-standing firm with a solid reputation (since 2016)',
      'Scalable profit split up to 100%',
      'Wide range of tradable CFD assets including crypto',
      'Low-cost entry option with the Bootcamp program'
    ],
    cons: [
      'Complex rules that vary significantly between programs',
      'Mandatory Stop Loss on all trades in the Bootcamp program',
      'News trading restrictions on the High Stakes program',
      'Only MT5 platform is available'
    ],
    keyFeatures: [
      'Hyper-Growth (Instant Funding)',
      'High Stakes (2-Step Challenge)',
      'Bootcamp (Low-cost 3-Step Challenge)',
      'Scalable profit split up to 100%',
      'CFDs on FX, Metals, Indices, Crypto'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '50%-100% (Scaling)' },
      { label: 'Funding Models', value: 'Instant, 2-Step, 3-Step' },
      { label: 'Platform', value: 'MT5' },
      { label: 'Assets', value: 'CFDs (FX, Indices, Crypto, etc.)' }
    ],
    fundingModels: ['Instant Funding', '2-Step', '3-Step'],
    profitSplit: 'Scales from 50-80% up to 100%',
    drawdownRules: 'Varies by program (5%-10% max loss)',
    profitTarget: 'Varies by program (6-10%)',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Crypto', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['MT5'],
    broker: 'Commercial Liquidity Provider',
    paymentMethods: ['Apple Pay', 'Bank Transfer', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'PayPal'],
    payoutMethods: ['Crypto', 'Riseworks'],
    rating: 4.9,
    minAccountSize: 5000,
    maxAccountSize: 250000,
    minChallengeCost: 39,
    maxChallengeCost: 850,
    challengeType: 'Instant, 2-Step, or 3-Step',
    accountTiers: the5ersAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" },
      { name: "Congo (Congo-Brazzaville)", code: "CG" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Eritrea", code: "ER" }, { name: "Guinea", code: "GN" },
      { name: "Guinea-Bissau", code: "GW" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Israel", code: "IL" }, { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" },
      { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Myanmar", code: "MM" },
      { name: "North Korea", code: "KP" }, { name: "Palestinian Territory", code: "PS" }, { name: "Papua New Guinea", code: "PG" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "United States of America", code: "US" }, { name: "Vanuatu", code: "VU" },
      { name: "Venezuela", code: "VE" }, { name: "Yemen", code: "YE" }
    ]
  };

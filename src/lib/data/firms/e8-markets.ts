import type { PropFirm, AccountTier } from '../../types';

export const e8MarketsAccountTiers: AccountTier[] = [
    // Program 1: E8 One (1-Step Evaluation)
    { id: 'e8-one-5k', name: '$5,000 E8 One', size: 5000, evaluationFee: 48.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-10k', name: '$10,000 E8 One', size: 10000, evaluationFee: 88.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-25k', name: '$25,000 E8 One', size: 25000, evaluationFee: 188.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-50k', name: '$50,000 E8 One', size: 50000, evaluationFee: 288.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-100k', name: '$100,000 E8 One', size: 100000, evaluationFee: 488.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-200k', name: '$200,000 E8 One', size: 200000, evaluationFee: 798.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-400k', name: '$400,000 E8 One', size: 400000, evaluationFee: 1598.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e8-one-500k', name: '$500,000 E8 One', size: 500000, evaluationFee: 1998.00, profitTargetPercentage: 9, dailyLossLimitPercentage: 4, drawdownPercentage: 6, challengeType: '1-Step' },
    
    // Program 2: E8 Classic / E8 Account (2-Step Evaluation)
    { id: 'e8-classic-5k', name: '$5,000 E8 Classic', size: 5000, evaluationFee: 59.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },
    { id: 'e8-classic-10k', name: '$10,000 E8 Classic', size: 10000, evaluationFee: 110.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },
    { id: 'e8-classic-25k', name: '$25,000 E8 Classic', size: 25000, evaluationFee: 228.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },
    { id: 'e8-classic-50k', name: '$50,000 E8 Classic', size: 50000, evaluationFee: 338.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },
    { id: 'e8-classic-100k', name: '$100,000 E8 Classic', size: 100000, evaluationFee: 588.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },
    { id: 'e8-classic-200k', name: '$200,000 E8 Classic', size: 200000, evaluationFee: 1228.00, profitTargetPercentage: [8, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '2-Step' },

    // Program 3: E8 Track (3-Step Evaluation) - Variation A
    { id: 'e8-track-a-10k', name: '$10,000 E8 Track (A)', size: 10000, evaluationFee: 59.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    { id: 'e8-track-a-25k', name: '$25,000 E8 Track (A)', size: 25000, evaluationFee: 138.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    { id: 'e8-track-a-50k', name: '$50,000 E8 Track (A)', size: 50000, evaluationFee: 208.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    { id: 'e8-track-a-100k', name: '$100,000 E8 Track (A)', size: 100000, evaluationFee: 358.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    { id: 'e8-track-a-200k', name: '$200,000 E8 Track (A)', size: 200000, evaluationFee: 598.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    { id: 'e8-track-a-400k', name: '$400,000 E8 Track (A)', size: 400000, evaluationFee: 1188.00, profitTargetPercentage: [8, 4, 4], dailyLossLimitPercentage: 4, drawdownPercentage: 8, challengeType: '3-Step' },
    
    // Program 3: E8 Track (3-Step Evaluation) - Variation B
    { id: 'e8-track-b-10k', name: '$10,000 E8 Track (B)', size: 10000, evaluationFee: 59.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
    { id: 'e8-track-b-25k', name: '$25,000 E8 Track (B)', size: 25000, evaluationFee: 138.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
    { id: 'e8-track-b-50k', name: '$50,000 E8 Track (B)', size: 50000, evaluationFee: 208.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
    { id: 'e8-track-b-100k', name: '$100,000 E8 Track (B)', size: 100000, evaluationFee: 358.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
    { id: 'e8-track-b-200k', name: '$200,000 E8 Track (B)', size: 200000, evaluationFee: 598.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
    { id: 'e8-track-b-400k', name: '$400,000 E8 Track (B)', size: 400000, evaluationFee: 1188.00, profitTargetPercentage: [5, 5, 5], dailyLossLimitPercentage: 5, drawdownPercentage: 5, challengeType: '3-Step' },
];

export const e8Markets: PropFirm = {
    id: '17',
    slug: 'e8-markets',
    name: 'E8 Markets',
    logoUrl: '/images/e8_logo.webp',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Dylan Elchami',
    dateCreated: 'November 2021',
    briefDescription: 'CFD prop firm from the US offering 1-step, 2-step, and 3-step evaluations with flexible payout options and an 80% profit split.',
    fullReview: 'E8 Markets provides a wide variety of CFD evaluation programs, including 1-Step (E8 One), 2-Step (E8 Classic), and 3-Step (E8 Track) challenges. The firm supports multiple trading platforms and has clear rules on leverage, commissions, and risk management. A key feature is the on-demand payout system, governed by a 40% best day consistency rule and a net profit rule. While news trading is allowed during evaluations, it is restricted on funded accounts.',
    tradingRules: `<h3>Leverage Structure</h3>
<p>The leverage offered varies by asset class and the type of evaluation challenge:</p>
<ul>
    <li><strong>1-Step Challenge:</strong> 1:30 for FX, 1:15 for Metals, Indices, and Energy, and 1:1 for Crypto.</li>
    <li><strong>2-Steps and 3-Steps Challenges:</strong> 1:50 for FX, 1:25 for Metals, Indices, and Energy, and 1:2 for Crypto.</li>
</ul>
<h3>Commissions</h3>
<ul>
    <li><strong>Standard Spreads Accounts:</strong> Commission-free for all assets.</li>
    <li><strong>Raw Spreads Accounts:</strong>
        <ul>
            <li><strong>FX:</strong> $5 per lot.</li>
            <li><strong>Metals & Energy:</strong> $6 per lot.</li>
            <li><strong>Indices:</strong> $6 per lot (major indices), $12 per lot (for DOW Jones, Australia 200).</li>
            <li><strong>Crypto:</strong> $30 per lot.</li>
        </ul>
    </li>
</ul>
<h3>Key Firm Rules and Policies</h3>
<ul>
    <li><strong>Consistency Rules:</strong>
        <ul>
            <li><strong>40% Best Day Rule:</strong> No single trading day's profit can account for more than 40% of your total profits for payout eligibility.</li>
            <li><strong>Payout Net Profit Rule:</strong> Your net profit for a payout request must be greater than 50% of the daily drawdown amount.</li>
        </ul>
    </li>
    <li><strong>General Rules:</strong>
        <ul>
            <li><strong>Max Position Size:</strong> 50 lots (FX/commodities), 100 lots (indices).</li>
            <li><strong>Server Requests:</strong> Limited to 2000 modifications and 2000 positions per day.</li>
            <li><strong>Risk Management:</strong> Risking the entire account balance on one trade is forbidden.</li>
            <li><strong>Hedging:</strong> Prohibited across different accounts.</li>
            <li><strong>Trade Duration:</strong> No more than 50% of your trades can last for under one minute.</li>
        </ul>
    </li>
    <li><strong>Strategy Rules:</strong>
        <ul>
            <li><strong>EAs:</strong> Allowed, but must be unique to the user.</li>
            <li><strong>News Trading:</strong> Allowed in evaluation, but prohibited within a 5-minute window of high-impact news on funded accounts.</li>
            <li><strong>Copy Trading:</strong> Allowed from personal accounts or between E8 Trader accounts, but not between multiple E8 evaluation accounts.</li>
        </ul>
    </li>
    <li><strong>Activity:</strong>
        <ul>
            <li><strong>Minimum Trading Days:</strong> 1 day for most programs.</li>
            <li><strong>Inactivity:</strong> Account disabled after 90 days of inactivity.</li>
        </ul>
    </li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<ul>
    <li><strong>Profit Split:</strong> 80% for the trader on all eligible programs.</li>
    <li><strong>Payout Rules:</strong> To be eligible for a payout, the trader must adhere to two consistency rules:
        <ol>
            <li>No single day's profit can exceed 40% of the total profit.</li>
            <li>The net profit must be greater than 50% of the daily drawdown.</li>
        </ol>
    </li>
</ul>`,
    payoutFrequency: 'Payout-On-Demand',
    pros: ['Multiple evaluation types (1, 2, 3-step)', '80% profit split', 'Payouts on demand', 'EAs and copy trading are permitted with conditions'],
    cons: ['Strict consistency rules for payouts', 'News trading restrictions on funded accounts', 'Hedging between accounts is prohibited'],
    keyFeatures: ['1-Step, 2-Step, & 3-Step Evaluations', '80% Profit Split', 'Payout-On-Demand System', 'Supports multiple platforms'],
    keyInfoSnippets: [
        { label: 'Profit Split', value: '80%' },
        { label: 'Evaluation', value: '1, 2, & 3-Step' },
        { label: 'Platforms', value: 'cTrader, Match Trader, etc.' },
        { label: 'Payouts', value: 'On-Demand' }
    ],
    fundingModels: ['1-Step', '2-Step', '3-Step'],
    profitSplit: '80%',
    drawdownRules: 'Varies by program (4-5% Daily, 5-8% Max)',
    profitTarget: 'Varies by program',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Crypto'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'Match Trader', 'Platform 5', 'TradeLocker'],
    broker: 'Virtual Markets',
    paymentMethods: ['Apple Pay', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'Nuvei'],
    payoutMethods: ['Plane', 'Riseworks'],
    rating: 4.4,
    minAccountSize: 5000,
    maxAccountSize: 500000,
    minChallengeCost: 48,
    maxChallengeCost: 1998,
    challengeType: '1-Step, 2-Step, 3-Step',
    accountTiers: e8MarketsAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Burma (Myanmar)", code: "MM" },
      { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" }, { name: "Congo Free State", code: "CD" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ethiopia", code: "ET" }, { name: "Hong Kong", code: "HK" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" }, { name: "Lebanon", code: "LB" },
      { name: "Libya", code: "LY" }, { name: "Mali", code: "ML" }, { name: "Midway Islands", code: "UM" }, { name: "Nicaragua", code: "NI" },
      { name: "North Korea", code: "KP" }, { name: "Pakistan", code: "PK" }, { name: "Philippines", code: "PH" }, { name: "Russia", code: "RU" },
      { name: "Samoa", code: "WS" }, { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "United Arab Emirates", code: "AE" }, { name: "Vatican City", code: "VA" }, { name: "Venezuela", code: "VE" },
      { name: "Vietnam", code: "VN" }, { name: "West Bank", code: "PS" }, { name: "Western Sahara", code: "EH" }, { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" }
    ]
  };

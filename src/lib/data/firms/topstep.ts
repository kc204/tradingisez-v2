import type { PropFirm, AccountTier } from '../../types';

export const topstepAccountTiers: AccountTier[] = [
    { id: 'topstep-50k', name: '$50K Challenge Account', size: 50000, evaluationFee: 49, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'topstep-100k', name: '$100K Challenge Account', size: 100000, evaluationFee: 99, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'topstep-150k', name: '$150K Challenge Account', size: 150000, evaluationFee: 149, activationFee: 149, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 3, challengeType: '1-Step' },
];

export const topstep: PropFirm = {
    id: '8',
    slug: 'topstep',
    name: 'Topstep',
    logoUrl: '/images/topstep_logo.png',
    websiteUrl: 'https://www.topstep.com/',
    affiliateLink: 'https://www.topstep.com/&affiliate_id=YOUR-AFFILIATE-ID', // REPLACE
    isFeatured: true,
    ceo: 'Michael Patak',
    dateCreated: 'January 2012',
    briefDescription: 'A pioneer in the prop firm industry, Topstep offers a simple 1-step Trading Combine with a 90% profit split and their proprietary TopstepX platform.',
    fullReview: `As one of the original firms in the space, Topstep has a long-standing reputation. They offer a straightforward 1-step evaluation called the Trading Combine. Traders who pass the Combine can get funded in as little as two days. A major incentive is their payout policy, where traders keep 100% of their first $10,000 in profits, which then moves to a 90% profit split. Topstep also offers a unique path to a 100% profit split for traders who accumulate 30 winning trading days. All trading is done on their proprietary TopstepX platform, and they allow for a high degree of flexibility with no restrictions on news trading or automated strategies.`,
    tradingRules: `<h3>Leverage (Max Contracts)</h3>
<ul>
    <li><strong>$50k Account:</strong> Up to 5 Contracts</li>
    <li><strong>$100k Account:</strong> Up to 10 Contracts</li>
    <li><strong>$150k Account:</strong> Up to 15 Contracts</li>
</ul>
<h3>Commissions and Fees</h3>
<ul>
    <li><strong>Trading Combine:</strong> <a href="https://support.topstep.com/hc/en-us/articles/360045143994-Commissions-and-Fees" target="_blank" rel="noopener noreferrer">Commissions and Fees Details</a></li>
    <li><strong>Live Funded Account:</strong> <a href="https://support.topstep.com/hc/en-us/articles/360057287233-Live-Funded-Account-Commissions-and-Fees" target="_blank" rel="noopener noreferrer">Commissions and Fees Details</a></li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rule</h4>
<ul>
    <li><strong>50% Rule:</strong> Applies to Combine Accounts (evaluation) only. Profits made during one single trading day cannot exceed 50% of the total profit target.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>News Trading & Copy Trading:</strong> Allowed with no restrictions during both Evaluation and Funded stages.</li>
    <li><strong>Automated Strategies and EAs:</strong> Allowed with no restrictions.</li>
    <li><strong>Inactivity Rule:</strong> Express Funded Accounts must execute at least one trade every 30 days to remain open.</li>
    <li><strong>Post-Payout Rule:</strong> After a payout is processed, the maximum loss limit on the account is set to $0. The remaining capital in the account becomes the new maximum allowable loss.</li>
    <li><strong>Prohibited Conduct:</strong> For more details, refer to the <a href="https://www.topstep.com/prohibited-conduct/" target="_blank" rel="noopener noreferrer">Prohibited Conduct page</a>.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<h4>Profit Split</h4>
<ul>
    <li>Traders receive 100% of their first $10,000 in profits.</li>
    <li>After the first $10,000, the profit split becomes 90/10 (90% to the trader).</li>
    <li>Traders can also become eligible for a 100% profit split after accumulating 30 winning trading days.</li>
</ul>
<h4>Payout Conditions</h4>
<ul>
    <li>For both Express and Live Funded Accounts, traders can request a payout after accumulating five winning trading days per request.</li>
    <li>A "winning trading day" is defined as any day where the Net PNL is $200 or more.</li>
</ul>
<h4>Payout Amounts</h4>
<ul>
    <li><strong>Express Funded Account:</strong> Can request a payout of up to $5,000 or 50% of the account balance.</li>
    <li><strong>Live Funded Account:</strong> Can request a payout of up to 50% of the account balance.</li>
    <li>For complete details, please review the official <a href="https://support.topstep.com/hc/en-us/articles/360054593853-Payout-Policy" target="_blank" rel="noopener noreferrer">Topstep Payout Policy</a>.</li>
</ul>`,
    payoutFrequency: "On-Demand after 5 winning days",
    pros: [
      'Keep 100% of the first $10,000 in profits',
      'Simple 1-step evaluation process (Trading Combine)',
      'Potential to earn a 100% profit split after 30 winning days',
      'No restrictions on news trading or automated strategies',
      'Long-standing and reputable firm (founded in 2012)'
    ],
    cons: [
      'Trading is limited to their proprietary TopstepX platform',
      'Post-payout rule resets max loss limit to $0',
      'Winning day for payout qualification requires a $200+ profit'
    ],
    keyFeatures: [
      '1-Step Trading Combine',
      '100% Profit Split on first $10,000',
      'Proprietary TopstepX Platform',
      'Path to 100% Lifetime Payouts',
      'No restrictions on news or automated trading'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '100% (first $10k), then 90%' },
      { label: 'Platform', value: 'TopstepX' },
      { label: 'Evaluation', value: '1-Step Trading Combine' },
      { label: 'Founded', value: '2012' }
    ],
    fundingModels: ['1-Step'],
    profitSplit: '100% on first $10,000, then 90%',
    drawdownRules: 'Trailing Drawdown',
    profitTarget: '6%',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['TopstepX'],
    broker: 'CQC, Dorman, Ninjatrader, Plus500',
    paymentMethods: ['Credit/Debit Card', 'PayPal'],
    payoutMethods: ['ACH', 'Bank Wire Transfer'],
    rating: 4.3,
    minAccountSize: 50000,
    maxAccountSize: 150000,
    minChallengeCost: 49,
    maxChallengeCost: 149,
    activationFee: '$149',
    challengeType: '1-Step',
    accountTiers: topstepAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" },
      { name: "Burma (Myanmar)", code: "MM" }, { name: "Burundi", code: "BI" }, { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
      { name: "Cote D'Ivoire", code: "CI" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" }, { name: "Democratic Republic of the Congo", code: "CD" },
      { name: "Ethiopia", code: "ET" }, { name: "Haiti", code: "HT" }, { name: "Hong Kong", code: "HK" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Jamaica", code: "JM" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" },
      { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mali", code: "ML" },
      { name: "Monaco", code: "MC" }, { name: "Montenegro", code: "ME" }, { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" },
      { name: "Namibia", code: "NA" }, { name: "Nicaragua", code: "NI" }, { name: "Nigeria", code: "NG" }, { name: "North Korea", code: "KP" },
      { name: "North Macedonia", code: "MK" }, { name: "Pakistan", code: "PK" }, { name: "Philippines", code: "PH" }, { name: "Romania", code: "RO" },
      { name: "Russia", code: "RU" }, { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Tanzania", code: "TZ" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Turkey", code: "TR" },
      { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: 'Yemen', code: 'YE' },
      { name: 'Zimbabwe', code: 'ZW' }
    ]
  };

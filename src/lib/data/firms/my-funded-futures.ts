
import type { PropFirm, AccountTier } from '../../types';

export const myFundedFuturesAccountTiers: AccountTier[] = [
    { id: 'mff-expert-100k', name: 'Expert 100K', size: 100000, evaluationFee: 344, profitTargetPercentage: 8, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-expert-50k', name: 'Expert 50K', size: 50000, evaluationFee: 227, profitTargetPercentage: 8, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'mff-starter-50k', name: 'Starter 50K', size: 50000, evaluationFee: 97, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.4, drawdownPercentage: 5, challengeType: '1-Step' },
    { id: 'mff-expert-150k', name: 'Expert 150K', size: 150000, evaluationFee: 477, profitTargetPercentage: 8, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-starter-plus-150k', name: 'Starter Plus 150K', size: 150000, evaluationFee: 377, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-starter-plus-50k', name: 'Starter Plus 50K', size: 50000, evaluationFee: 127, profitTargetPercentage: 6, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'mff-starter-plus-100k', name: 'Starter Plus 100K', size: 100000, evaluationFee: 267, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-eval-to-live-50k', name: 'Eval to Live 50K', size: 50000, evaluationFee: 444, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-scale-150k', name: 'Scale 150K', size: 150000, evaluationFee: 377, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-pro-150k', name: 'Pro 150K', size: 150000, evaluationFee: 477, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-pro-1-step-100k', name: 'Pro 1 Step 100K', size: 100000, evaluationFee: 344, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-scale-1-step-100k', name: 'Scale 1 Step 100K', size: 100000, evaluationFee: 267, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'mff-core-1-step-50k', name: 'Core 1 Step 50K', size: 50000, evaluationFee: 77, profitTargetPercentage: 6, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'mff-eval-to-live-2-step-50k', name: 'Eval to Live 2 Step 50K', size: 50000, evaluationFee: 197, profitTargetPercentage: 6, drawdownPercentage: 3, challengeType: '2-Step' },
    { id: 'mff-pro-1-step-50k', name: 'Pro 1 Step 50K', size: 50000, evaluationFee: 227, profitTargetPercentage: 6, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'mff-scale-1-step-50k', name: 'Scale 1 Step 50K', size: 50000, evaluationFee: 127, profitTargetPercentage: 6, drawdownPercentage: 4, challengeType: '1-Step' },
];

export const myFundedFutures: PropFirm = {
    id: '3',
    slug: 'my-funded-futures',
    name: 'My Funded Futures',
    logoUrl: '/images/myfundedfutures_logo.jfif', 
    websiteUrl: 'https://myfundedfutures.com/', 
    affiliateLink: 'https://myfundedfutures.com/?aff_id=1030', 
    ceo: 'Matthew Leech',
    dateCreated: 'November 2023',
    briefDescription: 'Offers a diverse range of futures funding plans including Starter, Expert, and direct-to-live evaluations with generous profit splits.',
    fullReview: `My Funded Futures provides a comprehensive suite of funding options for futures traders, featuring plans like Starter, Starter Plus, Expert, and Eval to Live. A standout benefit across most plans is the 100% profit split on the first $10,000 earned, which then adjusts to a 90/10 split. The firm emphasizes flexibility, with no minimum or maximum trading day requirements for evaluations, allowing traders to get funded in as little as one day. With 24/7 live support and a clear 4-step process (Choose, Challenge, Verify, Fund), they aim to provide a supportive environment for traders to succeed and eventually gain access to a live trading account with daily payouts.`,
    tradingRules: `<h3>Leverage (Max Contract Size)</h3>
<ul>
    <li><strong>Starter Plus Plan:</strong>
        <ul>
            <li>$50,000 Account: Up to 3 Contracts (30 Micros)</li>
            <li>$100,000 Account: Up to 6 Contracts (60 Micros)</li>
            <li>$150,000 Account: Up to 9 Contracts (90 Micros)</li>
        </ul>
    </li>
    <li><strong>Expert Plan:</strong>
        <ul>
            <li>$50,000 Account: Up to 5 Contracts (50 Micros)</li>
            <li>$100,000 Account: Up to 10 Contracts (100 Micros)</li>
            <li>$150,000 Account: Up to 15 Contracts (150 Micros)</li>
        </ul>
    </li>
    <li><strong>Commissions:</strong> Details available at <a href="https://intercom.help/myfundedfutures/en/articles/8271708-commissions" target="_blank" rel="noopener noreferrer">My Funded Futures Commissions Page</a>.</li>
</ul>
<h3>Key Rules and Policies</h3>
<h4>Consistency Rules:</h4>
<ul>
    <li><strong>Starter Plus:</strong> 50% rule during the evaluation stage only.</li>
    <li><strong>Starter Plan:</strong> No consistency rule in evaluation; 40% rule on Sim-Funded accounts.</li>
    <li><strong>Milestone Plan:</strong> 20% rule applies to all phases.</li>
    <li><strong>Eval to Live Plan (1-Step):</strong> 20% rule during evaluation only.</li>
    <li><strong>Eval to Live Plan (2-Steps):</strong> 40% rule in Phase 1; 50% rule in Phase 2.</li>
</ul>
<h4>Firm-Wide Rules:</h4>
<ul>
    <li><strong>News Trading:</strong> Allowed during the evaluation stage for all accounts. On funded Starter and Expert accounts, traders must not trade for 2 minutes before and after Tier 1 high-impact news. Milestone, Eval to Live, and Starter Plus accounts are exempt from news trading restrictions.</li>
    <li><strong>Automated Trading:</strong> The use of AI, bots, or any fully automated trading systems is strictly prohibited. Semi-automated trading is permitted if the trader is actively managing the system.</li>
    <li><strong>Copy Trading:</strong> Allowed across all My Funded Futures accounts.</li>
    <li><strong>Inactivity:</strong> At least one trade must be placed every 7 days to keep a Sim-Funded account active. Traders must notify support if they plan to be inactive for a longer period.</li>
    <li><strong>Extension Fee:</strong> A fee of $99/month applies to extend an active Eval to Live Phase 1 account.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<ul>
    <li><strong>Profit Split:</strong> Traders keep 100% of the first $10,000 in profits. After that, the split is 90/10 (90% to the trader).</li>
    <li><strong>Payout Eligibility:</strong>
        <ul>
            <li><strong>Milestone Accounts:</strong> Eligible upon reaching the profit target while respecting the consistency rule.</li>
            <li><strong>Starter and Starter Plus Accounts:</strong> Eligible after achieving 5 winning trading days.</li>
            <li><strong>Expert Accounts:</strong> Eligible for a payout every 14 days.</li>
            <li><strong>Eval To Live:</strong> 80% profit split with daily payouts available. The minimum withdrawal is $200 on the Live Funded Account.</li>
        </ul>
    </li>
</ul>`,
    payoutFrequency: "Varies (Daily, 5 winning days, 14 days)",
    pros: [
        'Multiple account plans to suit different trading styles (Starter, Expert, Eval-to-Live)',
        '100% profit split on first $10,000, then 90/10 on most plans',
        'No minimum or maximum trading day requirements for evaluation',
        'Weekly payout options available on Starter plans',
        'Path to a true live account with daily payouts',
        '24/7 Live Support'
    ],
    cons: [
        'Consistency rules vary significantly between plans',
        'Maximum of 3 accounts per household',
        'News trading restrictions on some funded accounts',
        'Inactivity rules require weekly trading'
    ],
    keyFeatures: [
        '100% profit split up to $10K, then 90/10',
        'Variety of plans: Monthly (Starter/Expert) and one-time fee (Eval to Live)',
        'EOD Trailing Drawdown on most plans',
        'No daily loss limit on Starter Plus and Expert plans',
        'No minimum trading days to pass evaluation'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: 'Up to 100% on first $10k, then 90%' },
      { label: 'Drawdown Type', value: 'EOD Trailing / Trailing' },
      { label: 'Platforms', value: 'TradingView, NinjaTrader, Tradovate & more' },
      { label: 'Account Types', value: 'Starter, Expert, Eval-to-Live'},
    ],
    offerBadgeLabel: '50% off all accounts',
    fundingModels: ['1-Step', '2-Step'],
    profitSplit: '80% - 90%',
    drawdownRules: 'End-of-Day Trailing or Trailing Drawdown (varies by plan)',
    profitTarget: 'Varies by plan',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['Atas Orderflow Trading', 'NinjaTrader', 'Quantower', 'TradingView', 'Tradovate', 'Volbook', 'Volsys', 'Volumetrica Trading'],
    broker: 'DXFeed, Tradovate',
    paymentMethods: ['Credit/Debit Card', 'Crypto', 'Plaid'],
    payoutMethods: ['ACH', 'Riseworks'],
    rating: 4.9,
    isFeatured: false,
    minAccountSize: 50000, 
    maxAccountSize: 150000,
    minChallengeCost: 77, 
    maxChallengeCost: 477, 
    activationFee: 'None', 
    challengeType: '1-Step or 2-Step',
    accountTiers: myFundedFuturesAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" }, { name: "Burkina Faso", code: "BF" }, { name: "Myanmar", code: "MM" },
      { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" }, { name: "Central African Republic", code: "CF" },
      { name: "China", code: "CN" }, { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Croatia", code: "HR" },
      { name: "Cuba", code: "CU" }, { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" },
      { name: "Ghana", code: "GH" }, { name: "Gibraltar", code: "GI" }, { name: "Haiti", code: "HT" }, { name: "Hong Kong", code: "HK" },
      { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Jamaica", code: "JM" }, { name: "Jordan", code: "JO" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" },
      { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" },
      { name: "North Macedonia", code: "MK" }, { name: "Malaysia", code: "MY" }, { name: "Mali", code: "ML" }, { name: "Mauritius", code: "MU" },
      { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Mozambique", code: "MZ" }, { name: "Namibia", code: "NA" },
      { name: "Nicaragua", code: "NI" }, { name: "Nigeria", code: "NG" }, { name: "Pakistan", code: "PK" }, { name: "Panama", code: "PA" },
      { name: "Papua New Guinea", code: "PG" }, { name: "Philippines", code: "PH" }, { name: "Qatar", code: "QA" }, { name: "Romania", code: "RO" },
      { name: "Russia", code: "RU" }, { name: "Senegal", code: "SN" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "South Korea", code: "KR" }, { name: "South Sudan", code: "SS" },
      { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" }, { name: "Tanzania", code: "TZ" },
      { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" }, { name: "Uganda", code: "UG" },
      { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
      { name: 'Yemen', code: 'YE' }, { name: 'Zimbabwe', code: 'ZW' }
    ],
  };

import type { PropFirm, AccountTier } from '../../types';

export const tradeifyAccountTiers: AccountTier[] = [
    // Advanced Plan (Evaluation)
    { id: 'tradeify-adv-50k', name: '$50K Advanced Plan', size: 50000, evaluationFee: 99, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: null, challengeType: '1-Step' },
    { id: 'tradeify-adv-100k', name: '$100K Advanced Plan', size: 100000, evaluationFee: 109, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null, challengeType: '1-Step' },
    { id: 'tradeify-adv-150k', name: '$150K Advanced Plan', size: 150000, evaluationFee: 229, activationFee: 125, profitTargetPercentage: 6, drawdownPercentage: 3, dailyLossLimitPercentage: null, challengeType: '1-Step' },
    // Growth Plan (Evaluation)
    { id: 'tradeify-growth-50k', name: '$50K Growth Plan', size: 50000, evaluationFee: 180, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5, challengeType: '1-Step' },
    { id: 'tradeify-growth-100k', name: '$100K Growth Plan', size: 100000, evaluationFee: 249, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3.5, dailyLossLimitPercentage: 2.5, challengeType: '1-Step' },
    { id: 'tradeify-growth-150k', name: '$150K Growth Plan', size: 150000, evaluationFee: 439, activationFee: 0, profitTargetPercentage: 6, drawdownPercentage: 3.33, dailyLossLimitPercentage: 2.5, challengeType: '1-Step' },
    // Straight to Sim Funded
    { id: 'tradeify-sim-25k', name: '$25K Straight to Sim', size: 25000, evaluationFee: 349, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: null, challengeType: 'Instant Funding' },
    { id: 'tradeify-sim-50k', name: '$50K Straight to Sim', size: 50000, evaluationFee: 509, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5, challengeType: 'Instant Funding' },
    { id: 'tradeify-sim-100k', name: '$100K Straight to Sim', size: 100000, evaluationFee: 629, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5, challengeType: 'Instant Funding' },
    { id: 'tradeify-sim-150k', name: '$150K Straight to Sim', size: 150000, evaluationFee: 729, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 4, dailyLossLimitPercentage: 2.5, challengeType: 'Instant Funding' },
];

export const tradeify: PropFirm = {
    id: '4',
    name: 'Tradeify',
    slug: 'tradeify',
    logoUrl: '/images/tradeify_logo.png',
    websiteUrl: 'https://tradeify.co/',
    affiliateLink: 'https://tradeify.co/YOUR-AFFILIATE-ID',
    isFeatured: true,
    ceo: 'Brett Simberkoff',
    dateCreated: 'June 2024',
    briefDescription: 'Futures prop firm with multiple plans including Advanced (Intraday DD), Growth (EOD DD), and Straight to Sim Funded accounts.',
    fullReview: `Tradeify offers several distinct paths for futures traders, catering to different risk tolerances and preferences. Their programs are built on the NinjaTrader brokerage and support NinjaTrader, TradingView, and Tradovate platforms. Payouts are handled via Plane and Riseworks. The main funding routes are the Advanced Plan, Growth Plan, and a Straight to Sim Funded option. The Advanced and Growth plans are 1-step evaluations with a 35% consistency rule, but differ in their drawdown models (Intraday vs. End-of-Day). The Straight to Sim plan allows traders to bypass evaluation for a one-time fee, but comes with a stricter 20% consistency rule and requires achieving specific profit goals before payouts. Across all funded accounts, traders can keep 100% of their first $15,000 in profits, after which the split is 90/10. Tradeify has specific rules regarding EAs/bots (must be self-owned, no HFT), microscalping (50% of profit from trades > 5 seconds), and allows for news trading and copy trading between a trader's own accounts.`,
    tradingRules: `<h3>Instruments and Assets</h3>
<ul>
    <li><strong>Type of Instruments:</strong> Futures</li>
    <li><strong>Leverage (Max Contracts):</strong>
        <ul>
            <li>$25k Accounts: Up to 1 Contract (10 micros)</li>
            <li>$50k Accounts: Up to 5 Contracts (50 Micros)</li>
            <li>$100k Accounts: Up to 10 Contracts (100 Micros)</li>
            <li>$150k Accounts: Up to 15 Contracts (150 Micros)</li>
        </ul>
    </li>
    <li><strong>Commissions:</strong> A list of product commissions can be found at <a href="https://help.tradeify.co/en/articles/10468315-trading-commission-fees" target="_blank" rel="noopener noreferrer">this link</a>.</li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rules</h4>
<ul>
    <li><strong>35% Rule:</strong> Applies to all Advanced/Growth Sim funded accounts. The maximum profit made in a single trading day cannot exceed 35% of the total profit.</li>
    <li><strong>20% Rule:</strong> Applies to all Straight to Sim funded accounts. The maximum profit made in a single trading day cannot exceed 20% of the total profit.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>Good Faith Policy:</strong> Traders are prohibited from using strategies that exploit errors within the platform, such as price discrepancies or technical glitches.</li>
    <li><strong>Daily Loss Limit (DLL):</strong> For Growth and Straight to Sim Funded accounts, the DLL is removed once a certain profit target is met:
        <ul>
            <li>$25k accounts: No DLL.</li>
            <li>$50k accounts: DLL removed when End-of-Day balance is above $3,000 profit.</li>
            <li>$100k accounts: DLL removed when End-of-Day balance is above $6,000 profit.</li>
            <li>$150k accounts: DLL removed when End-of-Day balance is above $9,000 profit.</li>
        </ul>
    </li>
    <li><strong>EA/Bots/Algorithmic Trading:</strong> Allowed only under these conditions:
        <ul>
            <li>You must be the sole owner of the bot/strategy.</li>
            <li>The bot must be used exclusively within Tradeify (not other firms).</li>
            <li>High-Frequency Trading (HFT) bots are not allowed.</li>
            <li>The firm reserves the right to request verification.</li>
        </ul>
    </li>
    <li><strong>Microscalping:</strong> 50% or more of your total profit must come from trades held for longer than 5 seconds.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade per week (Monday-Friday) to keep an account active.</li>
    <li><strong>Copy Trading:</strong> Allowed for up to 5 accounts that you own and manage.</li>
    <li><strong>News Trading/DCA/Flipping/Scaling:</strong> There are no rules against these strategies. However, "averaging into oblivion" (continuously adding to a losing position without a clear strategy) is discouraged.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<h4>Advanced and Growth Payouts</h4>
<ul>
    <li><strong>Payout Conditions:</strong>
        <ul>
            <li>Abide by the 35% Consistency Rule.</li>
            <li>A minimum of 10 Trading Days is required.</li>
            <li>At least 5 of those days must show a profit greater than: $150 for 50k accounts, $200 for 100k accounts, $250 for 150k accounts.</li>
            <li>Maintain an account balance of at least $100 over the Trailing Max Drawdown limit.</li>
        </ul>
    </li>
    <li><strong>Minimum Payouts:</strong> $500 for 50k, $1,000 for 100k, $1,500 for 150k accounts.</li>
    <li><strong>Maximum Payout Tiers:</strong>
        <ul>
            <li>1st Payout: up to $1,500 ($50k), $2,000 ($100k), $2,500 ($150k)</li>
            <li>2nd Payout: up to $1,750 ($50k), $2,500 ($100k), $3,000 ($150k)</li>
            <li>3rd Payout: up to $2,000 ($50k), $3,000 ($100k), $3,500 ($150k)</li>
            <li>4th Payout: up to $2,250 ($50k), $3,500 ($100k), $4,000 ($150k)</li>
            <li>5th Payout: up to $2,500 ($50k), $4,000 ($100k), $4,500 ($150k)</li>
            <li>6th Payout: up to $3,000 ($50k), $5,000 ($100k), $5,500 ($150k)</li>
            <li>After 6th Payout: All future payouts can be up to $25,000.</li>
        </ul>
    </li>
</ul>
<h4>Straight to Sim Funded Payouts</h4>
<ul>
    <li><strong>Payout Conditions:</strong>
        <ul>
            <li>Abide by the 20% Consistency Rule.</li>
            <li>A minimum of 10 Trading Days is required.</li>
            <li>Must meet Payout Profit Goals between requests.</li>
        </ul>
    </li>
    <li><strong>Payout Profit Goals (% of starting balance):</strong>
        <ul>
            <li>$25k Account: 1st Payout: 6%; 2nd: 4%; 3rd: 4%.</li>
            <li>$50k Account: 1st Payout: 6%; 2nd: 4%; 3rd+: 4%.</li>
            <li>$100k Account: 1st Payout: 6%; 2nd: 3%; 3rd+: 2.5%.</li>
            <li>$150k Account: 1st Payout: 6%; 2nd: 3%; 3rd+: 2%.</li>
        </ul>
    </li>
    <li><strong>Minimum Payout:</strong> $1,000</li>
    <li><strong>Payout Tiers:</strong>
        <ul>
            <li>Payouts 1 to 3: $1,000 ($25k), $2,000 ($50k), $2,500 ($100k), $3,000 ($150k)</li>
            <li>4th Payout and Beyond: $1,000 ($25k), $2,500 ($50k), $3,000 ($100k), $3,500 ($150k)</li>
        </ul>
    </li>
</ul>
<h4>Max SimFunded Profit Rule</h4>
<p>The maximum amount a trader can earn from a SimFunded account is $80,000. After reaching this amount, you are moved to a live account with a maximum starting balance of $20,000. The total combined amount a trader can generate from Simulated Funded Payouts and the Live Transition is $100,000.</p>`,
    payoutFrequency: "On-Demand after 10 trading days",
    pros: [
        "Multiple plans: Intraday, EOD, and Instant Funding",
        "100% profit split on first $15,000, then 90/10",
        "Supports NinjaTrader, Tradovate, TradingView",
        "No restrictions on news trading or DCA",
        "Allows EAs/bots and specific copy trading"
    ],
    cons: [
        "Consistency rules apply to all plans",
        "Activation fee for Advanced Plan funded account",
        "Tiered and capped payout structure",
        "Inactivity rule requires weekly trading"
    ],
    keyFeatures: [
        '100% profit split up to $15K, then 90/10',
        'Advanced (Intraday DD) & Growth (EOD DD) evaluations',
        'Straight to Sim (instant EOD DD funding) option',
        'Tiered payout system with specific requirements',
        'Allows EAs and specific copy trading'
    ],
    keyInfoSnippets: [
        { label: 'Profit Split', value: '100% (first $15k), then 90%' },
        { label: 'Platforms', value: 'NinjaTrader, Tradovate, TradingView' },
        { label: 'Funding Types', value: 'Advanced (IDD), Growth (EOD), Instant Sim' }
    ],
    offerBadgeLabel: '35% OFF ALL ACCOUNTS',
    promo: 'Code: EZ',
    fundingModels: ["1-Step", "Instant Funding"],
    profitSplit: '100% on first $15,000, then 90/10',
    drawdownRules: 'Advanced: Intraday trailing. Growth & Sim: End-of-day trailing.',
    profitTarget: 'Challenges: 6%. Sim Funded: Payout-based goals.',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['NinjaTrader', 'TradingView', 'Tradovate'],
    payoutMethods: ['Plane', 'Riseworks'],
    paymentMethods: ['Credit Card'],
    broker: 'Ninjatrader',
    rating: 4.8,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 69,
    maxChallengeCost: 729,
    activationFee: '$125 (Advanced Plan), $0 (Growth/Sim)',
    challengeType: '1-Step or Instant Funding',
    accountTiers: tradeifyAccountTiers,
    restrictedCountries: [
        { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
        { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" }, { name: "Burma", code: "MM" }, { name: "Burundi", code: "BI" }, { name: "Cambodia", code: "KH" },
        { name: "Central African Republic", code: "CF" }, { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
        { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" }, { name: "Ghana", code: "GH" },
        { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
        { name: "Jamaica", code: "JM" }, { name: "Kosovo", code: "XK" }, { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" },
        { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mauritius", code: "MU" }, { name: "Mongolia", code: "MN" },
        { name: "Montenegro", code: "ME" }, { name: "Nicaragua", code: "NI" }, { name: "North Korea", code: "KP" }, { name: "Pakistan", code: "PK" },
        { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" }, { name: "Russia", code: "RU" }, { name: "Somalia", code: "SO" },
        { name: "South Sudan", code: "SS" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" },
        { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" }, { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: 'Yemen', code: 'YE' },
        { name: 'Zimbabwe', code: 'ZW' }
    ],
};

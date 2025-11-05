import type { PropFirm, AccountTier } from '../../types';

export const fundingticksAccountTiers: AccountTier[] = [
  // 1-Step Accounts (Monthly Fee) / Pro+
  { id: 'ft-pro-25k', name: '25k Pro+ (Evaluation)', size: 25000, evaluationFee: 99, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: '1-Step' },
  { id: 'ft-pro-50k', name: '50k Pro+ (Evaluation)', size: 50000, evaluationFee: 125, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: '1-Step' },
  { id: 'ft-pro-100k', name: '100k Pro+ (Evaluation)', size: 100000, evaluationFee: 199, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: '1-Step' },
  // Instant Accounts (One-Time Fee) / Zero
  { id: 'ft-zero-25k', name: '25k Zero (Instant)', size: 25000, evaluationFee: 333, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: 'Instant Funding' },
  { id: 'ft-zero-50k', name: '50k Zero (Instant)', size: 50000, evaluationFee: 499, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: 'Instant Funding' },
  { id: 'ft-zero-100k', name: '100k Zero (Instant)', size: 100000, evaluationFee: 599, activationFee: 0, profitTargetPercentage: null, drawdownPercentage: 0, dailyLossLimitPercentage: null, drawdownRules: 'EOD Trailing', challengeType: 'Instant Funding' },
];

export const fundingticks: PropFirm = {
    id: '7',
    slug: 'fundingticks',
    name: 'FundingTicks',
    logoUrl: '/images/fundingticks_logo.png',
    websiteUrl: '#', // Placeholder
    affiliateLink: '#', // Placeholder
    isFeatured: true,
    ceo: 'Khaled Ayesh',
    dateCreated: 'March 2025',
    briefDescription: 'Futures firm from the UAE offering 1-step evaluations and direct funding with a 90% profit split.',
    fullReview: `FundingTicks, based in the United Arab Emirates, presents two primary funding paths for futures traders: a "Pro+" 1-step evaluation and a "Zero" direct-to-funded plan. Both routes offer a generous 90% profit split and utilize an End-of-Day trailing drawdown, a feature favored by many traders for its flexibility. The firm operates on the Tradovate brokerage, providing access to popular platforms like NinjaTrader and TradingView. For those preferring an evaluation, the Pro+ plan requires trading for a minimum of 5 qualifying days to pass. While news trading is allowed during evaluation, it becomes restricted in the funded Master account. Payouts from a Master account can be requested every 5 trading days. The Zero plan allows traders to bypass evaluation for a one-time fee, moving directly to a simulated funded account. This path has a stricter consistency rule (25%) and a payout structure based on hitting specific "Reward Targets." Payouts can be requested every 7 days. A notable rule for Zero accounts is that only EAs that function as risk managers are permitted, and inactivity for 7 days leads to account suspension.`,
    tradingRules: `<h3>Leverage & Commissions</h3>
<ul>
  <li><strong>FundingTicks Zero Model (Max Contracts):</strong>
    <ul>
      <li>$25,000 Account: 1 mini or 10 micros</li>
      <li>$50,000 Account: 3 minis or 30 micros</li>
      <li>$100,000 Account: 5 minis or 50 micros</li>
    </ul>
  </li>
  <li><strong>FundingTicks Pro+ Model (Max Contracts):</strong>
    <ul>
      <li>$25,000 Account: 2 minis or 20 micros</li>
      <li>$50,000 Account: 4 minis or 40 micros</li>
      <li>$100,000 Account: 8 minis or 80 micros</li>
    </ul>
  </li>
  <li><strong>Commissions:</strong> Details available at <a href="https://help.fundingticks.com/hc/en-us/articles/33733389327377-Tradovate-Tradable-Instruments-and-Commissions" target="_blank" rel="noopener noreferrer">FundingTicks Commissions Page</a>.</li>
</ul>
<h3>Trading Rules</h3>
<h4>Consistency Rules</h4>
<ul>
    <li><strong>FundingTicks Pro+ Model:</strong> A 40% consistency rule applies during the evaluation period only. This means no single day can account for more than 40% of your total profit.</li>
    <li><strong>FundingTicks Zero Model:</strong> A 25% consistency rule applies for rewards. This means no single day can account for more than 25% of your total profits.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>News Trading:</strong>
        <ul>
            <li>Evaluation Accounts: Allowed.</li>
            <li>Master Accounts: Restricted for 5 minutes before and 5 minutes after high-impact news events or speeches.</li>
        </ul>
    </li>
    <li><strong>Copy Trading:</strong> Allowed without restrictions.</li>
    <li><strong>Expert Advisors (EAs):</strong> Only EAs that function as risk managers are permitted. The use of any other type of third-party EA is strictly prohibited.</li>
    <li><strong>Inactivity Rule:</strong> Any trading account that is inactive for 7 consecutive days will be automatically suspended.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<h4>FundingTicks Pro+</h4>
<ul>
    <li><strong>Profit Split:</strong> 90/10 (90% to the trader).</li>
    <li><strong>Payout Cycle:</strong> Traders can request 60% of their profit (up to $5,000 per account) every 5 trading days. The remaining 40% is transferred to the live account upon qualification.</li>
    <li><strong>Minimum Daily Profit for a "Trading Day" to Count:</strong>
        <ul>
            <li>$25k Account: $100</li>
            <li>$50k Account: $150</li>
            <li>$100k Account: $200</li>
        </ul>
    </li>
    <li><strong>Minimum Reward Withdrawal:</strong>
        <ul>
            <li>$25k Account: $250</li>
            <li>$50k Account: $500</li>
            <li>$100k Account: $1,000</li>
        </ul>
    </li>
</ul>
<h4>FundingTicks Zero</h4>
<ul>
    <li><strong>Payout Cycle:</strong> Rewards can be requested every 7 days at a 90/10 profit split.</li>
    <li><strong>Reward Caps per Cycle:</strong>
        <ul>
            <li>$25K Account: First Reward: $1,000; Second Reward: $1,000; Third Reward: $1,000; Fourth Reward: $1,000.</li>
            <li>$50K Account: First Reward: $2,000; Second Reward: $2,000; Third Reward: $2,000; Fourth Reward: $2,500.</li>
            <li>$100K Account: First Reward: $2,500; Second Reward: $2,500; Third Reward: $2,500; Fourth Reward: $3,000.</li>
        </ul>
    </li>
    <li><strong>Reward Target per Cycle:</strong>
        <ul>
            <li>$25K Account: First Reward Target: $1,500; Second Reward Target: $1,250; Third+ Reward Target: $1,000.</li>
            <li>$50K Account: First Reward Target: $3,000; Second Reward Target: $2,500; Third+ Reward Target: $2,000.</li>
            <li>$100K Account: First Reward Target: $6,000; Second Reward Target: $4,000; Third+ Reward Target: $2,000.</li>
        </ul>
    </li>
    <li><strong>Minimum Reward Withdrawal:</strong>
        <ul>
            <li>$25k Account: $250</li>
            <li>$50k Account: $500</li>
            <li>$100k Account: $1,000</li>
        </ul>
    </li>
</ul>`,
    payoutFrequency: "Every 5-7 days",
    pros: [
      "90% profit split",
      "Offers both 1-step evaluation and direct funding",
      "No daily loss limit on accounts",
      "Uses flexible End-of-Day trailing drawdown",
      "Payouts every 5-7 days"
    ],
    cons: [
      "Strict consistency rules for payouts/rewards",
      "News trading restrictions on funded accounts",
      "Inactivity rule can lead to quick suspension",
      "Only risk-manager EAs are allowed on Zero accounts"
    ],
    keyFeatures: [
      '90% Profit Split',
      '1-Step (Pro+) and Direct (Zero) funding models',
      'End-of-Day Trailing Drawdown',
      'No Daily Loss Limit',
      'Payout\'s every 5-7 days'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '90%' },
      { label: 'Funding Models', value: '1-Step Evaluation, Direct Funded' },
      { label: 'Drawdown', value: 'EOD Trailing' },
      { label: 'Platforms', value: 'Tradovate, NinjaTrader, TradingView' }
    ],
    offerBadgeLabel: '35% OFF all accounts',
    fundingModels: ["1-Step", "Instant Funding"],
    profitSplit: '90%',
    drawdownRules: 'End-of-Day trailing drawdown',
    profitTarget: '5 qualifying days (Pro+), Reward Targets (Zero)',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['NinjaTrader', 'TradingView', 'Tradovate'],
    broker: 'Tradovate',
    paymentMethods: ['Apple Pay', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'Neteller', 'Paysafe Card', 'Skrill', 'Wire Transfer'],
    payoutMethods: ['Bank Wire Transfer', 'Crypto', 'Riseworks'],
    rating: 4.0,
    minAccountSize: 25000,
    maxAccountSize: 100000,
    minChallengeCost: 99,
    maxChallengeCost: 599,
    activationFee: 'Not specified',
    challengeType: '1-Step or Instant Funding',
    accountTiers: fundingticksAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
      { name: "Bahamas", code: "BS" }, { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Bosnia and Herzegovina", code: "BA" },
      { name: "Botswana", code: "BW" }, { name: "Bulgaria", code: "BG" }, { name: "Burma", code: "MM" }, { name: "Burundi", code: "BI" },
      { name: "Cambodia", code: "KH" }, { name: "Central African Republic", code: "CF" }, { name: "China", code: "CN" }, { name: "Colombia", code: "CO" },
      { name: "Côte d'Ivoire", code: "CI" }, { name: "Crimea", code: "UA-43" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
      { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Ecuador", code: "EC" }, { name: "Ethiopia", code: "ET" }, { name: "Ghana", code: "GH" },
      { name: "Hong Kong", code: "HK" }, { name: "Iceland", code: "IS" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" },
      { name: "Iraq", code: "IQ" }, { name: "Jamaica", code: "JM" }, { name: "Kosovo", code: "XK" }, { name: "Laos", code: "LA" },
      { name: "Lebanon", code: "LB" }, { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" }, { name: "Mauritius", code: "MU" },
      { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Myanmar", code: "MM" }, { name: "Nicaragua", code: "NI" },
      { name: "North Korea", code: "KP" }, { name: "Pakistan", code: "PK" }, { name: "Panama", code: "PA" }, { name: "Papua New Guinea", code: "PG" },
      { name: "Romania", code: "RO" }, { name: "Russia", code: "RU" }, { name: "Serbia", code: "RS" }, { name: "Slovenia", code: "SI" },
      { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
      { name: "Syria", code: "SY" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" },
      { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" }, { name: "United Arab Emirates", code: "AE" }, { name: "Venezuela", code: "VE" },
      { name: "Vietnam", code: "VN" }, { name: 'Yemen', code: 'YE' }, { name: 'Zimbabwe', code: 'ZW' }
    ],
  };

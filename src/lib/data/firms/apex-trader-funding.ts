
import type { PropFirm, AccountTier } from '../../types';

export const apexTraderFundingAccountTiers: AccountTier[] = [
  // Rithmic & NinjaTrader
  { id: 'atf-rithmic-25k', name: '$25,000 Rithmic/Ninja', size: 25000, evaluationFee: 157.00, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 6, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-50k', name: '$50,000 Rithmic/Ninja', size: 50000, evaluationFee: 167.00, activationFee: 140, profitTargetPercentage: 6, drawdownPercentage: 5, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-100k-static', name: '$100,000 Static Rithmic/Ninja', size: 100000, evaluationFee: 147.00, activationFee: 220, profitTargetPercentage: 2, drawdownRules: '$625 Static', platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-100k', name: '$100,000 Rithmic/Ninja', size: 100000, evaluationFee: 297.00, activationFee: 220, profitTargetPercentage: 6, drawdownPercentage: 3, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-150k', name: '$150,000 Rithmic/Ninja', size: 150000, evaluationFee: 387.00, activationFee: 260, profitTargetPercentage: 6, drawdownPercentage: 3.3, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-250k', name: '$250,000 Rithmic/Ninja', size: 250000, evaluationFee: 497.00, activationFee: 300, profitTargetPercentage: 6, drawdownPercentage: 2.6, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-rithmic-300k', name: '$300,000 Rithmic/Ninja', size: 300000, evaluationFee: 657.00, activationFee: 340, profitTargetPercentage: 6.67, drawdownPercentage: 2.5, platform: "Rithmic/NinjaTrader", challengeType: '1-Step' },
  // Tradovate & NinjaTrader
  { id: 'atf-tradovate-25k', name: '$25,000 Tradovate/Ninja', size: 25000, evaluationFee: 167.00, activationFee: 150, profitTargetPercentage: 6, drawdownPercentage: 6, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-50k', name: '$50,000 Tradovate/Ninja', size: 50000, evaluationFee: 207.00, activationFee: 160, profitTargetPercentage: 6, drawdownPercentage: 5, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-100k-static', name: '$100,000 Static Tradovate/Ninja', size: 100000, evaluationFee: 157.00, activationFee: 240, profitTargetPercentage: 2, drawdownRules: '$625 Static', platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-100k', name: '$100,000 Tradovate/Ninja', size: 100000, evaluationFee: 297.00, activationFee: 240, profitTargetPercentage: 6, drawdownPercentage: 3, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-150k', name: '$150,000 Tradovate/Ninja', size: 150000, evaluationFee: 397.00, activationFee: 280, profitTargetPercentage: 6, drawdownPercentage: 3.3, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-250k', name: '$250,000 Tradovate/Ninja', size: 250000, evaluationFee: 497.00, activationFee: 320, profitTargetPercentage: 6, drawdownPercentage: 2.6, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  { id: 'atf-tradovate-300k', name: '$300,000 Tradovate/Ninja', size: 300000, evaluationFee: 597.00, activationFee: 360, profitTargetPercentage: 6.67, drawdownPercentage: 2.5, platform: "Tradovate/NinjaTrader", challengeType: '1-Step' },
  // WealthCharts
  { id: 'atf-wealthcharts-25k', name: '$25,000 WealthCharts', size: 25000, evaluationFee: 147.00, activationFee: 130, profitTargetPercentage: 6, drawdownPercentage: 6, platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-50k', name: '$50,000 WealthCharts', size: 50000, evaluationFee: 167.00, activationFee: 140, profitTargetPercentage: 6, drawdownPercentage: 5, platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-100k-static', name: '$100,000 Static WealthCharts', size: 100000, evaluationFee: 137.00, activationFee: 220, profitTargetPercentage: 2, drawdownRules: '$625 Static', platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-100k', name: '$100,000 WealthCharts', size: 100000, evaluationFee: 297.00, activationFee: 220, profitTargetPercentage: 6, drawdownPercentage: 3, platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-150k', name: '$150,000 WealthCharts', size: 150000, evaluationFee: 397.00, activationFee: 260, profitTargetPercentage: 6, drawdownPercentage: 3.3, platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-250k', name: '$250,000 WealthCharts', size: 250000, evaluationFee: 497.00, activationFee: 300, profitTargetPercentage: 6, drawdownPercentage: 2.6, platform: "WealthCharts", challengeType: '1-Step' },
  { id: 'atf-wealthcharts-300k', name: '$300,000 WealthCharts', size: 300000, evaluationFee: 597.00, activationFee: 340, profitTargetPercentage: 6.67, drawdownPercentage: 2.5, platform: "WealthCharts", challengeType: '1-Step' },
];

export const apexTraderFunding: PropFirm = {
  id: '14',
  slug: 'apex-trader-funding',
  name: 'Apex Trader Funding',
  logoUrl: '/images/apex_logo.jfif',
  websiteUrl: '#',
  affiliateLink: '#',
  isFeatured: false,
  offerBadgeLabel: '80% off all accounts',
  ceo: 'Darrel Martin',
  dateCreated: 'January 2021',
  briefDescription: 'A popular futures prop firm offering a 1-Step Evaluation with no daily loss limit and a 100% profit split.',
  fullReview: 'Apex Trader Funding is a prominent firm in the futures trading space, known for its straightforward 1-Step Evaluation process. A key attraction is the absence of a daily drawdown limit, giving traders more flexibility. They offer a 100% profit split for all traders. To qualify for a payout, traders must meet a 30% consistency rule, ensuring that no single day\'s profit dominates their total earnings. The firm supports a vast array of trading platforms compatible with Rithmic and Tradovate, and has specific rules around contract scaling and risk management to guide traders.',
  tradingRules: `<h3>Leverage (Max Contract Size)</h3>
<ul>
  <li><strong>$25,000 Account:</strong> Up to 4 Contracts (40 Micros)</li>
  <li><strong>$50,000 Account:</strong> Up to 10 Contracts (100 Micros)</li>
  <li><strong>$75,000 Account:</strong> Up to 12 Contracts (120 Micros)</li>
  <li><strong>$100,000 Account:</strong> Up to 14 Contracts (140 Micros)</li>
  <li><strong>$100,000 Static Drawdown Account:</strong> Up to 2 Contracts (20 Micros)</li>
  <li><strong>$150,000 Account:</strong> Up to 17 Contracts (170 Micros)</li>
  <li><strong>$250,000 Account:</strong> Up to 27 Contracts (270 Micros)</li>
  <li><strong>$300,000 Account:</strong> Up to 35 Contracts (350 Micros)</li>
</ul>
<h3>Commissions</h3>
<p>Commission details are provided on the firm's support pages, with rates varying for Rithmic and Tradovate.</p>
<h3>Firm Rules</h3>
<h4>Consistency Rules</h4>
<p>When requesting a payout from a Performance Account (PA), no single trading day can account for more than 30% of the total accumulated profit balance.</p>
<h4>General Firm Rules</h4>
<ul>
  <li><strong>Inconsistent Sizing:</strong> Drastic changes in trade sizes are not allowed; traders must be consistent.</li>
  <li><strong>Contract Scaling:</strong> Traders can only use half of their maximum allowed contracts until the account balance surpasses the initial trailing threshold stop.</li>
  <li><strong>Risk Management:</strong> A maximum risk-to-reward ratio of 5:1 is applied to all trades.</li>
  <li><strong>Limit on Losses:</strong> Open trades must not have a negative drawdown exceeding 30% of the account's profit balance. This limit may be increased to 50% if the account balance doubles the safety net.</li>
  <li><strong>One-Direction Rule:</strong> During a news event, a trader can only hold a long (buy) or short (sell) position, not both simultaneously.</li>
</ul>
<h4>Consequences for Rule Violations</h4>
<ul>
  <li>Temporary cap on contract usage (e.g., 50%).</li>
  <li>Payouts may be restricted to only the profit earned since the last payout request.</li>
  <li>Disqualification of "windfall" profits for withdrawal over the next two payout cycles.</li>
</ul>`,
  payoutRules: `<h3>Payout Policy</h3>
<ul>
  <li><strong>Safety Net:</strong> For the first three payouts, the account balance must be equal to the account's drawdown amount plus an extra $100. This rule is removed after the third successful payout.</li>
  <li><strong>Minimum Payout:</strong> If the safety net is met, the minimum payout request is $500.</li>
  <li><strong>Payout Requirements:</strong> To be eligible for a payout, a trader must have at least 8 active trading days, and at least 5 of those days must have a profit of $50 or more.</li>
</ul>`,
  payoutFrequency: "Bi-weekly after 8 trading days",
  pros: [
    'Simple 1-Step Evaluation',
    '100% Profit Split',
    'No Daily Loss Limit on most accounts',
    'Wide range of supported platforms',
    'Established firm with a strong community'
  ],
  cons: [
    'Strict 30% consistency rule for payouts',
    'Safety net rule for the first three payouts can delay withdrawals',
    'Rules against inconsistent sizing can be subjective'
  ],
  keyFeatures: [
    '1-Step Evaluation with no daily drawdown',
    '100% Profit Split',
    'Supports Rithmic and Tradovate platforms',
    'Clear rules on consistency and risk management'
  ],
  keyInfoSnippets: [
    { label: 'Profit Split', value: '100%' },
    { label: 'Evaluation', value: '1-Step' },
    { label: 'Daily Drawdown', value: 'None' },
    { label: 'Platforms', value: 'Rithmic, Tradovate, NinjaTrader, etc.' }
  ],
  fundingModels: ['1-Step'],
  profitSplit: '100%',
  drawdownRules: 'Trailing Threshold or Static (varies)',
  profitTarget: 'Varies by account size',
  assets: ['Futures'],
  instrumentTypes: ['Futures'],
  platforms: ["Atas Orderflow Trading", "Bookmap", "EdgeProX", "Finamark", "Jigsaw Daytradr", "MotiveWave", "NinjaTrader", "Quantower", "Rithmic", "R Trader Pro", "Sierra Chart", "TradingView", "Tradovate", "VolFix", "WealthCharts"],
  broker: 'Rithmic, Tradovate',
  paymentMethods: ['Credit/Debit Card'],
  payoutMethods: ['ACH', 'Bank Wire Transfer'],
  rating: 4.5,
  minAccountSize: 25000,
  maxAccountSize: 300000,
  minChallengeCost: 137.00,
  maxChallengeCost: 597.00,
  challengeType: '1-Step',
  accountTiers: apexTraderFundingAccountTiers,
  restrictedCountries: [
    { name: "Afghanistan", code: "AF" }, { name: "Algeria", code: "DZ" }, { name: "Azerbaijan", code: "AZ" }, { name: "Bahrain", code: "BH" }, { name: "Bangladesh", code: "BD" },
    { name: "Belarus", code: "BY" }, { name: "Benin", code: "BJ" }, { name: "Brunei", code: "BN" }, { name: "Burkina Faso", code: "BF" }, { name: "Cameroon", code: "CM" },
    { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" }, { name: "China", code: "CN" }, { name: "Congo (all forms)", code: "CG" },
    { name: "Côte d'Ivoire", code: "CI" }, { name: "Cuba", code: "CU" }, { name: "Curaçao", code: "CW" }, { name: "Cyprus", code: "CY" }, { name: "Egypt", code: "EG" },
    { name: "Gabon", code: "GA" }, { name: "Grenada", code: "GD" }, { name: "Haiti", code: "HT" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
    { name: "Jersey", code: "JE" }, { name: "Jordan", code: "JO" }, { name: "Kazakhstan", code: "KZ" }, { name: "Kenya", code: "KE" }, { name: "Kosovo", code: "XK" },
    { name: "Kuwait", code: "KW" }, { name: "Latvia", code: "LV" }, { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" }, { name: "Libya", code: "LY" },
    { name: "Madagascar", code: "MG" }, { name: "Maldives", code: "MV" }, { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" }, { name: "Moldova", code: "MD" },
    { name: "Mongolia", code: "MN" }, { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" }, { name: "Namibia", code: "NA" }, { name: "Nepal", code: "NP" },
    { name: "New Caledonia", code: "NC" }, { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" }, { name: "Occupied Palestinian Territory", code: "PS" },
    { name: "Oman", code: "OM" }, { name: "Pakistan", code: "PK" }, { name: "Qatar", code: "QA" }, { name: "Reunion", code: "RE" }, { name: "Russia", code: "RU" },
    { name: "Rwanda", code: "RW" }, { name: "Saint Pierre and Miquelon", code: "PM" }, { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" }, { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" }, { name: "Sri Lanka", code: "LK" }, { name: "Syria", code: "SY" },
    { name: "Tanzania", code: "TZ" }, { name: "Togo", code: "TG" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" }, { name: "Turkey", code: "TR" },
    { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" }, { name: "Uzbekistan", code: "UZ" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" },
    { name: "Western Sahara", code: "EH" }, { name: "Yemen", code: "YE" }, { name: "Zambia", code: "ZM" }, { name: "Zimbabwe", code: "ZW" }
  ],
};


import type { PropFirm, AccountTier } from '../../types';

export const daytradersAccountTiers: AccountTier[] = [
  // S2F Accounts
  { id: 'dt-s2f-25k', name: '25K S2F Account', size: 25000, evaluationFee: 370, activationFee: 0, drawdownRules: '$1,000 (End of Day)', profitTargetPercentage: null, challengeType: 'Instant Funding' },
  { id: 'dt-s2f-50k', name: '50K S2F Account', size: 50000, evaluationFee: 570, activationFee: 0, drawdownRules: '$2,500 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null, challengeType: 'Instant Funding' },
  { id: 'dt-s2f-150k', name: '150K S2F Account', size: 150000, evaluationFee: 825, activationFee: 0, drawdownRules: '$6,000 (End of Day)', dailyLossLimitPercentage: 2.5, profitTargetPercentage: null, challengeType: 'Instant Funding' },
  // Trail Accounts
  { id: 'dt-trail-25k', name: '25K TRAIL Account', size: 25000, evaluationFee: 249, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,500 Trailing Threshold', challengeType: '1-Step' },
  { id: 'dt-trail-50k', name: '50K TRAIL Account', size: 50000, evaluationFee: 379, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$2,500 Trailing Threshold', challengeType: '1-Step' },
  { id: 'dt-trail-75k', name: '75K TRAIL Account', size: 75000, evaluationFee: 449, activationFee: 130, profitTargetPercentage: 5.67, drawdownRules: '$2,750 Trailing Threshold', challengeType: '1-Step' },
  // Static Accounts
  { id: 'dt-static-25k', name: '25K STATIC Account', size: 25000, evaluationFee: 150, activationFee: 130, profitTargetPercentage: 10, drawdownRules: '$750 Total Drawdown', challengeType: '1-Step' },
  { id: 'dt-static-50k', name: '50K STATIC Account', size: 50000, evaluationFee: 200, activationFee: 130, profitTargetPercentage: 7.5, drawdownRules: '$1,000 Total Drawdown', challengeType: '1-Step' },
  { id: 'dt-static-75k', name: '75K STATIC Account', size: 75000, evaluationFee: 250, activationFee: 130, profitTargetPercentage: 6, drawdownRules: '$1,250 Total Drawdown', challengeType: '1-Step' },
];

export const daytraders: PropFirm = {
  id: '6',
  slug: 'daytraders',
  name: 'Daytraders',
  logoUrl: '/images/daytraders_logo.png',
  websiteUrl: 'https://daytraders.com/',
  affiliateLink: 'https://daytraders.com/?aff_id=YOUR-AFFILIATE-ID', // Replace with your actual Daytraders affiliate link
  briefDescription: 'Offers "Straight to Funded" (S2F) accounts with a 100% profit split, alongside Trail and Static evaluations, on their proprietary platform.',
  fullReview: `Daytraders offers a unique proposition with its "Straight to Funded" (S2F) accounts, allowing traders to bypass evaluations and start trading with firm capital after a one-time fee. A major draw is the 100% profit split, meaning traders keep all their earnings. For those who prefer a trial period, Daytraders also provides "Trail" (trailing drawdown) and "Static" (fixed drawdown) evaluation accounts. All trading activities are conducted exclusively on their proprietary ProjectX platform.`,
  tradingRules: `<h3>Rules for Evaluation Accounts</h3>
<h4>Permitted and Prohibited Trading Practices</h4>
<ul>
    <li><strong>Dollar-Cost Averaging (DCA):</strong> Allowed in both evaluation and Pro accounts.</li>
    <li><strong>News Trading:</strong> Allowed, but traders should be cautious due to potentially high volatility and low liquidity.</li>
    <li><strong>Hedging:</strong> Not permitted at any point during the evaluation phase.</li>
    <li><strong>High-Frequency Trading (HFT):</strong> Automated high-frequency trading is strictly prohibited.</li>
</ul>
<h4>Rules for Passing the Evaluation</h4>
<p>To successfully pass your evaluation and move to a Pro account, you must adhere to the following rules:</p>
<ul>
    <li><strong>Profit Goal and Drawdown:</strong> You must reach the profit goal for your specific account size without ever letting your balance fall to the maximum drawdown limit.</li>
    <li><strong>Minimum Trading Days:</strong> A minimum of 4 trading days is required. These days do not need to be consecutive.</li>
    <li><strong>Minimum Daily Profit:</strong> For a day to count toward the 4-day minimum, it must meet a specific profit threshold ($25k: $100, $50k-$75k: $200, $100k-$250k: $300, $300k: $400).</li>
    <li><strong>Consistency Rule (50%):</strong> To ensure consistent trading, no single trading day can account for more than 50% of your total profit. <em>Note: If you fail to meet this rule, you can continue trading to balance out your profit distribution.</em></li>
    <li><strong>Stop Trading After Passing:</strong> Once all evaluation criteria are met, you must stop trading immediately. Continuing to trade could cause you to fall below the profit target and invalidate your pass.</li>
</ul>
<h4>General Account Management</h4>
<ul>
    <li><strong>Daily Cut-Off:</strong> All trades must be closed, and pending orders canceled, by 4:59 PM ET.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade every 30 days to keep your account active.</li>
    <li><strong>Account Limit:</strong> You are allowed to have a maximum of 15 evaluation accounts at one time.</li>
    <li><strong>Code of Conduct:</strong> You are expected to be respectful when interacting with support agents and must not share your account login information.</li>
    <li><strong>Commissions:</strong> Commissions are applied to all trades.</li>
</ul>

<h3>Rules for Funded Accounts (Pro & S2F)</h3>
<h4>General Trading Rules (All Funded Accounts)</h4>
<ul>
    <li><strong>Account Limit:</strong> A maximum of 5 active funded accounts are allowed per trader. This can be a mix of up to 2 Pro Accounts and up to 3 S2F Accounts.</li>
    <li><strong>Permitted Strategies:</strong> Dollar-Cost Averaging (DCA) and News Trading are allowed.</li>
    <li><strong>Prohibited Strategies:</strong> Hedging (being long and short on the same asset across different accounts) and High-Frequency Trading (HFT) are not allowed.</li>
    <li><strong>Inactivity Rule:</strong> You must place at least one trade every 30 days to keep the account active.</li>
</ul>
<h4>Specific Account Rules</h4>
<table>
  <thead>
    <tr>
      <th>Rule</th>
      <th>Pro Accounts</th>
      <th>S2F Accounts</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Consistency</strong></td>
      <td>No single trading day can exceed 30% of your total profit.</td>
      <td>No single trading day can exceed 20% of your total profit.</td>
    </tr>
    <tr>
      <td><strong>Min. Trading Days</strong></td>
      <td>Requires 8 qualifying trading days for a payout.</td>
      <td>Requires 10 qualifying trading days for a payout.</td>
    </tr>
    <tr>
      <td><strong>Drawdown Type</strong></td>
      <td>Follows the evaluation rule (Static or Intraday Trailing).</td>
      <td>Uses an End-of-Day (EOD) trailing drawdown.</td>
    </tr>
    <tr>
      <td><strong>Account Failure</strong></td>
      <td>Must pass another evaluation to get a new one.</td>
      <td>Requires a re-purchase of the account.</td>
    </tr>
  </tbody>
</table>`,
  payoutRules: `<h4>Payout Rules & Requirements</h4>
<h5>Minimum Daily Profit</h5>
<p>For a trading day to qualify for payouts, it must meet the following minimum profit:</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Account Size</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Minimum Daily Profit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">25k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$100</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">50k - 75k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$200</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">100k - 250k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$300</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">300k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$400</td>
    </tr>
  </tbody>
</table>
<h5>Full & Static Pro Account Payouts</h5>
<p>These accounts require a profit buffer before withdrawal. The minimum payout request is $500.</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Account Size</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Min. Balance for Payout</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Min. Balance After Withdrawal</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Max Withdrawal per Request</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">25k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$27,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$26,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">50k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$52,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$52,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">75k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$77,850</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$77,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">100k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$103,100</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$103,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">150k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$155,100</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$153,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">250k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$256,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$254,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$4,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;">300k</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$307,600</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$305,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$5,000</td>
    </tr>
  </tbody>
</table>
<h5>S2F Account Payouts</h5>
<p>S2F accounts use profit targets that must be met before each withdrawal.</p>
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Payout Targets</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">25k Account</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">50k Account</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">150k Account</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 1</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$10,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 2</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$5,000</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Profit Target 3+</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,500</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,500</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ddd; padding: 8px;"><strong>Max. Payout Request</strong></td>
      <td style="border: 1px solid #ddd; padding: 8px;">$1,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$2,000</td>
      <td style="border: 1px solid #ddd; padding: 8px;">$3,000</td>
    </tr>
  </tbody>
</table>
<h5>Maximum Withdrawal and Live Accounts</h5>
<ul>
    <li><strong>Overall Limit:</strong> The total withdrawal cap per trader is $150,000 across all their accounts.</li>
    <li><strong>Transition to Live:</strong> After reaching the payout max or completing 6 payout milestones, your performance will be evaluated for a transition to a live funded account.</li>
</ul>`,
  payoutFrequency: "On-Demand after 8-10 trading days",
  pros: [
    '100% profit split on all funded accounts.',
    '"Straight to Funded" option for immediate trading.',
    'Multiple account models (S2F, Trail, Static) to fit different styles.',
    'No daily drawdown on Trail accounts.',
    'No trailing drawdown on Static accounts.',
    'Free real-time data.'
  ],
  cons: [
    'Trading is restricted to their proprietary ProjectX platform.',
    'No scaling plans available.',
    'Activation fee required for funded accounts from Trail and Static evaluations.'
  ],
  keyFeatures: [
    '100% Profit Split',
    'Straight to Funded (S2F) accounts available',
    'Trail and Static evaluation paths',
    'End-of-Day and Static drawdown options',
    'Proprietary ProjectX trading platform'
  ],
  isFeatured: false,
  keyInfoSnippets: [
    { label: 'Profit Split', value: '100%' },
    { label: 'Account Types', value: 'S2F, Trail, Static' },
    { label: 'Platforms', value: 'ProjectX (Proprietary)' },
    { label: 'Drawdown', value: 'EOD, Trailing, or Static' }
  ],
  offerBadgeLabel: '91% OFF',
  fundingModels: ['Instant Funding', '1-Step'],
  profitSplit: '100%',
  drawdownRules: 'Varies by account type (End-of-Day, Trailing, or Static)',
  profitTarget: 'Varies for evaluation accounts, none for S2F',
  assets: ['Futures'],
  instrumentTypes: ['Futures'],
  platforms: ['ProjectX'],
  broker: 'Proprietary',
  paymentMethods: ['Credit/Debit Card', 'Crypto'],
  payoutMethods: ['Bank Wire', 'Crypto', 'ACH'],
  rating: 4.7,
  minAccountSize: 25000,
  maxAccountSize: 300000,
  minChallengeCost: 150,
  maxChallengeCost: 825,
  activationFee: 'None (S2F) / $130 (Trail/Static)',
  challengeType: '1-Step or Instant Funding',
  accountTiers: daytradersAccountTiers,
};

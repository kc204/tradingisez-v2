
import type { PropFirm, AccountTier } from '../../types';

export const bulenoxAccountTiers: AccountTier[] = [
  { id: 'bulenox-qual-25k', name: '$25K Qualification', size: 25000, evaluationFee: 145, activationFee: 148, drawdownPercentage: 6, profitTargetPercentage: 6, challengeType: '1-Step' },
  { id: 'bulenox-qual-50k', name: '$50K Qualification', size: 50000, evaluationFee: 175, activationFee: 148, drawdownPercentage: 5, profitTargetPercentage: 6, challengeType: '1-Step' },
  { id: 'bulenox-qual-100k', name: '$100K Qualification', size: 100000, evaluationFee: 215, activationFee: 248, drawdownPercentage: 3, profitTargetPercentage: 6, challengeType: '1-Step' },
  { id: 'bulenox-qual-150k', name: '$150K Qualification', size: 150000, evaluationFee: 325, activationFee: 498, drawdownPercentage: 3, profitTargetPercentage: 6, challengeType: '1-Step' },
  { id: 'bulenox-qual-250k', name: '$250K Qualification', size: 250000, evaluationFee: 535, activationFee: 898, drawdownPercentage: 2.2, profitTargetPercentage: 6, challengeType: '1-Step' },
];

export const bulenox: PropFirm = {
  id: '5',
  slug: 'bulenox',
  name: 'Bulenox',
  logoUrl: '/images/bulenox_logo.png',
  websiteUrl: 'https://bulenox.com/',
  affiliateLink: 'https://bulenox.com/?ref=YOUR-AFFILIATE-ID', // REPLACE WITH YOUR ACTUAL BULENOX AFFILIATE LINK
  isFeatured: true,
  briefDescription: 'Futures prop firm with a Qualification to Master account path, choice of drawdown models, and a 100% profit split on the first $10,000.',
  fullReview: `Bulenox provides a structured career path for futures traders, starting with a Qualification Account and progressing to a Master Account. A key differentiator is the choice between two evaluation models: a "No Scaling" account with a trailing drawdown and no daily loss limit, or an "EOD" account with an end-of-day drawdown, a daily loss limit, and a contract scaling plan. After a minimum of 5 trading days, successful traders pay a one-time activation fee to receive a Master Account. This funded account features a 100% profit split on the first $10,000, after which the split becomes 90/10. Traders who demonstrate consistent success on a Master Account may be invited to trade a real capital funded account.`,
  tradingRules: `<h3>Step 1: The Qualification Account</h3>
<p>This is the first step for all traders. The goal is to prove your trading skill by meeting a profit target without breaking any rules.</p>
<h4>Choose Your Trading Style: Account Options</h4>
<p>You must choose one of two account types for your qualification.</p>
<h5>Option 1: No Scaling Account</h5>
<ul>
  <li><strong>Drawdown Type:</strong> Trailing Drawdown.</li>
  <li><strong>How it Works:</strong> Your maximum loss level follows your highest achieved account balance. For example, if your $100k account reaches a balance of $101,000, your new liquidation level becomes $98,000 (with a $3k drawdown). This level stops trailing up once it reaches your initial starting balance.</li>
  <li><strong>Key Feature:</strong> No Daily Loss Limit.</li>
</ul>
<h5>Option 2: EOD (End-of-Day) Account</h5>
<ul>
  <li><strong>Drawdown Type:</strong> End-of-Day Drawdown.</li>
  <li><strong>How it Works:</strong> Your maximum loss level is only adjusted at the end of the trading day (5:00 PM CT), not during live trades.</li>
  <li><strong>Key Features:</strong> This account includes both a Daily Loss Limit (which suspends, but doesn't break, the account for the day if hit) and a Scaling Plan, where the number of contracts you can trade increases as your account balance grows.</li>
</ul>
<h4>General Rules for Qualification</h4>
<ul>
  <li><strong>Minimum Trading Days:</strong> You must trade for at least 5 days.</li>
  <li><strong>Multiple Accounts:</strong> You can have multiple qualification accounts.</li>
  <li><strong>Account Reset:</strong> If you break a rule, you can pay a fee to reset your account and try again.</li>
</ul>

<h3>Step 2: The Master Account (First Level of Funding)</h3>
<p>After passing the qualification, you advance to a Master Account.</p>
<h4>Transition & Activation</h4>
<ul>
  <li><strong>Process:</strong> After passing, your account is reviewed. You will then sign a contract and other documents to activate your Master Account.</li>
  <li><strong>Fee:</strong> There is no monthly subscription. Instead, you pay a one-time activation fee that varies by account size (e.g., $248 for a $100k account).</li>
</ul>
<h4>Master Account Rules</h4>
<ul>
  <li><strong>No Resets:</strong> You cannot reset a Master Account. If you break a rule, the account is closed.</li>
  <li><strong>Drawdown:</strong> The drawdown rule (Trailing or EOD) continues from your qualification, but it stops moving up once your account balance is $100 above the starting balance.</li>
  <li><strong>Multiple Accounts:</strong> You can have up to 11 active Master Accounts, but you may need to meet certain performance milestones to activate more than three.</li>
</ul>

<h3>Step 3: The Funded Account (Real Capital)</h3>
<p>This is the final stage, where consistent traders may be invited to trade real capital.</p>
<ul>
    <li><strong>Requirement:</strong> A trader with three successful payouts from a Master Account may be invited to transition to a Funded Account at the discretion of the Risk Management team.</li>
    <li><strong>Account Consolidation:</strong> All of a trader's active Master Accounts are merged into a single Funded Account.</li>
    <li><strong>Payout Request:</strong> You must complete at least five individual trading days before requesting a payout.</li>
</ul>

<h3>Important Trading Policies & Warnings</h3>
<ul>
    <li><strong>Market Halts:</strong> Trading during market halts is high-risk. Bulenox is not responsible for software interruptions, delays, or data feed errors that may occur during these periods.</li>
    <li><strong>Holding Positions:</strong> You are generally required to close all positions before 3:59 PM CST. Holding positions overnight is not permitted, except on the specific $10,000 account.</li>
    <li><strong>Technical Issues:</strong> If you experience technical problems, you must contact the support team immediately with a detailed description of the issue.</li>
</ul>`,
  payoutRules: `<h4>Payouts & Withdrawals</h4>
<ul>
  <li><strong>Profit Split:</strong> You keep 100% of the first $10,000 you make. After that, the profit split is 90% for you and 10% for Bulenox.</li>
  <li><strong>First Withdrawal:</strong> You need at least 10 active trading days before your first payout request.</li>
  <li><strong>Consistency Rule:</strong> No single trading day can represent more than 40% of your total profit.</li>
  <li><strong>Withdrawal Limits:</strong> For your first three payouts, there are maximum withdrawal amounts to encourage account stability. These limits are removed after the third payout.</li>
  <li><strong>Safety Reserve:</strong> A minimum account balance (safety reserve) must be maintained to make a withdrawal.</li>
</ul>`,
  payoutFrequency: "On-Demand after 10 trading days",
  pros: [
    "Keep 100% of the first $10,000 in profits",
    "Choice between Trailing or EOD drawdown models",
    "No daily loss limit on 'No Scaling' accounts",
    "One-time activation fee for funded accounts (no monthly fees)",
    "Supports a wide range of trading platforms"
  ],
  cons: [
    "40% consistency rule for payouts",
    "Master Accounts cannot be reset",
    "Withdrawal limits apply for the first three payouts"
  ],
  keyFeatures: [
    'Multi-stage career path (Qualification -> Master -> Funded)',
    '100% profit split on first $10k, then 90/10',
    'Choice of Trailing Drawdown or EOD Drawdown',
    'No monthly fees on funded Master accounts',
    'Supports Rithmic/CQG compatible platforms'
  ],
  keyInfoSnippets: [
    { label: 'Profit Split', value: '100% (first $10k), then 90%' },
    { label: 'Drawdown Models', value: 'Trailing or EOD' },
    { label: 'Funded Fee', value: 'One-Time Activation' },
    { label: 'Platforms', value: 'Rithmic/CQG Compatible' },
  ],
  promo: '90% off all accounts',
  fundingModels: ['1-Step'],
  profitSplit: '100% of first $10k, then 90/10',
  drawdownRules: 'Trailing or EOD (stops at initial balance)',
  profitTarget: 'Varies by account size (e.g., $1,500 on $25k)',
  assets: ['Futures (CME, COMEX, NYMEX, CBOT)'],
  instrumentTypes: ['Futures'],
  platforms: ['NinjaTrader', 'Tradovate', 'TradingView', 'Rithmic Trader Pro', 'MultiCharts', 'Bookmap', 'Jigsaw Daytrader', 'Sierra Chart', 'MotiveWave', 'VolSys', 'Quantower', 'ATAS Order Flow Trading', 'RTrader Pro', 'Investor RT'],
  broker: 'Rithmic, CQG',
  paymentMethods: ['Credit/Debit Card', 'Crypto'],
  payoutMethods: ['Bank Wire', 'Crypto', 'Zelle'],
  rating: 4.7,
  minAccountSize: 25000,
  maxAccountSize: 250000,
  minChallengeCost: 145,
  maxChallengeCost: 535,
  activationFee: 'One-time fee, varies by account size',
  challengeType: '1-Step',
  accountTiers: bulenoxAccountTiers,
};

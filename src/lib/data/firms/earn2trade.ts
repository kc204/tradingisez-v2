import type { PropFirm, AccountTier } from '../../types';

export const earn2TradeAccountTiers: AccountTier[] = [
    // The Gauntlet Mini™ Challenges
    { id: 'e2t-gauntlet-50k', name: '$50,000 Gauntlet Mini', size: 50000, evaluationFee: 170.00, activationFee: 139, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'e2t-gauntlet-100k', name: '$100,000 Gauntlet Mini', size: 100000, evaluationFee: 315.00, activationFee: 139, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3.5, challengeType: '1-Step' },
    { id: 'e2t-gauntlet-150k', name: '$150,000 Gauntlet Mini', size: 150000, evaluationFee: 350.00, activationFee: 139, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, challengeType: '1-Step' },
    { id: 'e2t-gauntlet-200k', name: '$200,000 Gauntlet Mini', size: 200000, evaluationFee: 550.00, activationFee: 139, profitTargetPercentage: 5.5, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, challengeType: '1-Step' },
    // Trader Career Path® Challenges
    { id: 'e2t-tcp-25k', name: '$25,000 Trader Career Path', size: 25000, evaluationFee: 150.00, activationFee: 139, profitTargetPercentage: 7, dailyLossLimitPercentage: 2.2, drawdownPercentage: 6, challengeType: '1-Step' },
    { id: 'e2t-tcp-50k', name: '$50,000 Trader Career Path', size: 50000, evaluationFee: 190.00, activationFee: 139, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 4, challengeType: '1-Step' },
    { id: 'e2t-tcp-100k', name: '$100,000 Trader Career Path', size: 100000, evaluationFee: 350.00, activationFee: 139, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3.5, challengeType: '1-Step' },
];

export const earn2Trade: PropFirm = {
    id: '16',
    slug: 'earn2trade',
    name: 'Earn2Trade',
    logoUrl: '/images/earn2trade_logo.jfif', // Placeholder, please add actual logo
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Osvaldo Guimarães',
    dateCreated: 'January 2016',
    briefDescription: 'Futures prop firm offering Gauntlet Mini and Trader Career Path evaluations with an 80% profit split and weekly payouts.',
    fullReview: 'Earn2Trade offers two primary evaluation programs for futures traders: The Gauntlet Mini and the Trader Career Path. They specialize in Futures and support a wide array of trading platforms, partnering with established brokers like Dorman, EdgeClear, and Phillip Capital.',
    tradingRules: `<h3>Leverage and Contract Sizing</h3>
<p>The maximum number of contracts a trader can hold is determined by the account size and program:</p>
<h4>The Gauntlet Mini:</h4>
<ul>
  <li>$50,000 Account: Up to 6 contracts</li>
  <li>$100,000 Account: Up to 12 contracts</li>
  <li>$150,000 Account: Up to 15 contracts</li>
  <li>$200,000 Account: Up to 16 contracts</li>
</ul>
<h4>Trader Career Path:</h4>
<ul>
  <li>$25,000 Account: Up to 3 contracts</li>
  <li>$50,000 Account: Up to 6 contracts</li>
  <li>$100,000 Account: Up to 12 contracts</li>
</ul>
<h3>Key Firm Rules and Policies</h3>
<ul>
  <li><strong>Consistency Rule:</strong> No single trading day can constitute 30% or more of the trader's total profit and loss during the evaluation. This rule applies to both the Trader Career Path® and The Gauntlet Mini™.</li>
  <li><strong>Market Closure:</strong> All trading positions and active orders must be closed daily from 3:50 PM CT until 5:00 PM CT.</li>
  <li><strong>Market Conduct:</strong> Trading in a manner that does not reflect actual market practices or could pose a financial risk to Earn2Trade is forbidden.</li>
  <li><strong>Unrealistic Volume:</strong> Executing an excessively high number of contracts in one day is prohibited.</li>
  <li><strong>Copy Trading:</strong> Not permitted.</li>
  <li><strong>Expert Advisors (EAs):</strong> Permitted.</li>
  <li><strong>News Trading:</strong> Permitted.</li>
  <li><strong>Minimum Trading Days:</strong> A minimum of 10 trading days is required.</li>
  <li><strong>Inactivity:</strong> Accounts may be affected after five consecutive trading days of no activity.</li>
</ul>`,
    payoutRules: `<h3>Payout and Profit Sharing</h3>
<ul>
  <li><strong>Profit Split:</strong> Traders receive an 80% share of their profits.</li>
  <li><strong>Payout Schedule:</strong> Payouts are processed weekly on Tuesdays. Withdrawal requests must be submitted via email by 2:00 PM on the preceding Friday.</li>
  <li><strong>Minimum Withdrawal:</strong> $100 for both live and LiveSim® accounts.</li>
  <li><strong>Withdrawal Fees:</strong> Withdrawals exceeding $500 are not subject to fees.</li>
  <li><strong>LiveSim® Activation Fee:</strong> A one-time activation fee of $139 is applicable for traders with non-professional CME status, which is deducted from the first withdrawal. A trader must have a minimum profit of $239 to cover the activation fee and the minimum withdrawal amount.</li>
  <li><strong>LiveSim® Withdrawal Cap (The Gauntlet Mini™):</strong> The maximum amount that can be withdrawn from a LiveSim® account obtained through any Gauntlet Mini™ evaluation is $4,000. To receive the full $4,000, the trader must achieve a profit of $5,000, from which the firm's 20% share is deducted.</li>
</ul>
<h3>Account Scaling and Growth</h3>
<ul>
  <li><strong>The Gauntlet:</strong> This program does not offer a scaling plan.</li>
  <li><strong>Trader Career Path (TCP):</strong> This program provides opportunities for account growth. TCP25 can be scaled up to a $200,000 account, while TCP50 & TCP100 can be scaled up to a $400,000 account.</li>
</ul>`,
    payoutFrequency: 'Weekly',
    pros: ['80% profit split', 'Weekly payouts', 'EAs and News Trading are permitted', 'Scaling plan available for Trader Career Path'],
    cons: ['Copy trading is not permitted', '30% consistency rule', 'Withdrawal cap on LiveSim Gauntlet Mini accounts'],
    keyFeatures: ['1-Step Evaluations', 'Two distinct career paths (Gauntlet & TCP)', '80% Profit Split', 'Weekly Payouts'],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80%' },
      { label: 'Evaluation', value: '1-Step' },
      { label: 'Platforms', value: 'NinjaTrader, Rithmic, etc.' },
      { label: 'Payouts', value: 'Weekly' }
    ],
    fundingModels: ['1-Step'],
    profitSplit: '80%',
    drawdownRules: 'Maximum Trailing Drawdown',
    profitTarget: 'Varies by account',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ["Atas Orderflow Trading", "Bookmap", "Finamark", "Inside Edge Trader", "Investor/RT", "Jigsaw Daytradr", "MotiveWave", "MultiCharts", "NinjaTrader", "OverCharts", "Photon", "QScalp", "QSI-Quick Screen Trading", "Quantower", "Rithmic R Trader & R Trader Pro", "Scalp Tool", "Sierra Chart", "Trade Navigator", "VolFix"],
    broker: 'Dorman, EdgeClear, Phillip Capital',
    paymentMethods: ['Credit/Debit Card', 'Cryptocurrency', 'PayPal'],
    payoutMethods: ['Riseworks'],
    rating: 4.6,
    minAccountSize: 25000,
    maxAccountSize: 200000,
    minChallengeCost: 150,
    maxChallengeCost: 550,
    activationFee: '$139',
    challengeType: '1-Step',
    accountTiers: earn2TradeAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Azerbaijan", code: "AZ" }, { name: "Central African Republic", code: "CF" }, 
      { name: "Cuba", code: "CU" }, { name: "Gibraltar", code: "GI" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Libya", code: "LY" }, 
      { name: "Mali", code: "ML" }, { name: "Myanmar", code: "MM" }, { name: "Nauru", code: "NR" }, { name: "Nigeria", code: "NG" }, { name: "North Korea", code: "KP" }, 
      { name: "Pakistan", code: "PK" }, { name: "Russia", code: "RU" }, { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" }, { name: "Sudan", code: "SD" }, 
      { name: "Syria", code: "SY" }, { name: "Turkmenistan", code: "TM" }, { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Yemen", code: "YE" }
    ]
  };

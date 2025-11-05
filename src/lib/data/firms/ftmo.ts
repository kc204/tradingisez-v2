
import type { PropFirm, AccountTier } from '../../types';

export const ftmoAccountTiers: AccountTier[] = [
  // Normal and Swing have the same price, just different rules.
  // We can represent this with a `name` property.
  { id: 'ftmo-normal-10k', name: '€10,000 Normal', size: 10000, evaluationFee: 155, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-normal-25k', name: '€25,000 Normal', size: 25000, evaluationFee: 250, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-normal-50k', name: '€50,000 Normal', size: 50000, evaluationFee: 345, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-normal-100k', name: '€100,000 Normal', size: 100000, evaluationFee: 540, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-normal-200k', name: '€200,000 Normal', size: 200000, evaluationFee: 1080, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-swing-10k', name: '€10,000 Swing', size: 10000, evaluationFee: 155, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-swing-25k', name: '€25,000 Swing', size: 25000, evaluationFee: 250, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-swing-50k', name: '€50,000 Swing', size: 50000, evaluationFee: 345, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-swing-100k', name: '€100,000 Swing', size: 100000, evaluationFee: 540, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
  { id: 'ftmo-swing-200k', name: '€200,000 Swing', size: 200000, evaluationFee: 1080, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
];

export const ftmo: PropFirm = {
    id: '12',
    slug: 'ftmo',
    name: 'FTMO',
    logoUrl: '/images/ftmo_logo.png',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: true,
    ceo: 'Otakar Suffner',
    dateCreated: 'January 2015',
    briefDescription: 'A pioneering CFD prop firm from the Czech Republic offering 2-step evaluations with no consistency rules and a scaling plan up to $2M.',
    fullReview: 'FTMO is one of the most recognized names in the prop trading industry, established in 2015. They offer a robust 2-step evaluation process (Challenge and Verification) for CFD traders. Key advantages include the absence of consistency rules, a wide range of tradable assets, and a clear scaling plan that can increase a trader\'s capital to $2M and their profit split to 90%. They provide traders with popular platforms like MT4, MT5, and cTrader. While news trading is restricted on standard funded accounts, they offer a "Swing" account type that allows holding trades over weekends and during news events, providing flexibility for different trading styles.',
    tradingRules: `<h3>Leverage</h3>
<ul>
  <li><strong>FX:</strong> 1:100</li>
  <li><strong>Metals:</strong> 1:30</li>
  <li><strong>Indices:</strong> 1:50</li>
  <li><strong>Energy:</strong> 1:30</li>
  <li><strong>Crypto:</strong> 1:3</li>
  <li><strong>Stocks:</strong> 1:3</li>
</ul>
<h3>Commissions</h3>
<ul>
  <li><strong>FX:</strong> $3 per lot</li>
  <li><strong>Metals:</strong> 0.0010% of Volume</li>
  <li><strong>Indices:</strong> $0</li>
  <li><strong>Energy:</strong> $0</li>
  <li><strong>Crypto:</strong> $0</li>
  <li><strong>Stocks:</strong> 0.0040% of Volume</li>
</ul>
<h3>Firm Rules</h3>
<h4>General Policies</h4>
<ul>
  <li><strong>Consistency Rules:</strong> FTMO does not have consistency rules.</li>
  <li><strong>Minimum Trading Days:</strong> You must trade for a minimum of 4 days in both the Challenge and Verification stages.</li>
  <li><strong>Capital Allocation Limit:</strong> A maximum of $400,000 in capital can be allocated per trader or per strategy.</li>
  <li><strong>News Trading:</strong> Allowed for Swing accounts. For standard accounts, it's allowed during evaluation but restricted within 2 minutes of news on funded accounts.</li>
  <li><strong>Weekend Trades:</strong> Prohibited for standard funded accounts but allowed for Swing accounts.</li>
  <li><strong>Inactivity Rule:</strong> At least one trade must be placed every 30 days.</li>
  <li><strong>Forbidden Practices:</strong> Prohibits inconsistent position sizing and third-party account management. Copy trading from your own external accounts is permitted.</li>
  <li><strong>Multiple Profiles:</strong> Not allowed.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy & Scaling Plan</h3>
<p>The default profit split is 80% for the trader. A scaling plan is available to increase the profit split to 90% and grow the account balance.</p>
<h4>Scaling Plan Requirements:</h4>
<ul>
    <li>Complete a minimum of 4 monthly cycles.</li>
    <li>Achieve at least 10% total net profit in those 4 months.</li>
    <li>Process at least 2 payouts.</li>
    <li>Maintain a positive account balance.</li>
</ul>
<h4>Scaling Plan Benefits:</h4>
<ul>
    <li>Profit split increases to 90%.</li>
    <li>Account balance increases by 25% every 4 months if criteria are met.</li>
    <li>The scaling cap is $2,000,000.</li>
</ul>`,
    payoutFrequency: "Every 14 days",
    pros: [
      'No consistency rules',
      'Clear and generous scaling plan up to $2M and 90% split',
      'Established and reputable firm (since 2015)',
      'Offers Swing accounts for news and weekend trading',
      'Wide range of CFD instruments including stocks and crypto'
    ],
    cons: [
      'News and weekend trading restrictions on standard funded accounts',
      'Higher evaluation fees compared to some competitors',
      'Strict rules against inconsistent position sizing'
    ],
    keyFeatures: [
      '2-Step Evaluation (Normal & Swing)',
      '80% default profit split, scalable to 90%',
      'No consistency rules',
      'Scaling plan up to $2,000,000',
      'CFDs on FX, Stocks, Crypto, and more'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: '80% (Scales to 90%)' },
      { label: 'Evaluation', value: '2-Step (Normal/Swing)' },
      { label: 'Platforms', value: 'MT4, MT5, cTrader' },
      { label: 'Assets', value: 'CFDs (FX, Stocks, Crypto, etc.)' }
    ],
    fundingModels: ['2-Step'],
    profitSplit: '80% (Scales to 90%)',
    drawdownRules: '10% Max Loss, 5% Daily Loss',
    profitTarget: '10% (Step 1), 5% (Step 2)',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Crypto', 'Stocks'],
    instrumentTypes: ['CFD'],
    platforms: ['cTrader', 'DXTrade', 'MT4', 'MT5'],
    broker: 'Institutional Liquidity Provider',
    paymentMethods: ['Apple Pay', 'Bank Transfer', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'Nuvei', 'PayPal', 'Skrill'],
    payoutMethods: ['Bank Transfer', 'Crypto', 'Mastercard', 'Skrill', 'Visa Direct'],
    rating: 4.8,
    minAccountSize: 10000,
    maxAccountSize: 200000,
    minChallengeCost: 155,
    maxChallengeCost: 1080,
    challengeType: '2-Step',
    accountTiers: ftmoAccountTiers,
    restrictedCountries: [
      { name: "Afghanistan", code: "AF" }, { name: "Anguilla", code: "AI" }, { name: "Antarctica", code: "AQ" }, { name: "Antigua and Barbuda", code: "AG" },
      { name: "Belarus", code: "BY" }, { name: "Belize", code: "BZ" }, { name: "Bhutan", code: "BT" }, { name: "Bouvet Island", code: "BV" },
      { name: "Burundi", code: "BI" }, { name: "Cape Verde", code: "CV" }, { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
      { name: "Comoros", code: "KM" }, { name: "Cook Islands", code: "CK" }, { name: "Crimea", code: "UA-43" }, { name: "Cuba", code: "CU" },
      { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Equatorial Guinea", code: "GQ" }, { name: "Eritrea", code: "ER" },
      { name: "Eswatini", code: "SZ" }, { name: "Fiji", code: "FJ" }, { name: "Guinea", code: "GN" }, { name: "Guinea-Bissau", code: "GW" },
      { name: "India", code: "IN" }, { name: "Indonesia", code: "ID" }, { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
      { name: "Kazakhstan", code: "KZ" }, { name: "Kiribati", code: "KI" }, { name: "Kosovo", code: "XK" }, { name: "Kyrgyzstan", code: "KG" },
      { name: "Lesotho", code: "LS" }, { name: "Liberia", code: "LR" }, { name: "Malawi", code: "MW" }, { name: "Mali", code: "ML" },
      { name: "Marshall Islands", code: "MH" }, { name: "Mauritania", code: "MR" }, { name: "Micronesia", code: "FM" }, { name: "Nauru", code: "NR" },
      { name: "Niger", code: "NE" }, { name: "Niue", code: "NU" }, { name: "Papua New Guinea", code: "PG" }, { name: "Donetsk", code: "UA-14" },
      { name: "Luhansk", code: "UA-09" }, { name: "Zaporizhzhia", code: "UA-23" }, { name: "Republic of the Congo", code: "CG" }, { name: "Russia", code: "RU" },
      { name: "Saint Barthélemy", code: "BL" }, { name: "Saint Kitts and Nevis", code: "KN" }, { name: "Saint Lucia", code: "LC" }, { name: "Saint Vincent and the Grenadines", code: "VC" },
      { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" }, { name: "Sao Tome and Principe", code: "ST" }, { name: "Seychelles", code: "SC" },
      { name: "Sierra Leone", code: "SL" }, { name: "Solomon Islands", code: "SB" }, { name: "Somalia", code: "SO" }, { name: "South Sudan", code: "SS" },
      { name: "Sudan", code: "SD" }, { name: "Syria", code: "SY" }, { name: "Tajikistan", code: "TJ" },
      { name: "Timor-Leste", code: "TL" }, { name: "Tokelau", code: "TK" }, { name: "Tonga", code: "TO" }, { name: "Turkmenistan", code: "TM" },
      { name: "Tuvalu", code: "TV" }, { name: "United States of America", code: "US" }, { name: "Uzbekistan", code: "UZ" }, { name: "Vanuatu", code: "VU" },
      { name: "Vatican City", code: "VA" }, { name: "Venezuela", code: "VE" }, { name: "Western Sahara", code: "EH" }
    ]
  };

    
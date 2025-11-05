import type { PropFirm, AccountTier } from '../../types';

export const oandaAccountTiers: AccountTier[] = [
    // Classic Challenges
    { id: 'oanda-classic-5k', name: '$5,000 Classic', size: 5000, evaluationFee: 35.00, profitTargetPercentage: 5, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-10k', name: '$10,000 Classic', size: 10000, evaluationFee: 60.00, profitTargetPercentage: 5, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-25k', name: '$25,000 Classic', size: 25000, evaluationFee: 199.00, profitTargetPercentage: 5, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-50k', name: '$50,000 Classic', size: 50000, evaluationFee: 299.00, profitTargetPercentage: 5, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-100k', name: '$100,000 Classic', size: 100000, evaluationFee: 599.00, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-188k', name: '188.89K Account', size: 188890, evaluationFee: 888.00, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-250k', name: '250K Account', size: 250000, evaluationFee: 1200.00, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-classic-500k', name: '500K Account', size: 500000, evaluationFee: 2400.00, profitTargetPercentage: 8, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    // Boost Challenges
    { id: 'oanda-boost-10k', name: '$10,000 Boost', size: 10000, evaluationFee: 99.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-boost-50k', name: '$50,000 Boost', size: 50000, evaluationFee: 399.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
    { id: 'oanda-boost-100k', name: '$100,000 Boost', size: 100000, evaluationFee: 699.00, profitTargetPercentage: 10, dailyLossLimitPercentage: 5, drawdownPercentage: 10, challengeType: '2-Step' },
];

export const oanda: PropFirm = {
    id: '15',
    slug: 'oanda-prop-trader',
    name: 'OANDA Prop Trader',
    logoUrl: '/images/oanda_logo.png',
    websiteUrl: '#',
    affiliateLink: '#',
    isFeatured: false,
    ceo: 'Gavin Bambury',
    dateCreated: 'January 2024',
    briefDescription: 'CFD prop firm from Malta offering 2-step evaluations with a Boost program for up to 90% profit split and static drawdown.',
    fullReview: 'OANDA Prop Trader offers two main 2-step challenge programs: The Boost Program features a static 10% maximum drawdown and a profit share that increases to 90% after the first payout. The Classic Program provides a standard 80% profit split and various account sizes up to 500K. The firm operates on the MT5 platform with OANDA as its broker partner, and has specific rules around news trading and a daily max profit consistency rule during the evaluation phases.',
    tradingRules: `<h3>Leverage (2-Steps Challenge)</h3>
<ul>
  <li><strong>FX & Metals:</strong> 1:100</li>
  <li><strong>Indices, Energy, & Other Commodities:</strong> 1:50</li>
</ul>
<h3>Commissions (Round Trip)</h3>
<ul>
  <li><strong>FX & Metals:</strong> $7 per lot</li>
  <li><strong>Indices, Energy, & Other Commodities:</strong> $0</li>
</ul>
<h3>Firm Rules</h3>
<h4>Consistency (Daily Max Profit)</h4>
<p>This rule applies only during the Phase 1 & 2 evaluation stages and does not apply to the final funded account.</p>
<ul>
    <li><strong>Phase 1 Limit:</strong> 5% Daily Max Profit.</li>
    <li><strong>Phase 2 Limit:</strong> 2% Daily Max Profit.</li>
</ul>
<p><strong>Consequence:</strong> If the limit is hit, all positions are closed, and trading is disabled for the rest of that day.</p>
<h4>General Policies</h4>
<ul>
  <li><strong>Expert Advisors (EAs):</strong> Allowed. However, EAs engaging in price/latency arbitrage are strictly forbidden.</li>
  <li><strong>News Trading:</strong> Restricted. You may not open or close trades within a 4-minute window (2 minutes before and 2 minutes after) of major news releases.</li>
  <li><strong>Copy Trading:</strong> Not allowed between multiple OANDA Prop Trader accounts. It is permitted to copy trades to an external, non-OANDA account.</li>
  <li><strong>Inactivity:</strong> An account is breached and closed after 30 consecutive days with no trades placed.</li>
  <li><strong>Minimum Trade Size:</strong> FX & Metals: 0.01 lot; CFD Indices: 1 lot.</li>
</ul>`,
    payoutRules: `<h3>Payout Policy</h3>
<ul>
  <li><strong>Payout Frequency:</strong> Every 14 days.</li>
</ul>
<h4>Profit Split</h4>
<ul>
  <li><strong>Classic Program:</strong> 80%</li>
  <li><strong>Boost Program:</strong> 80% (first payout), 90% (subsequent payouts)</li>
</ul>
<h4>Minimum Payout Amount</h4>
<ul>
  <li><strong>Classic Accounts:</strong> $200</li>
  <li><strong>Boost Accounts:</strong> 2% of the initial balance.</li>
</ul>`,
    payoutFrequency: "Every 14 days",
    pros: [
      'Boost program offers up to 90% profit split',
      'Static drawdown on Boost program accounts',
      'Allows the use of Expert Advisors (EAs)',
      'Low minimum trade size of 0.01 lots on FX & Metals'
    ],
    cons: [
      'Strict restrictions on news trading',
      'Consistency rule (Daily Max Profit) during evaluation phases',
      'Copy trading is not allowed between OANDA accounts'
    ],
    keyFeatures: [
      '2-Step Evaluation (Classic & Boost)',
      'Up to 90% profit split',
      'Static drawdown option',
      'MT5 Platform with OANDA Broker'
    ],
    keyInfoSnippets: [
      { label: 'Profit Split', value: 'Up to 90%' },
      { label: 'Platform', value: 'MT5' },
      { label: 'Evaluation', value: '2-Step' },
      { label: 'Assets', value: 'CFDs' }
    ],
    fundingModels: ['2-Step'],
    profitSplit: '80% or up to 90% (Boost)',
    drawdownRules: '10% Max Loss, 5% Daily Loss',
    profitTarget: '8% or 10% (Phase 1), 5% (Phase 2)',
    assets: ['FX', 'Metals', 'Indices', 'Energy', 'Other Commodities'],
    instrumentTypes: ['CFD'],
    platforms: ['MetaTrader 5 (MT5)'],
    broker: 'OANDA Global Markets',
    paymentMethods: ['AlipayHK', 'Apple Pay', 'Astropay', 'Credit/Debit Card', 'Crypto', 'Google Pay', 'OXXO', 'Pix', 'PSE', 'SPEI', 'Touch \'n Go eWallet', 'TrueMoney', 'UnionPay', 'Webpay', 'Wire Transfer'],
    payoutMethods: ['Bank Wire Transfer', 'Neteller', 'Skrill'],
    rating: 4.4,
    minAccountSize: 5000,
    maxAccountSize: 500000,
    minChallengeCost: 35,
    maxChallengeCost: 2400,
    challengeType: '2-Step',
    accountTiers: oandaAccountTiers,
    restrictedCountries: [
        { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Andorra", code: "AD" }, { name: "Angola", code: "AO" },
        { name: "Austria", code: "AT" }, { name: "Belarus", code: "BY" }, { name: "Belgium", code: "BE" }, { name: "Bulgaria", code: "BG" }, { name: "Burma (Myanmar)", code: "MM" },
        { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" }, { name: "Canada", code: "CA" }, { name: "China", code: "CN" }, { name: "Congo (all forms)", code: "CG" },
        { name: "Cuba", code: "CU" }, { name: "Czechia", code: "CZ" }, { name: "Denmark", code: "DK" }, { name: "Estonia", code: "EE" }, { name: "Finland", code: "FI" },
        { name: "France", code: "FR" }, { name: "Germany", code: "DE" }, { name: "Greece", code: "GR" }, { name: "Hungary", code: "HU" }, { name: "India", code: "IN" },
        { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Ireland", code: "IE" }, { name: "Italy", code: "IT" }, { name: "Japan", code: "JP" },
        { name: "Laos", code: "LA" }, { name: "Latvia", code: "LV" }, { name: "Lebanon", code: "LB" }, { name: "Liechtenstein", code: "LI" }, { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" }, { name: "Mali", code: "ML" }, { name: "Monaco", code: "MC" }, { name: "Mozambique", code: "MZ" }, { name: "Namibia", code: "NA" },
        { name: "Nepal", code: "NP" }, { name: "Netherlands", code: "NL" }, { name: "Nigeria", code: "NG" }, { name: "North Korea", code: "KP" }, { name: "Norway", code: "NO" },
        { name: "Occupied Palestinian Territory", code: "PS" }, { name: "Pakistan", code: "PK" }, { name: "Poland", code: "PL" }, { name: "Portugal", code: "PT" }, { name: "Romania", code: "RO" },
        { name: "Russia", code: "RU" }, { name: "San Marino", code: "SM" }, { name: "Slovakia", code: "SK" }, { name: "Slovenia", code: "SI" }, { name: "South Korea", code: "KR" },
        { name: "South Sudan", code: "SS" }, { name: "Spain", code: "ES" }, { name: "Sudan", code: "SD" }, { name: "Sweden", code: "SE" }, { name: "Switzerland", code: "CH" },
        { name: "Syria", code: "SY" }, { name: "Trinidad and Tobago", code: "TT" }, { name: "Turkey", code: "TR" }, { name: "Uganda", code: "UG" },
        { name: "United Kingdom", code: "GB" }, { name: "United States of America", code: "US" }, { name: "Vatican City", code: "VA" }, { name: "Venezuela", code: "VE" },
        { name: "Yemen", code: "YE" }, { name: "Zimbabwe", code: "ZW" }
    ],
  };

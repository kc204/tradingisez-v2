
import type { PropFirm, AccountTier } from '../../types';

export const tptAccountTiers: AccountTier[] = [
    { id: 'tpt-eval-25k', name: '$25K Evaluation', size: 25000, evaluationFee: 150, profitTargetPercentage: 6, dailyLossLimitPercentage: 2, drawdownPercentage: 6, activationFee: 130, challengeType: '1-Step' },
    { id: 'tpt-eval-50k', name: '$50K Evaluation', size: 50000, evaluationFee: 170, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 4, activationFee: 130, challengeType: '1-Step' },
    { id: 'tpt-eval-75k', name: '$75K Evaluation', size: 75000, evaluationFee: 245, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.13, drawdownPercentage: 3.33, activationFee: 130, challengeType: '1-Step' },
    { id: 'tpt-eval-100k', name: '$100K Evaluation', size: 100000, evaluationFee: 330, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, activationFee: 130, challengeType: '1-Step' },
    { id: 'tpt-eval-150k', name: '$150K Evaluation', size: 150000, evaluationFee: 360, profitTargetPercentage: 6, dailyLossLimitPercentage: 2.2, drawdownPercentage: 3, activationFee: 130, challengeType: '1-Step' },
];

export const takeProfitTrader: PropFirm = {
    id: '2',
    slug: 'take-profit-trader',
    name: 'Take Profit Trader',
    logoUrl: '/images/takeprofittrader_logo.png',
    websiteUrl: 'https://www.takeprofittrader.com/',
    affiliateLink: 'https://takeprofittrader.com/if/tradingisez',
    ceo: 'James Sixsmith',
    dateCreated: 'March 2021',
    briefDescription: 'Futures prop firm with a 1-step evaluation, daily payouts, and a path to a live PRO+ account with a 90% profit split.',
    fullReview: `Take Profit Trader (TPT) offers a direct route for futures traders with its 1-step evaluation. Upon passing the Test account, which utilizes a flexible End-of-Day (EOD) trailing drawdown, traders pay a one-time $130 activation fee to get a PRO account. PRO accounts are notable for offering daily payouts from the very first day and an 80% profit split. However, they switch to a more restrictive intraday trailing drawdown based on peak balance. For traders seeking a higher 90% profit share and a return to the EOD drawdown, an upgrade to a PRO+ account is available, which operates in a live market environment. A critical rule for funded traders is the restriction on trading during major news events in both PRO and PRO+ accounts.`,
    tradingRules: `<h3>Leverage (Maximum Contracts)</h3>
<ul>
    <li><strong>$25,000 Account:</strong> 3 Contracts / 30 Micros</li>
    <li><strong>$50,000 Account:</strong> 6 Contracts / 60 Micros</li>
    <li><strong>$75,000 Account:</strong> 9 Contracts / 90 Micros</li>
    <li><strong>$100,000 Account:</strong> 12 Contracts / 120 Micros</li>
    <li><strong>$150,000 Account:</strong> 15 Contracts / 150 Micros</li>
</ul>
<h3>Commissions</h3>
<ul>
    <li><strong>Standard Contracts:</strong> $5.00 per round trip</li>
    <li><strong>Micro Contracts:</strong> $0.50 per round trip</li>
</ul>
<h3>Trading Rules & Policies</h3>
<h4>Consistency Rules</h4>
<ul>
    <li>A minimum of 5 trading days is required.</li>
    <li><strong>Test Phase:</strong> A 50% consistency rule applies, meaning no single trading day can account for more than 50% of your total profits.</li>
    <li><strong>Pro and Pro+ Accounts:</strong> There is no consistency rule.</li>
</ul>
<h4>Firm-Wide Rules</h4>
<ul>
    <li><strong>Max Loss Limit (Drawdown):</strong>
        <ul>
            <li><strong>Test Phase:</strong> Trailing drawdown is based on your End-of-Day balance.</li>
            <li><strong>Pro and Pro+ Accounts:</strong> Trailing drawdown is based on your peak balance (includes realized and unrealized gains).</li>
        </ul>
    </li>
    <li><strong>News Trading:</strong>
        <ul>
            <li><strong>Test Phase:</strong> Allowed without restrictions.</li>
            <li><strong>Pro and Pro+ Accounts:</strong> Trading is restricted for 1 minute before and 1 minute after specific high-impact news events, including:
                <ul>
                    <li>FOMC meeting minutes/announcements</li>
                    <li>Non-Farm Payroll (NFP)</li>
                    <li>Consumer Price Index (CPI)</li>
                </ul>
            </li>
        </ul>
    </li>
    <li><strong>Instrument-Specific News Restrictions:</strong>
        <ul>
            <li><strong>Crude Oil Inventories:</strong> Prohibits trading Crude Oil.</li>
            <li><strong>Bond Auctions:</strong> Prohibits trading 10-Year Note and 30-Year Bond.</li>
        </ul>
    </li>
    <li><strong>Expert Advisors (EAs):</strong> Not allowed.</li>
    <li><strong>Copy Trading:</strong> Allowed. Can be used for up to 5 accounts on a PRO+ account.</li>
</ul>`,
    payoutRules: `<h3>Account Types & Payout Policy</h3>
<h4>PRO Account</h4>
<ul>
    <li><strong>Profit Split:</strong> 80%</li>
    <li><strong>Payouts:</strong> On-demand, available from day one.</li>
    <li><strong>Buffer Zone:</strong> Traders can withdraw profits at 80% once they reach the maximum drawdown level (the "buffer zone"). Withdrawing profits from within the buffer zone is possible but will result in the termination of the account.</li>
    <li><strong>Upgrading to PRO+:</strong> A trader can be upgraded to PRO+ by either making $10,000 in profit in a single day or by demonstrating consistent profitability.</li>
</ul>
<h4>PRO+ Account (Live Account)</h4>
<ul>
    <li><strong>Status:</strong> Trader is directly routed to the exchange (not SIM or copy traded).</li>
    <li><strong>Profit Split:</strong> 90%</li>
    <li><strong>Buffer Zone:</strong> No buffer zone requirement.</li>
    <li><strong>Restrictions:</strong> No payout restrictions, no consistency rule, no daily loss limit.</li>
    <li><strong>Drawdown:</strong> End-of-day drawdown.</li>
</ul>
<h3>Important Tech & Payout Updates (As of May 15, 2025)</h3>
<ul>
    <li><strong>Bank Identity Verification:</strong> The legal name provided during KYC (Know Your Customer) must now match the legal owner of the bank account used for payouts.</li>
    <li><strong>LLC Payouts:</strong> Payouts to an LLC bank account must now be processed through Wise or PayPal.</li>
    <li><strong>Plaid Reconnection:</strong> Existing Plaid connections were disconnected during a tech update. Users must reconnect their personal banking information via Plaid before their next payout request.</li>
</ul>`,
    payoutFrequency: "Daily from Day 1",
    pros: [
        'Daily Payouts available from day one on PRO accounts',
        'Simple 1-Step Evaluation process',
        'Choice of PRO (sim) or PRO+ (live) funded accounts',
        '90% profit split available with PRO+ account',
        'News trading is allowed during the evaluation phase'
    ],
    cons: [
        '50% consistency rule during evaluation',
        'News trading is restricted on all funded accounts',
        'PRO account has a more restrictive peak balance trailing drawdown',
        'EAs are not allowed'
    ],
    keyFeatures: [
        '1-Step Evaluation with EOD Drawdown',
        'Daily Payouts',
        'PRO Account with 80% split',
        'PRO+ Account (Live) with 90% split',
        'Supports Tradovate, Rithmic, and CQG platforms'
    ],
    keyInfoSnippets: [
        { label: 'Profit Split', value: '80% (PRO) / 90% (PRO+)' },
        { label: 'Payouts', value: 'Daily from Day 1' },
        { label: 'Evaluation Drawdown', value: 'End-of-Day Trailing' },
        { label: 'Activation Fee', value: '$130 (One-Time)' }
    ],
    promo: 'Code: EZ',
    offerBadgeLabel: '40% OFF + No Activation Fee',
    fundingModels: ['1-Step'],
    profitSplit: '80% (PRO) / 90% (PRO+)',
    drawdownRules: 'EOD Trailing (Evaluation) / Peak Balance Trailing (Funded)',
    profitTarget: '6%',
    assets: ['Futures'],
    instrumentTypes: ['Futures'],
    platforms: ['Atas Orderflow Trading', 'Bookmap', 'Finamark', 'Investor/RT', 'Jigsaw Daytradr', 'MotiveWave', 'MultiCharts', 'NinjaTrader', 'Quantower', 'R Trader', 'Trade Navigator', 'TradingView', 'Tradovate', 'VolFix'],
    broker: 'CQG, Rithmic, Tradovate',
    paymentMethods: ['Credit/Debit Card', 'PayPal', 'Wise'],
    payoutMethods: ['Bank Wire Transfer', 'PayPal', 'Plaid', 'Wise'],
    rating: 4.3,
    isFeatured: true,
    minAccountSize: 25000,
    maxAccountSize: 150000,
    minChallengeCost: 150,
    maxChallengeCost: 360,
    activationFee: '$130 (One-Time)',
    challengeType: '1-Step',
    accountTiers: tptAccountTiers,
    restrictedCountries: [
        { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" }, { name: "Algeria", code: "DZ" }, { name: "Angola", code: "AO" },
        { name: "Barbados", code: "BB" }, { name: "Belarus", code: "BY" }, { name: "Belize", code: "BZ" }, { name: "Benin", code: "BJ" },
        { name: "Bosnia and Herzegovina", code: "BA" }, { name: "Bulgaria", code: "BG" }, { name: "Burkina Faso", code: "BF" }, { name: "Burundi", code: "BI" },
        { name: "Cameroon", code: "CM" }, { name: "Cape Verde", code: "CV" }, { name: "Cocos Islands", code: "CC" }, { name: "Comoros", code: "KM" },
        { name: "Cook Islands", code: "CK" }, { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
        { name: "Democratic Republic of the Congo", code: "CD" }, { name: "Djibouti", code: "DJ" }, { name: "Dominica", code: "DM" }, { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" }, { name: "Ethiopia", code: "ET" }, { name: "Falkland Islands", code: "FK" }, { name: "Fiji", code: "FJ" },
        { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" }, { name: "Gibraltar", code: "GI" }, { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" }, { name: "Guyana", code: "GY" }, { name: "Haiti", code: "HT" }, { name: "Heard Islands", code: "HM" },
        { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" }, { name: "Ivory Coast", code: "CI" }, { name: "Jamaica", code: "JM" },
        { name: "Jordan", code: "JO" }, { name: "Kenya", code: "KE" }, { name: "Kiribati", code: "KI" }, { name: "Kosovo", code: "XK" },
        { name: "Laos", code: "LA" }, { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" }, { name: "Liberia", code: "LR" },
        { name: "Libya", code: "LY" }, { name: "Malawi", code: "MW" }, { name: "Mali", code: "ML" }, { name: "Malta", code: "MT" },
        { name: "Mauritania", code: "MR" }, { name: "Mauritius", code: "MU" }, { name: "Mayotte", code: "YT" }, { name: "Micronesia", code: "FM" },
        { name: "Monaco", code: "MC" }, { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" }, { name: "Montserrat", code: "MS" },
        { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" }, { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" },
        { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" }, { name: "Northern Mariana Islands", code: "MP" }, { name: "North Korea", code: "KP" },
        { name: "North Macedonia", code: "MK" }, { name: "Pakistan", code: "PK" }, { name: "Papua New Guinea", code: "PG" }, { name: "Philippines", code: "PH" },
        { name: "Qatar", code: "QA" }, { name: "Romania", code: "RO" }, { name: "Russia", code: "RU" }, { name: "Rwanda", code: "RW" },
        { name: "Saint Vincent and the Grenadines", code: "VC" }, { name: "Sao Tome and Principe", code: "ST" }, { name: "Serbia", code: "RS" }, { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" }, { name: "Slovenia", code: "SI" }, { name: "Somalia", code: "SO" }, { name: "South Africa", code: "ZA" },
        { name: "South Georgia Islands", code: "GS" }, { name: "South Korea", code: "KR" }, { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
        { name: "Svalbard", code: "SJ" }, { name: "Syria", code: "SY" }, { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania", code: "TZ" }, { name: "Timor-Leste", code: "TL" }, { name: "Togo", code: "TG" }, { name: "Trinidad and Tobago", code: "TT" },
        { name: "Turkey", code: "TR" }, { name: "Turkmenistan", code: "TM" }, { name: "Tuvalu", code: "TV" }, { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" }, { name: "Venezuela", code: "VE" }, { name: "Vietnam", code: "VN" }, { name: 'Yemen', code: 'YE' },
        { name: 'Zambia', code: 'ZM' }, { name: 'Zimbabwe', code: 'ZW' }
    ]
};

# Product Requirements Document (PRD) - TradingisEZ (v2)

## 1. Executive Summary
**Product Name:** TradingisEZ (Prop Firm Finder)
**Version:** 2.0
**Status:** In Development

**Vision:** To become the definitive, most trustworthy, and user-friendly resource for traders to discover, compare, and select proprietary trading firms. TradingisEZ aims to simplify the complex landscape of prop trading by providing accurate, standardized data, transparent reviews, and powerful comparison tools wrapped in a premium, modern interface.

**Core Value Proposition:**
*   **Clarity:** Standardized data points allow for true apples-to-apples comparisons.
*   **Trust:** Unbiased reviews and "verified" data updates.
*   **Speed:** Instant filtering and sorting to find the perfect firm in seconds.
*   **Aesthetics:** A high-end, "fintech" user experience that respects the user's time and intelligence.

---

## 2. Target Audience
*   **Aspiring Traders:** Beginners looking for their first funded account who need guidance and education.
*   **Experienced Traders:** Professionals looking for specific conditions (e.g., "no daily drawdown", "news trading allowed") or better pricing.
*   **Scalpers & Day Traders:** Users specifically looking for low-latency execution and specific platform support (NinjaTrader, cTrader, etc.).

---

## 3. Technical Architecture
**Stack:**
*   **Framework:** Next.js 15 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Library:** Radix UI (Primitives), Lucide React (Icons)
*   **Animation:** Framer Motion
*   **State Management:** React Hooks / URL Search Params (for filtering)
*   **Deployment:** Vercel (Recommended)

**Key Technical Decisions:**
*   **Static/Hybrid Rendering:** Pages are optimized for SEO and speed. Firm data is statically generated where possible but filters are client-side for instant feedback.
*   **Component-Driven:** A modular design system using reusable components (Cards, Badges, Tables) ensures consistency.
*   **Responsive First:** Fully optimized for mobile devices, acknowledging that many traders research on phones.

---

## 4. Key Features & Functional Requirements

### 4.1. Homepage
*   **Hero Section:** High-impact visual with a clear value prop and quick-access "Top Picks".
*   **Global Offer Bar:** Sticky top bar highlighting the single best active deal/promo code.
*   **Featured Firms:** A curated list of "Verified" or "Recommended" firms with key stats (Price, Size, Trust Score).
*   **Trust Indicators:** "Last Updated" badges and clear disclaimers about data accuracy.

### 4.2. Comparison Engine (`/compare-prop-firms`)
*   **Dynamic Table:** A sortable, filterable table displaying all account tiers.
*   **Filters:**
    *   **Capital:** Slider or preset buttons ($10k, $50k, $100k+).
    *   **Type:** Futures vs. Forex/CFD.
    *   **Challenge:** 1-Step, 2-Step, Instant Funding.
    *   **Platform:** MT4, MT5, NinjaTrader, TradeLocker.
*   **Smart Sorting:** Sort by Price (Low-High), Trust Score, or "Best Value".
*   **"Apply Discount" Toggle:** Instantly recalculates displayed prices to show the *actual* cost after promo codes.

### 4.3. Firm Detail Pages (`/firms/[slug]`)
*   **Overview:** Comprehensive breakdown of the firm (CEO, Location, Founding Date).
*   **Account Tiers:** Detailed cards for each account size showing specific targets and rules.
*   **Pros & Cons:** Bulleted list of strengths and weaknesses.
*   **Trading Rules:** Clear explanation of complex rules (Consistency, Drawdown type, News Trading).
*   **Affiliate Integration:** Prominent "Visit Site" buttons with affiliate tracking links.

### 4.4. Resources & Education
*   **Free Resources:** Downloadable guides, cheat sheets, or tools (e.g., "Prop Firm Interview Questions").
*   **Blog/Articles:** SEO-optimized content to drive organic traffic.

### 4.5. Legal & Compliance
*   **Terms of Service & Privacy Policy:** Standard legal protections.
*   **Affiliate Disclosure:** Transparent statement about monetization.
*   **Data Accuracy Disclaimer:** Explicit warning that firm data changes and users must verify.

---

## 5. Data Model
The application relies on a structured data approach to ensure consistency.

### 5.1. `PropFirm` Entity
*   `id`: Unique Identifier
*   `slug`: URL-friendly name
*   `name`: Display Name
*   `logoUrl`: Path to logo image
*   `rating`: TrustPilot or Internal Score (0-5)
*   `offerBadgeLabel`: Current promo text (e.g., "90% OFF")
*   `accountTiers`: Array of `AccountTier` objects
*   `features`: Array of strings (Pros/Cons)
*   `meta`: CEO, Location, Founded Date

### 5.2. `AccountTier` Entity
*   `id`: Unique Tier ID
*   `size`: Capital amount (e.g., 50000)
*   `price`: Base price
*   `challengeType`: "1-Step", "2-Step", "Instant"
*   `profitTarget`: Percentage or fixed amount
*   `drawdown`: Max loss rules
*   `platform`: Supported platforms

---

## 6. Design System Guidelines
*   **Theme:** "Premium Dark" (Deep grays/blacks with vibrant accent colors).
*   **Typography:** `Plus Jakarta Sans` or `Satoshi` for a modern, geometric look.
*   **Visuals:**
    *   **Glassmorphism:** Used for cards and overlays to create depth.
    *   **Gradients:** Subtle background gradients to avoid "flat" black.
    *   **Borders:** Thin, high-contrast borders to define sections.
*   **Interactions:** Hover effects on cards (lift + glow), smooth transitions on filters.

---

## 7. Roadmap & Future Enhancements
*   **Phase 1 (Current):** Core comparison engine, firm pages, basic filtering.
*   **Phase 2 (Optimization):** "Bento Grid" layouts, advanced mobile filters, "Verified" badges.
*   **Phase 3 (Community):** User reviews, "Deal of the Day" countdowns, newsletter integration.
*   **Phase 4 (AI):** "Prop Matcher" wizard (Quiz -> Recommended Firm).

---

## 8. Success Metrics
*   **Click-Through Rate (CTR):** Percentage of users clicking "Visit Site" affiliate links.
*   **Time on Site:** Engagement with comparison tools and reviews.
*   **Bounce Rate:** Effectiveness of the landing page and hero section.
*   **Search Rankings:** SEO performance for key terms like "Best Prop Firms 2025".

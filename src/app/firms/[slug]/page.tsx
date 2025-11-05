
import { mockPropFirms } from '@/lib/mockData';
import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import OfferBox from '@/components/propfirms/OfferBox';
import { ExternalLink, Info, Star, ThumbsUp, Lightbulb, ShieldCheck, FileText, Briefcase, CreditCard, Banknote, CandlestickChart, TowerControl, Ban, CircleDollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import TrueCostCalculator from '@/components/compare/TrueCostCalculator'; 
import type { Metadata } from 'next';

interface FirmDetailPageProps {
  params: { slug: string };
}

// Generate static paths for firms
export async function generateStaticParams() {
  return mockPropFirms.map(firm => ({
    slug: firm.slug,
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: FirmDetailPageProps): Promise<Metadata> {
  const firm = mockPropFirms.find(p => p.slug === params.slug);
  if (!firm) {
    return { title: 'Firm Not Found' };
  }
  
  const title = `${firm.name} Review, Rules, & Payouts`;
  const description = `In-depth review of ${firm.name}. Compare funding rules, profit split, costs, and drawdown limits. ${firm.briefDescription}`;
  const url = `/firms/${firm.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | TradingisEZ`,
      description,
      url,
      images: [
        {
          url: firm.logoUrl, // Use firm logo for OG image
          alt: `${firm.name} Logo`,
        },
      ],
    },
  };
}


const DetailItem = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div>
        <h4 className="text-sm font-semibold text-muted-foreground mb-2">{label}</h4>
        <div className="flex flex-wrap gap-2">
            {children}
        </div>
    </div>
);

const DetailBadge = ({ children, icon }: { children: React.ReactNode, icon?: React.ReactNode }) => (
    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted text-muted-foreground">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
    </div>
);

const CountryBadge = ({ name, code }: { name: string, code: string }) => (
  <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted text-muted-foreground whitespace-nowrap">
    <Image 
      src={`https://flagsapi.com/${code.toUpperCase()}/flat/64.png`}
      alt={`${name} flag`}
      width={20}
      height={15}
      className="mr-2"
    />
    {name}
  </div>
);

const TradingRulesContent = ({ rules }: { rules: string | undefined }) => {
    if (!rules) return null;
    return (
        <div 
            className="prose max-w-none break-words dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: rules }}
        />
    );
};


const FirmDetailPage = ({ params }: FirmDetailPageProps) => {
  const firm = mockPropFirms.find(p => p.slug === params.slug);

  if (!firm) {
    notFound();
  }

  return (
    <div className="space-y-12">
      <section className="relative py-8 md:py-12 bg-card rounded-xl shadow-xl overflow-hidden">
        <div className="container mx-auto px-4 text-center">
             <div className="flex justify-center mb-4">
               <div className="w-24 h-24 relative flex-shrink-0">
                <Image 
                  src={firm.logoUrl} 
                  alt={`${firm.name} logo`} 
                  layout="fill" 
                  objectFit="contain"
                  className="rounded-lg object-contain border-2 border-white/10"
                  data-ai-hint="company logo" 
                />
              </div>
            </div>
            
            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">{firm.name}</h1>
            <p className="text-md md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 px-4">{firm.briefDescription}</p>

            {firm.rating && (
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 md:w-6 md:h-6 ${i < Math.round(firm.rating || 0) ? 'text-yellow-400 fill-current' : 'text-muted-foreground/50'}`} />
                ))}
                <span className="ml-2 text-md md:text-lg font-semibold text-foreground">{firm.rating.toFixed(1)} / 5.0</span>
              </div>
            )}
            
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
              <Link href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                Visit {firm.name} <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              (Affiliate Link)
            </p>
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><Info className="mr-2 h-5 w-5 text-primary" /> Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
                {firm.broker && <DetailItem label="Broker"><DetailBadge icon={<Briefcase className="w-4 h-4" />}>{firm.broker}</DetailBadge></DetailItem>}
                {firm.platforms && firm.platforms.length > 0 && <DetailItem label="Platforms">{firm.platforms.map(p => <DetailBadge key={p}>{p}</DetailBadge>)}</DetailItem>}
                {firm.paymentMethods && firm.paymentMethods.length > 0 && <DetailItem label="Payment Methods">{firm.paymentMethods.map(p => <DetailBadge key={p} icon={<CreditCard className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
                {firm.payoutMethods && firm.payoutMethods.length > 0 && <DetailItem label="Payout Methods">{firm.payoutMethods.map(p => <DetailBadge key={p} icon={<Banknote className="w-4 h-4" />}>{p}</DetailBadge>)}</DetailItem>}
            </CardContent>
          </Card>
          
           <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center"><CandlestickChart className="mr-2 h-5 w-5 text-primary" /> Instruments and Assets</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 text-sm">
                {firm.instrumentTypes && firm.instrumentTypes.length > 0 && <DetailItem label="Type of Instruments">{firm.instrumentTypes.map(i => <DetailBadge key={i}>{i}</DetailBadge>)}</DetailItem>}
                {firm.assets && firm.assets.length > 0 && <DetailItem label="Assets">{firm.assets.map(a => <DetailBadge key={a}>{a}</DetailBadge>)}</DetailItem>}
            </CardContent>
          </Card>

          {firm.payoutRules && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><CircleDollarSign className="mr-2 h-5 w-5 text-primary" /> Payouts & Profit Splits</CardTitle>
                <CardDescription>Key details about how you get paid with {firm.name}.</CardDescription>
              </CardHeader>
              <CardContent>
                 <TradingRulesContent rules={firm.payoutRules} />
              </CardContent>
            </Card>
          )}

          {firm.tradingRules && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><ShieldCheck className="mr-2 h-5 w-5 text-primary" /> Trading Rules</CardTitle>
                <CardDescription>Key rules and guidelines for trading with {firm.name}.</CardDescription>
              </CardHeader>
              <CardContent>
                 <TradingRulesContent rules={firm.tradingRules} />
              </CardContent>
            </Card>
          )}

          {firm.restrictedCountries && firm.restrictedCountries.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center"><Ban className="mr-2 h-5 w-5 text-primary" /> Restricted Countries (A-Z)</CardTitle>
                <CardDescription>Services are not available to residents of the following locations.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {firm.restrictedCountries.map(country => (
                  <CountryBadge key={country.code} name={country.name} code={country.code} />
                ))}
              </CardContent>
            </Card>
          )}

        </div>

        <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-24">
          <OfferBox firm={firm} />
          <TrueCostCalculator singleFirm={firm} /> 
        </aside>
      </div>
    </div>
  );
};

export default FirmDetailPage;


import { mockPropFirms } from '@/lib/mockData';
import type { PropFirm, AccountTier } from '@/lib/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';
import FirmComparisonHeader from '@/components/compare/FirmComparisonHeader';
import ComparisonMetricCard from '@/components/compare/ComparisonMetricCard';
import TierComparisonCard from '@/components/compare/TierComparisonCard';
import type { Metadata } from 'next';

interface FirmVsFirmPageProps {
  params: { slug: string };
}

// Function to find the most comparable account tiers between two firms
const findComparableTiers = (firm1: PropFirm, firm2: PropFirm): [AccountTier | null, AccountTier | null] => {
  const commonSizes = [100000, 50000, 25000, 150000];
  
  for (const size of commonSizes) {
    const tier1 = firm1.accountTiers.find(t => t.size === size && t.challengeType?.includes('Step'));
    const tier2 = firm2.accountTiers.find(t => t.size === size && t.challengeType?.includes('Step'));
    
    if (tier1 && tier2) {
      return [tier1, tier2];
    }
  }

  // Fallback if no exact match is found
  const tier1 = firm1.accountTiers.find(t => t.size >= 50000) || firm1.accountTiers[0] || null;
  const tier2 = firm2.accountTiers.find(t => t.size >= 50000) || firm2.accountTiers[0] || null;

  return [tier1, tier2];
};


export async function generateMetadata({ params }: FirmVsFirmPageProps): Promise<Metadata> {
  const slugs = params.slug.split('-vs-');
  if (slugs.length !== 2) {
    return { title: 'Invalid Comparison' };
  }
  const firm1 = mockPropFirms.find(p => p.slug === slugs[0]);
  const firm2 = mockPropFirms.find(p => p.slug === slugs[1]);

  if (!firm1 || !firm2) {
    return { title: 'Firms Not Found' };
  }
  
  const title = `${firm1.name} vs ${firm2.name} | Prop Firm Comparison`;
  const description = `Direct side-by-side comparison of ${firm1.name} and ${firm2.name}. Compare rules, costs, profit splits, and more to find the best prop firm for you.`;
  const url = `/compare-prop-firms/${params.slug}`;

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
    },
  };
}

const FirmVsFirmPage = ({ params }: FirmVsFirmPageProps) => {
  const slugs = params.slug.split('-vs-');
  if (slugs.length !== 2) {
    notFound();
  }

  const firm1 = mockPropFirms.find(p => p.slug === slugs[0]);
  const firm2 = mockPropFirms.find(p => p.slug === slugs[1]);

  if (!firm1 || !firm2) {
    notFound();
  }

  const [tier1, tier2] = findComparableTiers(firm1, firm2);

  const getYearEstablished = (firm: PropFirm) => {
    if (!firm.dateCreated) return 'N/A';
    const year = new Date(firm.dateCreated).getFullYear();
    const currentYear = new Date().getFullYear();
    const yearsInOp = currentYear - year;
    return {
      year: year.toString(),
      yearsInOp: `${yearsInOp} Year${yearsInOp !== 1 ? 's' : ''} of Operations`
    };
  }

  const firm1Years = getYearEstablished(firm1);
  const firm2Years = getYearEstablished(firm2);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <FirmComparisonHeader firm1={firm1} firm2={firm2} />

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-foreground">High-Level Comparison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <ComparisonMetricCard 
                title="Year Established"
                value1={firm1Years.year}
                subvalue1={firm1Years.yearsInOp}
                value2={firm2Years.year}
                subvalue2={firm2Years.yearsInOp}
            />
            <ComparisonMetricCard 
                title="Max Allocation"
                value1={firm1.maxAccountSize ? `$${(firm1.maxAccountSize / 1000).toFixed(0)}K` : 'N/A'}
                value2={firm2.maxAccountSize ? `$${(firm2.maxAccountSize / 1000).toFixed(0)}K` : 'N/A'}
            />
             <ComparisonMetricCard 
                title="Platforms"
                value1={firm1.platforms?.join(', ') || 'N/A'}
                subvalue1={firm1.platforms && firm1.platforms.length > 1 ? 'Multiple Platforms' : 'Single Platform'}
                value2={firm2.platforms?.join(', ') || 'N/A'}
                subvalue2={firm2.platforms && firm2.platforms.length > 1 ? 'Multiple Platforms' : 'Single Platform'}
                isPlatformList
            />
        </div>
      </section>

      {tier1 && tier2 && (
         <section className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-foreground">{`Challenge Comparison (~$${(tier1.size / 1000).toFixed(0)}K)`}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TierComparisonCard firm={firm1} tier={tier1} />
                <TierComparisonCard firm={firm2} tier={tier2} />
            </div>
        </section>
      )}

      <section className="text-center py-6">
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent-hover">
            <Link href="/compare-prop-firms">
                View Full Comparison Table
            </Link>
        </Button>
      </section>
    </div>
  );
};

export default FirmVsFirmPage;


'use client';

import type { PropFirm } from '@/lib/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, Star } from 'lucide-react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';


interface ExpandedFirmTier {
  firm: PropFirm;
  tier: PropFirm['accountTiers'][0];
}

interface ComparisonTableProps {
  items?: ExpandedFirmTier[];
  firms?: PropFirm[]; // Allow passing firms directly for simpler tables
}

const ComparisonTable = ({ items, firms }: ComparisonTableProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  // Normalize the input data so the component can work with either prop
  const normalizedItems: ExpandedFirmTier[] = useMemo(() => {
    if (items) {
      return items;
    }
    if (firms) {
      return firms.map(firm => ({
        firm,
        tier: { // Create a default tier from the firm's main data for display
          id: firm.id + '-main',
          size: firm.minAccountSize || 0,
          evaluationFee: firm.minChallengeCost || 0,
        }
      }));
    }
    return [];
  }, [items, firms]);

  useEffect(() => {
    const container = tableContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollLeft > 10);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    
    handleScroll();

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuresToCompare = [
    {
      label: 'Account Size',
      getValue: (item: ExpandedFirmTier) => item.tier.size > 0 ? `$${item.tier.size.toLocaleString()}` : 'Varies',
    },
    {
      label: 'Evaluation Cost',
      getValue: (item: ExpandedFirmTier) => item.tier.evaluationFee > 0 ? `$${item.tier.evaluationFee.toLocaleString()}`: 'Varies',
    },
    {
      label: 'Activation Fee',
      getValue: (item: ExpandedFirmTier) => {
        if (item.tier.activationFee !== undefined) {
          return item.tier.activationFee > 0 ? `$${item.tier.activationFee.toLocaleString()}` : 'None';
        }
        return item.firm.activationFee || '-';
      },
    },
    { 
      label: 'Profit Split', 
      getValue: (item: ExpandedFirmTier) => item.firm.profitSplit || '-' 
    },
    { 
      label: 'Max Funding', 
      getValue: (item: ExpandedFirmTier) => item.firm.maxAccountSize ? `$${item.firm.maxAccountSize.toLocaleString()}` : '-' 
    },
    { 
      label: 'Challenge Type', 
      getValue: (item: ExpandedFirmTier) => item.tier.challengeType || item.firm.challengeType || '-' 
    },
    {
      label: 'Drawdown Rules',
      getValue: (item: ExpandedFirmTier) => {
        if (item.tier.drawdownRules) {
          return item.tier.drawdownRules;
        }
        if (item.tier.drawdownPercentage && item.tier.size) {
            const drawdownAmount = item.tier.size * (item.tier.drawdownPercentage / 100);
            return `$${drawdownAmount.toLocaleString()} (${item.tier.drawdownPercentage}%)`;
        }
        return item.firm.drawdownRules || '-';
      },
    },
    {
      label: 'Profit Goal',
      getValue: (item: ExpandedFirmTier) => {
        if (item.tier.profitTargetPercentage && item.tier.size) {
          const profitGoalAmount = item.tier.size * (item.tier.profitTargetPercentage / 100);
          return `$${profitGoalAmount.toLocaleString()} (${item.tier.profitTargetPercentage}%)`;
        }
        if(item.tier.profitTargetPercentage === null) {
          return 'None';
        }
        return item.firm.profitTarget || '-';
      },
    },
    { 
      label: 'Platforms', 
      getValue: (item: ExpandedFirmTier) => {
        const allPlatforms = item.firm.platforms || [];
        if (allPlatforms.length === 0) {
          return '-';
        }

        const MAX_VISIBLE_PLATFORMS = 2;
        const visiblePlatforms = allPlatforms.slice(0, MAX_VISIBLE_PLATFORMS);
        const hiddenPlatformsCount = allPlatforms.length - MAX_VISIBLE_PLATFORMS;

        return (
          <div className="flex flex-wrap gap-1.5 justify-center items-center">
            {visiblePlatforms.map(platform => (
              <div key={platform} className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                {platform}
              </div>
            ))}
            {hiddenPlatformsCount > 0 && (
              <Popover>
                <PopoverTrigger asChild>
                  <button className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary/20 text-primary-foreground hover:bg-primary/30 cursor-pointer">
                    +{hiddenPlatformsCount}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 max-w-[250px]">
                  <div className="flex flex-col gap-1 p-2">
                    {allPlatforms.map((platform: string) => (
                      <div key={platform} className="px-2 py-1 text-xs">
                        {platform}
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        );
      }
    },
    {
      label: 'Rating',
      getValue: (item: ExpandedFirmTier) => {
        if (!item.firm.rating) return '-';
        const roundedRating = Math.round(item.firm.rating || 0);
        return (
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < roundedRating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`}
              />
            ))}
            <span className="ml-1.5 text-xs md:text-sm text-foreground">{item.firm.rating.toFixed(1)}/5</span>
          </div>
        );
      }
    },
  ];

  return (
    <div ref={tableContainerRef} className="w-full overflow-x-auto border rounded-lg">
      <Table className="min-w-[1200px] border-separate border-spacing-0">
        <TableCaption>
          Disclosure: We may earn a commission if you sign up through our links. This does not affect our reviews or rankings.
        </TableCaption>
        <TableHeader className="sticky top-0 z-20 bg-card/80 backdrop-blur-lg">
          <TableRow>
            <TableHead className="sticky left-0 bg-card/80 backdrop-blur-lg z-30 min-w-[200px] md:min-w-[250px] text-foreground font-semibold uppercase text-[10px] md:text-xs">
               <div className="flex relative">
                Firm
                <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
              </div>
            </TableHead>
            {featuresToCompare.map(feature => (
              <TableHead key={feature.label} className="text-center min-w-[150px] whitespace-nowrap text-foreground uppercase text-[10px] md:text-xs relative">
                <div className="flex justify-center items-center">
                    {feature.label}
                    <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
                </div>
              </TableHead>
            ))}
            <TableHead className="text-center min-w-[120px] text-foreground uppercase text-[10px] md:text-xs relative">
                <div className="flex justify-center">
                    Website
                    <div className="absolute right-0 top-1/4 h-1/2 w-px bg-border/50"></div>
                </div>
            </TableHead>
            <TableHead className="text-center min-w-[120px] text-foreground uppercase text-[10px] md:text-xs">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {normalizedItems.map(item => (
            <TableRow key={`${item.firm.id}-${item.tier.id}`}>
              <TableCell className="font-medium sticky left-0 z-10 bg-card p-2">
                 <div className="flex items-center gap-2 md:gap-3">
                    {item.firm.logoUrl ? (
                        <div className="w-12 h-12 relative flex-shrink-0 flex items-center justify-center rounded-lg bg-background/50 border">
                        <Image src={item.firm.logoUrl} alt={`${item.firm.name} logo`} layout="fill" objectFit="contain" className="p-1" data-ai-hint="company logo"/>
                        </div>
                    ) : <div className="w-12 h-12 flex-shrink-0"></div>}
                    
                    <div className={cn(
                        "flex flex-col justify-center overflow-hidden transition-all duration-300 ease-in-out",
                        isScrolled ? "w-0 opacity-0" : "w-auto opacity-100"
                    )}>
                        <Link href={`/firms/${item.firm.slug}`} className="text-foreground text-sm font-semibold whitespace-nowrap hover:underline line-clamp-1">
                            {item.firm.name}
                        </Link>
                        {item.firm.offerBadgeLabel && (
                        <Badge variant="secondary" className="mt-1 w-fit whitespace-nowrap">
                            {item.firm.offerBadgeLabel}
                        </Badge>
                        )}
                    </div>
                 </div>
              </TableCell>
              {featuresToCompare.map(feature => (
                <TableCell key={`${item.firm.id}-${item.tier.id}-${feature.label}`} className="text-center text-xs md:text-sm text-muted-foreground">
                  {feature.getValue(item)}
                </TableCell>
              ))}
              <TableCell className="text-center">
                {item.firm.websiteUrl ? (
                  <Button asChild variant="outline" size="sm">
                    <Link href={item.firm.websiteUrl} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink className="ml-1.5 h-3 w-3" />
                    </Link>
                  </Button>
                ) : '-'}
              </TableCell>
              <TableCell className="text-center">
                 {item.firm.slug ? (
                    <Button asChild variant="outline" size="sm">
                    <Link href={`/firms/${item.firm.slug}`}>Details</Link>
                    </Button>
                 ) : '-'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default ComparisonTable;

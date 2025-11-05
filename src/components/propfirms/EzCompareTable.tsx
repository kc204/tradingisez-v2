
'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, Star, ChevronsUpDown, Copy, ExternalLink, Info } from 'lucide-react';
import type { PropFirm } from '@/lib/types';
import { mockPropFirms } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';


const MOCK_FIRMS_DATA_ADAPTED = mockPropFirms.map((firm, index) => ({
  ...firm,
  trustpilotRating: firm.rating || 0,
  trustpilotReviewCount: firm.rating ? Math.floor(firm.rating * (250 + index * 10)) : 50,
  countryCode: 'US',
  yearFounded: 2022 - (index % 4),
  assets: firm.tradableInstruments || ['Futures'],
  maxAllocation: firm.maxAccountSize || 0,
  promoCode: firm.promo ? firm.promo.split(' ')[0] : 'EZPROMO',
  promoDiscount: firm.offerBadgeLabel || 'Discount',
  isNew: index >= mockPropFirms.length - 3,
  isPopular: !!firm.isFeatured,
  payoutFrequency: 'Bi-Weekly', 
  hasNoTimeLimits: (index +1) % 2 === 0, 
  isInstant: index % 3 === 0, 
}));


// --- Helper Functions ---
const calculateEzScore = (firm: any) => {
  let score = 0;
  score += (firm.trustpilotRating / 5) * 50;
  score += (Math.min(firm.trustpilotReviewCount, 1000) / 1000) * 20;
  score += (Math.min(firm.maxAllocation, 1000000) / 1000000) * 15;
  const years = new Date().getFullYear() - firm.yearFounded;
  score += (Math.min(years, 10) / 10) * 15;
  return Math.round(score);
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// --- Child Components ---

const ControlBar = ({ searchTerm, setSearchTerm, activeFilters, toggleFilter, filteredCount, totalCount }: any) => (
  <div className="space-y-4 mb-6">
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold text-muted-foreground mr-2">EZ Filters:</span>
        <Button onClick={() => toggleFilter('isPopular')} variant={activeFilters.isPopular ? 'default' : 'outline'} className="rounded-full transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30">Popular</Button>
        <Button onClick={() => toggleFilter('isNew')} variant={activeFilters.isNew ? 'default' : 'outline'} className="rounded-full transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30">New</Button>
        <Button onClick={() => toggleFilter('hasNoTimeLimits')} variant={activeFilters.hasNoTimeLimits ? 'default' : 'outline'} className="rounded-full transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30">No Time Limits</Button>
        <Button onClick={() => toggleFilter('isInstant')} variant={activeFilters.isInstant ? 'default' : 'outline'} className="rounded-full transition-all duration-300 data-[state=active]:shadow-lg data-[state=active]:shadow-primary/30">Instant Funding</Button>
      </div>
      <div className="relative flex-grow w-full md:flex-grow-0 md:w-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search firms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 rounded-full h-11 pl-12 pr-4"
        />
      </div>
    </div>
     <h2 className="text-xl font-bold tracking-tight text-foreground/90">
        Firms <span className="ml-2 text-primary font-medium bg-primary/10 px-2 py-1 rounded-md text-base">Showing {filteredCount} of {totalCount}</span>
      </h2>
  </div>
);

const FirmsTable = ({ firms, requestSort, sortConfig }: {firms: any[], requestSort: (key:string) => void, sortConfig: {key:string, direction:string}}) => {
  const getSortIndicator = (key: string) => {
    if (sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />;
    return sortConfig.direction === 'ascending' ? '▲' : '▼';
  };

  return (
    <Card className="bg-black/20 backdrop-blur-sm shadow-2xl shadow-black/20 border-border/50">
        <div className="overflow-x-auto">
            <Table>
                <TableHeader className="border-b border-white/10">
                <TableRow>
                    {['Firm', 'EZ Score', 'Trustpilot', 'Founded', 'Platforms', 'Max Funding', 'Offer / Discount', 'Action'].map(header => (
                    <TableHead key={header} className="px-6 py-4 text-left text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        <Button variant="ghost" onClick={() => requestSort(header.toLowerCase().replace(/ /g, ''))} className="flex items-center gap-2 p-0 hover:bg-transparent hover:text-white transition-colors">
                        {header}
                        <span>{getSortIndicator(header.toLowerCase().replace(/ /g, ''))}</span>
                        </Button>
                    </TableHead>
                    ))}
                </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-white/5">
                {firms.map((firm: any) => <FirmRow key={firm.id} firm={firm} />)}
                </TableBody>
            </Table>
        </div>
    </Card>
  );
};

const FirmRow = ({ firm }: { firm: any }) => {
    const { toast } = useToast();
    const ezScore = useMemo(() => calculateEzScore(firm), [firm]);
    const yearsInOperation = new Date().getFullYear() - firm.yearFounded;
    const scoreColor = ezScore > 80 ? 'text-green-400' : ezScore > 65 ? 'text-yellow-400' : 'text-red-400';

    const copyPromoCode = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(firm.promoCode);
        toast({ title: "Copied!", description: `Promo code "${firm.promoCode}" copied to clipboard.` });
    };
    
    const MAX_VISIBLE_PLATFORMS = 2;
    const allPlatforms = firm.platforms || [];
    const visiblePlatforms = allPlatforms.slice(0, MAX_VISIBLE_PLATFORMS);
    const hiddenPlatformsCount = allPlatforms.length - MAX_VISIBLE_PLATFORMS;

  return (
    <TableRow className="hover:bg-white/5 transition-colors duration-200">
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
            <Image className="h-11 w-11 rounded-lg object-contain border-2 border-white/10" src={firm.logoUrl} alt={`${firm.name} logo`} width={44} height={44}/>
          <div className="ml-4">
            <div className="text-sm font-medium text-foreground">{firm.name}</div>
            <div className="text-xs text-muted-foreground">{firm.countryCode}</div>
          </div>
        </div>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 cursor-help">
                       <span className={`text-xl font-bold ${scoreColor}`}>{ezScore}</span>
                        <Info className="h-4 w-4 text-gray-500" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Combines Trustpilot rating ({firm.trustpilotRating}), reviews ({firm.trustpilotReviewCount}), max funding, and years in business.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 mr-1.5" />
          <span className="text-sm text-foreground">{firm.trustpilotRating}</span>
        </div>
        <div className="text-xs text-muted-foreground mt-1">{firm.trustpilotReviewCount} reviews</div>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center text-sm text-foreground cursor-help">
                        {firm.yearFounded}
                        <Info className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Established {yearsInOperation} year{yearsInOperation !== 1 ? 's' : ''} ago.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center gap-1.5 flex-wrap max-w-xs">
          {visiblePlatforms.map((p: string) => (
             <div key={p} className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-white/10 text-gray-300">{p}</div>
          ))}
          {hiddenPlatformsCount > 0 && (
             <Popover>
                <PopoverTrigger asChild>
                    <button className="px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-white/20 text-gray-200 hover:bg-white/30 cursor-pointer">
                        +{hiddenPlatformsCount}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <div className="flex flex-col gap-1 p-2">
                        {allPlatforms.map((p: string) => (
                             <div key={p} className="px-2 py-1 text-xs">{p}</div>
                        ))}
                    </div>
                </PopoverContent>
             </Popover>
          )}
        </div>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div className="flex items-center text-sm text-foreground cursor-help">
                        {formatCurrency(firm.maxAllocation)}
                        <Info className="h-4 w-4 text-gray-500 ml-2" />
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>The maximum amount of capital a trader can manage.</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap">
        <Button onClick={copyPromoCode} variant="default" size="sm" className="px-4 py-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-600/20">
          <span>{firm.promoDiscount}</span>
          <Copy className="h-3.5 w-3.5" />
        </Button>
      </TableCell>
      <TableCell className="px-6 py-4 whitespace-nowrap text-right">
        <Button asChild size="sm" className="rounded-full shadow-sm transition-transform hover:scale-105">
            <a href={firm.affiliateLink} target="_blank" rel="noopener noreferrer">
                Visit Firm <ExternalLink className="h-4 w-4 ml-2" />
            </a>
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default function EzCompareTable() {
  const [firms, setFirms] = useState(MOCK_FIRMS_DATA_ADAPTED);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({});
  const [sortConfig, setSortConfig] = useState({ key: 'ezscore', direction: 'descending' });

  const filteredAndSortedFirms = useMemo(() => {
    let filtered = [...firms];

    if (searchTerm) {
      filtered = filtered.filter(firm =>
        firm.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    Object.keys(activeFilters).forEach(filterKey => {
        if (activeFilters[filterKey]) {
            filtered = filtered.filter(firm => (firm as any)[filterKey]);
        }
    });

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        let aValue, bValue;
        
        if (sortConfig.key === 'ezscore') {
            aValue = calculateEzScore(a);
            bValue = calculateEzScore(b);
        } else if (sortConfig.key === 'firm') {
            aValue = a.name;
            bValue = b.name;
        } else if (sortConfig.key === 'trustpilot') {
            aValue = (a as any).trustpilotRating;
            bValue = (b as any).trustpilotRating;
        } else if (sortConfig.key === 'maxfunding') {
            aValue = (a as any).maxAllocation;
            bValue = (b as any).maxAllocation;
        } else if (sortConfig.key === 'founded') {
            aValue = (a as any).yearFounded;
            bValue = (b as any).yearFounded;
        } else {
            aValue = (a as any)[sortConfig.key];
            bValue = (b as any)[sortConfig.key];
        }

        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [firms, searchTerm, activeFilters, sortConfig]);

  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
        setSortConfig({ key: 'ezscore', direction: 'descending' });
        return;
    }
    setSortConfig({ key, direction });
  };

  const toggleFilter = (filter: string) => {
      setActiveFilters((prev: any) => ({...prev, [filter]: !prev[filter]}));
  };

  if (loading) {
    return (
      <div className="text-center p-8">
        <p>Loading Prop Firm Data...</p>
      </div>
    );
  }

  return (
    <Card className="w-full bg-transparent border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl md:text-5xl font-extrabold tracking-tight">Advanced Prop Firm Comparison</CardTitle>
          <CardDescription className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">The EZ-iest Way to Compare Prop Firms. We analyze the data so you don't have to.</CardDescription>
        </CardHeader>
        <CardContent>
          <ControlBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilters={activeFilters}
            toggleFilter={toggleFilter}
            filteredCount={filteredAndSortedFirms.length}
            totalCount={firms.length}
          />
          <FirmsTable 
            firms={filteredAndSortedFirms} 
            requestSort={requestSort}
            sortConfig={sortConfig}
          />
        </CardContent>
    </Card>
  );
}

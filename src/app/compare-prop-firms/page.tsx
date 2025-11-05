
'use client';

import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, doc, getDocs, writeBatch } from 'firebase/firestore';
import { Search, Star, ChevronsUpDown, ExternalLink, Info, ChevronDown, Zap, ChevronLeft, ChevronRight, Briefcase, CreditCard, Banknote, CandlestickChart, ShieldCheck, FileText, Ban, ArrowRight, Calendar, TrendingUp, Monitor, Columns } from 'lucide-react';
import type { PropFirm, AccountTier } from '@/lib/types';
import { ALL_CHALLENGES_DATA, mockPropFirms } from '@/lib/mockData';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import OfferBox from '@/components/propfirms/OfferBox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import FirmMiniDetail from '@/components/propfirms/FirmMiniDetail';
import { Slider } from '@/components/ui/slider';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FirmVsFirmSelector from '@/components/compare/FirmVsFirmSelector';
import FirmComparisonHeader from '@/components/compare/FirmComparisonHeader';
import ComparisonMetricCard from '@/components/compare/ComparisonMetricCard';
import TierComparisonCard from '@/components/compare/TierComparisonCard';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: any;
let db: any;
try {
    if (!firebaseConfig.projectId) {
      throw new Error("Firebase project ID is missing");
    }
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch (error) {
    console.warn("Firebase initialization failed or config is missing, will use mock data.", error);
    db = null;
}

const formatCurrency = (value: any) => value == null ? 'N/A' : new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
const formatShortCurrency = (value: any) => value == null ? 'N/A' : `$${value/1000}K`;

const Separator = () => <div className="hidden md:block h-6 w-px bg-white/10 mx-2"></div>;

const allTableColumns = [
    { key: 'firmName', label: 'Firm / Rating', sticky: 'left', align: 'left', className: 'w-[90px] sm:w-auto', sortable: true },
    { key: 'accountSize', label: 'Account Size', align: 'center', sortable: true },
    { key: 'steps', label: 'Steps', align: 'center', sortable: true },
    { key: 'activationFee', label: 'Activation Fee', align: 'center', sortable: true },
    { key: 'profitSplit', label: 'Profit Split', align: 'center', sortable: true },
    { key: 'maxAllocation', label: 'Max Allocation', align: 'center', sortable: true },
    { key: 'profitTarget', label: 'Profit Target', align: 'center', sortable: true },
    { key: 'dailyLoss', label: 'Daily Loss', align: 'center', sortable: true },
    { key: 'maxLoss', label: 'Max Loss', align: 'center', sortable: true },
    { key: 'payoutFrequency', label: 'Payout', align: 'center', sortable: true },
    { key: 'price', label: 'Prices', sticky: 'right', align: 'right', sortable: true },
];

const ControlBar = ({ filters, setFilters, selectedFirm, setSelectedFirm, filteredCount, totalCount, visibleColumns, setVisibleColumns }: any) => {
    const [isCustomSizeActive, setIsCustomSizeActive] = React.useState(false);
    const [customSize, setCustomSize] = React.useState([50000, 500000]);
    const [tempCustomSize, setTempCustomSize] = React.useState(customSize);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

    const handleFilterChange = (key: string, value: any) => {
        setFilters((prev: any) => ({ ...prev, [key]: value }));
    };
    
    const handleDiscountToggle = () => {
        setFilters((prev: any) => ({...prev, applyDiscount: !prev.applyDiscount}));
    };

    const toggleSizeFilter = (size: number) => {
        setIsCustomSizeActive(false);
        const currentSizes = filters.accountSize;
        const newSizes = currentSizes.includes(size)
            ? currentSizes.filter((s: number) => s !== size)
            : [...currentSizes, size];
        handleFilterChange('accountSize', newSizes);
        handleFilterChange('customSizeRange', null); 
    };
    
    const handleSetCustomSize = () => {
        setCustomSize(tempCustomSize);
        setIsCustomSizeActive(true);
        handleFilterChange('accountSize', []); // Clear standard sizes when custom is active
        handleFilterChange('customSizeRange', tempCustomSize);
        setIsPopoverOpen(false); // Close popover on set
    };
    
    const handlePopoverOpenChange = (open: boolean) => {
        setIsPopoverOpen(open);
        if (open) {
            // When opening, sync temp slider with the active filter value
            setTempCustomSize(customSize);
        } else {
             // If closing without setting, decide if custom range should remain active
            if (!filters.customSizeRange) {
                setIsCustomSizeActive(false);
            }
        }
    }

    const toggleStepFilter = (step: number | string) => {
        const currentSteps = filters.steps;
        const newSteps = currentSteps.includes(step)
            ? currentSteps.filter((s: any) => s !== step)
            : [...currentSteps, step];
        handleFilterChange('steps', newSteps);
    };

    const handleChallengeTypeChange = (type: string) => {
        if (type === 'futures') {
            setFilters((prev: any) => ({
                ...prev,
                challengeType: 'futures',
                accountSize: [100000],
                steps: [1],
            }));
        } else {
            setFilters((prev: any) => ({
                ...prev,
                challengeType: 'cfd',
                accountSize: [100000],
                steps: [2],
            }));
        }
        setIsCustomSizeActive(false);
    };

    const handleFirmChange = (value: string) => {
        const firmSlug = value === 'all' ? '' : value;
        setSelectedFirm(firmSlug);
        
        if (firmSlug) {
            const firmData = ALL_CHALLENGES_DATA.find(c => c.firmId === firmSlug);
            if (firmData) {
                handleFilterChange('challengeType', firmData.challengeType);
            }
        }
    };


    const sizes = [25000, 50000, 100000, 150000, 200000];
    const stepsOptions: (number | string)[] = [1, 2, 3, 4, 'Instant'];

    return (
        <div className="space-y-4 mb-6">
             <div className="flex justify-between items-center">
                 <div className="flex items-center p-1 bg-white/5 rounded-full">
                    <button onClick={() => handleChallengeTypeChange('futures')} className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${filters.challengeType === 'futures' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                        Futures
                    </button>
                    <button onClick={() => handleChallengeTypeChange('cfd')} className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${filters.challengeType === 'cfd' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'}`}>
                        CFD
                    </button>
                </div>
                 <div className="flex items-center gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" className="h-9 rounded-full">
                                <Columns className="mr-2 h-4 w-4" />
                                Columns
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-56 p-2">
                            <div className="grid gap-2">
                                <Label className="font-semibold px-2">Toggle Columns</Label>
                                {allTableColumns.filter(c => !c.sticky).map(column => (
                                    <div key={column.key} className="flex items-center space-x-2 p-2 hover:bg-muted rounded-md">
                                        <Checkbox
                                            id={`col-${column.key}`}
                                            checked={visibleColumns[column.key]}
                                            onCheckedChange={(checked) => {
                                                setVisibleColumns((prev: any) => ({
                                                    ...prev,
                                                    [column.key]: checked,
                                                }));
                                            }}
                                        />
                                        <Label htmlFor={`col-${column.key}`} className="text-sm font-normal cursor-pointer flex-1">
                                            {column.label}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <div className="flex-col items-end gap-2 hidden md:flex">
                        <div className="w-full md:w-64">
                            <Select onValueChange={handleFirmChange} value={selectedFirm || 'all'}>
                                <SelectTrigger className="w-full bg-black/20 border border-white/10 rounded-full h-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <SelectValue placeholder="Select a firm..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Firms</SelectItem>
                                    {mockPropFirms.map((firm) => (
                                        <SelectItem key={firm.id} value={firm.slug}>
                                            <div className="flex items-center gap-2">
                                                <Image src={firm.logoUrl} alt={firm.name} width={24} height={24} className="rounded-sm" />
                                                <span>{firm.name}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 flex-wrap flex-1">
                     <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2 text-xs">Sizes:</span>
                        {sizes.map(size => (
                            <button
                                key={size}
                                onClick={() => toggleSizeFilter(size)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${!isCustomSizeActive && filters.accountSize.includes(size) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                            >
                                {formatShortCurrency(size)}
                            </button>
                        ))}
                        <Popover open={isPopoverOpen} onOpenChange={handlePopoverOpenChange}>
                            <PopoverTrigger asChild>
                                <button className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${isCustomSizeActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>
                                    Custom
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div className="space-y-4">
                                     <div className="space-y-2">
                                        <p className="text-sm font-medium">Custom Size Range</p>
                                        <p className="text-sm text-muted-foreground">
                                            {formatCurrency(tempCustomSize[0])} - {formatCurrency(tempCustomSize[1])}
                                        </p>
                                    </div>
                                    <Slider
                                        value={tempCustomSize}
                                        onValueChange={setTempCustomSize}
                                        max={1000000}
                                        step={1000}
                                    />
                                    <Button onClick={handleSetCustomSize} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full h-9 text-sm">Set</Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <Separator />

                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-400 mr-2 text-xs">Steps:</span>
                        {stepsOptions.map(step => (
                            <button
                                key={step}
                                onClick={() => toggleStepFilter(step)}
                                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${filters.steps.includes(step) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                            >
                                {typeof step === 'number' ? `${step} Step${step > 1 ? 's' : ''}` : step}
                            </button>
                        ))}
                    </div>

                    <Separator />
                    
                    <div className="flex items-center space-x-2">
                        <button type="button" role="switch" aria-checked={filters.applyDiscount} onClick={handleDiscountToggle} className={`peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors h-6 w-11 ${filters.applyDiscount ? 'bg-orange-500' : 'bg-gray-600'}`}>
                            <span className={`pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform h-5 w-5 ${filters.applyDiscount ? 'translate-x-5' : 'translate-x-0'}`}></span>
                        </button>
                        <label className="text-xs font-semibold text-gray-300">Apply Discount</label>
                    </div>
                </div>
                 <div className="relative flex-grow w-full md:flex-grow-0 md:w-auto md:hidden">
                     <div className="mt-2">
                        <Select onValueChange={handleFirmChange} value={selectedFirm || 'all'}>
                            <SelectTrigger className="w-full bg-black/20 border border-white/10 rounded-full h-11 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select a firm..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Firms</SelectItem>
                                {mockPropFirms.map((firm) => (
                                     <SelectItem key={firm.id} value={firm.slug}>
                                        <div className="flex items-center gap-2">
                                            <Image src={firm.logoUrl} alt={firm.name} width={24} height={24} className="rounded-sm" />
                                            <span>{firm.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-white/90">
                {filters.challengeType === 'futures' ? 'Futures' : 'CFD'} Prop Firm Challenges <span className="ml-2 text-blue-400 font-medium bg-blue-500/10 px-2 py-1 rounded-md text-base">Showing {filteredCount} of {totalCount}</span>
            </h2>
        </div>
    );
};

const ChallengeTable = ({ challenges, requestSort, sortConfig, applyDiscount, visibleColumns }: any) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const textRef = React.useRef<HTMLSpanElement>(null); // Ref for the header text
    const isMobile = useIsMobile();
    const [isScrolled, setIsScrolled] = React.useState(false);
    
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
             setIsScrolled(container.scrollLeft > 10);
             if (isMobile && textRef.current) {
                if (container.scrollLeft > 10) {
                    textRef.current.classList.add('scrolled-mobile-header');
                } else {
                    textRef.current.classList.remove('scrolled-mobile-header');
                }
            }
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    const getSortIndicator = (key: string) => {
        if (!sortConfig || sortConfig.key !== key) return <ChevronsUpDown className="h-4 w-4 text-gray-500" />;
        if (sortConfig.direction === 'ascending') return <span aria-label="sorted ascending">▲</span>;
        return <span aria-label="sorted descending">▼</span>;
    };

    const columns = allTableColumns.filter(col => visibleColumns[col.key]);

    return (
        <div className="bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl shadow-black/20 relative">
            <div ref={scrollContainerRef} className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <thead className="sticky top-0 z-20 bg-black/50 backdrop-blur-lg border-b border-white/10">
                        <tr>
                            {columns.map(col => (
                                <th 
                                    key={col.key} 
                                    scope="col" 
                                    aria-sort={sortConfig?.key === col.key ? sortConfig.direction : 'none'}
                                    className={`px-2 py-3 sm:px-4 text-${col.align} text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap ${col.sticky ? `sticky z-10 ${col.sticky === 'left' ? 'left-0 bg-black/50 backdrop-blur-lg' : 'right-0 bg-gray-900'}` : 'bg-gray-800/95'} ${col.className || ''}`}
                                >
                                    {col.sortable ? (
                                        <button onClick={() => requestSort(col.key)} className={`flex items-center gap-2 hover:text-white transition-colors ${col.align === 'center' ? 'justify-center w-full' : ''}`}>
                                            {col.key === 'firmName' ? (
                                                <span ref={textRef} className="flex flex-row md:whitespace-nowrap items-center">
                                                    <span>Firm&nbsp;/&nbsp;</span>
                                                    <span>Rating</span>
                                                </span>
                                            ) : (
                                                col.label
                                            )}
                                            <span>{getSortIndicator(col.key)}</span>
                                        </button>
                                    ) : (
                                        <span>{col.label}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {challenges.map((challenge: any) => <ChallengeRow key={challenge.id} challenge={challenge} applyDiscount={applyDiscount} isScrolled={isScrolled} visibleColumns={visibleColumns} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const ChallengeRow = ({ challenge, applyDiscount, isScrolled, visibleColumns }: any) => {
    const finalPrice = applyDiscount && challenge.promoDiscountPercent > 0 ? challenge.price * (1 - challenge.promoDiscountPercent / 100) : challenge.price;
    const firm = mockPropFirms.find(f => f.slug === challenge.firmId) || null;
    
    const formatPercent = (value: number | number[] | null | undefined) => {
        if (value === null || value === undefined) return 'N/A';
        if (Array.isArray(value)) {
            return value.join('% / ') + '%';
        }
        return `${value}%`;
    }
    
    if (!firm) {
        return (
            <tr className="group/row hover:bg-white/5 transition-colors duration-200 cursor-pointer">
                <td colSpan={allTableColumns.length}>Firm data not found for challenge ID {challenge.id}</td>
            </tr>
        );
    }
    
    const columnRenderers: { [key: string]: React.ReactNode } = {
        firmName: (
            <td className="px-2 py-3 sm:px-4 whitespace-nowrap sticky left-0 z-0 bg-black/80 group-hover/row:bg-gray-800/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 relative flex-shrink-0">
                        <Image data-ai-hint="logo" className="rounded-lg object-contain border-2 border-white/10" src={challenge.logoUrl} alt={`${challenge.firmName} logo`} layout="fill"/>
                    </div>
                    <div 
                       className={cn(
                            "flex flex-col justify-center flex-shrink-0 transition-all duration-300 ease-in-out",
                            isScrolled ? "sm:opacity-100 sm:w-auto opacity-0 w-0" : "opacity-100 w-auto"
                        )}
                    >
                        <div className="text-xs font-medium text-white truncate max-w-[90px] sm:max-w-none">{challenge.firmName}</div>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Star className="h-3.5 w-3.5 text-yellow-400 mr-1" />
                            {challenge.trustpilotRating} ({challenge.trustpilotReviewCount})
                        </div>
                    </div>
                </div>
            </td>
        ),
        accountSize: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white font-medium text-center">{formatCurrency(challenge.accountSize)}</td>,
        steps: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{challenge.isInstant ? 'Instant' : `${challenge.steps} Step`}</td>,
        activationFee: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{formatCurrency(challenge.activationFee)}</td>,
        profitSplit: (
            <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-center">
                <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-white">{challenge.profitSplit}%</span>
                    <div className="w-16 h-1.5 bg-white rounded-full overflow-hidden"><div className="h-full bg-blue-500" style={{width: `${challenge.profitSplit}%`}}></div></div>
                </div>
            </td>
        ),
        maxAllocation: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{formatCurrency(challenge.maxAllocation)}</td>,
        profitTarget: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{formatPercent(challenge.profitTarget)}</td>,
        dailyLoss: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{formatPercent(challenge.dailyLoss)}</td>,
        maxLoss: <td className="px-2 py-3 sm:px-4 whitespace-nowrap text-white text-center">{formatPercent(challenge.maxLoss)}</td>,
        payoutFrequency: <td className="px-2 py-3 sm:px-4 text-xs text-gray-300 max-w-[200px] truncate text-center" title={challenge.payoutFrequency}>{challenge.payoutFrequency}</td>,
        price: (
            <td className="px-2 py-3 sm:px-4 whitespace-nowrap sticky right-0 z-0 bg-gray-900 group-hover/row:bg-gray-800">
                 <div className="flex flex-col items-end sm:flex-row sm:items-center sm:justify-end gap-2">
                     <div className="text-right">
                       {applyDiscount && challenge.promoDiscountPercent > 0 ? (
                            <>
                                <p className="font-semibold text-green-400 text-xs sm:text-sm">{formatCurrency(finalPrice)}</p>
                                <p className="text-xs text-gray-500 line-through">{formatCurrency(challenge.price)}</p>
                            </>
                        ) : (
                            <p className="font-semibold text-white text-xs sm:text-sm">{formatCurrency(finalPrice)}</p>
                        )}
                         <p className="text-xs text-gray-400">{challenge.paymentType}</p>
                    </div>
                    <a href={challenge.affiliateLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group relative w-full sm:w-auto inline-flex items-center justify-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 overflow-hidden">
                         <span className="transition-transform duration-300 group-hover:-translate-x-2">Buy</span>
                         <ArrowRight className="absolute right-3 h-4 w-4 opacity-0 transition-all duration-300 transform translate-x-full group-hover:opacity-100 group-hover:translate-x-0" />
                    </a>
                </div>
            </td>
        ),
    };


    return (
        <FirmMiniDetail firm={firm}>
            <tr className="group/row hover:bg-white/5 transition-colors duration-200 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 transition-transform">
                {allTableColumns.filter(c => visibleColumns[c.key]).map(col => (
                    <React.Fragment key={col.key}>
                        {columnRenderers[col.key]}
                    </React.Fragment>
                ))}
            </tr>
        </FirmMiniDetail>
    );
};

const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-6 flex justify-center">
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-2 ml-0 leading-tight text-gray-400 bg-white/5 border border-gray-700 rounded-l-lg hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronLeft className="w-4 h-4"/>
                    </button>
                </li>
                {pageNumbers.map(number => (
                     <li key={number}>
                        <button onClick={() => onPageChange(number)} className={`px-3 py-2 leading-tight border border-gray-700 ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-2 leading-tight text-gray-400 bg-white/5 border border-gray-700 rounded-r-lg hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ChevronRight className="w-4 h-4"/>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

const FirmVsFirmSection = ({ firm1, firm2 }: { firm1: PropFirm; firm2: PropFirm }) => {
    
    const findComparableTiers = (firm1: PropFirm, firm2: PropFirm): [AccountTier | null, AccountTier | null] => {
        const commonSizes = [100000, 50000, 25000, 150000];
        for (const size of commonSizes) {
            const tier1 = firm1.accountTiers.find(t => t.size === size && t.challengeType?.includes('Step'));
            const tier2 = firm2.accountTiers.find(t => t.size === size && t.challengeType?.includes('Step'));
            if (tier1 && tier2) {
                return [tier1, tier2];
            }
        }
        const tier1 = firm1.accountTiers.find(t => t.size >= 50000) || firm1.accountTiers[0] || null;
        const tier2 = firm2.accountTiers.find(t => t.size >= 50000) || firm2.accountTiers[0] || null;
        return [tier1, tier2];
    };

    const [tier1, tier2] = findComparableTiers(firm1, firm2);

    const getYearEstablished = (firm: PropFirm) => {
        if (!firm.dateCreated) return { year: 'N/A', yearsInOp: 'N/A' };
        const year = new Date(firm.dateCreated).getFullYear();
        const currentYear = new Date().getFullYear();
        const yearsInOp = currentYear - year;
        return { year: year.toString(), yearsInOp: `${yearsInOp} Year${yearsInOp !== 1 ? 's' : ''} of Operations` };
    };

    const firm1Years = getYearEstablished(firm1);
    const firm2Years = getYearEstablished(firm2);

    return (
        <div className="max-w-6xl mx-auto space-y-8 my-12">
            <FirmComparisonHeader firm1={firm1} firm2={firm2} />
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-12">
                {/* Column for Firm 1 */}
                <div className="space-y-4">
                    <ComparisonMetricCard 
                        title="Year Established"
                        icon={<Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
                        value={firm1Years.year}
                        subvalue={firm1Years.yearsInOp}
                    />
                    <ComparisonMetricCard 
                        title="Platforms"
                        icon={<Monitor className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
                        value={firm1.platforms?.join(', ') || 'N/A'}
                        isPlatformList
                    />
                    <ComparisonMetricCard 
                        title="Max Allocation"
                        icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />}
                        value={firm1.maxAccountSize ? `$${(firm1.maxAccountSize / 1000).toFixed(0)}K` : 'N/A'}
                    />
                </div>
                {/* Column for Firm 2 */}
                <div className="space-y-4">
                    <ComparisonMetricCard 
                        title="Year Established"
                        icon={<Calendar className="w-6 h-6 md:w-8 md:h-8 text-secondary" />}
                        value={firm2Years.year}
                        subvalue={firm2Years.yearsInOp}
                    />
                     <ComparisonMetricCard 
                        title="Platforms"
                        icon={<Monitor className="w-6 h-6 md:w-8 md:h-8 text-secondary" />}
                        value={firm2.platforms?.join(', ') || 'N/A'}
                        isPlatformList
                    />
                    <ComparisonMetricCard 
                        title="Max Allocation"
                        icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-secondary" />}
                        value={firm2.maxAccountSize ? `$${(firm2.maxAccountSize / 1000).toFixed(0)}K` : 'N/A'}
                    />
                </div>
            </div>

            {tier1 && tier2 && (
                 <section className="space-y-4">
                    <div className="text-center my-8 md:my-12">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{`Challenge Comparison (~$${(tier1.size / 1000).toFixed(0)}K)`}</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <TierComparisonCard firm={firm1} tier={tier1} />
                        <TierComparisonCard firm={firm2} tier={tier2} />
                    </div>
                </section>
            )}
        </div>
    );
};


export default function ComparePage() {
  const [challenges, setChallenges] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedFirm, setSelectedFirm] = React.useState('');
  const [filters, setFilters] = React.useState({ accountSize: [100000], steps: [1], applyDiscount: true, challengeType: 'futures', customSizeRange: null });
  const [sortConfig, setSortConfig] = React.useState<{key: string, direction: string}>({ key: 'price', direction: 'ascending' });
  const [currentPage, setCurrentPage] = React.useState(1);
  const ROWS_PER_PAGE = 8;
  const [comparisonFirms, setComparisonFirms] = React.useState<{firm1: PropFirm, firm2: PropFirm} | null>(null);

  const initialColumns = allTableColumns.reduce((acc, col) => {
    acc[col.key] = true;
    return acc;
  }, {} as Record<string, boolean>);
  
  const [visibleColumns, setVisibleColumns] = React.useState(initialColumns);

  React.useEffect(() => {
    try {
        const savedColumns = localStorage.getItem('visibleColumns');
        if (savedColumns) {
            setVisibleColumns(JSON.parse(savedColumns));
        }
    } catch (error) {
        console.warn("Could not parse visible columns from localStorage", error)
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('visibleColumns', JSON.stringify(visibleColumns));
  }, [visibleColumns]);

  const handleSetComparisonFirms = (firm1Slug: string, firm2Slug: string) => {
    const firm1 = mockPropFirms.find(f => f.slug === firm1Slug);
    const firm2 = mockPropFirms.find(f => f.slug === firm2Slug);
    if (firm1 && firm2) {
      setComparisonFirms({ firm1, firm2 });
    }
  };
  
  React.useEffect(() => {
    if (!db) {
        setChallenges(ALL_CHALLENGES_DATA);
        setLoading(false);
        return;
    }
    const challengesCollectionRef = collection(db, 'challenges');
    const populateDataIfNeeded = async () => {
        const snapshot = await getDocs(challengesCollectionRef);
        if (snapshot.empty) {
            console.log("Firestore 'challenges' collection is empty. Populating with mock data.");
            const batch = writeBatch(db);
            ALL_CHALLENGES_DATA.forEach((challenge) => {
                if (!challenge.id) {
                    console.warn('Challenge data is missing id, skipping:', challenge);
                    return;
                }
                const docRef = doc(db, "challenges", challenge.id);
                batch.set(docRef, challenge);
            });
            await batch.commit();
            console.log("Finished populating data.");
        }
    };
    
    populateDataIfNeeded().catch(console.error);

    const unsubscribe = onSnapshot(challengesCollectionRef, (snapshot) => {
      const challengesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setChallenges(challengesData);
      setLoading(false);
    }, (error) => {
        console.error("Error fetching data from Firestore:", error);
        console.log("Falling back to mock data.");
        setChallenges(ALL_CHALLENGES_DATA);
        setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  const filteredAndSortedChallenges = React.useMemo(() => {
    let filtered = challenges.filter(c => c.challengeType === filters.challengeType);

    if (selectedFirm) {
        filtered = filtered.filter(c => c.firmId === selectedFirm);
    }
    
    if (filters.customSizeRange) {
      const [min, max] = filters.customSizeRange;
      filtered = filtered.filter(c => c.accountSize >= min && c.accountSize <= max);
    } else if (filters.accountSize.length > 0) {
        filtered = filtered.filter(c => filters.accountSize.includes(c.accountSize));
    }

    if (filters.steps.length > 0) {
        filtered = filtered.filter(c => {
            if (!c) return false;
            const stepMatch = filters.steps.includes(c.steps);
            const instantMatch = filters.steps.includes('Instant') && c.isInstant;
            return stepMatch || instantMatch;
        });
    }
    
    const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

    filtered.sort((a, b) => {
        if (!sortConfig.key) return 0;

        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];
        
        // Handle special price key
        if (sortConfig.key === 'price') {
            aValue = a.price * (1 - (filters.applyDiscount ? (a.promoDiscountPercent || 0) / 100 : 0));
            bValue = b.price * (1 - (filters.applyDiscount ? (b.promoDiscountPercent || 0) / 100 : 0));
        }

        // Default to -Infinity if value is null/undefined for numeric sorts
        if (typeof aValue === 'number' || typeof bValue === 'number') {
            aValue = aValue ?? -Infinity;
            bValue = bValue ?? -Infinity;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            const comparison = collator.compare(aValue, bValue);
            return sortConfig.direction === 'ascending' ? comparison : -comparison;
        }

        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        
        return 0;
    });
    return filtered;
  }, [challenges, selectedFirm, filters, sortConfig]);

  const totalPages = Math.ceil(filteredAndSortedChallenges.length / ROWS_PER_PAGE);
  const paginatedChallenges = filteredAndSortedChallenges.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [filters, selectedFirm]);


  const requestSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center text-white font-sans p-4">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading Challenge Data...
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-white">
      <div className="max-w-full mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">Compare Prop Firms</h1>
          <p className="mt-3 text-lg text-gray-400 max-w-2xl mx-auto">The EZ-iest Way to Compare Prop Firm Challenges.</p>
        </header>

        <main>
          <ControlBar 
            filters={filters}
            setFilters={setFilters}
            selectedFirm={selectedFirm}
            setSelectedFirm={setSelectedFirm}
            filteredCount={filteredAndSortedChallenges.length}
            totalCount={challenges.filter(c => c.challengeType === filters.challengeType).length}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
          />
          <ChallengeTable 
            challenges={paginatedChallenges} 
            requestSort={requestSort}
            sortConfig={sortConfig}
            applyDiscount={filters.applyDiscount}
            visibleColumns={visibleColumns}
          />
           {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
        
        <section className="my-12">
            <FirmVsFirmSelector firms={mockPropFirms} onCompare={handleSetComparisonFirms} />
        </section>

        {comparisonFirms && (
            <FirmVsFirmSection firm1={comparisonFirms.firm1} firm2={comparisonFirms.firm2} />
        )}
      </div>
    </div>
  );
}

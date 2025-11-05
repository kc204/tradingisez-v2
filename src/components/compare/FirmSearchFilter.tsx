
'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import type { PropFirm } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, ChevronsUpDown, Search, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export interface Filters {
  searchTerm?: string;
  platforms?: string[];
  fundingModel?: string;
  maxAccountSize?: number;
  accountSize?: number;
}

interface FirmSearchFilterProps {
  allFirms: PropFirm[];
  onFilterChange: (filters: Filters) => void;
}

const FirmSearchFilter = ({ allFirms, onFilterChange }: FirmSearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [fundingModel, setFundingModel] = useState('all');
  const [accountSize, setAccountSize] = useState('all');
  
  const [openPlatformPopover, setOpenPlatformPopover] = useState(false);

  // Debounce search term
  useEffect(() => {
    onFilterChange({ 
      searchTerm, 
      platforms: selectedPlatforms.length > 0 ? selectedPlatforms : undefined, 
      fundingModel: fundingModel === 'all' ? undefined : fundingModel,
      accountSize: accountSize === 'all' ? undefined : Number(accountSize),
    });
  }, [searchTerm, selectedPlatforms, fundingModel, accountSize, onFilterChange]);


  const allPlatforms = useMemo(() => {
    const platforms = new Set<string>();
    allFirms.forEach(firm => firm.platforms?.forEach(p => platforms.add(p)));
    return Array.from(platforms).sort();
  }, [allFirms]);

  const challengeTypes = [
    '1-Step',
    '2-Step',
    '3-Step',
    '4-Step',
    'Instant Funding'
  ];
  
  const allAccountSizes = useMemo(() => {
    const sizes = new Set<number>();
    allFirms.forEach(firm => {
        firm.accountTiers?.forEach(tier => sizes.add(tier.size));
    });
    return Array.from(sizes).sort((a,b) => a - b).map(size => ({
        value: String(size),
        label: `$${size.toLocaleString()}`
    }));
  }, [allFirms]);

  const resetFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedPlatforms([]);
    setFundingModel('all');
    setAccountSize('all');
    onFilterChange({});
  }, [onFilterChange]);

  return (
    <Card className="mb-8 p-3 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-center">
        {/* Search by Name */}
        <div className="relative lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by Firm Name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-9"
          />
        </div>
        
        {/* Platforms */}
        <Popover open={openPlatformPopover} onOpenChange={setOpenPlatformPopover}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={openPlatformPopover} className="w-full justify-between h-9 font-normal">
              <span className="truncate">
                {selectedPlatforms.length > 0 ? `Platforms: ${selectedPlatforms.join(', ')}` : "All Platforms"}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search platform..." />
              <CommandList>
                <CommandEmpty>No platform found.</CommandEmpty>
                <CommandGroup>
                  {allPlatforms.map((platform) => (
                    <CommandItem
                      key={platform}
                      value={platform}
                      onSelect={(currentValue) => {
                        setSelectedPlatforms(prev => 
                          prev.includes(platform) ? prev.filter(p => p !== platform) : [...prev, platform]
                        );
                        setOpenPlatformPopover(false);
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", selectedPlatforms.includes(platform) ? "opacity-100" : "opacity-0")} />
                      {platform}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Funding Model */}
        <Select value={fundingModel} onValueChange={setFundingModel}>
          <SelectTrigger className="h-9 font-normal">
            <SelectValue placeholder="All Funding Models" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Funding Models</SelectItem>
            {challengeTypes.map(model => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        {/* Account Size */}
         <Select value={accountSize} onValueChange={setAccountSize}>
          <SelectTrigger className="h-9 font-normal">
            <SelectValue placeholder="All Account Sizes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Account Sizes</SelectItem>
            {allAccountSizes.map(option => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Reset Button */}
        <Button onClick={resetFilters} variant="ghost" className="h-9">
          <X className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>
    </Card>
  );
};

export default FirmSearchFilter;


'use client';

import type { PropFirm } from '@/lib/types';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import FirmSearchFilter, { type Filters } from '@/components/compare/FirmSearchFilter';
import ComparisonTable from '@/components/compare/ComparisonTable';

interface ExpandedFirmTier {
  firm: PropFirm;
  tier: PropFirm['accountTiers'][0];
}

export default function ComparisonPageClient({ allFirms }: { allFirms: PropFirm[] }) {
  const [filters, setFilters] = useState<Filters>({});

  const expandedFirms = useMemo(() => {
    const expanded: ExpandedFirmTier[] = [];
    allFirms.forEach(firm => {
      if (firm.accountTiers && firm.accountTiers.length > 0) {
        firm.accountTiers.forEach(tier => {
          expanded.push({ firm, tier });
        });
      } else {
        // If a firm has no tiers, create a placeholder row
        expanded.push({
          firm,
          tier: { 
            id: firm.id + '-default',
            size: firm.minAccountSize || 0,
            evaluationFee: firm.minChallengeCost || 0,
          },
        });
      }
    });
    return expanded;
  }, [allFirms]);


  const filteredFirms = useMemo(() => {
    return expandedFirms.filter(item => {
      // Search term filter (on firm name)
      if (filters.searchTerm) {
        if (!item.firm.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
          return false;
        }
      }
      // Platform filter (on firm platforms)
      if (filters.platforms && filters.platforms.length > 0) {
        if (!filters.platforms.every(p => item.firm.platforms?.includes(p))) {
          return false;
        }
      }
      // Funding model filter (on firm funding models)
      if (filters.fundingModel) {
        if (!item.firm.fundingModels?.includes(filters.fundingModel)) {
          return false;
        }
      }
      // Account size filter (on tier size)
      if (filters.accountSize) {
        if (item.tier.size !== filters.accountSize) {
          return false;
        }
      }
      // Max account size filter (on firm max account size)
      if (filters.maxAccountSize) {
        if (!item.firm.maxAccountSize || item.firm.maxAccountSize < filters.maxAccountSize) {
          return false;
        }
      }
      return true;
    });
  }, [expandedFirms, filters]);


  return (
    <>
      <FirmSearchFilter allFirms={allFirms} onFilterChange={setFilters} />
      {filteredFirms.length > 0 ? (
        <ComparisonTable items={filteredFirms} />
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">No firms available for comparison matching your criteria.</p>
      )}
    </>
  );
}

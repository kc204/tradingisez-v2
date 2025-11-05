
'use client';

import { useState } from 'react';
import FirmCard from '@/components/propfirms/FirmCard';
import { mockPropFirms } from '@/lib/mockData';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import type { PropFirm } from '@/lib/types';
import type { Metadata } from 'next';

// Note: Cannot export metadata from a client component.
// This would need to be moved to a parent Server Component if dynamic metadata is required.
// export const metadata: Metadata = {
//   title: 'All Prop Firms',
//   description: 'Browse and discover all prop trading firms reviewed by TradingisEZ. Find the funding opportunity that matches your trading style.',
//   alternates: {
//     canonical: '/firms',
//   },
//   openGraph: {
//     title: 'All Prop Firms | TradingisEZ',
//     description: 'Browse and discover all prop trading firms reviewed by TradingisEZ.',
//     url: '/firms',
//   },
// };

export default function FirmsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFirms = mockPropFirms.filter((firm: PropFirm) =>
    firm.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <section className="text-center py-6 md:py-10 bg-background rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Discover Prop Firms</h1>
        <p className="text-md md:text-lg text-muted-foreground">Find the funding opportunity that matches your trading style.</p>
      </section>
      
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by firm name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11 rounded-full"
          />
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFirms.map(firm => (
            <FirmCard key={firm.id} firm={firm} />
          ))}
        </div>
        {filteredFirms.length === 0 && (
          <p className="text-center text-muted-foreground text-lg py-10">No prop firms found matching your criteria.</p>
        )}
      </section>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import type { PropFirm } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface FirmVsFirmSelectorProps {
  firms: PropFirm[];
  onCompare: (firm1Slug: string, firm2Slug: string) => void;
}

const FirmVsFirmSelector: React.FC<FirmVsFirmSelectorProps> = ({ firms, onCompare }) => {
  const [firm1Slug, setFirm1Slug] = useState<string>('');
  const [firm2Slug, setFirm2Slug] = useState<string>('');

  const handleCompareClick = () => {
    if (firm1Slug && firm2Slug && firm1Slug !== firm2Slug) {
      onCompare(firm1Slug, firm2Slug);
    }
  };

  const firmOptions = firms.map(firm => ({
    value: firm.slug,
    label: firm.name,
    logoUrl: firm.logoUrl
  }));

  const renderSelectItem = (firm: { value: string; label: string; logoUrl: string; }) => (
    <SelectItem key={firm.value} value={firm.value}>
      <div className="flex items-center gap-2">
        <Image src={firm.logoUrl} alt={firm.label} width={20} height={20} className="rounded-sm" />
        <span>{firm.label}</span>
      </div>
    </SelectItem>
  );

  return (
    <Card className="bg-card/60 border-border/40 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">Firm Face-Off</CardTitle>
        <CardDescription className="text-muted-foreground">Select two firms to see a detailed side-by-side comparison.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Select value={firm1Slug} onValueChange={setFirm1Slug}>
          <SelectTrigger className="w-full md:w-[250px] bg-background">
            <SelectValue placeholder="Select Firm 1" />
          </SelectTrigger>
          <SelectContent>
            {firmOptions.filter(f => f.value !== firm2Slug).map(renderSelectItem)}
          </SelectContent>
        </Select>

        <div className="text-xl font-bold text-primary transform md:-rotate-12 my-2 md:my-0">VS</div>

        <Select value={firm2Slug} onValueChange={setFirm2Slug}>
          <SelectTrigger className="w-full md:w-[250px] bg-background">
            <SelectValue placeholder="Select Firm 2" />
          </SelectTrigger>
          <SelectContent>
             {firmOptions.filter(f => f.value !== firm1Slug).map(renderSelectItem)}
          </SelectContent>
        </Select>

        <Button 
          onClick={handleCompareClick} 
          disabled={!firm1Slug || !firm2Slug || firm1Slug === firm2Slug}
          className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
        >
          Compare
        </Button>
      </CardContent>
    </Card>
  );
};

export default FirmVsFirmSelector;

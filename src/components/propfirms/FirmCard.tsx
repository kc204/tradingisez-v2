
'use client';

import type { PropFirm } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

interface FirmCardProps {
  firm: PropFirm;
}

const FirmCard = ({ firm }: FirmCardProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
            <div className="w-20 h-20 relative flex-shrink-0 mb-2 mr-4">
            {isMounted ? (
              <Image 
                src={firm.logoUrl} 
                alt={`${firm.name} logo`} 
                layout="fill" 
                objectFit="contain" 
                className="rounded-lg object-contain border-2 border-white/10"
                data-ai-hint="company logo"
              />
              ) : (
                <div className="w-full h-full bg-muted rounded-lg animate-pulse" />
              )}
          </div>
          {firm.isFeatured && (
            <Badge variant="default" className="absolute top-4 right-4 bg-accent text-accent-foreground"> {/* Use accent for featured badge */}
              <TrendingUp className="w-3 h-3 mr-1" /> Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-semibold">{firm.name}</CardTitle>
        {firm.offerBadgeLabel && (
          <Badge variant="secondary" className="mt-1 w-fit">{firm.offerBadgeLabel}</Badge> // Secondary for offer badge (Amber/Orange)
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm mb-3 min-h-[3rem] line-clamp-3">{firm.briefDescription}</CardDescription>
        <div className="space-y-1 text-xs text-muted-foreground">
          {firm.keyInfoSnippets?.slice(0, 2).map(snippet => (
             <p key={snippet.label}><span className="font-medium text-foreground">{snippet.label}:</span> {snippet.value}</p>
          ))}
        </div>
        {firm.rating && (
          <div className="flex items-center mt-3 text-sm">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" /> {/* Keeping yellow for stars, or could use --secondary */}
            <span className="font-semibold">{firm.rating.toFixed(1)}</span>
            <span className="text-muted-foreground ml-1">/ 5.0</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
          <Link href={`/firms/${firm.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FirmCard;

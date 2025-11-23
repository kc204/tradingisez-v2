
'use client';

import { mockGlobalOffers, mockPropFirms } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const GlobalOfferBar = () => {
  const pathname = usePathname();
  if (pathname.startsWith('/crypto')) {
    return null;
  }

  const activeOffersWithFirms = mockGlobalOffers
    .filter(offer => offer.isActive)
    .map(offer => {
      const firm = mockPropFirms.find(f => offer.text.toLowerCase().includes(f.name.toLowerCase().split(' ')[0]));
      return {
        ...offer,
        firmLogo: firm?.logoUrl,
        firmSlug: firm?.slug,
      };
    });

  if (activeOffersWithFirms.length === 0) {
    return null;
  }

  const duplicatedOffers = [...activeOffersWithFirms, ...activeOffersWithFirms];

  return (
    <>
      <div className="h-9 w-full md:hidden" aria-hidden="true" />
      <div data-global-offer-bar="true" className="bg-primary text-primary-foreground py-2 text-sm fixed md:sticky top-0 z-50 shadow-md w-full overflow-x-hidden group">
        <div className={cn("flex w-max animate-marquee group-hover:[animation-play-state:paused]")}>
          <div className="flex">
            {duplicatedOffers.map((offer, index) => (
              <Link
                key={`${offer.id}-${index}`}
                href={offer.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white inline-flex items-center text-white mx-4 flex-shrink-0"
              >
                {offer.firmLogo && (
                  <Image
                    src={offer.firmLogo}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2 rounded-sm object-contain"
                  />
                )}
                <span className="font-medium whitespace-nowrap">{offer.text}</span>
                <ChevronRight className="ml-1 h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
          <div className="flex" aria-hidden="true">
            {duplicatedOffers.map((offer, index) => (
              <Link
                key={`duplicate-${offer.id}-${index}`}
                href={offer.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-white inline-flex items-center text-white mx-4 flex-shrink-0"
              >
                {offer.firmLogo && (
                  <Image
                    src={offer.firmLogo}
                    alt=""
                    width={20}
                    height={20}
                    className="w-5 h-5 mr-2 rounded-sm object-contain"
                  />
                )}
                <span className="font-medium whitespace-nowrap">{offer.text}</span>
                <ChevronRight className="ml-1 h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GlobalOfferBar;


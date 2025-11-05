
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react'; 
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (pathname.startsWith('/crypto')) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  const mainSiteFooterLinks = [
    { href: '/terms-of-service', label: 'Terms & Privacy' },
    { href: '/site-map', label: 'Sitemap' },
  ];

  const quickLinks = [
    { href: '/firms', label: 'All Prop Firms' },
    { href: '/compare', label: 'Compare Firms' },
    { href: '/free-resources', label: 'Free Resources' },
    { href: '/about', label: 'About Us' }, 
  ];
  
  return (
    <>
      <footer className="py-8 mt-auto bg-muted text-muted-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tradingis<span className="text-accent">EZ</span></h3>
              <p className="text-sm">Your trusted resource for finding the best prop firms and trading opportunities.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold text-foreground mb-2">Legal</h4>
              <ul className="space-y-1">
                {mainSiteFooterLinks.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
             {isMounted && (
              <div className="flex flex-col items-center md:items-end">
                 {/* Intentionally empty - NeonAstronautTrigger was here */}
              </div>
            )}
          </div>
          <div className="text-center text-sm border-t border-border pt-8">
            <p>&copy; {currentYear} TradingisEZ. All rights reserved.</p>
            <p className="mt-1">
              Disclaimer: Trading involves substantial risk of loss and is not suitable for every investor.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

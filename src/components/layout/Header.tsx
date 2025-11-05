
'use client';

import Link from 'next/link';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const mainSiteNavLinks = [
  { href: '/', label: 'Home' },
  {
    href: '/firms',
    label: 'Prop Firms',
    dropdown: [
      { href: '/firms', label: 'All Firms' },
      { href: '/compare-prop-firms', label: 'Compare Firms' },
    ],
  },
  { href: '/free-resources', label: 'Free Resources',
    dropdown: [
        { href: '/free-resources', label: 'Overview' },
        { href: '/free-resources/audiobooks', label: 'Audiobooks' },
        { href: '/free-resources/al-brooks-course', label: 'Al Brooks Free Course' },
      ],
  },
];


const HEADER_ALWAYS_VISIBLE_THRESHOLD = 64;
const SCROLL_DELTA_THRESHOLD = 5;

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // Store the last non-crypto path
  useEffect(() => {
    if (pathname && !pathname.startsWith('/crypto')) {
      sessionStorage.setItem('lastNonCryptoPath', pathname);
    }
  }, [pathname]);

  useEffect(() => {
    setMounted(true); 
    
    if (typeof window === 'undefined') return;

    const initializeScrollState = () => {
      lastScrollY.current = window.scrollY;
      if (window.scrollY > HEADER_ALWAYS_VISIBLE_THRESHOLD) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    initializeScrollState(); 

    const handleScrollLogic = () => {
      const currentScrollY = window.scrollY;
      const localLastScrollY = lastScrollY.current;

      if (Math.abs(currentScrollY - localLastScrollY) < SCROLL_DELTA_THRESHOLD) {
        if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
          setIsVisible(true);
        }
        return;
      }

      if (currentScrollY < HEADER_ALWAYS_VISIBLE_THRESHOLD) {
        setIsVisible(true);
      } else {
        if (currentScrollY > localLastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScrollLogic, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScrollLogic);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  if (pathname.startsWith('/crypto')) {
    return null;
  }

  const currentNavLinks = mainSiteNavLinks;

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (label: string, isMobileLink: boolean) => {
    if (!isMobileLink && mounted) {
      clearHoverTimeout();
      setOpenDropdown(label);
    }
  };

  const handleMouseLeave = (isMobileLink: boolean) => {
    if (!isMobileLink && mounted) {
      clearHoverTimeout();
      hoverTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 100);
    }
  };

  const renderNavLinks = (isMobileLink: boolean) =>
    currentNavLinks.map((link) =>
      link.dropdown ? (
        <DropdownMenu
          key={link.label}
          open={!isMobileLink && mounted ? openDropdown === link.label : undefined}
          onOpenChange={(isOpen) => {
            if (!isMobileLink && mounted) {
              if (isOpen) {
                setOpenDropdown(link.label);
              } else {
                if (openDropdown === link.label) {
                  setOpenDropdown(null);
                }
              }
            }
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "data-[state=open]:bg-primary data-[state=open]:text-primary-foreground",
                isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground'
                              : 'text-header-foreground hover:text-white hover:bg-primary/80 group'
              )}
              onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
              onMouseLeave={() => handleMouseLeave(isMobileLink)}
              onClick={() => {
                if (!isMobileLink) {
                  setOpenDropdown(openDropdown === link.label ? null : link.label);
                }
              }}
            >
              {link.label}
              {!isMobileLink && mounted && (
                <ChevronDown className={cn(
                  "ml-1 h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180 text-header-foreground"
                )} />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-popover text-popover-foreground" 
            onMouseEnter={() => handleMouseEnter(link.label, isMobileLink)}
            onMouseLeave={() => handleMouseLeave(isMobileLink)}
          >
            {link.dropdown.map((item) => (
              <DropdownMenuItem
                key={item.label}
                asChild
                className="text-popover-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    if (isMobileLink) setMobileMenuOpen(false);
                    if (!isMobileLink && mounted) {
                      clearHoverTimeout();
                      setOpenDropdown(null);
                    }
                  }}
                >
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button
          key={link.label}
          variant="ghost"
          asChild
          className={cn(
            isMobileLink ? 'w-full justify-start text-foreground hover:text-foreground'
                          : 'text-header-foreground hover:text-white hover:bg-primary/80'
          )}
        >
          <Link href={link.href} onClick={() => {
            if (isMobileLink) setMobileMenuOpen(false);
            if (!isMobileLink && mounted) {
                clearHoverTimeout();
                setOpenDropdown(null);
            }
          }}>
            {link.label}
          </Link>
        </Button>
      )
    );

  const showCryptoLink = process.env.NEXT_PUBLIC_SHOW_CRYPTO_LINK === 'true';

  return (
    <header
      className={cn(
        "shadow-lg sticky z-40",
        "top-[2.25rem]", 
        "transition-[transform,opacity] duration-300 ease-out",
        "bg-header-background text-header-foreground", 
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-header-foreground hover:text-header-foreground transition-transform duration-300 ease-in-out hover:scale-105" 
          onClick={() => {
            if (mobileMenuOpen) setMobileMenuOpen(false);
            if (openDropdown) setOpenDropdown(null);
          }}
        >
          Tradingis<span className="text-accent">EZ</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false)}
        </nav>

        <div className="md:hidden flex items-center">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-header-foreground hover:bg-primary/80 hover:text-white"
              >
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-6 bg-card text-card-foreground border-border"
            >
              <SheetTitle className="sr-only">Main Menu</SheetTitle> 
              <div className="flex justify-between items-center mb-6">
                  <Link
                  href="/"
                  className="text-2xl font-bold text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                    Tradingis<span className="text-accent">EZ</span>
                  </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-card-foreground"
                >
                  <X />
                </Button>
              </div>
              <nav className="flex flex-col space-y-3">
                {renderNavLinks(true)}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

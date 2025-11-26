'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import FirmCard from '@/components/propfirms/FirmCard';
import { mockPropFirms } from '@/lib/mockData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from "@/lib/utils";

interface FeaturedFirmsCarouselProps {
    className?: string;
    desktopBasis?: string;
    mobileBasis?: string;
    variant?: 'default' | 'hero';
}

const FeaturedFirmsCarousel = ({
    className,
    desktopBasis = "md:basis-1/2 lg:basis-1/3",
    mobileBasis = "basis-[75%]",
    variant = "default"
}: FeaturedFirmsCarouselProps) => {
    const featuredFirms = mockPropFirms.filter(f => f.isFeatured);
    const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
    const isMobile = useIsMobile();
    const [api, setApi] = useState<CarouselApi | undefined>();
    const [scale, setScale] = useState<number[]>([]);
    const [opacity, setOpacity] = useState<number[]>([]);

    const onSelect = useCallback((api: CarouselApi) => {
        if (!api) return;
        const scrollSnaps = api.scrollSnapList();
        const selectedSnap = api.selectedScrollSnap();

        const newScale = scrollSnaps.map((_, index) => (index === selectedSnap ? 1 : 0.8));
        const newOpacity = scrollSnaps.map((_, index) => (index === selectedSnap ? 1 : 0.5));

        setScale(newScale);
        setOpacity(newOpacity);
    }, []);

    useEffect(() => {
        if (!api) return;
        onSelect(api);
        api.on("select", onSelect);
        return () => {
            api.off("select", onSelect);
        };
    }, [api, onSelect]);

    if (isMobile === undefined) {
        return null;
    }

    if (!isMobile) {
        return (
            <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[autoplayPlugin.current]}
                className={cn("w-full", className)}
            >
                <CarouselContent>
                    {featuredFirms.map((firm) => (
                        <CarouselItem key={firm.id} className={desktopBasis}>
                            <div className="p-1 h-full">
                                <FirmCard firm={firm} variant={variant} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className={cn(
                    "hidden md:flex",
                    variant === 'hero'
                        ? "-left-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white h-10 w-10"
                        : ""
                )} />
                <CarouselNext className={cn(
                    "hidden md:flex",
                    variant === 'hero'
                        ? "-right-12 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white h-10 w-10"
                        : ""
                )} />
            </Carousel>
        );
    }

    return (
        <>
            <style>{`
            .coverflow .embla__slide {
                transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }
        `}</style>
            <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden [perspective:1000px]">
                <Carousel
                    setApi={setApi}
                    opts={{ align: "center", loop: true, containScroll: false }}
                    plugins={[autoplayPlugin.current]}
                    className="w-full coverflow"
                >
                    <CarouselContent className="-ml-0">
                        {featuredFirms.map((firm, index) => (
                            <CarouselItem key={firm.id} className={cn(mobileBasis, "pl-0")}>
                                <div
                                    className="p-1 h-full"
                                    style={{
                                        transform: `scale(${scale[index] || 0.8})`,
                                        opacity: opacity[index] || 0.5,
                                    }}
                                >
                                    <FirmCard firm={firm} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}

export default FeaturedFirmsCarousel;

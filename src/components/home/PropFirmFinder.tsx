'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Search, TrendingUp, BarChart2, Zap } from 'lucide-react';
import FeaturedFirmsCarousel from '@/components/home/FeaturedFirmsCarousel';

interface PropFirmFinderProps {
    onSearch: (filters: {
        tradingStyle: string;
        capital: number[]; // Changed to array for min-max range
        experience: string;
    }) => void;
}

export default function PropFirmFinder({ onSearch }: PropFirmFinderProps) {
    const [tradingStyle, setTradingStyle] = useState('Day Trading');
    const [capital, setCapital] = useState([25000, 100000]); // Min-Max range
    const [experience, setExperience] = useState('');

    const handleSearch = () => {
        onSearch({
            tradingStyle,
            capital: capital, // Pass the full range [min, max]
            experience,
        });
    };

    const formatCurrency = (value: number) => {
        if (value >= 1000000) return '$1M+';
        return `$${(value / 1000).toFixed(0)}k`;
    };

    return (

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Column: Text & Form */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perfect Prop Firm</span>. <br />
                            Get Funded.
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl">
                            Stop wasting time on the wrong challenges. Tell us your trading style, and we'll match you with the best firms instantly.
                        </p>
                    </div>

                    {/* Finder Card */}
                    <div className="bg-[#1A1D24]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                        <div className="space-y-6">

                            {/* Trading Style */}
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-gray-300">Your Trading Style</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {['Day Trading', 'Swing Trading', 'Scalping'].map((style) => (
                                        <button
                                            key={style}
                                            onClick={() => setTradingStyle(style)}
                                            className={cn(
                                                "relative px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 border",
                                                tradingStyle === style
                                                    ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                                            )}
                                        >
                                            {style}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Capital Slider */}
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <label className="font-medium text-gray-300">Capital Range</label>
                                        <span className="text-primary font-bold">{formatCurrency(capital[0])} - {formatCurrency(capital[1])}</span>
                                    </div>
                                    <Slider
                                        value={capital}
                                        onValueChange={setCapital}
                                        min={10000}
                                        max={1000000}
                                        step={10000}
                                        minStepsBetweenThumbs={1}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500">
                                        <span>$10k</span>
                                        <span>$1M+</span>
                                    </div>
                                </div>

                                {/* Experience Dropdown */}
                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-gray-300">Experience Level</label>
                                    <Select value={experience} onValueChange={setExperience}>
                                        <SelectTrigger className="w-full bg-white/5 border-white/10 text-white h-12 rounded-xl focus:ring-primary">
                                            <SelectValue placeholder="Select Experience" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1A1D24] border-white/10 text-gray-300" sideOffset={5}>
                                            <SelectItem value="beginner">Beginner (1 Step)</SelectItem>
                                            <SelectItem value="intermediate">Intermediate (2 Step)</SelectItem>
                                            <SelectItem value="pro">Pro (Instant/Direct)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Button
                                onClick={handleSearch}
                                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold h-14 rounded-xl text-lg shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Find Matches
                            </Button>

                        </div>
                    </div>
                </div>

                {/* Right Column: Visual/Stats (Optional, matching the 'premium' feel) */}
                <div className="hidden lg:block lg:col-span-5 relative h-full">
                    <div className="h-full flex flex-col justify-end">
                        <FeaturedFirmsCarousel desktopBasis="basis-full" variant="hero" />
                    </div>
                </div>

            </div>
        </div>
    );
}

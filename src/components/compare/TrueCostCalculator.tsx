
'use client';

import type { PropFirm } from '@/lib/types';
import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';


interface TrueCostCalculatorProps {
  firms?: PropFirm[]; // Used on compare page
  singleFirm?: PropFirm; // Used on firm detail page
}

interface CalculatedCosts {
  evaluationFee: number;
  activationFee: number;
  resetFee: number;
  totalCost: number;
 originalTotalCost?: number; // To store the total before discount for comparison
}

export default function TrueCostCalculator({ firms = [], singleFirm }: TrueCostCalculatorProps) {
  const isSingleFirmMode = !!singleFirm;

  const [selectedFirmIdForMultiMode, setSelectedFirmIdForMultiMode] = useState<string | null>(
    !isSingleFirmMode && firms.length > 0 ? firms[0].id : null
  );
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  const [includeResetFee, setIncludeResetFee] = useState(false);
  const [showDiscountedPrices, setShowDiscountedPrices] = useState(false);
  const [calculatedCosts, setCalculatedCosts] = useState<CalculatedCosts | null>(null);

  const activeFirm = useMemo(() => {
    if (isSingleFirmMode) return singleFirm;
    return firms.find(f => f.id === selectedFirmIdForMultiMode) || null;
  }, [isSingleFirmMode, singleFirm, firms, selectedFirmIdForMultiMode]);

  const availableTiers = useMemo(() => {
    return activeFirm?.accountTiers || [];
  }, [activeFirm]);

  const selectedTier = useMemo(() => {
    return availableTiers.find(t => t.id === selectedTierId) || null;
  }, [availableTiers, selectedTierId]);

  // Effect to reset tier and costs if firm changes in multi-firm mode
  useEffect(() => {
    if (!isSingleFirmMode) {
      setSelectedTierId(null);
      setCalculatedCosts(null);
      setIncludeResetFee(false);
      setShowDiscountedPrices(false);
    }
  }, [selectedFirmIdForMultiMode, isSingleFirmMode]);

  // Effect to reset tier selection when singleFirm prop changes (or on initial load in singleFirmMode)
  useEffect(() => {
    if (isSingleFirmMode) {
      setSelectedTierId(null); // Force re-selection of tier for the current single firm
      setCalculatedCosts(null);
      setIncludeResetFee(false);
      setShowDiscountedPrices(false);
    }
  }, [singleFirm, isSingleFirmMode]); // React to changes in singleFirm prop

  useEffect(() => {
    if (activeFirm && selectedTier) {
      const discount = showDiscountedPrices && selectedTier.discountPercentage > 0 ? selectedTier.discountPercentage : 0;

      let evalFee = selectedTier.evaluationFee || 0;
      let activFee = selectedTier.activationFee || 0;
      let rstFee = 0;

      if (includeResetFee && selectedTier.resetFee && selectedTier.resetFee > 0) {
        rstFee = selectedTier.resetFee;
      }
      
      const originalTotal = evalFee + activFee + rstFee;

      // Apply discount to evaluation and reset fees
      // Discount only applies to evaluation fee
      const discountedEvalFee = evalFee * (1 - discount);

      // Activation fee is never discounted
      const finalActivFee = activFee;

      const discountedRstFee = rstFee; // Reset fee is not discounted
      const total = discountedEvalFee + finalActivFee + rstFee; // Reset fee is not discounted

      setCalculatedCosts({
 evaluationFee: discountedEvalFee,
 activationFee: finalActivFee,
 resetFee: discountedRstFee,
        totalCost: total,
 originalTotalCost: discount > 0 ? originalTotal : undefined // Store original total if discount applied
      });
    } else {
      setCalculatedCosts(null);
 setShowDiscountedPrices(false); // Reset discount checkbox if no tier selected
    }
  }, [activeFirm, selectedTier, includeResetFee, showDiscountedPrices]);

  const canIncludeReset = selectedTier?.resetFee !== undefined && selectedTier.resetFee > 0;

  const ctaButtonDisabled = !activeFirm || !selectedTier;
  let ctaButtonText = "Learn More";
  let ctaHref = "#";
  let ctaTarget: string | undefined = undefined;

  if (activeFirm && selectedTier) {
    if (isSingleFirmMode) {
      ctaButtonText = `Visit ${activeFirm.name}`;
      ctaHref = activeFirm.affiliateLink;
      ctaTarget = "_blank";
    } else {
      ctaButtonText = "Learn More";
      ctaHref = `/firms/${activeFirm.slug}`;
    }
  }


  return (
    <Card className="w-full shadow-xl mt-8"> {/* Max-width controlled by parent */}
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-bold text-foreground">
          {isSingleFirmMode && activeFirm ? `${activeFirm.name} - Cost Calculator` : "True Cost of Funding Calculator"}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {isSingleFirmMode && activeFirm ? `Estimate initial costs for ${activeFirm.name} account tiers.` : "Select a firm and account tier to estimate your initial upfront costs, including optional reset fees."}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isSingleFirmMode && firms.length > 0 && (
          <div>
            <Label htmlFor="firm-select" className="mb-2 block text-sm font-medium text-foreground">Select Prop Firm</Label>
            <Select
              value={selectedFirmIdForMultiMode || undefined}
              onValueChange={(value) => setSelectedFirmIdForMultiMode(value)}
            >
              <SelectTrigger id="firm-select" className="w-full">
                <SelectValue placeholder="Choose a firm..." />
              </SelectTrigger>
              <SelectContent>
                {firms.map((firm) => (
                  <SelectItem key={firm.id} value={firm.id}>
                    {firm.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div>
          <Label htmlFor="tier-select" className="mb-2 block text-sm font-medium text-foreground">
            {isSingleFirmMode && activeFirm ? `Select ${activeFirm.name} Account Tier` : "Select Account Tier"}
          </Label>
          <Select
            value={selectedTierId || undefined}
            onValueChange={(value) => setSelectedTierId(value)}
            disabled={!activeFirm || availableTiers.length === 0}
          >
            <SelectTrigger id="tier-select" className="w-full">
              <SelectValue placeholder="Choose an account tier..." />
            </SelectTrigger>
            <SelectContent>
              {availableTiers.map((tier) => (
                <SelectItem key={tier.id} value={tier.id}>
                  {tier.name || `$${tier.size.toLocaleString()} Account`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {activeFirm && availableTiers.length === 0 && (
             <p className="text-xs text-muted-foreground mt-1">No specific account tiers data available for {activeFirm.name} for cost calculation.</p>
          )}
        </div>

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox
            id={`include-reset-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}-${selectedTier?.id || 'default'}`}
            checked={includeResetFee}
            onCheckedChange={(checked) => setIncludeResetFee(Boolean(checked))}
            disabled={!canIncludeReset}
          />
          <Label
            htmlFor={`include-reset-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}-${selectedTier?.id || 'default'}`}
            className={`text-sm font-medium ${!canIncludeReset ? 'text-muted-foreground/50 cursor-not-allowed' : 'text-foreground cursor-pointer'}`}
          >
            Include one typical Reset Fee (if applicable: {selectedTier?.resetFee ? `$${selectedTier.resetFee}` : 'N/A'})
          </Label>
        </div>

         <div className="flex items-center space-x-2">
          <Checkbox
            id={`apply-discount-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}-${selectedTier?.id || 'default'}`}
            checked={showDiscountedPrices}
            onCheckedChange={(checked) => setShowDiscountedPrices(Boolean(checked))}
            disabled={!selectedTier?.discountPercentage || selectedTier.discountPercentage <= 0}
          />
          <Label
            htmlFor={`apply-discount-${isSingleFirmMode && activeFirm ? activeFirm.id : ''}-${selectedTier?.id || 'default'}`}
            className={`text-sm font-medium ${(!selectedTier?.discountPercentage || selectedTier.discountPercentage <= 0) ? 'text-muted-foreground/50 cursor-not-allowed' : 'text-foreground cursor-pointer'}`}
          >
            {`Apply Discount (if available${selectedTier?.discountPercentage && selectedTier.discountPercentage > 0 ? `: ${selectedTier.discountPercentage * 100}%` : ''})`}

          </Label>
        </div>
      </CardContent>

      {calculatedCosts && selectedTier && activeFirm && (
        <CardFooter className="flex flex-col items-start space-y-4 border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-foreground">Estimated Cost Breakdown:</h3>
          <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Evaluation Fee:</span>
              <span className="font-medium text-foreground">
                {showDiscountedPrices && selectedTier.discountPercentage > 0 && selectedTier.evaluationFee !== undefined && selectedTier.evaluationFee > 0 ? (
                   <><span className="line-through text-muted-foreground mr-2">${selectedTier.evaluationFee.toLocaleString()}</span><span>${calculatedCosts.evaluationFee.toLocaleString()}</span></>
                ) : `$${calculatedCosts.evaluationFee.toLocaleString()}`}
              </span>

            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Activation Fee:</span>
              <span className="font-medium text-foreground">
                {selectedTier.activationFee !== undefined && selectedTier.activationFee > 0
                  ? `$${calculatedCosts.activationFee.toLocaleString()}`
                  : (selectedTier.activationFee === 0 ? '$0 (None)' : 'N/A')}
              </span>
            </div>
            {includeResetFee && canIncludeReset && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reset Fee (x1):</span>
                <span className="font-medium text-foreground"> {/* Reset fee is not discounted */}
                  {showDiscountedPrices && selectedTier.discountPercentage > 0 && selectedTier.resetFee !== undefined && selectedTier.resetFee > 0 ? (
                    <><span className="line-through text-muted-foreground mr-2">${selectedTier.resetFee.toLocaleString()}</span><span>${calculatedCosts.resetFee.toLocaleString()}</span></>
                  ) : `$${calculatedCosts.resetFee.toLocaleString()}`}
                </span>
              </div>
            )}
          </div>
          <Separator className="my-3" />
          <div className="flex justify-between w-full text-md md:text-lg">
            <span className="font-semibold text-accent">Total Estimated Upfront Cost:</span>
            <span className="font-bold text-accent">
              {calculatedCosts.originalTotalCost !== undefined && calculatedCosts.originalTotalCost > calculatedCosts.totalCost ? (
                 <><span className="line-through text-muted-foreground mr-2">${calculatedCosts.originalTotalCost.toLocaleString()}</span><span>${calculatedCosts.totalCost.toLocaleString()}</span></>
              ) : `$${calculatedCosts.totalCost.toLocaleString()}`}
            </span>


          </div>
          
          <Button 
            asChild 
            className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent-hover"
            disabled={ctaButtonDisabled}
          >
            <Link href={ctaHref} target={ctaTarget} rel={ctaTarget === "_blank" ? "noopener noreferrer" : undefined}>
              {ctaButtonText}
              {isSingleFirmMode && <ExternalLink className="ml-2 h-4 w-4" />}
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-2 w-full text-center">
            (Affiliate Link)
          </p>

        </CardFooter>
      )}
      {!selectedTier && activeFirm && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select an account tier to see cost details.</p>
        </CardFooter>
      )}
       {!activeFirm && !isSingleFirmMode && (
        <CardFooter>
            <p className="text-sm text-muted-foreground">Please select a firm to begin.</p>
        </CardFooter>
      )}
       {isSingleFirmMode && !activeFirm && (
         <CardFooter>
            <p className="text-sm text-muted-foreground">Firm data not available for calculator.</p>
        </CardFooter>
       )}
    </Card>
  );
}

'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { getAiPropFirmRecommendationAction } from '@/app/actions';
import type { PropFirmRecommendationInput, PropFirmRecommendationOutput } from '@/ai/flows/prop-firm-recommendation';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  riskProfile: z.string().min(1, 'Please select your risk profile.'),
  tradingStyle: z.string().min(1, 'Please select your trading style.'),
});

type AiMatcherFormValues = z.infer<typeof formSchema>;

const AiMatcher = () => {
  const [recommendation, setRecommendation] = useState<PropFirmRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AiMatcherFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      riskProfile: '',
      tradingStyle: '',
    },
  });

  const onSubmit: SubmitHandler<AiMatcherFormValues> = async (data) => {
    setIsLoading(true);
    setRecommendation(null);
    const inputData: PropFirmRecommendationInput = data;
    
    const result = await getAiPropFirmRecommendationAction(inputData);

    if (result.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
    } else if (result.data) {
      setRecommendation(result.data);
      toast({
        title: 'Recommendation Ready!',
        description: 'We found some prop firms for you.',
        className: 'bg-success text-success-foreground border-green-600', // Example of using success variant
      });
    }
    setIsLoading(false);
  };

  const riskProfiles = ['Low', 'Medium', 'High'];
  const tradingStyles = ['Scalping', 'Day Trading', 'Swing Trading', 'Position Trading'];

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Find Your Perfect Prop Firm</CardTitle>
        <CardDescription>Answer a few questions and let our AI find the best fit for you.</CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="riskProfile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your risk profile?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select risk profile" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {riskProfiles.map((profile) => (
                        <SelectItem key={profile} value={profile.toLowerCase()}>
                          {profile}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tradingStyle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What is your primary trading style?</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trading style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {tradingStyles.map((style) => (
                        <SelectItem key={style} value={style.toLowerCase().replace(' ', '-')}>
                          {style}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent-hover">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Get Recommendation'}
            </Button>
            {recommendation && (
              <div className="mt-6 p-4 border rounded-md bg-card"> {/* Use bg-card for recommendation box */}
                <h4 className="font-semibold text-lg mb-2 text-foreground">Our AI Recommends:</h4>
                <p className="text-foreground">{recommendation.recommendation}</p>
              </div>
            )}
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default AiMatcher;

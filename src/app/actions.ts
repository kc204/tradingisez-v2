'use server';
import { propFirmRecommendation, type PropFirmRecommendationInput, type PropFirmRecommendationOutput } from '@/ai/flows/prop-firm-recommendation';
import { z } from 'zod';

// Define Zod schema for input validation
const RecommendationInputSchema = z.object({
  riskProfile: z.string().min(1, "Risk profile is required."),
  tradingStyle: z.string().min(1, "Trading style is required."),
});

export async function getAiPropFirmRecommendationAction(input: PropFirmRecommendationInput): Promise<{ data?: PropFirmRecommendationOutput; error?: string }> {
  const validationResult = RecommendationInputSchema.safeParse(input);
  if (!validationResult.success) {
    const formattedErrors = validationResult.error.errors.map(e => `${e.path.join('.')} - ${e.message}`).join(', ');
    console.error("AI recommendation validation failed:", formattedErrors);
    return { error: "Invalid input provided. Please check the fields and try again." };
  }

  try {
    const result = await propFirmRecommendation(validationResult.data);
    return { data: result };
  } catch (error) {
    console.error("Error in AI prop firm recommendation action:", error);
    // In a real app, you might want to log this error more robustly
    return { error: "Failed to get AI recommendation due to a server error." };
  }
}

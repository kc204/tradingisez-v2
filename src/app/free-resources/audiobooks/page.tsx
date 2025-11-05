
import AudiobookCard from "@/components/shared/AudiobookCard";
import { StarBorder } from "@/components/ui/star-border";
import { mockFreeResources } from "@/lib/mockData";
import type { BookListing } from "@/lib/types";
import { Headphones } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Trading Audiobooks with Audible Trial',
  description: 'Discover essential trading audiobooks available for free with an Audible trial. Expand your knowledge on trading psychology, strategy, and market history.',
  alternates: {
    canonical: '/free-resources/audiobooks',
  },
  openGraph: {
    title: 'Free Trading Audiobooks | TradingisEZ',
    description: 'Listen to essential trading audiobooks for free with an Audible trial.',
    url: '/free-resources/audiobooks',
  }
};

export default function FreeAudiobooksPage() {
  const audiobookOffer = mockFreeResources.find(r => r.resourceType === "Audiobook Trial Offer");
  const books: BookListing[] = audiobookOffer?.bookListings || [];

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-background rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <Headphones className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {audiobookOffer?.title ? audiobookOffer.title.replace(" with Audible Trial", "") : "Free Trading Audiobooks"}
          </h1>
          <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            {audiobookOffer?.pageIntroduction ? audiobookOffer.pageIntroduction.replace(" with an Audible trial", "") : "Expand your trading knowledge on the go! Listen to essential trading books for free. Explore classics on psychology, strategy, and market history."}
          </p>
          {/* The button below was removed as per user request */}
          {/* {audiobookOffer?.mainAffiliateLink && audiobookOffer.mainCTAText && (
            <StarBorder<typeof Link>
              as={Link}
              href={audiobookOffer.mainAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {audiobookOffer.mainCTAText}
            </StarBorder>
          )} */}
        </div>
      </section>

      {books.length > 0 ? (
        <section className="container mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm mb-8">
            Disclosure: As an Amazon Associate, we earn from qualifying purchases. Listening is free with an Audible trial.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <AudiobookCard key={book.bookTitle} book={book} />
            ))}
          </div>
        </section>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">
          No audiobooks listed at the moment. Check back soon!
        </p>
      )}

      <section className="container mx-auto px-4 text-center py-8 prose prose-sm dark:prose-invert max-w-3xl border-t mt-8">
        <h3 className="text-foreground">Audible Trial & Affiliate Disclosure</h3>
        <p className="text-muted-foreground">
          By signing up for an Audible trial through our links, you can listen to these (and other) audiobooks for free during the trial period. 
          TradingisEZ may earn a commission if you continue your Audible subscription after the trial, at no extra cost to you. 
          This helps support our site. Please review Audible's terms and conditions for trial details.
        </p>
        <p className="text-muted-foreground">
          <Link href="/terms-of-service" className="text-primary hover:underline">Read our full affiliate disclosure</Link>.
        </p>
      </section>
    </div>
  );
}

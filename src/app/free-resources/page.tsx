
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { StarBorder } from "@/components/ui/star-border";
import { BookOpen, Headphones, Video } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Trading Resources to Elevate Your Skills',
  description: 'Explore valuable free trading resources including courses, audiobooks, guides, and tools to elevate your trading skills. Curated by TradingisEZ.',
  alternates: {
    canonical: '/free-resources',
  },
  openGraph: {
    title: 'Free Trading Resources | TradingisEZ',
    description: 'Explore valuable free trading resources including courses, audiobooks, guides, and tools.',
    url: '/free-resources',
  }
};

const resourceCategories = [
  {
    title: "Free Trading Audiobooks",
    description: "Listen to essential trading books on psychology, strategy, and market history with a free Audible trial.",
    href: "/free-resources/audiobooks",
    icon: <Headphones className="w-10 h-10 text-primary mb-3" />,
    ctaText: "Explore Audiobooks"
  },
  {
    title: "Al Brooks Free Video Course Samples",
    description: "Get a glimpse into Al Brooks' renowned price action trading methodology with these free sample video lessons.",
    href: "/free-resources/al-brooks-course",
    icon: <Video className="w-10 h-10 text-primary mb-3" />,
    ctaText: "View Free Lessons"
  },
];

export default function FreeResourcesOverviewPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-background rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Explore Our Free Trading Resources</h1>
          <p className="text-md md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock valuable insights and tools without any cost. We've curated a selection of free courses, audiobook offers, guides, and tools to help you on your trading journey.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {resourceCategories.map((category) => (
            <Card key={category.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {category.icon}
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </CardContent>
              <CardFooter className="flex justify-center">
                 <StarBorder<typeof Link>
                    as={Link}
                    href={category.href}
                    className="w-full"
                  >
                    {category.ctaText}
                  </StarBorder>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 text-center py-8">
        <h2 className="text-2xl font-semibold text-foreground mb-3">More Resources Coming Soon!</h2>
        <p className="text-muted-foreground mb-6">
          We're constantly working to add more valuable free content. Check back often!
        </p>
      </section>
    </div>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about TradingisEZ and our mission to help traders succeed by providing the best prop firm reviews, tools, and educational content.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | TradingisEZ',
    description: 'Learn more about our mission to empower traders with insights, tools, and connections.',
    url: '/about',
  },
};

const AboutPage = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <Users className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">About TradingisEZ</h1>
          <p className="text-md md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Empowering traders with the insights, tools, and connections to accelerate your trading careers.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4 text-base md:text-lg">
            <p>
              At TradingisEZ, we are dedicated to becoming the most comprehensive and trusted resource for traders seeking funding opportunities, reliable tools, and essential education in both traditional and crypto markets. We understand the challenges traders face – from navigating complex prop firm rules to identifying legitimate services in a crowded space.
            </p>
            <p>
              Our goal is to simplify this journey. We provide clear, unbiased reviews, in-depth guides, and exclusive deals to help you make informed decisions and find the best path to achieving your trading aspirations.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Target className="w-10 h-10 text-primary mb-3" />, title: "Comprehensive Hub", description: "Your go-to source for everything related to prop firms, trading tools, and crypto resources." },
            { icon: <ShieldCheck className="w-10 h-10 text-primary mb-3" />, title: "Legitimacy &amp; Trust", description: "We help you identify reputable firms and avoid scams, ensuring you partner with trustworthy providers." },
            { icon: <Zap className="w-10 h-10 text-primary mb-3" />, title: "Exclusive Access", description: "Benefit from special offers, discounts, and detailed breakdowns of prop firm conditions." },
          ].map(item => (
            <Card key={item.title} className="text-center p-6 shadow-md hover:shadow-lg transition-shadow">
              {item.icon}
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="container mx-auto px-4">
         <div className="relative aspect-video md:aspect-[16/7] rounded-xl overflow-hidden shadow-xl">
            <Image 
              src="https://picsum.photos/seed/aboutpage/1200/500"
              alt="Team of traders collaborating in an office" 
              layout="fill" 
              objectFit="cover" 
              data-ai-hint="office team"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4">Join Us on Your Trading Journey</h3>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;

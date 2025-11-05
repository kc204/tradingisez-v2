'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactPage = () => {
  // This is a UI-only form for now.
  // For a real app, you'd use react-hook-form, Zod, and a server action.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send to an API endpoint or email service)
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <div className="space-y-12">
      <section className="text-center py-8 md:py-16 bg-gradient-to-br from-primary/80 to-secondary/80 rounded-xl shadow-xl">
        <div className="container mx-auto px-4">
          <Mail className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-md md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions, feedback, or partnership inquiries? We'd love to hear from you at TradingisEZ.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl flex items-center">
              <MessageSquare className="w-6 h-6 md:w-7 md:h-7 mr-2 text-primary" /> Send Us a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Inquiry about..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." rows={5} required />
              </div>
              <div>
                <Button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      
      <section className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">Other Ways to Reach Us</h3>
        <p className="text-muted-foreground">
          For urgent matters, you can also try reaching out via our (soon to be announced) social media channels for TradingisEZ.
        </p>
        {/* Add social media links here in the future */}
      </section>
    </div>
  );
};

export default ContactPage;

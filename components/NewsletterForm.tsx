'use client'

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { toast } from "@/components/ui/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "We'll notify you when we launch.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm border-ghana-yellow">
      <h3 className="text-xl font-semibold mb-3 text-ghana-black">Get notified when we launch</h3>
      <p className="text-sm text-gray-600 mb-4">
        Be the first to discover Ghana&apos;s untold stories, culture and hidden gems.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow border-ghana-green/50 focus-visible:ring-ghana-green"
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-ghana-green hover:bg-ghana-green/90 text-white"
        >
          {isSubmitting ? 'Subscribing...' : 'Notify Me'}
        </Button>
      </form>
    </Card>
  );
};

export default NewsletterForm;
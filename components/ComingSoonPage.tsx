import React from 'react';
import { Card } from '@/components/ui/card';
import CountdownTimer from './CountdownTimer';
import NewsletterForm from './NewsletterForm';
import SocialLinks from './SocialLinks';
import Logo from './Logo';

const ComingSoonPage = () => {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: 'url("/akrade.png")' }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      
      {/* Top Kente Border */}
      <div className="absolute top-0 left-0 right-0 h-2 kente-border"></div>
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
        <Logo className="mb-6 animate-pulse-slow" />
        
        <Card className="max-w-3xl w-full bg-white/90 backdrop-blur-sm p-6 md:p-10 shadow-lg border-none">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            <span className="text-ghana-black">Coming</span>
            <span className="text-ghana-green ml-2">Soon</span>
          </h1>
          
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of historians and writers are working to bring you comprehensive, accurate, and engaging articles about Ghana&apos;s rich cultural heritage and historical significance. <span className="text-ghana-red font-medium">Readiscover Ghana</span> will be your ultimate destination for exploring the heart and soul of Ghana.
          </p>
          
          <h2 className="text-xl text-center font-semibold mb-4 text-ghana-black">
            Launching in:
          </h2>
          
          <CountdownTimer targetDate={launchDate} className="mb-10" />
          
          <NewsletterForm />
          
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 mb-4">Follow us for updates:</p>
            <SocialLinks />
          </div>
        </Card>
      </div>
      
      {/* Bottom Kente Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 kente-border"></div>
    </div>
  );
};

export default ComingSoonPage;
import React from 'react';
import { Card } from '@/components/ui/card';
import CountdownTimer from './CountdownTimer';
// import SocialLinks from './SocialLinks';
import Logo from './Logo';
import { Book, Rocket, Sparkles, Users } from 'lucide-react';

const ComingSoonPage = () => {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: 'url("/akrade.jpg")' }}>
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
          
          <CountdownTimer targetDate={launchDate} className="mb-5" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-ghana-yellow/20 hover:border-ghana-yellow transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-ghana-yellow animate-pulse" />
                <h3 className="font-semibold text-lg text-ghana-black">Cultural Stories</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Dive deep into Ghana&apos;s rich traditions and cultural heritage through our carefully curated stories.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-ghana-red/20 hover:border-ghana-red transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <Book className="w-6 h-6 text-ghana-red animate-pulse" />
                <h3 className="font-semibold text-lg text-ghana-black">Historical Insights</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Explore Ghana&apos;s fascinating history through expert analysis and compelling narratives.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-ghana-green/20 hover:border-ghana-green transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-ghana-green animate-pulse" />
                <h3 className="font-semibold text-lg text-ghana-black">Community Stories</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Read authentic stories from local communities sharing their unique perspectives.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-ghana-black/20 hover:border-ghana-black transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-6 h-6 text-ghana-black animate-pulse" />
                <h3 className="font-semibold text-lg text-ghana-black">Modern Ghana</h3>
              </div>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors">Discover how Ghana&apos;s past shapes its vibrant present and promising future.</p>
            </div>
            </div>
        </Card>
      </div>
      
      {/* Bottom Kente Border */}
      <div className="absolute bottom-0 left-0 right-0 h-2 kente-border"></div>
    </div>
  );
};

export default ComingSoonPage;
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn("font-bold text-3xl md:text-4xl flex items-center", className)}>
      <span className="text-ghana-green">Read</span>
      <span className="text-ghana-red">iscover</span>
      <div className="ml-2 h-8 w-8 rounded-sm overflow-hidden shadow-sm flex-shrink-0">
        <div className="h-1/3 bg-ghana-red"></div>
        <div className="h-1/3 bg-ghana-yellow"></div>
        <div className="h-1/3 bg-ghana-green"></div>
      </div>
    </div>
  );
};

export default Logo;

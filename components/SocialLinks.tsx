import React from 'react';
import { 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => {
  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
  ];

  return (
    <div className={cn("flex gap-4 justify-center", className)}>
      {socialLinks.map((social) => (
        <Button
          key={social.name}
          variant="outline"
          size="icon"
          className="rounded-full border-ghana-yellow/70 hover:border-ghana-yellow hover:bg-ghana-yellow/10"
          asChild
        >
          <a 
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Follow on ${social.name}`}
          >
            <social.icon className="h-5 w-5 text-ghana-black" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;
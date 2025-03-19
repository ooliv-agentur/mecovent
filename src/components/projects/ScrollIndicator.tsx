
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  active: number;
  total: number;
}

const ScrollIndicator = ({ active, total }: ScrollIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-1 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;

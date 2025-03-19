
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  active: number;
  total: number;
}

const ScrollIndicator = ({ active, total }: ScrollIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-1 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "h-1.5 rounded-full transition-all duration-500",
            i === active 
              ? "w-8 bg-primary" 
              : i < active 
                ? "w-3 bg-primary/60" 
                : "w-2 bg-muted-foreground/30"
          )}
          style={{
            transitionDelay: `${Math.abs(i - active) * 50}ms`
          }}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;

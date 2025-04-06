
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  active: number;
  total: number;
  orientation?: 'horizontal' | 'vertical';
}

const ScrollIndicator = ({ active, total, orientation = 'horizontal' }: ScrollIndicatorProps) => {
  const isVertical = orientation === 'vertical';
  
  return (
    <div className={cn(
      "flex gap-1",
      isVertical ? "flex-col items-center" : "items-center justify-center"
    )}>
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "rounded-full transition-all duration-500",
            isVertical
              ? "h-12 w-1.5" // Vertical orientation
              : "h-1.5 w-full", // Horizontal orientation
            i === active 
              ? isVertical ? "bg-[#009fe3] h-12" : "w-8 bg-[#009fe3]"
              : i < active 
                ? isVertical ? "bg-[#009fe3]/60 h-8" : "w-3 bg-[#009fe3]/60"
                : isVertical ? "bg-muted-foreground/30 h-4" : "w-2 bg-muted-foreground/30"
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

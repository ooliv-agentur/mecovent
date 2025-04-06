
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  active: number;
  total: number;
  orientation?: 'horizontal' | 'vertical';
  onIndicatorClick?: (index: number) => void;
}

const ScrollIndicator = ({ 
  active, 
  total, 
  orientation = 'horizontal',
  onIndicatorClick
}: ScrollIndicatorProps) => {
  const isVertical = orientation === 'vertical';
  
  return (
    <div className={cn(
      "flex gap-2",
      isVertical ? "flex-col items-center" : "items-center justify-center"
    )}>
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "rounded-full transition-all duration-300 cursor-pointer",
            isVertical
              ? "h-12 w-1.5" // Vertical orientation
              : "h-1.5 w-12", // Horizontal orientation
            i === active 
              ? isVertical ? "bg-primary h-12" : "w-12 bg-primary"
              : i < active 
                ? isVertical ? "bg-primary/60 h-8" : "w-8 bg-primary/60"
                : isVertical ? "bg-muted-foreground/40 h-4" : "w-4 bg-muted-foreground/40"
          )}
          style={{
            transitionDelay: `${Math.abs(i - active) * 40}ms`
          }}
          onClick={() => onIndicatorClick && onIndicatorClick(i)}
          role="button"
          aria-label={`Go to item ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;

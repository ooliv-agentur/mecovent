
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
        <button 
          key={i} 
          className={cn(
            "rounded-full transition-all duration-300",
            isVertical
              ? "h-12 w-1.5" // Vertical orientation
              : "h-1.5 w-12", // Horizontal orientation
            i === active 
              ? "bg-primary" // Active
              : i < active 
                ? "bg-primary/60" // Past
                : "bg-muted-foreground/40" // Future
          )}
          style={{
            transitionDelay: `${Math.abs(i - active) * 40}ms`
          }}
          onClick={() => onIndicatorClick && onIndicatorClick(i)}
          aria-label={`Go to item ${i + 1}`}
          aria-current={i === active ? "true" : "false"}
          tabIndex={0}
        />
      ))}
    </div>
  );
};

export default ScrollIndicator;

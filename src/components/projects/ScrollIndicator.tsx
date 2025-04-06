
import React from 'react';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  active: number;
  total: number;
  orientation?: 'horizontal' | 'vertical';
  onIndicatorClick?: (index: number) => void;
  isLastItem?: boolean;
  className?: string;
}

const ScrollIndicator = ({ 
  active, 
  total, 
  orientation = 'horizontal',
  onIndicatorClick,
  isLastItem = false,
  className
}: ScrollIndicatorProps) => {
  const isVertical = orientation === 'vertical';
  
  return (
    <div className={cn(
      "flex gap-2 transition-all duration-300",
      isVertical ? "flex-col items-center" : "items-center justify-center",
      isLastItem ? "opacity-30 pointer-events-none" : "opacity-100",
      className
    )}>
      {Array.from({ length: total }).map((_, i) => (
        <button 
          key={i} 
          className={cn(
            "rounded-full transition-all duration-300 hover:scale-110",
            isVertical
              ? "h-12 w-1.5 md:w-2" // Vertical orientation
              : "h-1.5 w-12 md:h-2", // Horizontal orientation
            i === active 
              ? "bg-[#1EAEDB]" // Active - blue
              : i < active 
                ? "bg-[#33C3F0]/60" // Past - lighter blue
                : "bg-[#8E9196]/40" // Future - gray
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

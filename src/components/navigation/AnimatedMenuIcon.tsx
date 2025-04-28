
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedMenuIconProps {
  isOpen: boolean;
  className?: string;
}

const AnimatedMenuIcon = ({ isOpen, className }: AnimatedMenuIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("transition-transform duration-200", className)}
    >
      <g className="origin-center">
        {/* Top slash */}
        <line
          x1="4"
          y1="8"
          x2="20"
          y2="8"
          className={cn(
            "stroke-current stroke-[1.5] transition-all duration-200",
            isOpen && "transform rotate-45 translate-y-[6px]"
          )}
        />
        {/* Middle slash */}
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          className={cn(
            "stroke-current stroke-[1.5] transition-all duration-200",
            isOpen && "opacity-0"
          )}
        />
        {/* Bottom slash */}
        <line
          x1="4"
          y1="16"
          x2="20"
          y2="16"
          className={cn(
            "stroke-current stroke-[1.5] transition-all duration-200",
            isOpen && "transform -rotate-45 -translate-y-[6px]"
          )}
        />
      </g>
    </svg>
  );
};

export default AnimatedMenuIcon;

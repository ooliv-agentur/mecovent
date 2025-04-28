
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedMenuIconProps {
  isOpen: boolean;
}

export const AnimatedMenuIcon = ({ isOpen }: AnimatedMenuIconProps) => {
  return (
    <div className="w-6 h-6 relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={cn(
              "block bg-current w-5 h-[2px] rounded-full transition-all duration-200 ease-out absolute",
              isOpen ? [
                "rotate-45 translate-y-0",
                "opacity-0",
                "-rotate-45 translate-y-0"
              ][index] : [
                "-translate-y-2",
                "translate-y-0",
                "translate-y-2"
              ][index]
            )}
          />
        ))}
      </div>
    </div>
  );
};

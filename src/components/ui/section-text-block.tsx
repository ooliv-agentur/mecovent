
import React from 'react';
import { cn } from '@/lib/utils';
import { SectionLabel } from '@/components/ui/section-label';

interface SectionTextBlockProps {
  /** Section label text for the bubble */
  label: string;
  /** Array of exactly 3 headline parts */
  headlineParts: [string, string, string];
  /** Which headline part should be bold (0, 1, or 2) */
  boldIndex: 0 | 1 | 2;
  /** Subline text */
  subline: string;
  /** Optional description text */
  description?: string;
  /** Alignment: left, center, or right */
  alignment?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

const SectionTextBlock = ({
  label,
  headlineParts,
  boldIndex,
  subline,
  description,
  alignment = 'center',
  className
}: SectionTextBlockProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const flexAlignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end'
  };

  return (
    <div className={cn("max-w-3xl mx-auto mb-20 animate-fade-in", className)}>
      {/* Section Label Bubble */}
      <div className={cn("flex w-full mb-6", flexAlignment[alignment])}>
        <SectionLabel label={label} />
      </div>
      
      {/* Headline with 3 parts */}
      <h2 className={cn(
        "text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight leading-[1.6] break-words",
        alignmentClasses[alignment]
      )}>
        {headlineParts.map((part, index) => (
          <span key={index}>
            <span 
              className={cn(
                "bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift",
                index === boldIndex ? "font-bold" : "font-normal"
              )}
            >
              {part}
            </span>
            {index < headlineParts.length - 1 && <br />}
          </span>
        ))}
      </h2>
      
      {/* Subline */}
      <p className={cn("subheader-section", alignmentClasses[alignment])}>
        {subline}
      </p>
      
      {/* Optional Description */}
      {description && (
        <p className={cn("mt-4 text-muted-foreground", alignmentClasses[alignment])}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTextBlock;

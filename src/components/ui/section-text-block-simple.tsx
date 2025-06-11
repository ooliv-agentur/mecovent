
import React from 'react';
import { cn } from '@/lib/utils';
import { SectionLabel } from '@/components/ui/section-label';

interface SectionTextBlockSimpleProps {
  /** Section label text for the bubble */
  label: string;
  /** First line of headline (normal weight) */
  line1: string;
  /** Second line of headline (bold) */
  line2: string;
  /** Third line of headline (normal weight) */
  line3: string;
  /** Subline text */
  subline: string;
  /** Alignment: left, center, or right */
  alignment?: 'left' | 'center' | 'right';
  /** Additional CSS classes */
  className?: string;
}

const SectionTextBlockSimple = ({
  label,
  line1,
  line2,
  line3,
  subline,
  alignment = 'center',
  className
}: SectionTextBlockSimpleProps) => {
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
      
      {/* 3-Line Headline */}
      <h2 className={cn(
        "text-4xl sm:text-5xl md:text-6xl leading-normal mb-8",
        alignmentClasses[alignment]
      )}>
        <span className="font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">{line1}</span>
        <br />
        <span className="font-bold bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">{line2}</span>
        <br />
        <span className="font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">{line3}</span>
      </h2>
      
      {/* Subline with line breaks */}
      <p className={cn("text-lg sm:text-xl text-muted-foreground leading-loose", alignmentClasses[alignment])}>
        {subline}
      </p>
    </div>
  );
};

export default SectionTextBlockSimple;


import React from 'react';
import { SectionLabel } from '@/components/ui/section-label';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subheader: string;
  description?: string;
}

const SectionHeader = ({ tag, title, subheader, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
      <SectionLabel label={tag} />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
        {title}
      </h2>
      <p className="subheader-section">
        {subheader}
      </p>
      {description && (
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

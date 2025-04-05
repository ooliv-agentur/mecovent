
import React from 'react';

interface SectionHeaderProps {
  tag: string;
  title: string;
  subheader: string;
  description?: string;
}

const SectionHeader = ({ tag, title, subheader, description }: SectionHeaderProps) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
      <div className="section-tag">{tag}</div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.4]">
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

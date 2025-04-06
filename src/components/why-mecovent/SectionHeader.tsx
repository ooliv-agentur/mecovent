
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
      <h2 className="header-section">
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

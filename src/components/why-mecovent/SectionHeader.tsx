
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
    <div className="content-left-aligned mb-20 animate-fade-in">
      <SectionLabel label={tag} className="text-dynamic-left" />
      <h2 className="headline-primary text-gradient-dynamic mb-8 text-dynamic-left break-words">
        {title}
      </h2>
      <p className="subheader-large text-muted-foreground text-dynamic-left mb-6">
        {subheader}
      </p>
      {description && (
        <p className="body-large text-muted-foreground text-dynamic-left">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

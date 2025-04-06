
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-8 animate-fade-in">
    <h3 className="text-xl font-medium mb-1 bg-gradient-to-r from-[#33C3F0] to-[#1EAEDB] bg-clip-text text-transparent bg-200% animate-gradient-shift">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

export default SectionTitle;

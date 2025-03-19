
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="text-center mb-8 animate-fade-in">
    <h3 className="text-xl font-medium mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

export default SectionTitle;

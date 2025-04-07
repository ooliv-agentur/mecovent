
import React from 'react';
import { SectionLabel } from '@/components/ui/section-label';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  label?: string;
}

const SectionTitle = ({ title, subtitle, label }: SectionTitleProps) => (
  <div className="text-center mb-8 animate-fade-in">
    {label && <SectionLabel label={label} className="mb-3" />}
    <h3 className="text-xl font-medium mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

export default SectionTitle;


import React from 'react';
import { SectionLabel } from '@/components/ui/section-label';

const EventTypesSectionHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
      <SectionLabel label="Unsere Veranstaltungsformate" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
        Formate mit Wirkung – für Marken, Menschen und Momentum.
      </h2>
      <p className="subheader-section mb-3">
        Ob Fachkongress, Retreat oder Roadshow – jedes Format entsteht bei uns aus Strategie, Erfahrung und Gespür für Wirkung.
      </p>
      <p className="text-muted-foreground">
        Individuell geplant, emotional erzählt und gemeinsam mit Ihnen entwickelt.
      </p>
    </div>
  );
};

export default EventTypesSectionHeader;

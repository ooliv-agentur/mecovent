
import React from 'react';
import { SectionLabel } from '@/components/ui/section-label';

const EventTypesSectionHeader: React.FC = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
      <SectionLabel label="Unsere Veranstaltungsformate" />
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
        Events, die wirken – strategisch geplant, emotional inszeniert
      </h2>
      <p className="subheader-section mb-3">
        Ob Fachkongress oder Kick-off – wir finden das richtige Format für Ihre Botschaft.
      </p>
      <p className="text-muted-foreground">
        Vom Kick-off bis zur Roadshow, vom Fachkongress bis zum Team-Retreat:<br />
        Unsere Formate entstehen immer mit einem Ziel – Wirkung.<br />
        Strategisch durchdacht, emotional inszeniert und individuell für Sie entwickelt.
      </p>
    </div>
  );
};

export default EventTypesSectionHeader;

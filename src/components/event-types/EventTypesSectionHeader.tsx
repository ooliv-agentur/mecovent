
import React from 'react';
import { SectionLabel } from '@/components/ui/section-label';

const EventTypesSectionHeader = () => {
  return (
    <div className="content-right-aligned mb-16 px-4 animate-fade-in">
      <SectionLabel label="Eventformate" className="text-dynamic-right" />
      <h2 className="headline-primary text-gradient-dynamic mb-8 text-dynamic-right break-words">
        Jeden Anlass richtig inszenieren – vom Meeting bis zum Kongress.
      </h2>
      <p className="subheader-large text-muted-foreground text-dynamic-right mb-4">
        Ob interne Kommunikation oder externe Repräsentation – wir wissen, wie Events wirken.
      </p>
      <p className="body-large text-muted-foreground text-dynamic-right">
        Interaktiv entdecken: <span className="font-semibold text-primary">Karten umdrehen</span> für mehr Details zu jedem Format.
      </p>
    </div>
  );
};

export default EventTypesSectionHeader;


import React from 'react';
import SectionHeader from './why-mecovent/SectionHeader';
import ValuesSection from './why-mecovent/ValuesSection';
import StrengthsSection from './why-mecovent/StrengthsSection';
import { companyValues } from './why-mecovent/constants';

const WhyMecovent = () => {
  return (
    <section id="ueber-uns" className="relative overflow-hidden pt-24 bg-background">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background/80 to-transparent pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 pointer-events-none"></div>
      
      <div className="container-section relative">
        <SectionHeader 
          tag="ÜBER UNS"
          title="Warum MECOVENT? – Unsere Mission ist Ihr Erfolg."
          subheader="Wir verwandeln Ihre Vision in unvergessliche Erlebnisse. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig."
          description="Jedes Event erzählt eine Geschichte. Unsere Aufgabe ist es, diese Geschichte sichtbar, spürbar und nachhaltig zu gestalten – mit Respekt vor Ihrer Marke und dem Ziel, Menschen zu verbinden."
        />
        
        <ValuesSection values={companyValues} />
        <StrengthsSection />
      </div>
    </section>
  );
};

export default WhyMecovent;

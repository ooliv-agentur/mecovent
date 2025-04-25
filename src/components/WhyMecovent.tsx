
import React from 'react';
import SectionHeader from './why-mecovent/SectionHeader';
import ValuesSection from './why-mecovent/ValuesSection';
import StrengthsSection from './why-mecovent/StrengthsSection';
import { companyValues, discretionText } from './why-mecovent/constants';

const WhyMecovent = () => {
  return (
    <section id="ueber-uns" className="relative overflow-hidden pt-24 bg-background">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-background/80 to-transparent pointer-events-none"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 pointer-events-none"></div>
      
      <div className="container-section relative">
        <SectionHeader 
          tag="ÜBER UNS"
          title="Wir gestalten Erlebnisse, die verbinden."
          subheader="Ob Change-Prozess, Produktlaunch oder Kongress – wir inszenieren Ihre Botschaft so, dass sie Menschen berührt und Marken stärkt."
        />
        
        <ValuesSection values={companyValues} />
        <StrengthsSection />
        
        {/* Discretion notice */}
        <div className="mt-20 mb-12 max-w-3xl mx-auto text-center bg-secondary/30 p-6 rounded-xl">
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            {discretionText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMecovent;

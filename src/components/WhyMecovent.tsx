
import React from 'react';
import SectionHeader from './why-mecovent/SectionHeader';
import ValuesSection from './why-mecovent/ValuesSection';
import StrengthsSection from './why-mecovent/StrengthsSection';
import { companyValues } from './why-mecovent/constants';

const WhyMecovent = () => {
  return (
    <section id="ueber-uns" className="py-20 bg-background">
      <div className="container-section">
        {/* Right-aligned header section */}
        <div className="flex justify-end mb-16">
          <div className="text-right max-w-2xl">
            {/* Section tag with dashes */}
            <div className="text-xs font-medium tracking-wider uppercase text-primary mb-6">
              --- ÜBER UNS ----
            </div>
            
            {/* Main heading with mixed typography */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">
              <span className="font-normal text-foreground">Wir gestalten </span>
              <br />
              <span className="font-bold text-foreground">ERLEBNISSE,</span>
              <br />
              <span className="font-normal text-foreground">die verbinden.</span>
            </h2>
            
            {/* Description text */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Ob Change-Prozess, Produktlaunch oder Kongress – wir inszenieren Ihre Botschaft so, dass sie Menschen berührt und Marken stärkt.
            </p>
          </div>
        </div>

        <ValuesSection values={companyValues} />
        <StrengthsSection />
      </div>
    </section>
  );
};

export default WhyMecovent;

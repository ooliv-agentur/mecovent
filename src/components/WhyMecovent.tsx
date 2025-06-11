
import React from 'react';
import SectionHeader from './why-mecovent/SectionHeader';
import ValuesSection from './why-mecovent/ValuesSection';
import StrengthsSection from './why-mecovent/StrengthsSection';
import { companyValues } from './why-mecovent/constants';
import { SectionLabel } from '@/components/ui/section-label';

const WhyMecovent = () => {
  return (
    <section id="ueber-uns" className="py-20 bg-background">
      <div className="container-section">
        {/* Right-aligned header section */}
        <div className="flex justify-end mb-16">
          <div className="text-right max-w-2xl">
            {/* Section tag with bubble design - right aligned */}
            <div className="flex justify-end mb-6">
              <SectionLabel label="ÜBER UNS" />
            </div>
            
            {/* Main heading with mixed typography and gradient colors */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl leading-normal mb-8">
              <span className="font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">Wir gestalten</span>
              <br />
              <span className="font-bold bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">ERLEBNISSE,</span>
              <br />
              <span className="font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">die verbinden.</span>
            </h2>
            
            {/* Description text with line breaks */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-loose">
              Ob Change-Prozess, Produktlaunch<br />
              oder Kongress – wir inszenieren<br />
              Ihre Botschaft so, dass sie Menschen<br />
              berührt und Marken stärkt.
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

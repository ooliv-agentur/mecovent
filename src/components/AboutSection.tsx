
import React from 'react';

const ValueCard = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 placeholder-box rounded-full mb-4">
      [Icon]
    </div>
    <h3 className="font-medium text-lg mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">
      [Platzhalter für kurze Beschreibung des Wertes]
    </p>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Über Uns</h2>
          <p className="subheader-section">
            [Platzhalter für Mission (2-3 Zeilen)]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          <ValueCard title="Wert 1" />
          <ValueCard title="Wert 2" />
          <ValueCard title="Wert 3" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

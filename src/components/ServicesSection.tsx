
import React from 'react';
import { LightbulbIcon } from 'lucide-react';
import ServicesSlider from './ServicesSlider';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
            Unsere Leistungen – Ihr Event, perfekt geplant.
          </h2>
          <p className="subheader-section">
            Von strategischer Beratung bis zur perfekten Umsetzung – wir machen Ihr Event einzigartig.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ob Fachkonferenz, Kick-off oder hybride Messe – wir begleiten Sie von der ersten Idee bis zur Umsetzung mit Strategie, Hingabe und Erfahrung.
          </p>
        </div>
        
        <ServicesSlider />
      </div>
    </section>
  );
};

export default ServicesSection;

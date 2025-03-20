
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/30 flex flex-col items-center justify-center">
        <div className="w-full h-full placeholder-box flex items-center justify-center">
          {/* Placeholder area for future image/video */}
        </div>
      </div>
      
      <div className="container-section relative z-10 text-center max-w-4xl animate-fade-in">
        <h1 className="header-section text-4xl sm:text-5xl md:text-6xl">
          Message. Atmosphäre. Event.
        </h1>
        <p className="subheader-section max-w-3xl mx-auto mt-6">
          Wir gestalten Erlebnisse, die Menschen und Marken nachhaltig verbinden.
        </p>
        
        <div className="flex flex-col items-center gap-6 mt-10">
          <Button size="lg" className="rounded-full px-8 py-6 text-base">
            Jetzt kostenlos beraten lassen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

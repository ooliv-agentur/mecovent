
import React from 'react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 placeholder-box flex flex-col items-center justify-center">
        [Platzhalter für Hintergrundbild/Video]
      </div>
      
      <div className="container-section relative z-10 text-center max-w-4xl animate-fade-in">
        <div className="section-tag">Wireframe v1</div>
        <h1 className="header-section text-4xl sm:text-5xl md:text-6xl mb-6">
          [Platzhalter für Hauptbotschaft]
        </h1>
        <p className="subheader-section max-w-2xl mx-auto">
          [Platzhalter für USP oder Mission]
        </p>
        <div className="mt-8">
          <button className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:opacity-90 transition-opacity">
            Jetzt anfragen
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

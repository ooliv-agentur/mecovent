
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/30 flex flex-col items-center justify-center">
        <div className="w-full h-full placeholder-box flex items-center justify-center text-muted-foreground">
          [Platzhalter für Bild/Video, das Emotion & Dynamik transportiert]
        </div>
      </div>
      
      <div className="container-section relative z-10 text-center max-w-4xl animate-fade-in space-y-8">
        <div className="section-tag">Wireframe v1</div>
        <h1 className="header-section text-4xl sm:text-5xl md:text-6xl">
          Message. Atmosphäre. Event. – Wir schaffen Erlebnisse, die Menschen verbinden.
        </h1>
        <p className="subheader-section max-w-3xl mx-auto">
          Jede Veranstaltung erzählt eine Geschichte – lassen Sie uns gemeinsam Ihre erzählen.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center my-8">
          <div className="font-medium">Strategische Planung</div>
          <div className="font-medium">|</div>
          <div className="font-medium">Kreative Konzepte</div>
          <div className="font-medium">|</div>
          <div className="font-medium">Nachhaltige Umsetzung</div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <Button size="lg" className="rounded-full px-8 py-6 text-base">
            Jetzt kostenlos beraten lassen
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => scrollToSection('why-mecovent')}
          >
            Mehr erfahren <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


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
          [Platzhalter für Hintergrundbild/Video]
        </div>
      </div>
      
      <div className="container-section relative z-10 text-center max-w-4xl animate-fade-in">
        <div className="section-tag">Wireframe v1</div>
        <h1 className="header-section text-4xl sm:text-5xl md:text-6xl mb-6">
          [Platzhalter für Hauptbotschaft]
        </h1>
        <p className="subheader-section max-w-2xl mx-auto mb-8">
          [Platzhalter für USP oder Mission]
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="rounded-full px-8 py-6 text-base">
            Jetzt anfragen
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2"
            onClick={() => scrollToSection('about')}
          >
            Mehr erfahren <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

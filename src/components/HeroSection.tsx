
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronDown, CheckCircle } from 'lucide-react';

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
      
      <div className="container-section relative z-10 text-center max-w-4xl animate-fade-in">
        <div className="section-tag">Wireframe v1</div>
        <h1 className="header-section text-4xl sm:text-5xl md:text-6xl mb-6">
          Message. Atmosphäre. Event. – Wir schaffen Erlebnisse, die Menschen verbinden.
        </h1>
        <div className="font-medium text-xl mb-6">➡ INDIVIDUELL. KREATIV. NACHHALTIG.</div>
        <p className="font-medium text-primary text-xl mb-6">
          Wir helfen Unternehmen, ihre Visionen in einzigartige Veranstaltungen zu verwandeln. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
        </p>
        <p className="subheader-section max-w-2xl mx-auto mb-8">
          Wir konzipieren und realisieren maßgeschneiderte Erlebnisse, die Menschen verbinden, Marken erlebbar machen und unvergessliche Erinnerungen schaffen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Strategische Eventplanung & Full-Service-Umsetzung</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Innovative und moderne Eventkonzepte</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <span>Nachhaltige Planung mit effizientem Ressourcenmanagement</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <Button size="lg" className="rounded-full px-8 py-6 text-base">
            Jetzt kostenlos beraten lassen
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

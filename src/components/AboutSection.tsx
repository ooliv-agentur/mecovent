
import React from 'react';
import { Heart, Award, Leaf, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Warum MECOVENT? – Unsere Mission ist Ihr Erfolg.</h2>
          <p className="subheader-section">
            Wir verwandeln Ihre Vision in unvergessliche Erlebnisse. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Jedes Event erzählt eine Geschichte. Unsere Aufgabe ist es, diese Geschichte sichtbar, spürbar und nachhaltig zu gestalten – mit Respekt vor Ihrer Marke und dem Ziel, Menschen zu verbinden.
          </p>
        </div>
        
        {/* Core values section */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-center mb-8">Unsere Werte</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="w-10 h-10 text-primary/80" />
              </div>
              <h3 className="font-medium text-xl mb-3">INDIVIDUELL</h3>
              <p className="text-muted-foreground">
                Maßgeschneiderte Lösungen für Ihr Event - angepasst an Ihre Herausforderungen und Ziele.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Lightbulb className="w-10 h-10 text-primary/80" />
              </div>
              <h3 className="font-medium text-xl mb-3">KREATIV</h3>
              <p className="text-muted-foreground">
                Innovative Konzepte, die inspirieren - Ihre Vision und unsere Kreativität garantieren den Erfolg.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <Leaf className="w-10 h-10 text-primary/80" />
              </div>
              <h3 className="font-medium text-xl mb-3">NACHHALTIG</h3>
              <p className="text-muted-foreground">
                Ressourcenbewusste Planung mit langfristiger Wirkung - ökologisch, wirtschaftlich und sozial.
              </p>
            </div>
          </div>
        </div>
        
        {/* Strengths section */}
        <div className="mt-16">
          <h3 className="text-xl font-medium text-center mb-8">Unsere Stärken</h3>
          <div className="max-w-3xl mx-auto bg-background/80 p-8 rounded-xl border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-primary mb-3" />
                <h4 className="font-medium text-base mb-2">Langjährige Erfahrung</h4>
                <p className="text-sm text-muted-foreground">Expertennetzwerk für erfolgreiche Events.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-primary mb-3" />
                <h4 className="font-medium text-base mb-2">Budgeteffiziente Planung</h4>
                <p className="text-sm text-muted-foreground">Transparente Kosten, wirtschaftliche Umsetzung.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-primary mb-3" />
                <h4 className="font-medium text-base mb-2">Hand in Hand</h4>
                <p className="text-sm text-muted-foreground">Sie genießen, wir kümmern uns um alles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

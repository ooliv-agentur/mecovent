
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
            Wir helfen Unternehmen, ihre Visionen in einzigartige Veranstaltungen zu verwandeln. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
          </p>
        </div>
        
        {/* Core values section - merged from WhyMecovent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Heart className="w-10 h-10 text-primary/80" />
            </div>
            <h3 className="font-medium text-xl mb-3">INDIVIDUELL</h3>
            <p className="text-muted-foreground">
              Jedes Event ist einzigartig. Wir passen uns Ihren Herausforderungen an und entwickeln maßgeschneiderte Lösungen – ob Corporate Event, wissenschaftliche Konferenz oder Team-Building-Erlebnis.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Lightbulb className="w-10 h-10 text-primary/80" />
            </div>
            <h3 className="font-medium text-xl mb-3">KREATIV</h3>
            <p className="text-muted-foreground">
              Mit Ihren Impulsen und unserer Kreativität garantieren wir den Erfolg Ihrer Veranstaltung. Ihre Vision und Ziele stehen im Mittelpunkt – wir setzen innovative Konzepte mit Leidenschaft um.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Leaf className="w-10 h-10 text-primary/80" />
            </div>
            <h3 className="font-medium text-xl mb-3">NACHHALTIG</h3>
            <p className="text-muted-foreground">
              Durch strategische Planung und ein starkes Netzwerk gestalten wir ressourcenschonende Events, die langfristige Wirkung zeigen – ökologisch, wirtschaftlich und sozial nachhaltig.
            </p>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-background/80 p-8 rounded-xl border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Langjährige Erfahrung</h4>
              <p className="text-sm text-muted-foreground">Unser Expertennetzwerk macht den Unterschied.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Budgeteffiziente Planung</h4>
              <p className="text-sm text-muted-foreground">Transparente Kostenstruktur für Ihre Sicherheit.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Persönlicher Rundum-Service</h4>
              <p className="text-sm text-muted-foreground">Sie genießen Ihr Event, wir kümmern uns um alles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

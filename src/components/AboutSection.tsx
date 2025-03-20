
import React from 'react';
import { Heart, Award, Leaf, CheckCircle, Info } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Unsere Kompetenz für Ihre Events, unsere Kreativität für Ihren Erfolg!</h2>
          <p className="subheader-section">
            Events sind emotionale Begegnungen, die im Gedächtnis bleiben. Wir verwandeln Ihre Vision in ein unvergessliches Erlebnis.
          </p>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-medium mb-6">Unsere Werte</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background/80 p-6 rounded-lg border">
              <h4 className="font-medium text-lg mb-2 text-primary">Diskretion</h4>
              <p className="text-sm">Vertrauen ist unser höchstes Gut. Absolute Vertraulichkeit steht bei uns an erster Stelle.</p>
            </div>
            <div className="bg-background/80 p-6 rounded-lg border min-h-[160px]">
              <h4 className="font-medium text-lg mb-2 text-primary">Hingabe</h4>
              <p className="text-sm">Unsere Leidenschaft für Events treibt uns an – wir gestalten Erlebnisse mit Liebe zum Detail.</p>
            </div>
            <div className="bg-background/80 p-6 rounded-lg border">
              <h4 className="font-medium text-lg mb-2 text-primary">Verlässlichkeit</h4>
              <p className="text-sm">Von der ersten Idee bis zur finalen Umsetzung – wir stehen als Partner an Ihrer Seite.</p>
            </div>
          </div>
          
          <h3 className="text-center text-xl font-medium mb-6">Warum MECOVENT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <Award className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Langjährige Erfahrung</h4>
              <p className="text-sm text-muted-foreground">Ein starkes Partnernetzwerk & Expertenwissen für Ihr Event.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Info className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Budgeteffiziente Planung</h4>
              <p className="text-sm text-muted-foreground">Transparente Kostenstruktur für eine wirtschaftliche Umsetzung.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-10 w-10 text-primary mb-3" />
              <h4 className="font-medium text-base mb-2">Persönlicher Rundum-Service</h4>
              <p className="text-sm text-muted-foreground">Wir kümmern uns um alles – Sie genießen Ihr Event.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

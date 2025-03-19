
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">[Logo]</div>
            <p className="text-muted-foreground max-w-xs">
              Wir bringen Menschen zusammen – Meeting. Congress. Event.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-primary">Start</a></li>
              <li><a href="#about" className="hover:text-primary">Über Uns</a></li>
              <li><a href="#services" className="hover:text-primary">Leistungen</a></li>
              <li><a href="#projects" className="hover:text-primary">Branchen & Events</a></li>
              <li><a href="#testimonials" className="hover:text-primary">Kundenstimmen</a></li>
              <li><a href="#contact" className="hover:text-primary">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Wormser Straße 44</p>
              <p>55294 Bodenheim</p>
              <p>+49 6135 70 39 59 -0</p>
              <p>info@MECOVENT.de</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-center text-lg font-medium mb-4">Warum MECOVENT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>INDIVIDUELL</strong> – Jedes Event wird speziell für Ihre Bedürfnisse konzipiert</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>KREATIV</strong> – Wir setzen auf innovative und einzigartige Eventkonzepte</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>NACHHALTIG</strong> – Verantwortungsvoller Umgang mit Ressourcen für nachhaltige Erlebnisse</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MECOVENT. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

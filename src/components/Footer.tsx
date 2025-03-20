
import React from 'react';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-bold text-2xl mb-4">[Logo]</div>
            <p className="text-muted-foreground max-w-xs">
              Wir bringen Menschen zusammen – Meeting. Congress. Event.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-primary transition-colors">Start</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Über Uns</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Leistungen</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Branchen & Events</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Kundenstimmen</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>Wormser Straße 44</p>
              <p>55294 Bodenheim</p>
              <a 
                href="tel:+4961357039590" 
                className="block hover:text-primary transition-colors flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                +49 6135 70 39 59 -0
              </a>
              <a 
                href="mailto:info@MECOVENT.de" 
                className="block hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                info@MECOVENT.de
              </a>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-center text-lg font-semibold mb-6">Warum MECOVENT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>INDIVIDUELL</strong> – Jedes Event wird speziell für Ihre Bedürfnisse konzipiert</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>KREATIV</strong> – Wir setzen auf innovative und einzigartige Eventkonzepte</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span><strong>NACHHALTIG</strong> – Verantwortungsvoller Umgang mit Ressourcen für nachhaltige Erlebnisse</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} MECOVENT. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

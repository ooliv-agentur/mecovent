
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-bold text-xl mb-4">[Logo]</div>
            <p className="text-muted-foreground max-w-xs">
              [Platzhalter für Unternehmensbeschreibung]
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-primary">Start</a></li>
              <li><a href="#about" className="hover:text-primary">Über Uns</a></li>
              <li><a href="#services" className="hover:text-primary">Leistungen</a></li>
              <li><a href="#projects" className="hover:text-primary">Referenzen</a></li>
              <li><a href="#contact" className="hover:text-primary">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Kontakt</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>[Musterstraße 123]</p>
              <p>[12345 Musterstadt]</p>
              <p>+49 123 456 789</p>
              <p>info@beispiel.de</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} [Unternehmen]. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

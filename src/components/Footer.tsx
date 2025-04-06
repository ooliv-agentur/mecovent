
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    // Prevent default event behavior
    const element = document.getElementById(sectionId);
    
    if (element) {
      const navHeight = 80; // Approximate height of navigation
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // If element not found, redirect to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="font-bold text-2xl mb-4">
              <img 
                src="/lovable-uploads/2315b43b-ca1a-4e3c-a0df-5834ea32e8a0.png" 
                alt="MECOVENT Logo" 
                className="h-10 object-contain"
              />
            </div>
            <p className="text-muted-foreground max-w-xs">
              Wir bringen Menschen zusammen – Meeting. Congress. Event.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Start</button></li>
              <li><button onClick={() => scrollToSection('ueber-uns')} className="hover:text-primary transition-colors">Über Uns</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Leistungen</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Unsere Expertise</button></li>
              <li><button onClick={() => scrollToSection('eventformate')} className="hover:text-primary transition-colors">Veranstaltungsformate</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Kundenstimmen</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Kontakt</button></li>
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
                href="mailto:info@mecovent.de" 
                className="block hover:text-primary transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                info@mecovent.de
              </a>
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <a href="#" className="hover:text-primary transition-colors">AGB</a>
          </div>
          <p>&copy; {new Date().getFullYear()} MECOVENT. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

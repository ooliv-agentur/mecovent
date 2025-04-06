import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (path: string, event: React.MouseEvent) => {
    // If the link is to the current page, prevent default scrolling
    if (location.pathname === path) {
      event.preventDefault();
    }
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're already on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to the home page with the section hash
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
              <li><button onClick={() => scrollToSection('hero')} className="text-left hover:text-primary transition-colors">Start</button></li>
              <li><button onClick={() => scrollToSection('ueber-uns')} className="text-left hover:text-primary transition-colors">Über Uns</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">Leistungen</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-left hover:text-primary transition-colors">Unsere Expertise</button></li>
              <li><button onClick={() => scrollToSection('eventformate')} className="text-left hover:text-primary transition-colors">Veranstaltungsformate</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-primary transition-colors">Kundenstimmen</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Kontakt</button></li>
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
            <Link 
              to="/impressum" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick('/impressum', e)}
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick('/datenschutz', e)}
            >
              Datenschutz
            </Link>
            <Link 
              to="/agb" 
              className="hover:text-primary transition-colors"
              onClick={(e) => handleLinkClick('/agb', e)}
            >
              AGB
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} MECOVENT. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

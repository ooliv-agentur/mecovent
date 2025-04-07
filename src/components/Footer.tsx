
import React from 'react';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
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
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and company description */}
          <div className="md:col-span-4 space-y-6">
            <div className="font-bold text-2xl mb-6">
              <button onClick={() => scrollToSection('hero')}>
                <img 
                  src="/lovable-uploads/2315b43b-ca1a-4e3c-a0df-5834ea32e8a0.png" 
                  alt="MECOVENT Logo" 
                  className="h-10 object-contain"
                />
              </button>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Wir bringen Menschen zusammen – Meeting. Congress. Event.
            </p>
          </div>
          
          {/* Navigation links */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6">Schnellzugriff</h3>
            <ul className="space-y-3">
              {[
                { label: "Start", id: "hero" },
                { label: "Über Uns", id: "ueber-uns" },
                { label: "Leistungen", id: "services" },
                { label: "Unsere Expertise", id: "projects" },
                { label: "Veranstaltungsformate", id: "eventformate" },
                { label: "Kundenstimmen", id: "testimonials" },
                { label: "Kontakt", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="md:col-span-4">
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <address className="not-italic text-muted-foreground">
                  <p>Wormser Straße 44</p>
                  <p>55294 Bodenheim</p>
                </address>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+4961357039590" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +49 6135 70 39 59 -0
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@mecovent.de" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@mecovent.de
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal links and copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/impressum" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleLinkClick('/impressum', e)}
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleLinkClick('/datenschutz', e)}
              >
                Datenschutz
              </Link>
              <Link 
                to="/agb" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleLinkClick('/agb', e)}
              >
                AGB
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MECOVENT. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

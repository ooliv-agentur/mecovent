
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Update sticky header based on scroll position
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'projects', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted offset to account for navigation bar height
          if (rect.top <= 100 && rect.bottom > 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed navigation height
      const navHeight = 80; // approximate nav height in pixels
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 backdrop-blur-sm",
        isScrolled ? "bg-background/90 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-xl">
          [Logo]
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { id: 'hero', label: 'Start' },
            { id: 'about', label: 'Über Uns' },
            { id: 'services', label: 'Leistungen' },
            { id: 'projects', label: 'Branchen & Eventformate' },
            { id: 'testimonials', label: 'Kundenstimmen' },
            { id: 'contact', label: 'Kontakt' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "nav-item",
                activeSection === item.id && "nav-item-active"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button className="p-2">
            [Menu]
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

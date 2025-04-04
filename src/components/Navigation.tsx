
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
      
      const sections = ['hero', 'ueber-uns', 'services', 'projects', 'eventformate', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
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
  };

  const navigationItems = [
    { id: 'hero', label: 'Start' },
    { id: 'ueber-uns', label: 'Über Uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'projects', label: 'Unsere Expertise' },
    { id: 'eventformate', label: 'Veranstaltungsformate' },
    { id: 'testimonials', label: 'Kundenstimmen' },
    { id: 'contact', label: 'Kontakt' }
  ];

  // Dynamically select logo source based on scroll state
  const logoSrc = isScrolled 
    ? "/lovable-uploads/12df19ff-641f-4ec4-9a0a-b4a9b2260cb1.png" 
    : "/lovable-uploads/ed43ffda-ea78-4686-90a5-933c2995ba69.png";

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 right-0 z-50 transition-all duration-300 py-4 w-full",
          isScrolled ? "bg-[#009fe3] backdrop-blur-sm shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <img 
            src={logoSrc}
            alt="MECOVENT Logo" 
            className="h-9 object-contain transition-opacity duration-300" 
          />
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "p-2 transition-all hover:bg-accent/50 rounded-full",
              isScrolled ? "text-white" : "text-white"
            )}
            aria-label="Open menu"
          >
            {/* Custom hamburger menu icon */}
            <div className="flex flex-col justify-center w-6">
              <div className={`w-6 h-0.5 rounded ${isScrolled ? 'bg-white' : 'bg-white'} mb-1 block`}></div>
              <div className={`w-6 h-0.5 rounded ${isScrolled ? 'bg-white' : 'bg-[#009fe3]'} mb-1 block`}></div>
              <div className={`w-6 h-0.5 rounded ${isScrolled ? 'bg-white' : 'bg-white'} block`}></div>
            </div>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <img 
                src="/lovable-uploads/ed43ffda-ea78-4686-90a5-933c2995ba69.png" 
                alt="MECOVENT Logo" 
                className="h-9 object-contain" 
              />
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 transition-all hover:bg-accent/50 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow py-12">
            <ul className="space-y-6 text-center">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-xl md:text-2xl py-2 px-4 transition-colors",
                      activeSection === item.id 
                        ? "font-medium text-primary" 
                        : "text-primary/70 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navigation;

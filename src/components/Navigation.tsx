
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update sticky header based on scroll position
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'services', 'projects', 'eventformate', 'testimonials', 'contact'];
      
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
    
    // Prevent scrolling when menu is open
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
    setIsMenuOpen(false); // Close menu when a link is clicked
    
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

  const navigationItems = [
    { id: 'hero', label: 'Start' },
    { id: 'about', label: 'Über Uns' },
    { id: 'services', label: 'Leistungen' },
    { id: 'projects', label: 'Unsere Expertise' },
    { id: 'eventformate', label: 'Veranstaltungsformate' },
    { id: 'testimonials', label: 'Kundenstimmen' },
    { id: 'contact', label: 'Kontakt' }
  ];

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 right-0 z-50 transition-all duration-300 py-4",
          isScrolled ? "bg-background/90 shadow-sm w-full" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex justify-end items-center px-4">          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 transition-all hover:bg-accent/50 rounded-full text-white"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-[60] flex flex-col overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <img 
                src="/lovable-uploads/92fb0bda-3846-4569-af8a-7741561e0af9.png" 
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

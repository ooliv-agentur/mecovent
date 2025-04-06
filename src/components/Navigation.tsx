
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Phone, Mail, Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Set visibility based on scroll direction and position
      if (currentScrollPos > 150) {
        setVisible(!isScrollingDown);
      } else {
        setVisible(true);
      }
      
      // Update scroll position
      setPrevScrollPos(currentScrollPos);
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollPos > 150);
      
      // Update active section
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
  }, [isMenuOpen, prevScrollPos]);

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
          isScrolled ? "bg-[#009fe3] backdrop-blur-sm shadow-sm" : "bg-transparent",
          visible ? "translate-y-0" : "-translate-y-full"
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
              "w-10 h-10 flex items-center justify-center transition-all rounded-full bg-transparent hover:bg-white/10",
              isScrolled ? "text-white" : "text-white"
            )}
            aria-label="Open menu"
          >
            <div className="flex flex-col space-y-1">
              <div 
                className={cn(
                  "h-0.5 w-6 rounded transition-all duration-300",
                  isScrolled ? "bg-white" : "bg-white"
                )}
              />
              <div 
                className={cn(
                  "h-0.5 w-6 rounded transition-all duration-300",
                  isScrolled ? "bg-white" : "bg-[#009fe3]"
                )}
              />
              <div 
                className={cn(
                  "h-0.5 w-6 rounded transition-all duration-300",
                  isScrolled ? "bg-white" : "bg-white"
                )}
              />
            </div>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <img 
                src="/lovable-uploads/12df19ff-641f-4ec4-9a0a-b4a9b2260cb1.png" 
                alt="MECOVENT Logo" 
                className="h-9 object-contain" 
              />
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 transition-all hover:bg-gray-100 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow py-10">
            <ul className="space-y-6 text-center">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-xl md:text-2xl lg:text-3xl py-2 px-4 transition-colors rounded-md",
                      activeSection === item.id 
                        ? "font-medium text-[#009fe3]" 
                        : "text-gray-700 hover:text-[#009fe3] hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Block */}
          <div className="py-8 border-t border-gray-100 mt-4">
            <div className="container mx-auto max-w-md px-4">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Wir freuen uns auf Ihre Anfrage</h3>
                <div className="flex flex-col items-center space-y-3">
                  <a 
                    href="tel:+4969123456789" 
                    className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors"
                  >
                    <Phone size={18} className="mr-2 text-[#009fe3]" />
                    <span>+49 (0) 69 123 456 789</span>
                  </a>
                  <a 
                    href="mailto:info@mecovent.de" 
                    className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors"
                  >
                    <Mail size={18} className="mr-2 text-[#009fe3]" />
                    <span>info@mecovent.de</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;


import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigationScroll } from '@/hooks/useNavigationScroll';
import { NavigationItems } from './navigation/NavigationItems';
import { ContactInfo } from './navigation/ContactInfo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isScrolled, activeSection, visible } = useNavigationScroll();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
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
      window.location.href = `/#${sectionId}`;
    }
  };

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
          <Link to="/">
            <img 
              src={logoSrc}
              alt="MECOVENT Logo" 
              className="h-9 object-contain transition-opacity duration-300" 
            />
          </Link>
          
          <div className="flex items-center gap-3 relative z-[70]">
            <span className={cn(
              "text-sm font-medium",
              isMenuOpen ? "text-[#222]" : "text-white"
            )}>
              {isMenuOpen ? "Schließen" : "Menü"}
            </span>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center transition-all rounded-full bg-transparent hover:bg-white/10"
              aria-label="Open menu"
            >
              <img
                src="/lovable-uploads/3f78c6a0-159b-4cbe-be49-7303dccfd108.png"
                alt="Menu"
                className="w-6 h-6 object-contain"
              />
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <img 
                src="/lovable-uploads/3c5fdd60-00c3-413d-aff2-357fdba14b25.png"
                alt="MECOVENT Logo" 
                className="h-9 object-contain" 
              />
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 transition-all hover:bg-gray-100 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow py-12">
            <NavigationItems
              activeSection={activeSection}
              onItemClick={scrollToSection}
            />
          </nav>
          
          <ContactInfo />
        </div>
      )}
    </>
  );
};

export default Navigation;

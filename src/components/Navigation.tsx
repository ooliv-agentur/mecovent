import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

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
          <Link to="/">
            <img 
              src={logoSrc}
              alt="MECOVENT Logo" 
              className="h-9 object-contain transition-opacity duration-300" 
            />
          </Link>
          
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
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src="/lovable-uploads/12df19ff-641f-4ec4-9a0a-b4a9b2260cb1.png" 
                  alt="MECOVENT Logo" 
                  className="h-9 object-contain" 
                />
              </Link>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 transition-all hover:bg-gray-100 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} className="text-gray-800" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow py-12">
            <ul className="space-y-8 text-center">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-lg md:text-xl lg:text-2xl py-2 px-4 transition-all duration-200 rounded-md relative",
                      activeSection === item.id 
                        ? "font-medium text-[#009fe3]" 
                        : "text-gray-700 hover:text-[#009fe3] font-normal",
                      "group"
                    )}
                  >
                    {item.label}
                    <span className={cn(
                      "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#009fe3] transition-all duration-300",
                      activeSection === item.id ? "w-2/3" : "w-0 group-hover:w-2/3"
                    )}></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Block - with increased spacing */}
          <div className="py-10 border-t border-gray-100 mt-16">
            <div className="container mx-auto max-w-md px-4">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-6">Wir freuen uns auf Ihre Anfrage</h3>
                <div className="flex flex-col items-center space-y-5">
                  <a 
                    href="tel:+4961357039590" 
                    className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors text-base md:text-lg"
                  >
                    <Phone size={16} className="mr-3 text-[#009fe3]" />
                    <span>+49 6135 70 39 59 -0</span>
                  </a>
                  <a 
                    href="mailto:info@mecovent.de" 
                    className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors text-base md:text-lg"
                  >
                    <Mail size={16} className="mr-3 text-[#009fe3]" />
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

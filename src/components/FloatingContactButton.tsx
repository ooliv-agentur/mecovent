
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > prevScrollY;
      
      // Hide button when scrolling down, show when scrolling up
      setIsVisible(!isScrollingDown || currentScrollY < 300);
      setPrevScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={cn(
        "fixed right-0 z-40 transform translate-y-1/2 px-5 py-3 rounded-l-full",
        "bg-[#33c3f0]/90 hover:bg-[#33c3f0] text-white font-medium",
        "shadow-md hover:shadow-lg transition-all duration-300",
        "flex items-center gap-2 group",
        "hidden md:flex", // Hide on mobile, show on tablet/desktop
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      style={{ top: '50%' }}
      aria-label="Kontakt knüpfen"
    >
      <MessageCircle 
        size={18} 
        className="text-white transition-transform group-hover:-translate-y-0.5" 
      />
      <span>Kontakt knüpfen</span>
    </button>
  );
};

export default FloatingContactButton;

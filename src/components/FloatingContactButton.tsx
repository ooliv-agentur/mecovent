
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  useEffect(() => {
    // Initial subtle animation on first load
    const buttonElement = document.getElementById('floating-contact-button');
    if (buttonElement) {
      setTimeout(() => {
        buttonElement.classList.add('animate-pulse');
        setTimeout(() => {
          buttonElement.classList.remove('animate-pulse');
        }, 1500);
      }, 1000);
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      id="floating-contact-button"
      onClick={scrollToContact}
      className={cn(
        "fixed right-6 top-1/2 z-40 transform -translate-y-1/2 px-6 py-3.5 rounded-l-full",
        "bg-primary/80 hover:bg-primary text-white font-medium",
        "shadow-md hover:shadow-lg transition-all duration-300",
        "flex items-center gap-2.5 group",
        "hidden md:flex", // Hide on mobile, show on tablet/desktop
      )}
      aria-label="Kontakt knüpfen"
    >
      <MessageCircle 
        size={20} 
        className="text-white transition-transform group-hover:-translate-y-0.5" 
      />
      <span>Kontakt knüpfen</span>
    </button>
  );
};

export default FloatingContactButton;

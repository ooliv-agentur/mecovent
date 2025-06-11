
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    // Add initial animation after a short delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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
        "fixed right-0 top-1/2 z-40 transform -translate-y-1/2 px-6 py-3.5 rounded-l-full",
        "bg-[#A8D8B9] text-[#111111] hover:bg-[#9ACAAB]",
        "shadow-md hover:shadow-lg transition-all duration-300",
        "flex items-center gap-2 group",
        "hidden md:flex", // Hide on mobile, show on tablet/desktop
        hasAnimated ? "animate-none" : "animate-pulse"
      )}
      aria-label="Kontakt"
    >
      <MessageCircle 
        size={20} 
        className="text-[#111111] transition-transform group-hover:-translate-y-0.5" 
      />
      <span className="font-medium">Kontakt</span>
    </button>
  );
};

export default FloatingContactButton;

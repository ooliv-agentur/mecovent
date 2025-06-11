
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Find the "ueber-uns" section since that's the logical "get to know us" section
    const targetSection = document.getElementById('ueber-uns');
    if (targetSection) {
      // Get the navigation height
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Calculate exact position
      const targetY = targetSection.offsetTop - navHeight;
      
      // Smooth scroll to the target position
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (event: React.MouseEvent) => {
    event.preventDefault();
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetY = contactSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/MECOVENT_Hero.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Centered content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen animate-fade-in text-center px-4">
        {/* Main content */}
        <div className="max-w-4xl">
          {/* MECOVENT Claim - Prominent headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">
            Wir bringen<br />
            Menschen<br />
            zusammen
          </h1>
          
          {/* Subtitle */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 mb-12 leading-relaxed">
            Meeting. Congress. Event.
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Jetzt Beratung anfragen
          </Button>
        </div>
      </div>
      
      {/* Animated scroll indicator with only arrow */}
      <a 
        href="#ueber-uns" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;

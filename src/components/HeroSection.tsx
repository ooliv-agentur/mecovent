
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Find the "intro" section as the next logical section
    const targetSection = document.getElementById('intro');
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

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Video Background - no overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/LogoMask_6.mp4"
        />
      </div>
      
      {/* Text centered in 3rd quarter from top */}
      <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ paddingTop: 'calc(50vh + 100px)' }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-primary text-center animate-fade-in">
          Wir bringen Menschen zusammen.
        </h1>
      </div>
      
      {/* Animated scroll indicator with only arrow */}
      <a 
        href="#intro" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-gray-800 animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;

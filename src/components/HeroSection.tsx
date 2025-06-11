
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/public/LogoMask_4.mp4"
        />
      </div>
      
      {/* Position text block at 25% from left (second quarter) */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center min-h-screen animate-fade-in pl-[25%]">
        {/* Main content with left alignment */}
        <div className="w-full max-w-2xl text-left">
          {/* Main Headline - each word on new line - slightly smaller */}
          <div className="space-y-2 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">
              Wir<br />
              bringen<br />
              Menschen<br />
              zusammen.
            </h1>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator with only arrow */}
      <a 
        href="#intro" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Find the "why-mecovent" section specifically
    const targetSection = document.getElementById('why-mecovent');
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
          src="/20250402_1922_Elegant%20Event%20Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Center the content in the middle of the screen */}
      <div className="container-section relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen animate-fade-in">
        {/* Main Headline - Split into two distinct visual sections */}
        <div className="space-y-1 mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            <span className="text-[#86D5F8]">Wir</span> bringen<br />
            Menschen zusammen –
          </h1>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Meeting. Congress. <span className="text-[#86D5F8]">Event</span>.
          </div>
        </div>
        
        {/* Subline as a three-liner */}
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center mx-auto mt-4 mb-8 flex flex-col items-center leading-normal font-medium">
          <span className="text-[#86D5F8]">Strategisch</span> geplant.
          <span>Emotional inszeniert.</span>
          <span><span className="text-[#86D5F8]">Nachhaltig</span> umgesetzt.</span>
        </h2>
      </div>
      
      {/* Animated scroll indicator with blue rollover effect */}
      <a 
        href="#why-mecovent" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="text-white text-xl mb-2 animate-bounce-y group-hover:text-[#33C3F0] transition-colors duration-300">
          Kennenlernen
        </div>
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;

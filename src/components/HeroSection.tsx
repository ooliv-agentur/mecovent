
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-relaxed">
          <span className="block whitespace-nowrap">Wir bringen Menschen zusammen –</span>
          <span className="block">Meeting. Congress. Event.</span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center mx-auto mt-4 mb-8 leading-relaxed font-medium max-w-full whitespace-nowrap">
          Strategisch geplant. Emotional inszeniert. Nachhaltig umgesetzt.
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

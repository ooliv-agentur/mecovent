
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Find the "why-mecovent" section specifically instead of just the next section
    const targetSection = document.getElementById('why-mecovent');
    if (targetSection) {
      // Get positions
      const startY = window.scrollY || document.documentElement.scrollTop;
      
      // Calculate the position that shows just the beginning of the section (top of the section)
      // This will position the scroll to show the "ÜBER UNS" heading
      const targetY = targetSection.getBoundingClientRect().top + startY;
      const distance = targetY - startY;
      
      // Animation settings
      const duration = 800; // Reduced from 2000ms to 800ms for quicker response
      let startTime = null;
      
      // Animation function
      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Easing function - smooth easeInOutQuad
        const ease = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startY + distance * ease);
        
        if (elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      // Start animation immediately
      requestAnimationFrame(animation);
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Center the content in the middle of the screen */}
      <div className="container-section relative z-10 text-center max-w-[800px] mx-auto flex flex-col items-center justify-center min-h-screen animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
          Message. Atmosphäre. Event.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center max-w-4xl mx-auto mt-8 leading-normal">
          Wir gestalten Erlebnisse, die Menschen und Marken nachhaltig verbinden.
        </p>
      </div>
      
      {/* Animated scroll indicator with blue rollover effect */}
      <div 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="text-white text-xl mb-2 animate-bounce-y group-hover:text-[#33C3F0] transition-colors duration-300">
          Kennenlernen
        </div>
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('ueber-uns');
    
    if (aboutSection) {
      // Get the target position
      const targetPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      
      // Animation variables
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 2000; // 2 seconds for slow scroll
      let startTime: number;
      
      // Start the animation
      function step(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function - smooth easeInOutQuad
        const easing = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        // Set the new scroll position
        window.scrollTo(0, startPosition + (distance * easing));
        
        // Continue animation if not finished
        if (elapsed < duration) {
          requestAnimationFrame(step);
        }
      }
      
      // Start the animation loop
      requestAnimationFrame(step);
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
      
      <div className="container-section relative z-10 text-center max-w-[800px] mx-auto pt-[25vh] pb-[30vh] animate-fade-in">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
          Message. Atmosphäre. Event.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center max-w-4xl mx-auto mt-8 leading-normal">
          Wir gestalten Erlebnisse, die Menschen und Marken nachhaltig verbinden.
        </p>
        
        <div className="flex justify-center mt-10">
          <Button 
            onClick={scrollToAbout}
            className="px-6 py-3 font-medium text-white bg-[#009fe3] rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#009fe3] hover:via-[#73c4ef] hover:to-[#009fe3] hover:bg-200% animate-fade-in-up"
          >
            Kennenlernen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

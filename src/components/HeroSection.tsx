
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const aboutSection = document.getElementById('ueber-uns');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Apply a smoother, slower scroll animation
      // This will override the default scrollIntoView behavior with a more controlled animation
      const startPosition = window.pageYOffset;
      const targetPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Longer duration for slower scroll (in ms)
      let startTime: number | null = null;
      
      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smoother animation (ease-in-out cubic)
        const easeInOutCubic = (t: number) => 
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
          
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };
      
      requestAnimationFrame(animateScroll);
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
          <button 
            onClick={scrollToAbout}
            className="px-6 py-3 font-medium text-white bg-[#009fe3] rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#009fe3] hover:via-[#73c4ef] hover:to-[#009fe3] hover:bg-200% animate-fade-in-up"
          >
            Kennenlernen
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToAbout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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
          src="/20250402_1922_Elegant Event Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Logo (Top Left) */}
      <div className="absolute top-0 left-0 p-6 z-10">
        <img 
          src="/lovable-uploads/92fb0bda-3846-4569-af8a-7741561e0af9.png" 
          alt="MECOVENT Logo" 
          className="h-9 object-contain" 
        />
      </div>
      
      <div className="container-section relative z-10 text-center max-w-[800px] mx-auto pt-[25vh] pb-[30vh] animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Message. Atmosphäre. Event.
        </h1>
        <p className="text-lg md:text-xl text-gray-100 tracking-wide mb-12">
          Wir gestalten Erlebnisse, die Menschen und Marken nachhaltig verbinden.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={scrollToAbout}
            size="lg" 
            className="rounded-full px-8 py-6 text-base bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            Kennenlernen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

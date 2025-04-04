
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
        {/* Add Logo at Top Left */}
        <div className="absolute top-10 left-10">
          <img 
            src="/lovable-uploads/6d99efe5-9563-49e8-8826-82429d12dc4a.png" 
            alt="MECOVENT Logo" 
            className="h-12 object-contain" 
          />
        </div>

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

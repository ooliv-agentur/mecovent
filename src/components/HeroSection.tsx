
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
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
          src="/20250402_1922_Elegant Event Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Logo (Top Left) */}
      <div className="absolute top-0 left-0 p-6 z-10">
        <img 
          src="/lovable-uploads/9c383b79-a81a-4ef0-9b54-92ca8574730b.png" 
          alt="MECOVENT Logo" 
          className="h-8 md:h-12" 
        />
      </div>
      
      <div className="container-section relative z-10 text-center max-w-[800px] mx-auto py-[25vh] animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Wir bringen Menschen zusammen.
        </h1>
        <p className="text-lg md:text-xl text-gray-100 tracking-wide mb-12">
          Meeting. Congress. Event.
        </p>
        
        <div className="flex justify-center">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="rounded-full px-8 py-6 text-base bg-white text-black hover:bg-gray-100 w-full sm:w-auto"
          >
            Verbindung knüpfen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

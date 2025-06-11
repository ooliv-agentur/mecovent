
import React from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    const targetSection = document.getElementById('ueber-uns');
    if (targetSection) {
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      const targetY = targetSection.offsetTop - navHeight;
      
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
          src="https://projekte-ooliv.de/mecovent/20250402_1922_Elegant%20Event%20Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container-section relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen animate-fade-in">
        <div className="space-y-8 mb-12">
          <h1 className="headline-hero text-gradient-dynamic">
            Wir bringen<br />
            Menschen zusammen –
          </h1>
          <div className="headline-secondary text-gradient-dynamic py-2 font-extrabold text-accent-spacing">
            Meeting. Congress. Event.
          </div>
        </div>
        
        <div className="subheader-large text-white/90 text-center mx-auto mt-6 mb-12 space-y-6 font-medium max-w-4xl">
          <div className="flex items-center justify-center gap-4 text-dynamic-left sm:text-dynamic-center">
            <CheckCircle className="h-7 w-7 text-[#009fe3] flex-shrink-0" />
            <span className="text-left sm:text-center">Strategisch geplant.</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-dynamic-right sm:text-dynamic-center">
            <CheckCircle className="h-7 w-7 text-[#009fe3] flex-shrink-0" />
            <span className="text-right sm:text-center">Emotional inszeniert.</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-dynamic-left sm:text-dynamic-center">
            <CheckCircle className="h-7 w-7 text-[#009fe3] flex-shrink-0" />
            <span className="text-left sm:text-center">Nachhaltig umgesetzt.</span>
          </div>
        </div>
      </div>
      
      <a 
        href="#ueber-uns" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-10 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="text-white subheader-small mb-2 animate-bounce-y group-hover:text-[#33C3F0] transition-colors duration-300 font-semibold text-tight-spacing">
          Kennenlernen
        </div>
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;


import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToNext = (event: React.MouseEvent) => {
    event.preventDefault();
    
    // Find the "ueber-uns" section since that's the logical "get to know us" section
    const targetSection = document.getElementById('ueber-uns');
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-800"
    >
      {/* Gray Background - this will be the main background */}
      <div className="absolute inset-0 bg-gray-800"></div>

      {/* Video Background - positioned behind everything */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="https://projekte-ooliv.de/mecovent/20250402_1922_Elegant%20Event%20Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
      </div>

      {/* LOGO MASK EFFECT - In final build, this will use CSS mask to show video only through logo */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="w-[70vw] h-[70vh] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Prototype simulation: Show video area with border to indicate logo shape */}
            <div 
              className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-bold text-white border-4 border-white/70 rounded-lg bg-black/20"
              style={{ 
                background: 'linear-gradient(45deg, rgba(0,159,227,0.6) 25%, rgba(255,255,255,0.3) 25%, rgba(255,255,255,0.3) 75%, rgba(0,159,227,0.6) 75%)',
                backgroundSize: '40px 40px'
              }}
            >
              <div className="text-center">
                <div className="mb-2">VIDEO VISIBLE</div>
                <div className="text-sm md:text-xl">THROUGH LOGO</div>
                <div className="text-xs md:text-sm mt-2 opacity-75">70vw × 70vh</div>
              </div>
            </div>
            
            {/* 
              FINAL BUILD IMPLEMENTATION:
              This div will have CSS mask applied to show video only through logo shape.
              CSS to add in final build:
              
              .logo-mask {
                mask: url('/mecovent-Logo-transparent.svg') no-repeat center center;
                mask-size: contain;
                -webkit-mask: url('/mecovent-Logo-transparent.svg') no-repeat center center;
                -webkit-mask-size: contain;
              }
            */}
            <div
              className="w-full h-full relative z-10 opacity-0"
              style={{
                /* In final build, uncomment these lines:
                mask: 'url("/mecovent-Logo-transparent.svg") no-repeat center center',
                maskSize: 'contain',
                WebkitMask: 'url("/mecovent-Logo-transparent.svg") no-repeat center center',
                WebkitMaskSize: 'contain',
                */
              }}
            >
              {/* This will show the video through the logo mask in final build */}
              <img
                src="/mecovent-Logo-transparent.svg"
                alt="MECOVENT Logo"
                className="w-full h-full object-contain opacity-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gray overlay to cover video everywhere except logo area */}
      <div className="absolute inset-0 z-40 bg-gray-800" style={{
        /* 
          FINAL BUILD: This will also use inverse mask to hide everywhere except logo
          mask: 'url("/mecovent-Logo-transparent.svg") no-repeat center center',
          maskSize: 'contain',
          maskComposite: 'exclude',
        */
      }}></div>
      
      {/* Position text block at 25% from left */}
      <div className="relative z-30 w-full flex flex-col items-start justify-center min-h-screen pl-[25%]">
        {/* Main content with left alignment */}
        <div className="w-full max-w-2xl text-left">
          {/* Main Headline - each word on new line - slightly smaller */}
          <div className="space-y-2 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">
              Wir<br />
              bringen<br />
              Menschen<br />
              zusammen.
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-normal bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-relaxed py-2 mt-6 mb-6">
              Meeting. Congress. Event.
            </div>
          </div>
          
          {/* Subline with "/" bullets - left aligned */}
          <div className="text-xl sm:text-2xl md:text-3xl text-white/90 space-y-4 font-medium">
            <div className="flex items-center gap-3">
              <span className="text-[#009fe3] text-2xl font-bold">/</span>
              <span>Strategisch geplant.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#009fe3] text-2xl font-bold">/</span>
              <span>Emotional inszeniert.</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#009fe3] text-2xl font-bold">/</span>
              <span>Nachhaltig umgesetzt.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator with only arrow */}
      <a 
        href="#ueber-uns" 
        className="absolute bottom-10 left-0 right-0 mx-auto z-40 flex flex-col items-center cursor-pointer group"
        onClick={scrollToNext}
      >
        <ChevronDown className="text-white animate-bounce-y h-8 w-8 group-hover:text-[#33C3F0] transition-colors duration-300" />
      </a>
    </section>
  );
};

export default HeroSection;

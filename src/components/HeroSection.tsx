
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gray Background - this is the main background */}
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

      {/* MECOVENT TEXT MASK - Video visible only through text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div 
          className="text-[20vw] font-black text-white leading-none tracking-wider select-none"
          style={{
            /* 
              FINAL BUILD CSS - This will show video only through the text:
              background: 'url("https://projekte-ooliv.de/mecovent/20250402_1922_Elegant%20Event%20Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              
              OR use mix-blend-mode approach:
              mixBlendMode: 'screen',
            */
            
            /* Prototype simulation - showing video effect with gradient */
            background: 'linear-gradient(45deg, #009fe3 25%, #ffffff 25%, #ffffff 75%, #009fe3 75%)',
            backgroundSize: '20px 20px',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 3s ease-in-out infinite'
          }}
        >
          MECOVENT
        </div>
      </div>

      {/* Alternative approach for final build - Video layer with text mask */}
      <div 
        className="absolute inset-0 z-5 opacity-0"
        style={{
          /* 
            FINAL BUILD ALTERNATIVE:
            Use this div for video with text mask
            
            background: 'url("video-url")',
            mask: 'linear-gradient(transparent, transparent), url("data:image/svg+xml;base64,...")',
            maskComposite: 'intersect'
          */
        }}
      >
        <video
          className="w-full h-full object-cover opacity-0"
          autoPlay
          muted
          loop
          playsInline
          src="https://projekte-ooliv.de/mecovent/20250402_1922_Elegant%20Event%20Ambiance_simple_compose_01jqvrch48fr9sq1rmb5c8ghxx.mp4"
        />
      </div>
      
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

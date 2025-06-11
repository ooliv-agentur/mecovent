
import React from 'react';

const IntroSection = () => {
  return (
    <section 
      id="intro" 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Meeting. Congress. Event. */}
        <div className="text-xl sm:text-2xl md:text-3xl font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-relaxed py-2 mb-12">
          Meeting. Congress. Event.
        </div>
        
        {/* Bullet points with "/" */}
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 space-y-6 font-medium max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <span className="text-[#009fe3] text-2xl font-bold">/</span>
            <span>Strategisch geplant.</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-[#009fe3] text-2xl font-bold">/</span>
            <span>Emotional inszeniert.</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-[#009fe3] text-2xl font-bold">/</span>
            <span>Nachhaltig umgesetzt.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

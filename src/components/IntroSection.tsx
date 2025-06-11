
import React from 'react';

const IntroSection = () => {
  return (
    <section 
      id="intro" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Meeting. Congress. Event. */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal bg-gradient-to-r from-[#005a80] to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-relaxed mb-16">
            Meeting. Congress. Event.
          </div>
          
          {/* Sublines with "/" bullets */}
          <div className="space-y-8 text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium">
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#009fe3] text-3xl font-bold">/</span>
              <span>Strategisch geplant.</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#009fe3] text-3xl font-bold">/</span>
              <span>Emotional inszeniert.</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-[#009fe3] text-3xl font-bold">/</span>
              <span>Nachhaltig umgesetzt.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

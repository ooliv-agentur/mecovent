
import React from 'react';
import { ArrowRight } from 'lucide-react';

const VideoSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Get navigation height for offset
      const navHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      // Calculate exact position
      const targetY = contactSection.offsetTop - navHeight;
      
      // Smooth scroll
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full h-[450px] md:h-[500px] overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/lovable-uploads/20250407_0936_Event Tranquility_simple_compose_01jr7jvm9fe5svth9mjsww839d.mp4"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/70 to-transparent opacity-80"></div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 inset-x-0 pb-12 pt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            Veranstaltungen, die bleiben – eingefangen in Momenten.
          </h2>
          
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-[#33C3F0] hover:bg-[#33C3F0]/90 text-white transition-colors px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl"
          >
            <span>Jetzt erstes Gespräch starten</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

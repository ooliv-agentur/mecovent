import React, { useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={videoRef} 
      className="relative w-full h-[75vh] overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        {/* Using both absolute and relative paths for better compatibility */}
        <source src="https://mecovent.projekte-ooliv.de/lovable-uploads/20250407_0946_High-Tech Corporate Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4" type="video/mp4" />
        <source src="/lovable-uploads/20250407_0946_High-Tech Corporate Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4" type="video/mp4" />
        {/* Fallback-Text falls Video nicht geladen werden kann */}
        Ihr Browser unterstützt keine Videos.
      </video>
      
      {/* Gradient overlay - keeping a subtle overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/40 to-transparent opacity-60"></div>
    </section>
  );
};

export default VideoSection;

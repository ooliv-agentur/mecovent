
import React from 'react';

const VideoSection = () => {
  return (
    <section className="relative w-full h-[75vh] overflow-hidden">
      {/* Video background - simplified implementation without transform effects */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/lovable-uploads/20250407_0946_High-Tech Corporate Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4"
      />
    </section>
  );
};

export default VideoSection;

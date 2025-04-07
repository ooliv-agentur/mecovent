import React, { useEffect, useRef } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  // Add parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      
      const scrollPosition = window.scrollY;
      const videoSection = videoRef.current;
      const videoOffset = videoSection.offsetTop;
      const videoHeight = videoSection.offsetHeight;
      
      // Only apply effect when the section is in view
      if (scrollPosition > videoOffset - window.innerHeight && 
          scrollPosition < videoOffset + videoHeight) {
        
        // Calculate parallax offset - slower movement for parallax effect
        const parallaxOffset = (scrollPosition - (videoOffset - window.innerHeight)) * 0.4;
        
        // Apply transform to create parallax effect
        const video = videoSection.querySelector('video');
        if (video) {
          video.style.transform = `translateY(${parallaxOffset * 0.15}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={videoRef} 
      className="relative w-full h-[90vh] overflow-hidden"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300"
        autoPlay
        muted
        loop
        playsInline
        src="/lovable-uploads/20250407_0936_Event Tranquility_simple_compose_01jr7jvm9fe5svth9mjsww839d.mp4"
      />
      
      {/* Gradient overlay - keeping a subtle overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/40 to-transparent opacity-60"></div>
    </section>
  );
};

export default VideoSection;

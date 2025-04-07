
import React, { useEffect, useRef, useState } from 'react';

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoError, setVideoError] = useState(false);

  // Define video sources with the new directly hosted URL
  const videoSources = [
    // New directly hosted URL
    "https://projekte-ooliv.de/mecovent/20250407_0946_High-Tech%20Corporate%20Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4",
    // Fallback URLs (if needed)
    `${window.location.protocol}//${window.location.host}/20250407_0946_High-Tech%20Corporate%20Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4`,
    "/20250407_0946_High-Tech%20Corporate%20Event_simple_compose_01jr7kdhtcee3bx75xtzd6q1a7.mp4"
  ];

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

  const handleVideoError = () => {
    console.error("Video failed to load");
    setVideoError(true);
  };

  // Debug log to help with troubleshooting
  useEffect(() => {
    console.log("Video section rendered", {
      protocol: window.location.protocol,
      host: window.location.host,
      sources: videoSources
    });
  }, [videoSources]);

  return (
    <section 
      ref={videoRef} 
      className="relative w-full h-[75vh] overflow-hidden bg-[#1A1F2C]"
    >
      {/* Video background with multiple fallback sources */}
      {!videoError ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={handleVideoError}
        >
          {videoSources.map((src, index) => (
            <source key={index} src={src} type="video/mp4" />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white/70 bg-[#1A1F2C]">
          <p>Video nicht verfügbar</p>
        </div>
      )}
      
      {/* Gradient overlay - keeping a subtle overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] via-[#1A1F2C]/40 to-transparent opacity-60"></div>
    </section>
  );
};

export default VideoSection;

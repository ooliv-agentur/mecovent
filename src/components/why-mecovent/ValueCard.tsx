
import React, { useRef, useState } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  videoSrc: string;
  index: number;
}

const ValueCard = ({ title, description, videoSrc, index }: ValueCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use our brand colors instead of gradients
  const brandColors = [
    'bg-brand-blue',        // Blau (Individuell)
    'bg-brand-coral',       // Koralle/Apricot (Kreativ)
    'bg-brand-mint'         // Mintgrün (Nachhaltig)
  ];

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsHovered(false);
  };

  return (
    <div 
      className={`relative group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 h-full
                 ${isHovered ? 'shadow-2xl' : 'shadow-md'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 ${brandColors[index % 3]} opacity-70 rounded-bl-full -z-0 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
      
      <div className="flex flex-col items-center text-center p-6 z-10 relative">
        <div className="w-full aspect-video mb-6 overflow-hidden rounded-lg relative">
          <video 
            ref={videoRef}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            src={videoSrc}
            muted
            playsInline
            loop
            preload="auto"
          />
          
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
            </div>
          </div>
        </div>
        
        <h3 className="font-bold text-xl mb-3 relative">
          {title}
          <div className={`h-0.5 w-0 ${brandColors[index % 3]} transition-all duration-500 mx-auto ${isHovered ? 'w-full' : 'w-0'}`}></div>
        </h3>
        
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;

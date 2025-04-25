
import React, { useRef, useState, useEffect } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  videoSrc: string;
  index: number;
  playbackRate?: number;
}

const ValueCard = ({ title, description, videoSrc, index, playbackRate = 1 }: ValueCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Set playback rate when video is loaded
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);
  
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
      className={`relative group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full
                 ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-70 from-primary/30 to-primary/20 rounded-bl-full -z-0 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}"></div>
      
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
          <div className={`h-0.5 w-0 bg-gradient-to-r from-primary to-primary/70 transition-all duration-500 mx-auto ${isHovered ? 'w-full' : 'w-0'}`}></div>
        </h3>
        
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;

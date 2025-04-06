
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { industryItems } from './data';
import ScrollIndicator from './ScrollIndicator';
import { 
  Pill, 
  Car, 
  Building2, 
  Cpu, 
  GraduationCap,
  Beaker,
  ChevronUp,
  ChevronDown 
} from 'lucide-react';

interface IndustriesCarouselProps {
  activeIndustryIndex: number;
  setActiveIndustryIndex: (index: number) => void;
  openIndustryDialog: (title: string) => void;
}

const IndustriesCarousel = ({ 
  activeIndustryIndex, 
  setActiveIndustryIndex, 
  openIndustryDialog 
}: IndustriesCarouselProps) => {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  
  // Auto-scroll with pause on interaction
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndustryIndex((prevIndex) => (prevIndex + 1) % industryItems.length);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }
    }, 7000);
    
    return () => clearInterval(interval);
  }, [activeIndustryIndex, setActiveIndustryIndex, autoScrollEnabled, isTransitioning]);
  
  // Handle manual navigation using the scroll indicator
  const handleIndicatorClick = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndustryIndex(index);
    setAutoScrollEnabled(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
      
      // Re-enable auto-scroll after 30 seconds of inactivity
      const timer = setTimeout(() => {
        setAutoScrollEnabled(true);
      }, 30000);
      
      return () => clearTimeout(timer);
    }, 600);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isTransitioning) return;
    
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setIsTransitioning(true);
      setActiveIndustryIndex((prevIndex) => (prevIndex - 1 + industryItems.length) % industryItems.length);
      setAutoScrollEnabled(false);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setIsTransitioning(true);
      setActiveIndustryIndex((prevIndex) => (prevIndex + 1) % industryItems.length);
      setAutoScrollEnabled(false);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };
  
  // Handle touch interactions for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
    setAutoScrollEnabled(false);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY === null || isTransitioning) return;
    
    const touchY = e.touches[0].clientY;
    const diff = touchStartY - touchY;
    
    // Require at least 50px of movement to trigger a swipe
    if (Math.abs(diff) > 50) {
      setIsTransitioning(true);
      
      if (diff > 0) {
        // Swipe up - go to next
        setActiveIndustryIndex((prevIndex) => (prevIndex + 1) % industryItems.length);
      } else {
        // Swipe down - go to previous
        setActiveIndustryIndex((prevIndex) => (prevIndex - 1 + industryItems.length) % industryItems.length);
      }
      
      setTouchStartY(null);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  return (
    <div 
      className="h-full w-full flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Industry showcase carousel"
    >
      <div 
        className="relative w-full h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="h-full w-full overflow-hidden">
          {industryItems.map((industry, index) => (
            <div 
              key={index}
              className={cn(
                "h-screen w-full flex flex-col items-center justify-center",
                "transition-all duration-500 ease-in-out absolute inset-0",
                activeIndustryIndex === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
              onClick={() => openIndustryDialog(industry.title)}
              role="button"
              aria-label={`View details about ${industry.title}`}
              tabIndex={activeIndustryIndex === index ? 0 : -1}
            >
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  "opacity-100"
                )}
                style={{
                  background: getIndustryGradient(index),
                }}
              />
              
              <div 
                className={cn(
                  "relative z-10 max-w-3xl mx-auto p-8 rounded-xl transition-all duration-500",
                  "backdrop-blur-sm bg-background/70 shadow-2xl border border-primary/10",
                  "opacity-100 scale-100 translate-y-0"
                )}
              >
                <div className="flex justify-center mb-6">
                  {getIndustryIcon(index)}
                </div>
                
                <h3 className={cn(
                  "text-3xl font-bold text-center mb-4 transition-colors duration-300",
                  "text-primary"
                )}>
                  {industry.title}
                </h3>
                
                <p className="text-lg text-center text-foreground/80 mb-6">
                  {industry.description}
                </p>
                
                <p className="text-sm text-center text-foreground/60">
                  {industry.details}
                </p>
                
                <div className="flex justify-center mt-6">
                  <div className="text-xs text-center text-primary/70 flex items-center gap-1.5">
                    <span>Klicken für mehr</span>
                  </div>
                </div>
              </div>
              
              <div className={cn(
                "absolute pointer-events-none transition-all duration-1000",
                "opacity-60 scale-100"
              )}>
                <div className="absolute top-20 left-[15%] w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-40 right-[20%] w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-300" />
                <div className="absolute bottom-20 left-[25%] w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Arrow navigation buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex flex-col gap-3">
          <button 
            className={cn(
              "w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center backdrop-blur-sm",
              "hover:bg-white dark:hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
              "absolute top-16"
            )}
            onClick={() => handleIndicatorClick((activeIndustryIndex - 1 + industryItems.length) % industryItems.length)}
            aria-label="Previous industry"
          >
            <ChevronUp className="w-5 h-5 text-primary" />
          </button>
          
          <button 
            className={cn(
              "w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center backdrop-blur-sm",
              "hover:bg-white dark:hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
              "absolute bottom-16"
            )}
            onClick={() => handleIndicatorClick((activeIndustryIndex + 1) % industryItems.length)}
            aria-label="Next industry"
          >
            <ChevronDown className="w-5 h-5 text-primary" />
          </button>
        </div>
        
        {/* Right side scroll indicator */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20">
          <ScrollIndicator 
            active={activeIndustryIndex} 
            total={industryItems.length} 
            orientation="vertical"
            onIndicatorClick={handleIndicatorClick}
          />
        </div>
        
        {/* Current industry counter */}
        <div className="absolute top-6 right-6 bg-white/70 dark:bg-black/40 text-xs px-2 py-1 rounded-md backdrop-blur-sm">
          {activeIndustryIndex + 1} / {industryItems.length}
        </div>
        
        {/* Bottom scroll hint */}
        <div className="absolute bottom-10 left-0 right-0 text-center text-primary/80 animate-bounce text-sm z-20">
          <span>Weiterscrollen</span>
        </div>
      </div>
    </div>
  );
};

const getIndustryGradient = (index: number): string => {
  const grayGradients = [
    'linear-gradient(135deg, rgba(246, 246, 247, 0.9) 0%, rgba(232, 232, 234, 0.9) 100%)',
    'linear-gradient(135deg, rgba(242, 242, 242, 0.9) 0%, rgba(227, 227, 227, 0.9) 100%)',
    'linear-gradient(135deg, rgba(238, 238, 238, 0.9) 0%, rgba(222, 222, 222, 0.9) 100%)',
    'linear-gradient(135deg, rgba(235, 235, 237, 0.9) 0%, rgba(218, 218, 220, 0.9) 100%)',
    'linear-gradient(135deg, rgba(240, 240, 242, 0.9) 0%, rgba(224, 224, 226, 0.9) 100%)',
    'linear-gradient(135deg, rgba(244, 244, 246, 0.9) 0%, rgba(229, 229, 231, 0.9) 100%)'
  ];
  
  return grayGradients[index % grayGradients.length];
};

const getIndustryIcon = (index: number) => {
  const iconMap = [
    <Pill className="w-8 h-8 text-primary/80" />,
    <Car className="w-8 h-8 text-primary/80" />,
    <Beaker className="w-8 h-8 text-primary/80" />,
    <Building2 className="w-8 h-8 text-primary/80" />,
    <Cpu className="w-8 h-8 text-primary/80" />,
    <GraduationCap className="w-8 h-8 text-primary/80" />
  ];
  
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full">
      {iconMap[index % iconMap.length]}
    </div>
  );
};

export default IndustriesCarousel;

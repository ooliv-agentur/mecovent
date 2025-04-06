
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
  ChevronDown,
  MousePointerClick,
  ArrowUpDown,
  ArrowDown
} from 'lucide-react';

interface IndustriesCarouselProps {
  activeIndustryIndex: number;
  setActiveIndustryIndex: (index: number) => void;
  openIndustryDialog: (title: string) => void;
  isLastItem?: boolean;
}

const IndustriesCarousel = ({ 
  activeIndustryIndex, 
  setActiveIndustryIndex, 
  openIndustryDialog,
  isLastItem = false
}: IndustriesCarouselProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);
  
  // Hide scroll hint after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle manual navigation using the scroll indicator
  const handleIndicatorClick = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndustryIndex(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  // Navigate to next/previous slide with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        if (activeIndustryIndex < industryItems.length - 1) {
          setIsTransitioning(true);
          setActiveIndustryIndex(activeIndustryIndex + 1);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        if (activeIndustryIndex > 0) {
          setIsTransitioning(true);
          setActiveIndustryIndex(activeIndustryIndex - 1);
          setTimeout(() => setIsTransitioning(false), 500);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndustryIndex, setActiveIndustryIndex, isTransitioning]);

  // Next slide function
  const goToNextSlide = () => {
    if (isTransitioning || activeIndustryIndex >= industryItems.length - 1) return;
    
    setIsTransitioning(true);
    setActiveIndustryIndex(activeIndustryIndex + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Previous slide function
  const goToPreviousSlide = () => {
    if (isTransitioning || activeIndustryIndex <= 0) return;
    
    setIsTransitioning(true);
    setActiveIndustryIndex(activeIndustryIndex - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Scroll Hint Overlay - only shown initially */}
        {showScrollHint && !isLastItem && (
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center gap-4 animate-fade-in">
              <ArrowUpDown className="h-8 w-8 text-primary animate-bounce" />
              <p className="text-lg font-medium text-white">Scrollen Sie, um mehr zu entdecken</p>
              <p className="text-sm text-white/80">Oder nutzen Sie die Navigationspunkte →</p>
            </div>
          </div>
        )}

        {/* Last Item Next Section Hint - shown only when on last item */}
        {isLastItem && (
          <div className="absolute inset-0 z-30 flex items-end justify-center pb-24 pointer-events-none">
            <div className="bg-black/70 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center gap-4 animate-fade-in">
              <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
              <p className="text-lg font-medium text-white">Weiter zu Veranstaltungsformaten</p>
              <p className="text-sm text-white/80">Scrollen Sie nach unten</p>
            </div>
          </div>
        )}

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
              tabIndex={activeIndustryIndex === index ? 0 : -1}
              role="button"
              aria-label={`View details for ${industry.title}`}
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
                  "opacity-100 scale-100 translate-y-0",
                  "group hover:shadow-primary/20 hover:border-primary/30"
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
                
                {/* View Details hint */}
                <div className="mt-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 text-primary text-sm">
                    <MousePointerClick className="h-4 w-4" />
                    <span>Für Details klicken</span>
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
        
        {/* Up/Down Navigation Buttons - more prominent and visible */}
        <button
          className={cn(
            "absolute top-6 left-1/2 transform -translate-x-1/2 z-20 transition-all",
            "bg-background/80 hover:bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-md",
            activeIndustryIndex <= 0 ? "opacity-0 pointer-events-none" : "opacity-80 hover:opacity-100"
          )}
          onClick={goToPreviousSlide}
          disabled={activeIndustryIndex <= 0 || isTransitioning}
          aria-label="Previous industry"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </button>
        
        <button
          className={cn(
            "absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 transition-all",
            "bg-background/80 hover:bg-background/90 backdrop-blur-sm p-2 rounded-full shadow-md",
            activeIndustryIndex >= industryItems.length - 1 ? "opacity-0 pointer-events-none" : "opacity-80 hover:opacity-100 animate-bounce"
          )}
          onClick={goToNextSlide}
          disabled={activeIndustryIndex >= industryItems.length - 1 || isTransitioning}
          aria-label="Next industry"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
        
        {/* Vertical Scroll Indicator - more prominent */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-background/40 backdrop-blur-sm p-2 rounded-full shadow-md">
          <ScrollIndicator 
            active={activeIndustryIndex} 
            total={industryItems.length} 
            orientation="vertical"
            onIndicatorClick={handleIndicatorClick}
            isLastItem={isLastItem}
          />
        </div>
        
        {/* Scroll Hint Text */}
        <div className={cn(
          "absolute bottom-10 left-0 right-0 text-center text-sm z-20",
          "bg-background/40 backdrop-blur-sm py-1 px-3 rounded-full mx-auto w-fit",
          isLastItem 
            ? "text-primary/80 animate-pulse" 
            : "text-primary/80 animate-bounce",
          isLastItem
            ? "opacity-100"
            : activeIndustryIndex >= industryItems.length - 1 ? "opacity-0" : "opacity-100"
        )}>
          <span>{isLastItem ? "Nach unten scrollen für Veranstaltungsformate" : "Weiterscrollen"}</span>
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

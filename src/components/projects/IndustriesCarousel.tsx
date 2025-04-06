
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { industryItems } from './data';
import ScrollIndicator from './ScrollIndicator';
import { 
  Pill, 
  Car, 
  Building2, 
  Cpu, 
  GraduationCap,
  Beaker 
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle manual navigation using the scroll indicator
  const handleIndicatorClick = (index: number) => {
    setActiveIndustryIndex(index);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="relative w-full h-full">
        <div 
          className="h-full w-full snap-y snap-mandatory overflow-hidden" 
          ref={containerRef}
        >
          {industryItems.map((industry, index) => (
            <div 
              key={index}
              className={cn(
                "h-screen w-full flex flex-col items-center justify-center",
                "transition-all duration-700 ease-in-out absolute inset-0",
                activeIndustryIndex === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              )}
              onClick={() => openIndustryDialog(industry.title)}
            >
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  "opacity-100"
                )}
                style={{
                  background: getIndustryGradient(index),
                }}
              />
              
              <div 
                className={cn(
                  "relative z-10 max-w-3xl mx-auto p-8 rounded-xl transition-all duration-700",
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
        
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20">
          <ScrollIndicator 
            active={activeIndustryIndex} 
            total={industryItems.length} 
            orientation="vertical"
            onIndicatorClick={handleIndicatorClick}
          />
        </div>
        
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

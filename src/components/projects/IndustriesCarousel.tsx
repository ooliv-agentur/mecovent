
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
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
}

const IndustriesCarousel = ({ 
  activeIndustryIndex, 
  setActiveIndustryIndex 
}: IndustriesCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const industryRefs = industryItems.map((_, i) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
      triggerOnce: false
    });
    return { ref, inView };
  });

  useEffect(() => {
    const inViewIndex = industryRefs.findIndex(item => item.inView);
    if (inViewIndex !== -1) {
      setActiveIndustryIndex(inViewIndex);
    }
  }, [industryRefs.map(ref => ref.inView), setActiveIndustryIndex]);

  const backgroundImages = [
    "/lovable-uploads/e8ff3d2b-2cdb-410f-8f87-23a186090341.png", // Pharma
    "/lovable-uploads/43952276-1e56-4b27-8b37-0f0b1fb8b29f.png", // Automobil
    "/lovable-uploads/fea35b42-ca42-4504-99e8-b3dff4088edc.png", // Chemie
    "/lovable-uploads/ace534d0-d95e-41f7-b18a-f0801e6112e4.png", // Finanz
    "/lovable-uploads/9a28bc3c-dfc5-4caa-b4e5-1bfcc9df1300.png", // Technologie
    "/lovable-uploads/e7c6685c-c5c7-4909-9502-dc03749ac872.png"  // Bildung
  ];

  return (
    <div className="relative w-full">
      <div className="relative mt-8">
        <div 
          className="h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-hide scroll-smooth" 
          ref={containerRef}
          style={{ scrollBehavior: 'smooth' }}
        >
          {industryItems.map((industry, index) => (
            <div 
              key={index}
              ref={industryRefs[index].ref}
              className={cn(
                "h-[600px] snap-start snap-always w-full relative flex flex-col items-center justify-center",
                "transition-opacity duration-700 ease-in-out"
              )}
            >
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  industryRefs[index].inView ? "opacity-100" : "opacity-0"
                )}
              >
                <picture>
                  <source 
                    srcSet={backgroundImages[index]} 
                    type="image/png" 
                    media="(min-resolution: 2dppx), (-webkit-min-device-pixel-ratio: 2)"
                  />
                  <img 
                    src={backgroundImages[index]}
                    alt={industry.title}
                    className="absolute inset-0 w-full h-full object-cover image-high-quality"
                    loading="eager"
                    decoding="async"
                    style={{
                      imageRendering: 'auto',
                      maxWidth: '100%',
                      height: '100%'
                    }}
                  />
                </picture>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
              </div>
              
              <div 
                className={cn(
                  "relative z-10 max-w-2xl mx-auto p-8 rounded-xl transition-all duration-700",
                  "backdrop-blur-sm bg-white/80 shadow-lg border border-white/40",
                  industryRefs[index].inView 
                    ? "opacity-100 scale-100 translate-y-0" 
                    : "opacity-0 scale-95 translate-y-8"
                )}
              >
                <div className="flex justify-center mb-6">
                  {getIndustryIcon(index)}
                </div>
                
                <h3 className={cn(
                  "text-3xl font-bold text-center mb-4 transition-colors duration-300",
                  industryRefs[index].inView ? "text-[#009fe3]" : "text-gray-800"
                )}>
                  {industry.title}
                </h3>
                
                <p className="text-lg text-center text-gray-700 mb-6">
                  {industry.description}
                </p>
                
                <div className="text-sm text-center text-gray-600">
                  {industry.details}
                </div>
              </div>
              
              <div className={cn(
                "absolute pointer-events-none transition-all duration-1000",
                industryRefs[index].inView ? "opacity-60 scale-100" : "opacity-0 scale-50"
              )}>
                <div className="absolute top-20 left-[15%] w-16 h-16 bg-[#009fe3]/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-40 right-[20%] w-24 h-24 bg-[#009fe3]/30 rounded-full blur-xl animate-pulse delay-300" />
                <div className="absolute bottom-20 left-[25%] w-20 h-20 bg-[#009fe3]/20 rounded-full blur-xl animate-pulse delay-700" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <ScrollIndicator 
            active={activeIndustryIndex} 
            total={industryItems.length} 
            orientation="vertical" 
          />
        </div>
      </div>
    </div>
  );
};

// Add this class to the global CSS
const getIndustryIcon = (index: number) => {
  const iconMap = [
    <Pill className="w-8 h-8 text-[#009fe3]" />,
    <Car className="w-8 h-8 text-[#009fe3]" />,
    <Beaker className="w-8 h-8 text-[#009fe3]" />,
    <Building2 className="w-8 h-8 text-[#009fe3]" />,
    <Cpu className="w-8 h-8 text-[#009fe3]" />,
    <GraduationCap className="w-8 h-8 text-[#009fe3]" />
  ];
  
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full border border-gray-200 shadow-md">
      {iconMap[index % iconMap.length]}
    </div>
  );
};

export default IndustriesCarousel;

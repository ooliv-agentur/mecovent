
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

  // Updated background images for each industry with the latest uploaded images
  const backgroundImages = [
    "url('/lovable-uploads/7d6eb5a9-2303-42fc-9271-d5b7b1d7e471.png')", // Pharma
    "url('/lovable-uploads/f96cfe76-e28d-402a-afd5-8f5566e58f26.png')", // Automobil
    "url('/lovable-uploads/f42cbebc-c74e-4b93-9a1a-c3eb0acf6f8d.png')", // Chemie
    "url('/lovable-uploads/c9b2e2a9-70cf-4e8c-ab1e-1414c4b0fc1a.png')", // Finanz
    "url('/lovable-uploads/5f36e3f9-0c67-4b45-b5a7-3b9f6d6d7c7b.png')", // Technologie
    "url('/lovable-uploads/2d9cd6fe-9c00-4c44-b10a-0f3e0cd5c51c.png')"  // Bildung
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
                  "absolute inset-0 transition-opacity duration-700 bg-cover bg-center",
                  industryRefs[index].inView ? "opacity-100" : "opacity-0"
                )}
                style={{
                  backgroundImage: backgroundImages[index],
                }}
              >
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
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-gray-600 animate-bounce text-sm">
          <span>Weiterscrollen</span>
        </div>
      </div>
    </div>
  );
};

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

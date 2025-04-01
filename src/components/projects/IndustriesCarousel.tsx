
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { industryItems } from './data';
import SectionTitle from './SectionTitle';
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

  return (
    <div>
      <SectionTitle 
        title="Branchen, für die wir gestalten" 
        subtitle="Jede Branche braucht ein anderes Gespür"
      />
      
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
              onClick={() => openIndustryDialog(industry.title)}
            >
              <div 
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  industryRefs[index].inView ? "opacity-100" : "opacity-0"
                )}
                style={{
                  background: getIndustryGradient(index),
                }}
              />
              
              <div 
                className={cn(
                  "relative z-10 max-w-2xl mx-auto p-8 rounded-xl transition-all duration-700",
                  "backdrop-blur-sm bg-background/70 shadow-2xl border border-primary/10",
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
                  industryRefs[index].inView ? "text-primary" : "text-foreground"
                )}>
                  {industry.title}
                </h3>
                
                <p className="text-lg text-center text-foreground/80 mb-6">
                  {industry.description}
                </p>
                
                <div className="text-sm text-center text-foreground/60">
                  {industry.details}
                </div>
              </div>
              
              <div className={cn(
                "absolute pointer-events-none transition-all duration-1000",
                industryRefs[index].inView ? "opacity-60 scale-100" : "opacity-0 scale-50"
              )}>
                <div className="absolute top-20 left-[15%] w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute top-40 right-[20%] w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-300" />
                <div className="absolute bottom-20 left-[25%] w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
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
        
        <div className="absolute bottom-4 left-0 right-0 text-center text-primary/80 animate-bounce text-sm">
          <span>Weiterscrollen</span>
        </div>
      </div>
    </div>
  );
};

const getIndustryGradient = (index: number): string => {
  // Using different shades of gray instead of colorful gradients
  const grayGradients = [
    'linear-gradient(135deg, rgba(246, 246, 247, 0.9) 0%, rgba(232, 232, 234, 0.9) 100%)', // Lightest gray
    'linear-gradient(135deg, rgba(242, 242, 242, 0.9) 0%, rgba(227, 227, 227, 0.9) 100%)',
    'linear-gradient(135deg, rgba(238, 238, 238, 0.9) 0%, rgba(222, 222, 222, 0.9) 100%)',
    'linear-gradient(135deg, rgba(235, 235, 237, 0.9) 0%, rgba(218, 218, 220, 0.9) 100%)',
    'linear-gradient(135deg, rgba(240, 240, 242, 0.9) 0%, rgba(224, 224, 226, 0.9) 100%)',
    'linear-gradient(135deg, rgba(244, 244, 246, 0.9) 0%, rgba(229, 229, 231, 0.9) 100%)' // Darkest gray
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

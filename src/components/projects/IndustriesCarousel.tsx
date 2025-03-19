
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { industryItems } from './data';
import SectionTitle from './SectionTitle';
import ScrollIndicator from './ScrollIndicator';

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
  
  // Create intersection observers for each industry
  const industryRefs = industryItems.map((_, i) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
      triggerOnce: false
    });
    return { ref, inView };
  });

  // Update active industry when an industry comes into view
  useEffect(() => {
    const inViewIndex = industryRefs.findIndex(item => item.inView);
    if (inViewIndex !== -1) {
      setActiveIndustryIndex(inViewIndex);
    }
  }, [industryRefs.map(ref => ref.inView), setActiveIndustryIndex]);

  return (
    <div>
      <SectionTitle 
        title="Branchen, in denen wir tätig sind" 
        subtitle="Ein immersives Erlebnis durch unsere Fachgebiete"
      />
      
      <div className="relative mt-8">
        <div className="h-[600px] overflow-y-auto snap-y snap-mandatory" ref={containerRef}>
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
                
                <div className={cn(
                  "mt-6 flex justify-center transition-all duration-500",
                  industryRefs[index].inView ? "opacity-100" : "opacity-0"
                )}>
                  <button 
                    className="px-6 py-2 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      openIndustryDialog(industry.title);
                    }}
                  >
                    Mehr entdecken
                  </button>
                </div>
              </div>
              
              {/* Floating decorative elements */}
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
        
        {/* Side Scroll Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <ScrollIndicator 
            active={activeIndustryIndex} 
            total={industryItems.length} 
            orientation="vertical" 
          />
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary/80 animate-bounce text-sm">
          <span>Weiterscrollen</span>
        </div>
      </div>
    </div>
  );
};

// Gradient backgrounds for different industries
const getIndustryGradient = (index: number): string => {
  const gradients = [
    // Pharma & Medizintechnik - Medical blue gradient
    'linear-gradient(135deg, rgba(232, 244, 253, 0.9) 0%, rgba(182, 223, 253, 0.9) 100%)',
    // Automobil - Dynamic gradient
    'linear-gradient(135deg, rgba(247, 245, 232, 0.9) 0%, rgba(240, 219, 183, 0.9) 100%)',
    // Chemie & Industrie - Technical gradient
    'linear-gradient(135deg, rgba(236, 248, 245, 0.9) 0%, rgba(214, 233, 226, 0.9) 100%)',
    // Finanz - Corporate gradient
    'linear-gradient(135deg, rgba(232, 232, 242, 0.9) 0%, rgba(204, 204, 223, 0.9) 100%)',
    // Technologie - Digital gradient
    'linear-gradient(135deg, rgba(238, 245, 255, 0.9) 0%, rgba(202, 219, 245, 0.9) 100%)',
    // Bildung - Knowledge gradient
    'linear-gradient(135deg, rgba(255, 248, 230, 0.9) 0%, rgba(253, 226, 184, 0.9) 100%)',
  ];
  
  return gradients[index % gradients.length];
};

// Industry-specific icons
const getIndustryIcon = (index: number) => {
  // You would normally use proper SVG icons here
  // This is a placeholder using emoji for simplicity
  const icons = ["💊", "🚗", "🧪", "💰", "💻", "🎓"];
  
  return (
    <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full">
      {icons[index % icons.length]}
    </div>
  );
};

export default IndustriesCarousel;

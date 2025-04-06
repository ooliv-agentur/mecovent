
import React, { useState, useRef, useEffect } from 'react';
import { LightbulbIcon, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import IndustryDialog from './projects/IndustryDialog';
import { industryItems, eventTypes } from './projects/data';
import ScrollIndicator from './projects/ScrollIndicator';

// Icons for each industry
import { 
  Pill, 
  Car, 
  Building2, 
  Cpu, 
  GraduationCap,
  Beaker,
  MousePointerClick,
} from 'lucide-react';

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState<number | null>(null);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndicator, setActiveIndicator] = useState(0);
  
  // Handle intersection observer to highlight correct section in scroll indicator
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveIndicator(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0
      }
    );
    
    // Observe all industry cards
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      industryCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  // Handle indicator click to scroll to the corresponding industry
  const handleIndicatorClick = (index: number) => {
    const industryCards = document.querySelectorAll('.industry-card');
    if (industryCards[index]) {
      industryCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle opening industry dialog
  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  // Get industry icon based on index
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

  // Get industry gradient based on index
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

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative w-full bg-secondary/10 py-20"
    >
      {/* Header content */}
      <div className="text-center max-w-3xl mx-auto px-4 pb-20">
        <div className="section-tag">Unsere Expertise</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
          Mit Branchenverstand gestalten
        </h2>
        <p className="subheader-section mb-3">
          Jede Branche braucht ein anderes Gespür – wir kennen die Unterschiede.
        </p>
        <p className="text-muted-foreground">
          Ob Pharma, Finanzwesen, Bildung oder Industrie –<br />
          wir verstehen, worauf es in Ihrer Branche ankommt.<br />
          So gestalten wir Events, die nicht nur passen – sondern wirken.
        </p>

        {/* Down arrow scroll hint */}
        <div className="mt-12 animate-bounce flex justify-center">
          <ArrowDown className="h-8 w-8 text-primary/80" />
        </div>
      </div>
      
      {/* Fixed scroll indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20 bg-background/40 backdrop-blur-sm p-2 rounded-full shadow-md">
        <ScrollIndicator 
          active={activeIndicator} 
          total={industryItems.length} 
          orientation="vertical"
          onIndicatorClick={handleIndicatorClick}
          className="h-auto"
        />
      </div>
      
      {/* Industry cards in a vertical layout */}
      <div className="max-w-4xl mx-auto px-4 space-y-32 mb-32">
        {industryItems.map((industry, index) => (
          <div 
            key={index}
            data-index={index}
            className={cn(
              "industry-card relative w-full flex flex-col items-center justify-center py-20",
              "opacity-100 transition-all duration-700 animate-fade-in-up"
            )}
          >
            <div 
              className="absolute inset-0 -z-10 opacity-70 rounded-2xl"
              style={{
                background: getIndustryGradient(index),
              }}
            />
            
            <div 
              className={cn(
                "relative z-10 max-w-3xl mx-auto p-8 rounded-xl transition-all duration-500",
                "backdrop-blur-sm bg-background/70 shadow-2xl border border-primary/10",
                "group hover:shadow-primary/20 hover:border-primary/30 cursor-pointer"
              )}
              onClick={() => handleOpenIndustryDialog(industry.title)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${industry.title}`}
            >
              <div className="flex justify-center mb-6">
                {getIndustryIcon(index)}
              </div>
              
              <h3 className="text-3xl font-bold text-center mb-4 transition-colors duration-300 text-primary">
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
            
            {/* Background elements */}
            <div className="absolute pointer-events-none transition-all duration-1000 opacity-60">
              <div className="absolute top-20 left-[15%] w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-40 right-[20%] w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-300" />
              <div className="absolute bottom-20 left-[25%] w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-2 text-primary mb-4">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
          </p>
        </div>
      </div>
      
      {/* Industry dialogs */}
      {industryItems.map((industry, index) => (
        <IndustryDialog 
          key={index}
          industry={industry}
          eventTypes={eventTypes}
          isOpen={openIndustryDialog === industry.title}
          onClose={() => setOpenIndustryDialog(null)}
        />
      ))}
    </section>
  );
};

export default ProjectsSection;

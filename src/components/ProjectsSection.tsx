import React, { useState, useRef, useEffect } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import IndustryDialog from './projects/IndustryDialog';
import { industryItems, eventTypes } from './projects/data';
import IndustriesCarousel from './projects/IndustriesCarousel';

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isVisible || scrollLocked) return;
      
      const section = sectionRef.current;
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const isInIndustriesViewport = 
        rect.top <= 0 && 
        rect.bottom >= window.innerHeight &&
        !hasScrolled;
      
      if (isInIndustriesViewport) {
        const newIndex = e.deltaY > 0 
          ? Math.min(activeIndustryIndex + 1, industryItems.length - 1)
          : Math.max(activeIndustryIndex - 1, 0);
        
        if (newIndex !== activeIndustryIndex) {
          e.preventDefault();
          
          setScrollLocked(true);
          setActiveIndustryIndex(newIndex);
          
          setTimeout(() => {
            setScrollLocked(false);
            
            if (newIndex === industryItems.length - 1 && e.deltaY > 0) {
              setHasScrolled(true);
            }
            else if (newIndex === 0 && e.deltaY < 0) {
              setHasScrolled(false);
            }
          }, 800);
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVisible, activeIndustryIndex, scrollLocked, hasScrolled]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  return (
    <section id="projects" className="relative overflow-hidden w-full bg-secondary/10" ref={sectionRef}>
      <div className="py-16 md:py-24">
        <div className={cn("text-center max-w-3xl mx-auto px-4 mb-12", 
                          isVisible ? "animate-fade-in" : "opacity-0")}>
          <div className="section-tag">Unsere Expertise</div>
          <h2 className="header-section">Branchen, für die wir gestalten</h2>
          <p className="subheader-section mb-3">
            Jede Branche braucht ein anderes Gespür – wir kennen die Unterschiede.
          </p>
          <p className="text-muted-foreground">
            Ob Pharma oder Finanzwesen, Bildung oder Industrie – wir verstehen die Besonderheiten Ihrer Branche und gestalten Events, die Ihre Zielgruppe wirklich erreichen.
          </p>
        </div>
        
        <div className={cn("mb-28 transition-all duration-700 transform w-full", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex}
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
          />
        </div>
        
        <div className="text-center mt-16 animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="flex items-center justify-center gap-2 text-primary mb-8">
              <LightbulbIcon className="h-5 w-5" />
              <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
            </p>
          </div>
        </div>
      </div>
      
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

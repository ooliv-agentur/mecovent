
import React, { useState, useRef, useEffect } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import EventTypesCarousel from './projects/EventTypesCarousel';
import IndustryDialog from './projects/IndustryDialog';
import { industryItems, eventTypes } from './projects/data';
import IndustriesCarousel from './projects/IndustriesCarousel';

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(false);

  // Observer for section visibility
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

  // Handle scroll locking and smooth transitions
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if we're in the industries section and the section is visible
      if (!isVisible || scrollLocked) return;
      
      // Get the reference to the section
      const section = sectionRef.current;
      if (!section) return;
      
      // Check if we're in the industries viewport
      const rect = section.getBoundingClientRect();
      const isInIndustriesViewport = 
        rect.top <= 0 && 
        rect.bottom >= window.innerHeight &&
        !hasScrolled;
      
      if (isInIndustriesViewport) {
        // Calculate new industry index based on scroll direction
        const newIndex = e.deltaY > 0 
          ? Math.min(activeIndustryIndex + 1, industryItems.length - 1)
          : Math.max(activeIndustryIndex - 1, 0);
        
        // Only lock scroll and update if we're changing index
        if (newIndex !== activeIndustryIndex) {
          e.preventDefault();
          
          // Lock scrolling temporarily to ensure smooth transition
          setScrollLocked(true);
          setActiveIndustryIndex(newIndex);
          
          // Unlock after transition completes
          setTimeout(() => {
            setScrollLocked(false);
            
            // If we've reached the last industry, mark as scrolled to allow natural page scroll
            if (newIndex === industryItems.length - 1 && e.deltaY > 0) {
              setHasScrolled(true);
            }
            // If we've reached the first industry and scrolling up, reset scroll state
            else if (newIndex === 0 && e.deltaY < 0) {
              setHasScrolled(false);
            }
          }, 800); // Match this with your transition duration
        }
      }
    };
    
    // Add event listener with passive: false to allow preventDefault
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
          <h2 className="header-section">Branchen & Eventformate</h2>
          <p className="subheader-section mb-6">
            Wir bringen Expertise aus zahlreichen Branchen mit und wissen genau, worauf es bei jeder Zielgruppe ankommt.
          </p>
        </div>
        
        {/* Immersive Industries Experience - Using the improved IndustriesCarousel component */}
        <div className={cn("mb-28 transition-all duration-700 transform w-full", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex}
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
          />
        </div>
        
        {/* Event Types Section - Flip Card Concept */}
        <div id="eventformate" className={cn("mt-16 transition-all duration-700 transform px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}
             style={{ transitionDelay: "300ms" }}>
          <EventTypesCarousel 
            activeEventTypeIndex={activeEventTypeIndex} 
            setActiveEventTypeIndex={setActiveEventTypeIndex}
          />
        </div>
        
        <div className="text-center mt-16 animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="flex items-center justify-center gap-2 text-primary mb-8">
              <LightbulbIcon className="h-5 w-5" />
              <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
            </p>
            
            <div className="mt-12 bg-primary/5 p-8 rounded-xl border border-primary/10">
              <h3 className="text-xl font-medium mb-4 text-primary">Bereit für Ihr nächstes Event? Lassen Sie uns gemeinsam planen!</h3>
              <p className="mb-6 text-foreground/80">Ob <span className="font-medium text-primary">Automobil</span> oder <span className="font-medium text-primary">Pharma</span>, <span className="font-medium text-primary">Produktlaunch</span> oder <span className="font-medium text-primary">Workshop</span> – wir finden die perfekte Lösung für Ihre Herausforderung.</p>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-sm">
                Jetzt kostenlos beraten lassen
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Industry Dialogs */}
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

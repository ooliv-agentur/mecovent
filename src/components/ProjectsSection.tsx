
import React, { useState, useRef, useEffect } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import IndustriesCarousel from './projects/IndustriesCarousel';
import EventTypesCarousel from './projects/EventTypesCarousel';
import IndustryDialog from './projects/IndustryDialog';
import { industryItems, eventTypes } from './projects/data';

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  return (
    <section id="projects" className="bg-secondary/10 overflow-hidden" ref={sectionRef}>
      <div className="container-section overflow-visible">
        <div className={cn("text-center max-w-3xl mx-auto mb-12", 
                           isVisible ? "animate-fade-in" : "opacity-0")}>
          <div className="section-tag">Branchen & Eventtypen</div>
          <h2 className="header-section">So vielfältig sind unsere Events</h2>
          <p className="subheader-section mb-6">
            Wir bringen Expertise aus zahlreichen Branchen mit und wissen genau, worauf es bei jeder Zielgruppe ankommt.
          </p>
        </div>
        
        {/* Immersive Industries Experience */}
        <div className={cn("mb-28 transition-all duration-700 transform", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex} 
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
          />
          
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
        </div>
        
        {/* Event Types Section - Flip Card Concept */}
        <div className={cn("mt-16 transition-all duration-700 transform", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}
             style={{ transitionDelay: "300ms" }}>
          <EventTypesCarousel 
            activeEventTypeIndex={activeEventTypeIndex} 
            setActiveEventTypeIndex={setActiveEventTypeIndex}
          />
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <p className="flex items-center justify-center gap-2 text-primary">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React, { useState, useRef, useEffect } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import EventTypesCarousel from './projects/EventTypesCarousel';
import IndustryDialog from './projects/IndustryDialog';
import { industryItems, eventTypes } from './projects/data';

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  // Set up scroll snap and auto-scrolling
  useEffect(() => {
    if (!industriesRef.current || !isVisible) return;

    const industriesElement = industriesRef.current;
    let isScrolling = false;
    let currentIndex = 0;
    const industryCount = industryItems.length;
    
    // Update active industry index based on scroll position
    const updateActiveIndex = () => {
      if (!industriesElement) return;
      const scrollTop = industriesElement.scrollTop;
      const height = industriesElement.clientHeight;
      const newIndex = Math.round(scrollTop / height);
      
      if (newIndex !== activeIndustryIndex) {
        setActiveIndustryIndex(newIndex);
      }
    };

    // Handle wheel events for manual scrolling
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;
      
      if (e.deltaY > 0 && currentIndex < industryCount - 1) {
        currentIndex++;
      } else if (e.deltaY < 0 && currentIndex > 0) {
        currentIndex--;
      }
      
      industriesElement.scrollTo({
        top: currentIndex * industriesElement.clientHeight,
        behavior: 'smooth'
      });
      
      setActiveIndustryIndex(currentIndex);
      
      setTimeout(() => {
        isScrolling = false;
      }, 800);
      
      e.preventDefault();
    };

    // Handle scroll events
    const handleScroll = () => {
      updateActiveIndex();
      setHasScrolled(true);
    };

    // Add event listeners
    industriesElement.addEventListener('wheel', handleWheel, { passive: false });
    industriesElement.addEventListener('scroll', handleScroll);

    return () => {
      industriesElement.removeEventListener('wheel', handleWheel);
      industriesElement.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, activeIndustryIndex]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  return (
    <section id="projects" className="relative overflow-hidden w-full bg-secondary/10" ref={sectionRef}>
      <div className="py-16 md:py-24">
        <div className={cn("text-center max-w-3xl mx-auto px-4 mb-12", 
                          isVisible ? "animate-fade-in" : "opacity-0")}>
          <div className="section-tag">Branchen & Eventtypen</div>
          <h2 className="header-section">So vielfältig sind unsere Events</h2>
          <p className="subheader-section mb-6">
            Wir bringen Expertise aus zahlreichen Branchen mit und wissen genau, worauf es bei jeder Zielgruppe ankommt.
          </p>
        </div>
        
        {/* Immersive Industries Experience - Full width */}
        <div className={cn("mb-28 transition-all duration-700 transform w-full", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
          <div 
            ref={industriesRef}
            className="h-[600px] w-full overflow-y-auto snap-y snap-mandatory hide-scrollbar"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            {industryItems.map((industry, index) => (
              <div 
                key={index}
                className={cn(
                  "h-[600px] snap-start snap-always w-full relative flex flex-col items-center justify-center",
                  "transition-opacity duration-700 ease-in-out",
                  "scroll-snap-align-center"
                )}
                onClick={() => handleOpenIndustryDialog(industry.title)}
              >
                <div 
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700",
                    activeIndustryIndex === index ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.9) 0%, rgba(230, 230, 230, 0.9) 100%)',
                  }}
                />
                
                <div 
                  className={cn(
                    "relative z-10 max-w-2xl mx-auto p-8 rounded-xl transition-all duration-700",
                    "backdrop-blur-sm bg-background/70 shadow-2xl border border-primary/10",
                    activeIndustryIndex === index 
                      ? "opacity-100 scale-100 translate-y-0" 
                      : "opacity-0 scale-95 translate-y-8"
                  )}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center text-3xl bg-primary/10 rounded-full">
                      {index === 0 ? "💊" : 
                       index === 1 ? "🚗" : 
                       index === 2 ? "🧪" : 
                       index === 3 ? "💰" : 
                       index === 4 ? "💻" : "🎓"}
                    </div>
                  </div>
                  
                  <h3 className={cn(
                    "text-3xl font-bold text-center mb-4 transition-colors duration-300",
                    activeIndustryIndex === index ? "text-primary" : "text-foreground"
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
                    activeIndustryIndex === index ? "opacity-100" : "opacity-0"
                  )}>
                    <button 
                      className="px-6 py-2 bg-primary/90 text-primary-foreground rounded-full hover:bg-primary transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenIndustryDialog(industry.title);
                      }}
                    >
                      Mehr entdecken
                    </button>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <div className={cn(
                  "absolute pointer-events-none transition-all duration-1000",
                  activeIndustryIndex === index ? "opacity-60 scale-100" : "opacity-0 scale-50"
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
            <div className="flex flex-col gap-1 items-center">
              {Array.from({ length: industryItems.length }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "rounded-full transition-all duration-500 h-12 w-1.5",
                    i === activeIndustryIndex 
                      ? "bg-primary h-12" 
                      : i < activeIndustryIndex 
                        ? "bg-primary/60 h-8" 
                        : "bg-muted-foreground/30 h-4"
                  )}
                  style={{
                    transitionDelay: `${Math.abs(i - activeIndustryIndex) * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Event Types Section - Flip Card Concept */}
        <div className={cn("mt-16 transition-all duration-700 transform px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", 
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

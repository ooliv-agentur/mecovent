
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
  const [stickyActive, setStickyActive] = useState(false);

  // Use a more precise scroll observation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const isTopVisible = rect.top <= 0;
      const isBottomVisible = rect.bottom >= window.innerHeight;
      
      // Determine if section should be visible and sticky
      if (isTopVisible && isBottomVisible) {
        setIsVisible(true);
        // Only set sticky if we haven't scrolled through all industries
        if (!hasScrolled || activeIndustryIndex < industryItems.length - 1) {
          setStickyActive(true);
        }
      } else if (rect.top > 0) {
        // Reset when scrolling back up past the section
        setStickyActive(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndustryIndex, hasScrolled]);

  // Handle wheel events for controlling the carousel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isVisible || scrollLocked || !stickyActive) return;
      
      const deltaY = e.deltaY;
      
      // Change industry based on scroll direction
      const newIndex = deltaY > 0 
        ? Math.min(activeIndustryIndex + 1, industryItems.length - 1)
        : Math.max(activeIndustryIndex - 1, 0);
      
      if (newIndex !== activeIndustryIndex) {
        e.preventDefault();
        
        setScrollLocked(true);
        setActiveIndustryIndex(newIndex);
        
        setTimeout(() => {
          setScrollLocked(false);
          
          // Release sticky mode after viewing all industries
          if (newIndex === industryItems.length - 1 && deltaY > 0) {
            setStickyActive(false);
            setHasScrolled(true);
          }
          else if (newIndex === 0 && deltaY < 0) {
            setHasScrolled(false);
          }
        }, 800);
      } else if (newIndex === industryItems.length - 1 && deltaY > 0) {
        // Allow scrolling to continue to next section when at the last industry
        setStickyActive(false);
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVisible, activeIndustryIndex, scrollLocked, hasScrolled, stickyActive]);

  // Reset scroll position when returning to the section
  useEffect(() => {
    if (!stickyActive && !hasScrolled) {
      setActiveIndustryIndex(0);
    }
  }, [stickyActive, hasScrolled]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  // Define the correct height for the section to prevent scroll issues
  const sectionHeight = `${Math.max(industryItems.length * 100, 100)}vh`;

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative w-full bg-secondary/10" 
      style={{ height: sectionHeight }}
    >
      <div 
        className={cn(
          "w-full h-screen flex flex-col justify-center items-center transition-all duration-500",
          stickyActive ? "fixed top-0 left-0 z-10" : "relative",
          !stickyActive && hasScrolled ? "translate-y-0" : ""
        )}
      >
        <div className={cn("text-center max-w-3xl mx-auto px-4 mb-6", 
                        isVisible ? "animate-fade-in" : "opacity-0")}>
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
        </div>
        
        <div className={cn("transition-all duration-700 transform w-full h-full", 
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex}
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
          />
        </div>
        
        <div className="text-center mt-6 animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <p className="flex items-center justify-center gap-2 text-primary mb-4">
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

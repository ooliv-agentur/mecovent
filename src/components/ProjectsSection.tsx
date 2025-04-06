
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
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      const isCentered = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      // Determine if section should be visible
      setIsVisible(isInView);
      
      // Set sticky when scrolled into view
      if (isCentered && !hasScrolled) {
        setStickyActive(true);
      } else if (rect.top > 0) {
        // Reset when scrolling back up past the section
        setStickyActive(false);
        setHasScrolled(false);
      } else if (hasScrolled && activeIndustryIndex >= industryItems.length - 1) {
        // Release sticky when we've scrolled through all items
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
            // Wait a bit before allowing scroll to continue
            setTimeout(() => {
              setHasScrolled(true);
            }, 800);
          }
        }, 800);
      } else if (newIndex === industryItems.length - 1 && deltaY > 0) {
        // Allow scrolling to continue to next section when at the last industry
        setHasScrolled(true);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVisible, activeIndustryIndex, scrollLocked, hasScrolled, stickyActive]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  // Define the correct height for the section to prevent scroll issues
  // Reduced the section height to minimize the gap between sections
  const sectionHeight = `${Math.max(industryItems.length * 80, 120)}vh`;

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative w-full bg-secondary/10 mb-0" 
      style={{ height: sectionHeight }}
    >
      {/* Header content - this stays in position and doesn't become sticky */}
      <div className="text-center max-w-3xl mx-auto px-4 py-20">
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
      
      {/* Carousel container - this is what becomes sticky */}
      <div 
        className={cn(
          "w-full h-screen transition-all duration-500 z-10",
          stickyActive ? "sticky top-0" : "relative"
        )}
      >
        <div className={cn("w-full h-full transition-opacity duration-700",
                          isVisible ? "opacity-100" : "opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex}
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
          />
        </div>
        
        <div className="text-center mt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

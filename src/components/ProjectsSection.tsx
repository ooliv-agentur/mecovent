
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
  const [stickyActive, setStickyActive] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Determine scroll direction
      const newScrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(newScrollDirection);
      setLastScrollY(scrollY);
      
      // Set visibility based on being in viewport
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      
      // Set sticky state based on position
      // Enter sticky mode when the section top reaches the viewport top
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        setStickyActive(true);
      } 
      // Exit sticky mode when scrolled past the section or back above it
      else if (rect.bottom < window.innerHeight || rect.top > 0) {
        setStickyActive(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Handle wheel events for controlling the carousel
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isVisible || !stickyActive) return;
      
      // Determine scroll direction and delta
      const deltaY = e.deltaY;
      
      // Change industry based on scroll direction
      let newIndex = activeIndustryIndex;
      
      if (deltaY > 0) {
        // Scrolling down - go to next industry
        newIndex = Math.min(activeIndustryIndex + 1, industryItems.length - 1);
      } else {
        // Scrolling up - go to previous industry
        newIndex = Math.max(activeIndustryIndex - 1, 0);
      }
      
      if (newIndex !== activeIndustryIndex) {
        e.preventDefault();
        setActiveIndustryIndex(newIndex);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isVisible, activeIndustryIndex, stickyActive]);

  // Update carousel index based on scroll direction when sticky
  useEffect(() => {
    if (stickyActive && scrollDirection === 'up' && activeIndustryIndex > 0) {
      // When scrolling up, we need to go back through the carousel items
      const handleScrollUpChange = () => {
        if (scrollDirection === 'up' && activeIndustryIndex > 0) {
          setActiveIndustryIndex(prev => Math.max(prev - 1, 0));
        }
      };
      
      // Add a slight delay to make the navigation feel more natural
      const timeout = setTimeout(handleScrollUpChange, 300);
      return () => clearTimeout(timeout);
    }
  }, [scrollDirection, stickyActive, activeIndustryIndex]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  // Optimize section height to reduce white space
  const sectionHeight = `${Math.max(industryItems.length * 70, 100)}vh`;

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative w-full bg-secondary/10" 
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
          "w-full h-screen transition-all duration-300 z-10",
          stickyActive ? "sticky top-0" : "relative"
        )}
      >
        <div className={cn("w-full h-full transition-opacity duration-500",
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

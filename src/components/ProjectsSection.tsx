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
  const [scrollLocked, setScrollLocked] = useState(false);
  const [wheelEventCounter, setWheelEventCounter] = useState(0);
  const wheelThreshold = 5; // Number of wheel events to accumulate before triggering a slide change
  const isLastItem = activeIndustryIndex === industryItems.length - 1;

  // Track scroll direction and position
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Determine scroll direction
      const newScrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      if (newScrollDirection !== scrollDirection) {
        setScrollDirection(newScrollDirection);
      }
      setLastScrollY(scrollY);
      
      // Set visibility based on being in viewport
      const newVisibility = rect.top <= window.innerHeight && rect.bottom >= 0;
      if (newVisibility !== isVisible) {
        setIsVisible(newVisibility);
      }
      
      // Set sticky state based on position
      // If we're at the last item, don't set sticky to true if going down
      const newStickyState = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (newStickyState !== stickyActive) {
        // If we're on the last slide and trying to scroll down, don't set sticky
        if (isLastItem && newScrollDirection === 'down') {
          setStickyActive(false);
        } else {
          setStickyActive(newStickyState);
        }
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, scrollDirection, isVisible, stickyActive, isLastItem]);

  // Handle wheel events for controlling the carousel with improved sensitivity
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // If we're at the last item and scrolling down, don't prevent default
      if (isLastItem && e.deltaY > 0) {
        // Allow normal scroll behavior to continue to next section
        return;
      }
      
      // Otherwise continue with normal carousel behavior
      if (!isVisible || !stickyActive || scrollLocked) return;
      
      // Prevent the default scroll behavior when in sticky mode
      e.preventDefault();
      
      // Accumulate wheel events to make scrolling less sensitive
      if (e.deltaY > 0) {
        // Scrolling down
        setWheelEventCounter(prev => {
          const newCount = prev + 1;
          if (newCount >= wheelThreshold && activeIndustryIndex < industryItems.length - 1) {
            // Move to next slide after reaching threshold
            setScrollLocked(true);
            setActiveIndustryIndex(activeIndustryIndex + 1);
            
            // Unlock scrolling after animation
            setTimeout(() => {
              setScrollLocked(false);
            }, 600);
            // Reset counter
            return 0;
          }
          return newCount;
        });
      } else if (e.deltaY < 0) {
        // Scrolling up
        setWheelEventCounter(prev => {
          const newCount = prev - 1;
          if (newCount <= -wheelThreshold && activeIndustryIndex > 0) {
            // Move to previous slide after reaching threshold
            setScrollLocked(true);
            setActiveIndustryIndex(activeIndustryIndex - 1);
            
            // Unlock scrolling after animation
            setTimeout(() => {
              setScrollLocked(false);
            }, 600);
            // Reset counter
            return 0;
          }
          return newCount;
        });
      }
    };
    
    // Add the wheel event listener with passive: false to prevent default scrolling
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isVisible, activeIndustryIndex, stickyActive, scrollLocked, wheelEventCounter, isLastItem]);

  // Handle touch events for mobile scrolling with improved sensitivity
  useEffect(() => {
    let touchStartY = 0;
    let touchMoveCounter = 0;
    const touchThreshold = 50; // Pixels of movement required to trigger a slide change
    
    const handleTouchStart = (e: TouchEvent) => {
      if (!isVisible || !stickyActive || scrollLocked) return;
      touchStartY = e.touches[0].clientY;
      touchMoveCounter = 0;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // If we're at the last item and swiping up (negative touchDiff), don't prevent default
      const touchCurrentY = e.touches[0].clientY;
      const touchDiff = touchStartY - touchCurrentY;
      
      if (isLastItem && touchDiff > 0) {
        // Allow normal scroll behavior to continue to next section
        return;
      }
      
      if (!isVisible || !stickyActive || scrollLocked) return;
      
      // Accumulate touch movement
      touchMoveCounter += touchDiff;
      
      // Prevent default scrolling when in sticky mode
      if (Math.abs(touchMoveCounter) > 10) {
        e.preventDefault();
      }
      
      // If threshold is reached, change slides
      if (touchMoveCounter > touchThreshold) {
        // Swiping down - move to next slide if not at end
        if (activeIndustryIndex < industryItems.length - 1) {
          setScrollLocked(true);
          setActiveIndustryIndex(activeIndustryIndex + 1);
          touchStartY = touchCurrentY; // Reset to prevent multiple triggers
          touchMoveCounter = 0;
          
          // Unlock scrolling after animation
          setTimeout(() => {
            setScrollLocked(false);
          }, 600);
        }
      } else if (touchMoveCounter < -touchThreshold) {
        // Swiping up - move to previous slide if not at beginning
        if (activeIndustryIndex > 0) {
          setScrollLocked(true);
          setActiveIndustryIndex(activeIndustryIndex - 1);
          touchStartY = touchCurrentY; // Reset to prevent multiple triggers
          touchMoveCounter = 0;
          
          // Unlock scrolling after animation
          setTimeout(() => {
            setScrollLocked(false);
          }, 600);
        }
      }
    };
    
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      sectionElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      sectionElement.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    
    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('touchstart', handleTouchStart);
        sectionElement.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [isVisible, activeIndustryIndex, stickyActive, scrollLocked, isLastItem]);

  const handleOpenIndustryDialog = (title: string) => {
    setOpenIndustryDialog(title);
  };

  // Calculate section height based on number of industries
  const sectionHeight = `${Math.max(industryItems.length * 100, 100)}vh`;

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
          stickyActive && !isLastItem ? "sticky top-0" : "relative"
        )}
      >
        <div className={cn("w-full h-full transition-opacity duration-500",
                         isVisible ? "opacity-100" : "opacity-0")}>
          <IndustriesCarousel 
            activeIndustryIndex={activeIndustryIndex}
            setActiveIndustryIndex={setActiveIndustryIndex}
            openIndustryDialog={handleOpenIndustryDialog}
            isLastItem={isLastItem}
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

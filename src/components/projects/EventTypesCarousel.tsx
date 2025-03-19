
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { eventTypes } from './data';
import SectionTitle from './SectionTitle';
import ScrollIndicator from './ScrollIndicator';
import { Clock, ChevronRight } from 'lucide-react';

interface EventTypesCarouselProps {
  activeEventTypeIndex: number;
  setActiveEventTypeIndex: (index: number) => void;
  openEventDialog: (title: string) => void;
}

const EventTypesCarousel = ({ 
  activeEventTypeIndex, 
  setActiveEventTypeIndex, 
  openEventDialog 
}: EventTypesCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Create multiple intersection observers for different event types
  const eventRefs = eventTypes.map((_, i) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
      triggerOnce: false
    });
    return { ref, inView };
  });

  // Watch for events coming into view
  useEffect(() => {
    const inViewIndex = eventRefs.findIndex(item => item.inView);
    if (inViewIndex !== -1) {
      setActiveEventTypeIndex(inViewIndex);
    }
  }, [eventRefs.map(ref => ref.inView), setActiveEventTypeIndex]);
  
  return (
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine chronologische Reise durch unsere Veranstaltungsformate"
      />
      
      <div className="relative mt-12">
        {/* Timeline Track */}
        <div className="absolute left-0 right-0 h-1 top-20 bg-muted/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ 
              width: `${(activeEventTypeIndex + 1) / eventTypes.length * 100}%` 
            }}
          />
        </div>
        
        {/* Event Items Container */}
        <div 
          className="overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory flex"
          ref={containerRef}
        >
          {eventTypes.map((event, index) => (
            <div 
              key={index}
              ref={eventRefs[index].ref}
              className="snap-center min-w-[320px] w-[80vw] max-w-md mx-4 flex-shrink-0"
              onClick={() => openEventDialog(event.title)}
            >
              <div className="relative pt-28 pb-4 px-2">
                {/* Timeline Node */}
                <div 
                  className={cn(
                    "absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10",
                    "transition-all duration-500 scale-100"
                  )}
                >
                  <div 
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                      eventRefs[index].inView 
                        ? "bg-primary scale-110" 
                        : "bg-muted scale-90"
                    )}
                  >
                    <Clock 
                      className={cn(
                        "h-5 w-5 transition-colors duration-500",
                        eventRefs[index].inView 
                          ? "text-primary-foreground" 
                          : "text-muted-foreground"
                      )} 
                    />
                  </div>
                </div>
                
                {/* Date Indicator */}
                <div 
                  className={cn(
                    "absolute top-6 left-1/2 transform -translate-x-1/2 text-sm font-medium",
                    "transition-all duration-500",
                    eventRefs[index].inView 
                      ? "text-primary opacity-100" 
                      : "text-muted-foreground opacity-50"
                  )}
                >
                  Phase {index + 1}
                </div>
                
                {/* Event Card */}
                <div 
                  className={cn(
                    "bg-card rounded-lg p-6 border shadow-md cursor-pointer",
                    "transition-all duration-500 hover:shadow-lg",
                    eventRefs[index].inView 
                      ? "transform-none opacity-100 border-primary/50" 
                      : index < activeEventTypeIndex 
                        ? "-translate-x-4 opacity-60" 
                        : "translate-x-4 opacity-60"
                  )}
                  style={{
                    transitionDelay: `${Math.abs(index - activeEventTypeIndex) * 50}ms`
                  }}
                >
                  <h3 className={cn(
                    "text-xl font-semibold mb-3 transition-colors duration-300",
                    eventRefs[index].inView ? "text-primary" : "text-foreground"
                  )}>
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  
                  <div className={cn(
                    "text-sm text-muted-foreground/80 mb-4 transition-all duration-500",
                    eventRefs[index].inView ? "opacity-100" : "opacity-0"
                  )}>
                    {event.details}
                  </div>
                  
                  <div className={cn(
                    "flex justify-end transition-all duration-300 mt-4",
                    eventRefs[index].inView ? "opacity-100" : "opacity-0"
                  )}>
                    <button 
                      className="flex items-center text-primary text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEventDialog(event.title);
                      }}
                    >
                      <span>Mehr erfahren</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="flex justify-center mt-6">
          <ScrollIndicator active={activeEventTypeIndex} total={eventTypes.length} />
        </div>
        
        {/* Scroll hint */}
        <div className="absolute bottom-0 right-4 text-primary/80 animate-bounce-x flex items-center gap-1 text-sm">
          <span>Nach rechts scrollen</span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default EventTypesCarousel;

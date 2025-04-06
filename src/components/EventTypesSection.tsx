
import React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import EventTypeCard from './event-types/EventTypeCard';
import EventTypesSectionHeader from './event-types/EventTypesSectionHeader';
import { useEventCardInteraction } from './event-types/useEventCardInteraction';
import { 
  eventTypes, 
  eventTags, 
  eventDescriptions, 
  eventIconComponents 
} from './event-types/event-type-constants';

const EventTypesSection = () => {
  const {
    activeEventTypeIndex,
    hoveredCardIndex,
    showTapHint,
    animatedCards,
    sectionRef,
    handleFlipCard,
    handleTouchStart,
    handleTouchEnd,
    setHoveredCardIndex
  } = useEventCardInteraction(eventTypes.length);
  
  return (
    <section id="eventformate" className="py-16 md:py-24 bg-secondary/5" ref={sectionRef}>
      <div className="container-section">
        <EventTypesSectionHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const isFlipped = activeEventTypeIndex === index;
            const isHovered = hoveredCardIndex === index;
            const showHint = isHovered || showTapHint === index;
            const isAnimated = animatedCards.includes(index);
            const IconComponent = eventIconComponents[index];
            
            return (
              <div 
                key={index}
                className={cn(
                  "transition-all duration-500",
                  isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <EventTypeCard
                  title={event.title}
                  description={eventDescriptions[index]}
                  details={event.details}
                  icon={<IconComponent className="h-12 w-12 text-white/90" />}
                  tags={eventTags[index]}
                  isFlipped={isFlipped}
                  isHovered={isHovered}
                  showHint={showHint}
                  handleFlipCard={() => handleFlipCard(index)}
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  onTouchStart={() => handleTouchStart(index)}
                  onTouchEnd={handleTouchEnd}
                  onTouchMove={handleTouchEnd}
                />
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Erste Verbindung herstellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;

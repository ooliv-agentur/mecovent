
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import CategoryItem from './CategoryItem';
import SectionTitle from './SectionTitle';
import ScrollIndicator from './ScrollIndicator';
import { eventTypes } from './data';
import { Progress } from '@/components/ui/progress';
import { useInView } from 'react-intersection-observer';

interface EventTypesCarouselProps {
  activeEventTypeIndex: number;
  setActiveEventTypeIndex: (index: number) => void;
  openEventDialog: (title: string) => void;
}

const EventTypesCarousel = ({ activeEventTypeIndex, setActiveEventTypeIndex, openEventDialog }: EventTypesCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveEventTypeIndex(api.selectedScrollSnap());
    });
  }, [api, setActiveEventTypeIndex]);

  // Calculate timeline progress as a percentage
  const timelineProgress = activeEventTypeIndex === 0 
    ? 5 
    : Math.min(((activeEventTypeIndex + 1) / eventTypes.length) * 100, 100);

  return (
    <div className="relative" ref={sectionRef}>
      <SectionTitle 
        title="Eventarten, die wir realisieren" 
        subtitle="Interaktive Timeline unserer Event-Expertise"
      />
      
      {/* Timeline Progress Indicator */}
      <div className="relative mb-8 mt-6">
        <Progress 
          value={timelineProgress} 
          className="h-1.5 w-full bg-muted/30"
        />
        
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          {eventTypes.map((_, index) => (
            <div 
              key={index}
              className={`relative -ml-2 ${index === 0 ? 'ml-0' : ''} ${index === eventTypes.length - 1 ? 'ml-auto' : ''}`}
              style={{ left: index === 0 ? '0' : index === eventTypes.length - 1 ? '0' : `-${100 / eventTypes.length / 3}%` }}
            >
              <div 
                className={`h-2 w-2 rounded-full ${index <= activeEventTypeIndex ? 'bg-primary' : 'bg-muted/50'} 
                           transition-all duration-300 ${index === activeEventTypeIndex ? 'scale-150' : ''}`}
              />
              {index === activeEventTypeIndex && (
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-primary font-medium">
                  {eventTypes[index].title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full overflow-visible"
            setApi={setApi}
          >
            <CarouselContent className="py-4">
              {eventTypes.map((event, index) => (
                <CarouselItem 
                  key={index} 
                  className={`pl-4 md:basis-4/5 lg:basis-3/4 transition-all duration-700
                              ${activeEventTypeIndex === index 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-50 scale-95'}`}
                >
                  <CategoryItem 
                    title={event.title}
                    description={event.description}
                    onClick={() => openEventDialog(event.title)}
                    index={index}
                    active={index === activeEventTypeIndex}
                    showTimelineIndicator={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <div className="absolute bottom-1/2 right-2 transform translate-y-1/2 flex items-center text-sm text-primary/80 animate-pulse">
            <span className="mr-1">Scroll</span>
            <ChevronRight className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <ScrollIndicator active={activeEventTypeIndex} total={eventTypes.length} />
    </div>
  );
};

export default EventTypesCarousel;

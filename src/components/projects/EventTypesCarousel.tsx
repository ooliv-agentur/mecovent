
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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

interface EventTypesCarouselProps {
  activeEventTypeIndex: number;
  setActiveEventTypeIndex: (index: number) => void;
  openEventDialog: (title: string) => void;
}

const EventTypesCarousel = ({ activeEventTypeIndex, setActiveEventTypeIndex, openEventDialog }: EventTypesCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveEventTypeIndex(api.selectedScrollSnap());
    });
  }, [api, setActiveEventTypeIndex]);

  return (
    <div>
      <SectionTitle 
        title="Eventarten, die wir realisieren" 
        subtitle="Interaktive Timeline unserer Event-Expertise"
      />
      
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => api?.scrollPrev()}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Zurück</span>
          </Button>
          
          <span className="text-sm font-medium">
            {activeEventTypeIndex + 1} / {eventTypes.length}
          </span>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => api?.scrollNext()}
            className="flex items-center gap-1"
          >
            <span>Weiter</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <CarouselContent className="-ml-2 md:-ml-4">
          {eventTypes.map((event, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
              <CategoryItem 
                title={event.title}
                description={event.description}
                onClick={() => openEventDialog(event.title)}
                index={index}
                active={index === activeEventTypeIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <ScrollIndicator active={activeEventTypeIndex} total={eventTypes.length} />
    </div>
  );
};

export default EventTypesCarousel;

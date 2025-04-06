
import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  BarChart4,
  PartyPopper,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl, index }: ServiceCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card 
      className={cn(
        "h-full overflow-hidden group transition-all duration-500 ease-in-out",
        "hover:shadow-xl hover:scale-[1.02] hover:z-10",
        "border border-border/40 dark:border-border/20",
        "bg-white dark:bg-card"
      )}
      tabIndex={0}
      aria-label={`Service: ${title}`}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="font-medium text-xl text-white mb-1">{title}</h3>
          <div className="h-0.5 w-12 bg-[#009fe3] group-hover:w-24 transition-all duration-500" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 rounded-full p-2 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const ServiceCarousel = () => {
  const isMobile = useIsMobile();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });

  // Track current slide index
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Navigation functions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Services data
  const services = [
    { 
      title: "Strategische Eventberatung", 
      description: "Analyse Ihrer Ziele & maßgeschneiderte Konzepte", 
      icon: BarChart4,
      imageUrl: "/lovable-uploads/a5711a2e-3fe8-4825-a540-2c8a57a36cfd.png" 
    },
    { 
      title: "Eventmanagement", 
      description: "Konzeption, Planung & Durchführung", 
      icon: LightbulbIcon,
      imageUrl: "/lovable-uploads/f385109c-4e96-4e47-b083-40a9b15bddac.png" 
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Einladung, Buchung & Betreuung", 
      icon: Users,
      imageUrl: "/lovable-uploads/5cefe1bc-f4db-41da-8076-6a902d7c71b5.png" 
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühne, Licht, Ton & Video für den perfekten Auftritt", 
      icon: Music,
      imageUrl: "/lovable-uploads/20cca07c-10d1-4d83-a2b9-98f9aac3b283.png" 
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Motivation & Erlebnis für Ihr Team", 
      icon: Smartphone,
      imageUrl: "/lovable-uploads/3b884e4a-3302-4e39-928b-44f68f55994d.png" 
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für mehr Reichweite", 
      icon: PartyPopper,
      imageUrl: "/lovable-uploads/5869c2e4-85a2-474b-87bc-d34a4bfa1333.png" 
    }
  ];

  return (
    <div className="relative">
      {/* Carousel wrapper */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-x">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "flex-[0_0_100%] min-w-0 relative px-3", 
                !isMobile && "md:flex-[0_0_33.333%]"
              )}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <div className={cn(
        "flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 z-10 px-2",
        isMobile ? "hidden" : "md:flex"
      )}>
        <button 
          onClick={scrollPrev}
          className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center backdrop-blur-sm hover:bg-white dark:hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
        <button 
          onClick={scrollNext}
          className="w-10 h-10 rounded-full bg-white/80 dark:bg-black/50 shadow-md flex items-center justify-center backdrop-blur-sm hover:bg-white dark:hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Mobile scroll hint - only shown initially */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center md:hidden">
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
          <ChevronLeft className="h-3 w-3" />
          <span>Swipe</span>
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-4 gap-1.5">
        {services.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
              currentSlide === index 
                ? "bg-primary w-4" 
                : "bg-primary/30"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Current slide counter */}
      <div className="absolute top-0 right-0 bg-white/70 dark:bg-black/40 text-xs px-2 py-1 rounded-bl-md backdrop-blur-sm">
        {currentSlide + 1} / {services.length}
      </div>
    </div>
  );
};

export default ServiceCarousel;

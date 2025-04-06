
import React, { useState } from 'react';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  BarChart4,
  PartyPopper
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

interface ServiceSlideProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageSrc: string;
  active: boolean;
}

const ServiceSlide = ({ title, description, icon: Icon, imageSrc, active }: ServiceSlideProps) => (
  <Card className={`relative h-full overflow-hidden transition-all duration-500 ${active ? 'border-primary/30 shadow-lg' : 'border-transparent shadow'}`}>
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40 z-10 transition-opacity duration-500 ${active ? 'opacity-75' : 'opacity-85'}`}></div>
      <img 
        src={imageSrc} 
        alt={title} 
        className={`w-full h-full object-cover transition-transform duration-700 scale-105 ${active ? 'scale-110' : 'scale-105'}`}
      />
    </div>
    
    <CardContent className="p-6 relative z-20 h-full flex flex-col">
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-primary/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary/90" />
      </div>
      <h3 className="font-medium text-xl mb-3 text-primary">{title}</h3>
      <p className="text-foreground/80">
        {description}
      </p>
    </CardContent>
  </Card>
);

const ServicesSlider = () => {
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  
  const services = [
    { 
      title: "Strategische Eventberatung", 
      description: "Analyse Ihrer Ziele & maßgeschneiderte Konzepte für messbaren Erfolg", 
      icon: BarChart4, 
      imageSrc: "/lovable-uploads/906b4c11-1d40-4982-aa89-d40798b17c9e.png"
    },
    { 
      title: "Eventmanagement", 
      description: "Konzeption, Planung & professionelle Durchführung Ihrer Veranstaltung", 
      icon: LightbulbIcon, 
      imageSrc: "/lovable-uploads/c24eb3c0-c51f-44dd-8a81-20345a2094f8.png"
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Nahtlose Einladung, Buchung & Betreuung Ihrer Gäste", 
      icon: Users, 
      imageSrc: "/lovable-uploads/90ff0323-484c-49bd-a8b7-afa998d4c6b7.png"
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühne, Licht, Ton & Video für den perfekten Auftritt", 
      icon: Music, 
      imageSrc: "/lovable-uploads/92fb0bda-3846-4569-af8a-7741561e0af9.png"
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Motivation & unvergessliche Erlebnisse für Ihr Team", 
      icon: Smartphone, 
      imageSrc: "/lovable-uploads/9c383b79-a81a-4ef0-9b54-92ca8574730b.png"
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für maximale Reichweite", 
      icon: PartyPopper, 
      imageSrc: "/lovable-uploads/ed43ffda-ea78-4686-90a5-933c2995ba69.png"
    }
  ];

  const handlePaginationClick = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
    setActiveSlide(index);
  };

  React.useEffect(() => {
    if (!carouselApi) return;
    
    const handleSelect = () => {
      setActiveSlide(carouselApi.selectedScrollSnap() || 0);
    };
    
    carouselApi.on("select", handleSelect);
    
    // Cleanup
    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  return (
    <div className="relative pb-16">
      <div className="mb-12 relative">
        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setCarouselApi}
        >
          <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

          <CarouselContent className="py-4">
            {services.map((service, index) => (
              <CarouselItem 
                key={index} 
                className={`pl-4 md:basis-1/2 lg:basis-1/3 h-[300px] transition-opacity duration-300 ${Math.abs(activeSlide - index) > 2 ? 'opacity-50' : 'opacity-100'}`}
              >
                <ServiceSlide 
                  {...service} 
                  active={activeSlide === index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:flex justify-between absolute top-1/2 left-4 right-4 -translate-y-1/2 z-20">
            <CarouselPrevious className="relative h-10 w-10 ml-2" />
            <CarouselNext className="relative h-10 w-10 mr-2" />
          </div>
        </Carousel>
      </div>

      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            {services.map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  onClick={(e) => {
                    e.preventDefault();
                    handlePaginationClick(index);
                  }}
                  isActive={activeSlide === index}
                  className={`w-10 h-10 ${activeSlide === index ? 'bg-primary/20' : ''}`}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>

      <div className="mt-12 text-center">
        <p className="flex items-center justify-center gap-2 text-primary max-w-2xl mx-auto border-t pt-8 border-muted/30">
          <LightbulbIcon className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium">Von der ersten Idee bis zur erfolgreichen Umsetzung – wir übernehmen Planung, Umsetzung & Teilnehmerbetreuung mit höchster Präzision.</span>
        </p>
      </div>
    </div>
  );
};

export default ServicesSlider;

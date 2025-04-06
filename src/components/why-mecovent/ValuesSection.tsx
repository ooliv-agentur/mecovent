
import React, { useState, useEffect, useRef } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import ValueCard from './ValueCard';
import ScrollIndicator from '../projects/ScrollIndicator';

interface ValuesSectionProps {
  values: Array<{
    title: string;
    description: string;
    videoSrc: string;
  }>;
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInSection, setIsInSection] = useState(false);

  // Track if we're in this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInSection(true);
          } else {
            setIsInSection(false);
          }
        });
      },
      {
        root: null,
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle indicator click
  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div ref={sectionRef}>
      {isMobile ? (
        <Carousel 
          className="w-full max-w-xs mx-auto"
          setApi={(api) => {
            api?.on('select', () => {
              setActiveIndex(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {values.map((value, index) => (
              <CarouselItem key={index} className="py-2">
                <ValueCard 
                  key={index}
                  title={value.title}
                  description={value.description}
                  videoSrc={value.videoSrc}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-col items-center gap-4 mt-6">
            <div className="flex justify-center gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
            {isInSection && (
              <ScrollIndicator 
                active={activeIndex} 
                total={values.length} 
                orientation="horizontal"
                onIndicatorClick={handleIndicatorClick}
              />
            )}
          </div>
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title}
              description={value.description}
              videoSrc={value.videoSrc}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ValuesSection;

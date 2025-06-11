
import React, { useState, useRef } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { industryItems } from './projects/data';
import { sectionTextBlocks } from '@/hooks/useSectionTextBlock';
import SectionTextBlock from '@/components/ui/section-text-block';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ExpertiseBlock from './projects/ExpertiseBlock';

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      id="projects" 
      className="relative w-full bg-gradient-to-b from-white to-[#f8f8f8] py-16 md:py-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container-section">
        <SectionTextBlock
          {...sectionTextBlocks.expertise}
          alignment="left"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onSlideChange={(index) => setActiveIndex(index)}
        >
          <CarouselContent>
            {industryItems.map((industry, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <ExpertiseBlock 
                  industry={industry}
                  index={index}
                  isActive={activeIndex === index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="hidden md:block">
            <CarouselPrevious className="-left-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
            <CarouselNext className="-right-4 bg-white/80 backdrop-blur-sm hover:bg-white" />
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {industryItems.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-primary scale-110" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      
      <div className="py-20 md:py-24">
        <div className="max-w-[650px] mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-primary/80 mb-6">
            <LightbulbIcon className="h-12 w-12 flex-shrink-0 animate-[glow_6s_ease-in-out_infinite] stroke-2" />
          </div>
          <div className="space-y-6 text-center">
            <p className="text-gray-600 leading-[1.6] font-medium text-lg">
              Loyalität, Diskretion und Compliance unseren Kunden gegenüber sind uns ein großes Anliegen. Deshalb führen wir hier keine Kundennamen auf.
            </p>
            <p className="text-gray-600 leading-[1.6]">
              Für weitere Informationen freuen wir uns auf ein Gespräch mit Ihnen und stellen Ihnen gerne Referenzen zur Verfügung!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

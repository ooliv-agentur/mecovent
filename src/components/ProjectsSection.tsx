import React, { useState, useRef } from 'react';
import { LightbulbIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { industryItems } from './projects/data';
import { SectionLabel } from '@/components/ui/section-label';
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
      className="relative w-full bg-white py-16 md:py-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className={cn("text-center max-w-3xl mx-auto px-4 mb-12 animate-fade-in")}>
        <SectionLabel label="Unsere Expertise" />
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
          Verstehen, was zählt – für Events mit Wirkung
        </h2>
        <p className="subheader-section mb-3">
          Jede Branche spricht ihre eigene Sprache. Wir kennen die Unterschiede – und wissen, worauf es wirklich ankommt.
        </p>
        <p className="text-gray-600">
          Ob Pharma, Finanzen, Bildung oder Industrie: Wir denken uns in Ihre Welt ein und schaffen Erlebnisse, die Inhalte transportieren – und Vertrauen schaffen.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
      
      <div className="mt-8 px-4">
        <div className="max-w-[650px] mx-auto bg-[#f8f8f8] rounded-lg p-6">
          <div className="flex items-center justify-center gap-2 text-primary/80 mb-4">
            <LightbulbIcon className="h-4 w-4 flex-shrink-0" />
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 leading-[1.4] text-[1rem]">
              Loyalität, Diskretion und Compliance unseren Kunden gegenüber sind uns ein großes Anliegen. Deshalb führen wir hier keine Kundennamen auf.
            </p>
            <p className="text-gray-600 leading-[1.4] text-[1rem]">
              Für weitere Informationen freuen wir uns auf ein Gespräch mit Ihnen und stellen Ihnen gerne Referenzen zur Verfügung!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

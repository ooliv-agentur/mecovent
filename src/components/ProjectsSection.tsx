
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
      
      <div className="text-center mt-16 animate-fade-in px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto">
          <p className="flex items-center justify-center gap-2 text-[#009fe3] mb-8">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

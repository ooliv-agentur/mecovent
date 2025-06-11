
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
      className="relative w-full bg-gradient-to-b from-white to-[#f8f8f8] py-16 md:py-24 overflow-hidden"
      ref={sectionRef}
    >
      <div className={cn("content-right-aligned px-4 mb-16 animate-fade-in")}>
        <SectionLabel label="Unsere Expertise" className="text-dynamic-right" />
        <h2 className="headline-primary text-gradient-dynamic mb-8 text-dynamic-right break-words">
          Verstehen, was zählt – für Events mit Wirkung
        </h2>
        <p className="subheader-large text-muted-foreground text-dynamic-right mb-4">
          Jede Branche spricht ihre eigene Sprache. Wir kennen die Unterschiede – und wissen, worauf es wirklich ankommt.
        </p>
        <p className="body-large text-gray-600 text-dynamic-right">
          Ob <span className="font-semibold text-primary">Pharma</span>, <span className="font-semibold text-primary">Finanzen</span>, <span className="font-semibold text-primary">Bildung</span> oder <span className="font-semibold text-primary">Industrie</span>: Wir denken uns in Ihre Welt ein und schaffen Erlebnisse, die Inhalte transportieren – und Vertrauen schaffen.
        </p>
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
        <div className="content-center-aligned px-4">
          <div className="flex items-center justify-center gap-3 text-primary/80 mb-8">
            <LightbulbIcon className="h-14 w-14 flex-shrink-0 animate-[glow_6s_ease-in-out_infinite] stroke-2" />
          </div>
          <div className="space-y-8 text-center">
            <p className="body-large text-gray-600 font-medium">
              <span className="headline-tertiary text-gray-800 block mb-4">Loyalität, Diskretion und Compliance</span>
              unseren Kunden gegenüber sind uns ein großes Anliegen. Deshalb führen wir hier keine Kundennamen auf.
            </p>
            <p className="body-medium text-gray-600">
              Für weitere Informationen freuen wir uns auf ein Gespräch mit Ihnen und stellen Ihnen gerne <span className="font-semibold text-primary">Referenzen</span> zur Verfügung!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

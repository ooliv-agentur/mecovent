import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { eventTypes } from './data';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface EventTypesCarouselProps {
  activeEventTypeIndex: number | null;
  setActiveEventTypeIndex: (index: number | null) => void;
}

const EventTypesCarousel = ({ 
  activeEventTypeIndex, 
  setActiveEventTypeIndex 
}: EventTypesCarouselProps) => {
  // Handle expanding/collapsing a card
  const handleToggleCard = (index: number) => {
    if (activeEventTypeIndex === index) {
      // If this card is already active, collapse it
      setActiveEventTypeIndex(null);
    } else {
      // Otherwise, expand this card and collapse any others
      setActiveEventTypeIndex(index);
    }
  };
  
  return (
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine Übersicht unserer Veranstaltungsformate"
      />
      
      <div className="mt-8">
        {/* Grid layout for event types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <Collapsible 
              key={index}
              open={activeEventTypeIndex === index}
              onOpenChange={() => handleToggleCard(index)}
              className={cn(
                "bg-card rounded-lg border shadow-sm h-full transition-all duration-300",
                activeEventTypeIndex === index ? "bg-accent/10 border-primary/30" : ""
              )}
            >
              <Card className="border-0 shadow-none bg-transparent h-full flex flex-col">
                <CollapsibleTrigger className="w-full text-left cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-semibold text-primary">
                      {event.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex justify-end items-center text-sm text-primary mt-2">
                      {activeEventTypeIndex === index ? (
                        <div className="flex items-center gap-1">
                          <span>Weniger anzeigen</span>
                          <ChevronUp className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <span>Mehr erfahren</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-4">
                  <div className="pt-2 border-t border-border/40">
                    <div className="my-4 text-sm text-foreground/80 leading-relaxed">
                      {event.details}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Event', 'Konzept', 'Planung'].map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CollapsibleContent>
                
                <CardFooter className="mt-auto pt-0 opacity-0">
                  {/* Spacer for consistent height */}
                </CardFooter>
              </Card>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTypesCarousel;

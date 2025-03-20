import React, { useState } from 'react';
import { Clock, RotateCw, Quote } from 'lucide-react';
import { eventTypes } from './projects/data';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-mobile';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define event-specific tags with icons and their components
const eventTags = [
  ['Forschung', 'Networking', 'Präsentation'], // Wissenschaftliche Konferenzen
  ['Innovation', 'Markeninszenierung', 'Medien'], // Produktlaunches & Präsentationen
  ['Weiterbildung', 'Kollaboration', 'Moderation'], // Interaktive Workshops
  ['Teambuilding', 'Unternehmenskultur', 'Motivation'], // Firmen- & Mitarbeiterevents
  ['Premium', 'Entertainment', 'VIP-Experience'], // Galas & exklusive Abendveranstaltungen
  ['Abenteuer', 'Natur', 'Teamgeist'] // Outdoor- & Teamevents
];

const EventTypesSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState<number | null>(null);
  
  // Handle flipping a card
  const handleFlipCard = (index: number) => {
    // If this card is already flipped, unflip it
    if (activeEventTypeIndex === index) {
      setActiveEventTypeIndex(null);
    } else {
      // Otherwise, flip this card and unflip any others
      setActiveEventTypeIndex(index);
    }
    
    // Reset tap hint if it was showing
    if (showTapHint === index) {
      setShowTapHint(null);
    }
  };
  
  // Handle touch start for mobile devices
  const handleTouchStart = (index: number) => {
    if (isMobile && activeEventTypeIndex !== index) {
      // Show hint on first tap
      setShowTapHint(index);
      
      // Set a timeout to flip the card automatically after showing the hint
      setTimeout(() => {
        if (showTapHint === index) {
          handleFlipCard(index);
        }
      }, 1500);
    }
  };
  
  // Clear the tap hint when touch is moved or ended
  const handleTouchEnd = () => {
    setShowTapHint(null);
  };
  
  // Map of tag names to their classes
  const getTagClass = (tag: string) => {
    return "bg-primary/10 text-primary";
  };
  
  return (
    <section id="eventformate" className="py-16 md:py-24 bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Unsere Veranstaltungsformate</div>
          <h2 className="header-section">Eventtypen, die wir gestalten</h2>
          <p className="subheader-section">
            Eine Übersicht unserer Veranstaltungsformate
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {eventTypes.map((event, index) => {
            const isFlipped = activeEventTypeIndex === index;
            const isHovered = hoveredCardIndex === index;
            const showHint = isHovered || showTapHint === index;
            
            return (
              <div 
                key={index}
                className={cn(
                  "flip-card-container cursor-pointer h-[320px]",
                  isFlipped ? "is-flipped" : ""
                )}
                onClick={() => handleFlipCard(index)}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchEnd}
                style={{
                  perspective: "1000px"
                }}
              >
                <div 
                  className={cn(
                    "flip-card relative w-full h-full transition-transform duration-500 transform-style-preserve-3d",
                    isFlipped ? "rotate-y-180" : ""
                  )}
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.6s"
                  }}
                >
                  {/* Front of card */}
                  <Card 
                    className={cn(
                      "flip-card-front absolute w-full h-full backface-hidden border shadow-sm transition-all duration-300 hover:shadow-md",
                      isFlipped ? "" : "hover:border-primary/20"
                    )}
                    style={{
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Clock className="h-5 w-5 text-primary/80" />
                        </div>
                        
                        {/* "Click to flip" hint - shown only on hover */}
                        {showHint && (
                          <div className="text-xs text-primary/70 flex items-center gap-1 ml-auto">
                            <RotateCw className="h-3.5 w-3.5" />
                            <span>Klicken zum Wenden</span>
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className="text-xl font-semibold text-primary/80">
                        {event.title}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  {/* Back of card */}
                  <Card 
                    className="flip-card-back absolute w-full h-full backface-hidden border border-primary/30 shadow-md bg-accent/40 rotate-y-180 flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold text-primary">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="text-sm text-foreground/80 leading-relaxed mb-4">
                        {event.details}
                      </div>
                      
                      {/* Tags section */}
                      <div className="mt-4">
                        <p className="text-xs text-foreground/60 mb-2">Tags:</p>
                        <div className="flex flex-wrap gap-2">
                          {eventTags[index].map((tag, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className={cn(
                                "py-1 px-2 border-primary/30 text-xs font-medium",
                                getTagClass(tag)
                              )}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0 text-xs justify-center border-t mt-auto">
                      <button className="flex items-center gap-1 text-primary/70 hover:text-primary transition-colors">
                        <RotateCw className="h-3.5 w-3.5" />
                        <span>Zurück zur Übersicht</span>
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;

import React, { useState } from 'react';
import { Clock, RotateCw, Tag, Calendar } from 'lucide-react';
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
import { Button } from "@/components/ui/button";

const eventTags = [
  ['Fachpublikum', 'Wissenstransfer', 'Präzision'], // Wissenschaftliche Konferenzen
  ['Innovation', 'Markenauftritt', 'Inszenierung'], // Produktlaunches & Präsentationen
  ['Aktivierung', 'Kollaboration', 'Lernerlebnis'], // Interaktive Workshops
  ['Unternehmenskultur', 'Wertschätzung', 'Teambuilding'], // Firmen- & Mitarbeiterevents
  ['Premium', 'Stil', 'Atmosphäre'], // Galas & exklusive Abendveranstaltungen
  ['Natur', 'Herausforderung', 'Zusammenhalt'] // Outdoor- & Teamevents
];

const eventDescriptions = [
  "Fachpublikum erreichen, Wissen vermitteln", // Wissenschaftliche Konferenzen
  "Innovationen inszenieren und begeistern", // Produktlaunches & Präsentationen
  "Wissen aktivieren, Kollaboration fördern", // Interaktive Workshops
  "Teamgeist und Unternehmenskultur stärken", // Firmen- & Mitarbeiterevents
  "Stilvolle Highlights mit besonderem Flair", // Galas & exklusive Abendveranstaltungen
  "Gemeinsam wachsen, Natur erleben" // Outdoor- & Teamevents
];

const EventTypesSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState<number | null>(null);
  
  const handleFlipCard = (index: number) => {
    if (activeEventTypeIndex === index) {
      setActiveEventTypeIndex(null);
    } else {
      setActiveEventTypeIndex(index);
    }
    
    if (showTapHint === index) {
      setShowTapHint(null);
    }
  };
  
  const handleTouchStart = (index: number) => {
    if (isMobile && activeEventTypeIndex !== index) {
      setShowTapHint(index);
      setTimeout(() => {
        if (showTapHint === index) {
          handleFlipCard(index);
        }
      }, 1500);
    }
  };
  
  const handleTouchEnd = () => {
    setShowTapHint(null);
  };
  
  return (
    <section id="eventformate" className="py-16 md:py-24 bg-secondary/5">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="section-tag">Unsere Veranstaltungsformate</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
            Events, die wirken – strategisch geplant, emotional inszeniert
          </h2>
          <p className="subheader-section mb-3">
            Ob Fachkongress oder Kick-off – wir finden das richtige Format für Ihre Botschaft.
          </p>
          <p className="text-muted-foreground">
            Vom Kick-off bis zur Roadshow, vom Fachkongress bis zum Team-Retreat:<br />
            Unsere Formate entstehen immer mit einem Ziel – Wirkung.<br />
            Strategisch durchdacht, emotional inszeniert und individuell für Sie entwickelt.
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
                  "flip-card-container cursor-pointer h-[350px]",
                  isFlipped ? "is-flipped" : ""
                )}
                onClick={() => setActiveEventTypeIndex(isFlipped ? null : index)}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                onTouchStart={() => {
                  if (isMobile && activeEventTypeIndex !== index) {
                    setShowTapHint(index);
                    setTimeout(() => {
                      if (showTapHint === index) {
                        setActiveEventTypeIndex(index);
                      }
                    }, 1500);
                  }
                }}
                onTouchEnd={() => setShowTapHint(null)}
                onTouchMove={() => setShowTapHint(null)}
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
                        
                        {showHint && (
                          <div className="text-xs text-primary/70 flex items-center gap-1 ml-auto">
                            <RotateCw className="h-3.5 w-3.5" />
                            <span>Klicken für Details</span>
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className="text-xl font-semibold text-primary/80">
                        {event.title}
                      </CardTitle>
                      
                      <CardDescription className="text-muted-foreground">
                        {eventDescriptions[index]}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
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
                    
                    <CardContent className="flex-1 flex flex-col">
                      <div className="text-sm text-foreground/80 leading-relaxed mb-4">
                        {event.details}
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex items-center gap-1 text-xs text-foreground/60 mb-2">
                          <Tag className="h-3 w-3" />
                          <span>Tags:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {eventTags[index].map((tag, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className={cn(
                                "py-1 px-2 border-primary/30 text-xs font-medium bg-primary/10 text-primary"
                              )}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Erste Verbindung herstellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTypesSection;

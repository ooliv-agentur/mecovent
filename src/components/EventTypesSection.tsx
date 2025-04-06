import React, { useState, useRef, useEffect } from 'react';
import { 
  Clock, 
  RotateCw, 
  Tag, 
  Calendar,
  Video,
  Sparkles,
  Users,
  Building,
  PartyPopper,
  Mountain
} from 'lucide-react';
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

// Event-spezifische Icons
const eventIcons = [
  <Video className="h-12 w-12 text-white/90" />, // Wissenschaftliche Konferenzen
  <Sparkles className="h-12 w-12 text-white/90" />, // Produktlaunches & Präsentationen
  <Users className="h-12 w-12 text-white/90" />, // Interaktive Workshops
  <Building className="h-12 w-12 text-white/90" />, // Firmen- & Mitarbeiterevents
  <PartyPopper className="h-12 w-12 text-white/90" />, // Galas & exklusive Abendveranstaltungen
  <Mountain className="h-12 w-12 text-white/90" /> // Outdoor- & Teamevents
];

const EventTypesSection = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState<number | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  // Beobachten Sie das Scrollen, um Animationen zu triggern
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation nach 100ms verzögern, um sicherzustellen, dass die Komponente vollständig gerendert ist
            setTimeout(() => {
              setAnimatedCards(Array.from({ length: eventTypes.length }, (_, i) => i));
            }, 100);
          }
        });
      },
      { threshold: 0.1 }
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
  
  return (
    <section id="eventformate" className="py-16 md:py-24 bg-secondary/5" ref={sectionRef}>
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const isFlipped = activeEventTypeIndex === index;
            const isHovered = hoveredCardIndex === index;
            const showHint = isHovered || showTapHint === index;
            const isAnimated = animatedCards.includes(index);
            
            return (
              <div 
                key={index}
                className={cn(
                  "flip-card-container cursor-pointer h-[350px] transition-all duration-500",
                  isFlipped ? "is-flipped" : "",
                  isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
                style={{ 
                  perspective: "1000px",
                  // Staffelung der Animationen basierend auf dem Index
                  transitionDelay: `${index * 100}ms`
                }}
                onClick={() => handleFlipCard(index)}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                onTouchStart={() => handleTouchStart(index)}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchEnd}
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
                  {/* Vorderseite der Karte im MECOVENT-Blau */}
                  <Card 
                    className={cn(
                      "flip-card-front absolute w-full h-full backface-hidden border-0 shadow-lg",
                      isFlipped ? "" : "hover:shadow-xl",
                      "bg-gradient-to-br from-[#009fe3] to-[#0087c0] text-white"
                    )}
                    style={{
                      backfaceVisibility: "hidden"
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        {showHint && (
                          <div className="text-xs text-white/80 flex items-center gap-1 ml-auto">
                            <RotateCw className="h-3.5 w-3.5 animate-spin-slow" />
                            <span>Klicken für Details</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-center text-center">
                        {/* Zentral platziertes Icon mit Animation beim Hover */}
                        <div 
                          className={cn(
                            "w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-5 transition-all duration-300",
                            isHovered ? "scale-110 bg-white/20" : ""
                          )}
                        >
                          {eventIcons[index]}
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-white mb-3">
                          {event.title}
                        </CardTitle>
                        
                        <CardDescription className="text-white/90 text-lg">
                          {eventDescriptions[index]}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                  
                  {/* Rückseite der Karte mit Details */}
                  <Card 
                    className="flip-card-back absolute w-full h-full backface-hidden border shadow-md bg-white rotate-y-180 flex flex-col"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)"
                    }}
                  >
                    <CardHeader className="pb-2 border-b border-primary/10">
                      <CardTitle className="text-xl font-semibold text-primary flex items-center gap-2">
                        {eventIcons[index]}
                        <span>{event.title}</span>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col pt-4">
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
                              className="py-1 px-2 border-primary/30 text-xs font-medium bg-primary/10 text-primary"
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

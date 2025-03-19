import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { eventTypes } from './data';
import SectionTitle from './SectionTitle';
import { 
  Clock, 
  Search, 
  Network, 
  PresentationIcon, 
  Sparkles, 
  Flag, 
  MonitorIcon, 
  GraduationCap, 
  Users, 
  MessageSquare, 
  Handshake, 
  Building, 
  Flame, 
  Star, 
  PartyPopper, 
  Crown, 
  Tent, 
  TreeDeciduous,
  RotateCw
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventTypesCarouselProps {
  activeEventTypeIndex: number | null;
  setActiveEventTypeIndex: (index: number | null) => void;
}

// Define event-specific tags with icons
const eventTags = [
  ['Forschung', 'Networking', 'Präsentation'], // Wissenschaftliche Konferenzen
  ['Innovation', 'Markeninszenierung', 'Medien'], // Produktlaunches & Präsentationen
  ['Weiterbildung', 'Kollaboration', 'Moderation'], // Interaktive Workshops
  ['Teambuilding', 'Unternehmenskultur', 'Motivation'], // Firmen- & Mitarbeiterevents
  ['Premium', 'Entertainment', 'VIP-Experience'], // Galas & exklusive Abendveranstaltungen
  ['Abenteuer', 'Natur', 'Teamgeist'] // Outdoor- & Teamevents
];

const EventTypesCarousel = ({ 
  activeEventTypeIndex, 
  setActiveEventTypeIndex 
}: EventTypesCarouselProps) => {
  // Map of tag names to their icons
  const tagIcons: Record<string, React.ReactNode> = {
    // Scientific conference tags
    'Forschung': <Search className="h-3 w-3" />,
    'Networking': <Network className="h-3 w-3" />,
    'Präsentation': <PresentationIcon className="h-3 w-3" />,
    
    // Product launch tags
    'Innovation': <Sparkles className="h-3 w-3" />,
    'Markeninszenierung': <Flag className="h-3 w-3" />,
    'Medien': <MonitorIcon className="h-3 w-3" />,
    
    // Workshop tags
    'Weiterbildung': <GraduationCap className="h-3 w-3" />,
    'Kollaboration': <Users className="h-3 w-3" />,
    'Moderation': <MessageSquare className="h-3 w-3" />,
    
    // Company event tags
    'Teambuilding': <Handshake className="h-3 w-3" />,
    'Unternehmenskultur': <Building className="h-3 w-3" />,
    'Motivation': <Flame className="h-3 w-3" />,
    
    // Gala tags
    'Premium': <Star className="h-3 w-3" />,
    'Entertainment': <PartyPopper className="h-3 w-3" />,
    'VIP-Experience': <Crown className="h-3 w-3" />,
    
    // Outdoor event tags
    'Abenteuer': <Tent className="h-3 w-3" />,
    'Natur': <TreeDeciduous className="h-3 w-3" />,
    'Teamgeist': <Users className="h-3 w-3" />
  };
  
  // Handle flipping a card
  const handleFlipCard = (index: number) => {
    // If this card is already flipped, unflip it
    if (activeEventTypeIndex === index) {
      setActiveEventTypeIndex(null);
    } else {
      // Otherwise, flip this card and unflip any others
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
        {/* Grid layout for event types with card flip animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const isFlipped = activeEventTypeIndex === index;
            
            return (
              <div 
                key={index}
                className={cn(
                  "flip-card-container cursor-pointer h-[280px]",
                  isFlipped ? "is-flipped" : ""
                )}
                onClick={() => handleFlipCard(index)}
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
                        <div className="text-xs text-primary/70 flex items-center gap-1 ml-auto">
                          <RotateCw className="h-3.5 w-3.5" />
                          <span>Klicken zum Wenden</span>
                        </div>
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
                    className="flip-card-back absolute w-full h-full backface-hidden border border-primary/30 shadow-md bg-accent/40 rotate-y-180"
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
                    
                    <CardContent>
                      <div className="text-sm text-foreground/80 leading-relaxed max-h-[120px] overflow-y-auto pr-2">
                        {event.details}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {eventTags[index].map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="flex items-center gap-1.5 py-1.5 pl-1.5 pr-2.5 border-primary/30 bg-primary/5 text-primary"
                          >
                            {tagIcons[tag]}
                            <span className="font-medium">{tag}</span>
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0 text-xs text-primary/70 justify-end">
                      <div className="flex items-center gap-1">
                        <RotateCw className="h-3.5 w-3.5" />
                        <span>Zurück zur Übersicht</span>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventTypesCarousel;

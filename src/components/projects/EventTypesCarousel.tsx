
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
import { useMediaQuery } from '@/hooks/use-mobile';

interface EventTypesCarouselProps {
  activeEventTypeIndex: number | null;
  setActiveEventTypeIndex: (index: number | null) => void;
}

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
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState<number | null>(null);
  
  const tagIcons: Record<string, React.ReactNode> = {
    'Forschung': <Search className="h-3 w-3" />,
    'Networking': <Network className="h-3 w-3" />,
    'Präsentation': <PresentationIcon className="h-3 w-3" />,
    
    'Innovation': <Sparkles className="h-3 w-3" />,
    'Markeninszenierung': <Flag className="h-3 w-3" />,
    'Medien': <MonitorIcon className="h-3 w-3" />,
    
    'Weiterbildung': <GraduationCap className="h-3 w-3" />,
    'Kollaboration': <Users className="h-3 w-3" />,
    'Moderation': <MessageSquare className="h-3 w-3" />,
    
    'Teambuilding': <Handshake className="h-3 w-3" />,
    'Unternehmenskultur': <Building className="h-3 w-3" />,
    'Motivation': <Flame className="h-3 w-3" />,
    
    'Premium': <Star className="h-3 w-3" />,
    'Entertainment': <PartyPopper className="h-3 w-3" />,
    'VIP-Experience': <Crown className="h-3 w-3" />,
    
    'Abenteuer': <Tent className="h-3 w-3" />,
    'Natur': <TreeDeciduous className="h-3 w-3" />,
    'Teamgeist': <Users className="h-3 w-3" />
  };
  
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
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine Übersicht unserer Veranstaltungsformate"
      />
      
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const isFlipped = activeEventTypeIndex === index;
            const isHovered = hoveredCardIndex === index;
            const showHint = isHovered || showTapHint === index;
            
            return (
              <div 
                key={index}
                className={cn(
                  "flip-card-container cursor-pointer h-[280px]",
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
                  <Card 
                    className={cn(
                      "flip-card-front absolute w-full h-full backface-hidden border shadow-sm transition-all duration-300",
                      "hover:shadow-lg",
                      isFlipped ? "" : "hover:border-primary/20"
                    )}
                    style={{
                      backfaceVisibility: "hidden",
                      background: "linear-gradient(135deg, #4B96D6 0%, #6CAAE4 100%)",
                      backgroundImage: "radial-gradient(circle at 90% -10%, rgba(255, 255, 255, 0.2), transparent 40%)"
                    }}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                        
                        {showHint && (
                          <div className="text-xs text-white flex items-center gap-1 ml-auto">
                            <RotateCw className="h-3.5 w-3.5" />
                            <span>Klicken zum Wenden</span>
                          </div>
                        )}
                      </div>
                      
                      <CardTitle className="text-xl font-semibold text-white">
                        {event.title}
                      </CardTitle>
                      
                      <CardDescription className="text-white/90">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                  
                  <Card 
                    className={cn(
                      "flip-card-back absolute w-full h-full backface-hidden border border-primary/20 shadow-md rotate-y-180",
                      "bg-gradient-to-br from-[#F8FAFF] to-white"
                    )}
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      backgroundImage: "radial-gradient(circle at 10% 110%, rgba(211, 228, 253, 0.3), transparent 40%)"
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
                      
                      <div className="flex flex-wrap gap-2 mt-4 max-w-full">
                        {eventTags[index].map((tag, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="flex items-center gap-1.5 py-1 pl-1.5 pr-2 border-primary/30 bg-primary/5 text-primary text-xs"
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

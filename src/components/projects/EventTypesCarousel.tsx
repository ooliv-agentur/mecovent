
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
  RotateCw,
  ChevronLeft,
  ChevronRight
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
  const isMobile = useMediaQuery('(max-width: 640px)');
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const [showTapHint, setShowTapHint] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(isMobile ? 1 : 3);
  const [startIndex, setStartIndex] = useState(0);
  
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

  // Update visible cards count when screen size changes
  useEffect(() => {
    setVisibleCards(isMobile ? 1 : 3);
  }, [isMobile]);
  
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
  
  // Navigation functions for carousel
  const goNext = () => {
    if (startIndex + visibleCards < eventTypes.length) {
      setStartIndex(prevIndex => Math.min(prevIndex + 1, eventTypes.length - visibleCards));
    }
  };
  
  const goPrev = () => {
    if (startIndex > 0) {
      setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlipCard(index);
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
  
  // Calculate if we should show navigation buttons
  const canGoNext = startIndex + visibleCards < eventTypes.length;
  const canGoPrev = startIndex > 0;
  
  return (
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine Übersicht unserer Veranstaltungsformate"
      />
      
      <div className="mt-8 relative">
        {/* Navigation arrows */}
        <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-3 z-10 pointer-events-none">
          <button 
            onClick={goPrev}
            disabled={!canGoPrev}
            className={cn(
              "w-10 h-10 rounded-full shadow-md flex items-center justify-center",
              "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
              "pointer-events-auto",
              canGoPrev 
                ? "bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 text-primary" 
                : "bg-white/30 dark:bg-black/20 text-primary/30 cursor-not-allowed"
            )}
            aria-label="Previous events"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={goNext}
            disabled={!canGoNext}
            className={cn(
              "w-10 h-10 rounded-full shadow-md flex items-center justify-center",
              "transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
              "pointer-events-auto",
              canGoNext 
                ? "bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black/70 text-primary" 
                : "bg-white/30 dark:bg-black/20 text-primary/30 cursor-not-allowed"
            )}
            aria-label="Next events"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        {/* Card grid with horizontal scroll */}
        <div className="overflow-x-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
          >
            {eventTypes.map((event, index) => {
              const isFlipped = activeEventTypeIndex === index;
              const isHovered = hoveredCardIndex === index;
              const showHint = isHovered || showTapHint === index;
              
              return (
                <div 
                  key={index}
                  className={cn(
                    "px-3",
                    isMobile ? "w-full" : "w-1/3"
                  )}
                >
                  <div 
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
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isFlipped}
                    aria-label={`Event type: ${event.title}. ${isFlipped ? 'Press to hide details' : 'Press to show details'}`}
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
                          <div className="text-sm text-foreground/80 leading-relaxed max-h-[120px] overflow-y-auto pr-2 scrollbar-hide">
                            {event.details}
                          </div>
                          
                          {/* Improved tag layout that prevents overflow */}
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
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: Math.ceil(eventTypes.length / visibleCards) }).map((_, i) => {
            const isActive = i === Math.floor(startIndex / visibleCards);
            return (
              <button 
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                  isActive ? "bg-primary w-4" : "bg-primary/30"
                )}
                onClick={() => setStartIndex(i * visibleCards)}
                aria-label={`Go to page ${i + 1}`}
              />
            );
          })}
        </div>
        
        {/* Mobile scroll hint - only visible on mobile */}
        {isMobile && (
          <div className="flex justify-center mt-4">
            <div className="bg-white/70 dark:bg-black/40 text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 animate-pulse">
              <ChevronLeft className="h-3 w-3" />
              <span>Wischen für mehr</span>
              <ChevronRight className="h-3 w-3" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventTypesCarousel;

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { eventTypes } from './data';
import SectionTitle from './SectionTitle';
import { 
  ChevronDown, 
  ChevronUp, 
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
  TreeDeciduous 
} from 'lucide-react';
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
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  
  // Handle expanding/collapsing a card
  const handleToggleCard = (index: number) => {
    // If this card is already active, collapse it
    if (activeEventTypeIndex === index) {
      setActiveEventTypeIndex(null);
    } else {
      // Otherwise, expand this card and collapse any others
      setActiveEventTypeIndex(index);
    }
  };
  
  // Determine if a card is in the active row
  const getRowIndex = (index: number) => Math.floor(index / 3);
  const isInActiveRow = (index: number) => {
    if (activeEventTypeIndex === null) return false;
    return getRowIndex(index) === getRowIndex(activeEventTypeIndex);
  };
  
  return (
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine Übersicht unserer Veranstaltungsformate"
      />
      
      <div className="mt-8">
        {/* Grid layout for event types with fluid row expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => {
            const isActive = activeEventTypeIndex === index;
            const inActiveRow = isInActiveRow(index);
            
            return (
              <Collapsible 
                key={index}
                open={isActive}
                onOpenChange={() => handleToggleCard(index)}
                className={cn(
                  "rounded-lg border transition-all duration-500",
                  isActive 
                    ? "bg-accent/40 border-primary/50 shadow-lg transform scale-105 z-20" 
                    : inActiveRow
                      ? "bg-accent/20 border-primary/30 shadow-md transform scale-102 z-10 transition-all duration-500"
                      : "shadow-sm hover:shadow-md hover:border-primary/20 bg-card"
                )}
              >
                <Card className={cn(
                  "border-0 shadow-none bg-transparent h-full flex flex-col transition-all duration-500",
                  isActive 
                    ? "min-h-[280px]" 
                    : inActiveRow 
                      ? "min-h-[265px] transition-all duration-500" 
                      : "min-h-[240px]"
                )}>
                  <CollapsibleTrigger className="w-full text-left cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300",
                          isActive 
                            ? "bg-primary/40" 
                            : inActiveRow 
                              ? "bg-primary/30" 
                              : "bg-primary/10"
                        )}>
                          <Clock className={cn(
                            "h-5 w-5 transition-colors duration-300",
                            isActive 
                              ? "text-primary" 
                              : inActiveRow 
                                ? "text-primary/90" 
                                : "text-primary/80"
                          )} />
                        </div>
                      </div>
                      
                      <CardTitle className={cn(
                        "text-xl font-semibold transition-colors duration-300",
                        isActive 
                          ? "text-primary" 
                          : inActiveRow 
                            ? "text-primary/90" 
                            : "text-primary/80"
                      )}>
                        {event.title}
                      </CardTitle>
                      
                      <CardDescription className={cn(
                        "text-muted-foreground transition-colors duration-300",
                        isActive ? "font-medium" : ""
                      )}>
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="flex justify-end items-center text-sm text-primary mt-2">
                        {isActive ? (
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
                  
                  <CollapsibleContent className="px-6 pb-4 overflow-hidden transition-all duration-500">
                    <ScrollArea className="h-full max-h-44 pr-4">
                      <div className="pt-2 border-t border-border/40">
                        <div className="my-4 text-sm text-foreground/80 leading-relaxed">
                          {event.details}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-4 pb-2">
                          {eventTags[index].map((tag, i) => (
                            <Badge 
                              key={i} 
                              variant="outline" 
                              className="flex items-center gap-1.5 py-1.5 pl-1.5 pr-2.5 border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                            >
                              {tagIcons[tag]}
                              <span className="font-medium">{tag}</span>
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </CollapsibleContent>
                  
                  <CardFooter className="mt-auto pt-0 opacity-0">
                    {/* Spacer for consistent height */}
                  </CardFooter>
                </Card>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventTypesCarousel;

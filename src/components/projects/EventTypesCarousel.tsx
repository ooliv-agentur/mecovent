
import React from 'react';
import { cn } from '@/lib/utils';
import { eventTypes } from './data';
import SectionTitle from './SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Clock } from 'lucide-react';

interface EventTypesCarouselProps {
  activeEventTypeIndex: number;
  setActiveEventTypeIndex: (index: number) => void;
  openEventDialog: (title: string) => void;
}

const EventTypesCarousel = ({ 
  activeEventTypeIndex, 
  setActiveEventTypeIndex, 
  openEventDialog 
}: EventTypesCarouselProps) => {
  // Event categories for filtering
  const categories = [
    { id: "all", label: "Alle Eventtypen" },
    { id: "corporate", label: "Corporate Events" },
    { id: "educational", label: "Bildungsevents" },
  ];
  
  // Handle tab change
  const handleTabChange = (value: string) => {
    // If we implement filtering in the future, we can use this
    console.log("Selected tab:", value);
  };
  
  return (
    <div>
      <SectionTitle 
        title="Eventtypen, die wir gestalten" 
        subtitle="Eine Übersicht unserer Veranstaltungsformate"
      />
      
      <div className="mt-8">
        {/* Filter tabs */}
        <Tabs defaultValue="all" onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            {/* Grid layout for event types */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <div 
                  key={index}
                  className={cn(
                    "bg-card rounded-lg p-6 border shadow-md cursor-pointer",
                    "transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30",
                    "flex flex-col h-full"
                  )}
                  onClick={() => {
                    setActiveEventTypeIndex(index);
                    openEventDialog(event.title);
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      "bg-primary/10"
                    )}>
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-xs font-medium">Phase {index + 1}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="text-sm text-muted-foreground/80 mb-4">
                    {event.details.substring(0, 100)}...
                  </div>
                  
                  <div className="flex justify-end mt-auto pt-4">
                    <button 
                      className="flex items-center text-primary text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEventDialog(event.title);
                      }}
                    >
                      <span>Mehr erfahren</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Content for other tabs would go here */}
          <TabsContent value="corporate">
            <div className="text-center py-8 text-muted-foreground">
              Filter-Funktionalität kann in zukünftigen Versionen implementiert werden.
            </div>
          </TabsContent>
          
          <TabsContent value="educational">
            <div className="text-center py-8 text-muted-foreground">
              Filter-Funktionalität kann in zukünftigen Versionen implementiert werden.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventTypesCarousel;

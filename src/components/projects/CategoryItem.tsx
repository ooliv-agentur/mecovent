
import React from 'react';
import { Sparkles, MapPin, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  index: number;
  active: boolean;
  showMapIndicator?: boolean;
  showTimelineIndicator?: boolean;
}

const CategoryItem = ({ 
  title, 
  description, 
  icon, 
  onClick, 
  index, 
  active,
  showMapIndicator,
  showTimelineIndicator
}: CategoryItemProps) => (
  <div 
    className={cn(
      "relative h-64 bg-card rounded-lg overflow-hidden border transition-all duration-500",
      "group cursor-pointer transform",
      active ? "scale-100 opacity-100 shadow-md" : "scale-95 opacity-80",
      "hover:shadow-lg hover:opacity-100"
    )}
    onClick={onClick}
    style={{
      transitionDelay: `${index * 50}ms`
    }}
  >
    <div className="absolute inset-0 placeholder-box rounded-t-lg flex items-center justify-center text-muted-foreground bg-muted/50 opacity-80 transition-opacity group-hover:opacity-60">
      [Platzhalter für Branchenbild]
    </div>
    
    {/* Map Pin Indicator for Industry Items */}
    {showMapIndicator && (
      <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground p-2 rounded-full shadow-lg 
                      animate-fade-in-up transform hover:scale-105 transition-transform">
        <MapPin className="h-4 w-4" />
      </div>
    )}
    
    {/* Timeline Indicator for Event Types */}
    {showTimelineIndicator && (
      <div className="absolute top-4 left-4 bg-primary/80 text-primary-foreground p-2 rounded-full shadow-lg
                      animate-fade-in transform hover:scale-105 transition-transform">
        <Clock className="h-4 w-4" />
      </div>
    )}
    
    <div 
      className={cn(
        "absolute inset-0 p-6 flex flex-col justify-end",
        "bg-gradient-to-t from-background/90 to-transparent",
        "transform transition-transform duration-500",
        active ? "translate-y-0" : "translate-y-4"
      )}
    >
      <Sparkles className={cn(
        "h-6 w-6 text-primary/80 mb-2 opacity-0 transition-opacity duration-500",
        active ? "opacity-100" : "opacity-0" 
      )}/>
      <h3 className="font-medium text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className={cn(
        "text-muted-foreground text-sm transform transition-all duration-500",
        active ? "opacity-100" : "opacity-80"
      )}>
        {description}
      </p>
    </div>
  </div>
);

export default CategoryItem;

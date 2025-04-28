
import React from 'react';
import { RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EventTypeCardProps {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  tags: string[];
  isFlipped: boolean;
  isHovered: boolean;
  showHint: boolean;
  handleFlipCard: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onTouchStart: () => void;
  onTouchEnd: () => void;
  onTouchMove: () => void;
}

const EventTypeCard: React.FC<EventTypeCardProps> = ({
  title,
  description,
  details,
  icon,
  tags,
  isFlipped,
  isHovered,
  showHint,
  handleFlipCard,
  onMouseEnter,
  onMouseLeave,
  onTouchStart,
  onTouchEnd,
  onTouchMove,
}) => {
  return (
    <div 
      className={cn(
        "flip-card-container cursor-pointer h-[350px] transition-all duration-500 relative",
        isFlipped ? "is-flipped" : "",
      )}
      style={{ 
        perspective: "1000px",
      }}
      onClick={handleFlipCard}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {showHint && !isFlipped && (
        <div 
          className="absolute top-4 right-4 z-10 text-xs text-white/80 flex items-center gap-1 bg-black/20 rounded-md px-2 py-1 animate-fade-in"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <RotateCw className="h-3.5 w-3.5 animate-spin-slow" />
          <span>Klicken für Details</span>
        </div>
      )}
      
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
            "flip-card-front absolute w-full h-full backface-hidden border-0",
            isFlipped ? "" : "hover:shadow-xl",
            "transition-shadow duration-300 ease-in-out overflow-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #D3E4FD 0%, #EEF6FF 100%)",
            backgroundImage: "radial-gradient(circle at 90% -10%, rgba(211, 228, 253, 0.4), transparent 40%)"
          }}
        >
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div 
                className={cn(
                  "w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center mb-6 transition-colors duration-300 ease-in-out",
                  isHovered ? "bg-white/40" : ""
                )}
              >
                {React.cloneElement(icon as React.ReactElement, { 
                  className: "h-9 w-9 text-primary/90" 
                })}
              </div>
              
              <CardTitle className="text-2xl font-bold text-primary/90 mb-3">
                {title}
              </CardTitle>
              
              <CardDescription className="text-primary/80 text-lg">
                {description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
        
        <Card 
          className="flip-card-back absolute w-full h-full backface-hidden border shadow-md bg-white/95 rotate-y-180 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFF 100%)",
          }}
        >
          <CardHeader className="pb-2 border-b border-primary/10">
            <CardTitle className="text-xl font-semibold text-primary/90">
              {title}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col pt-4">
            <div className="text-sm text-foreground/80 leading-relaxed mb-4">
              {details}
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center gap-1 text-xs text-foreground/60 mb-2">
                <span>Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="py-1 px-2 border-primary/20 text-xs font-medium bg-primary/5 text-primary/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
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
};

export default EventTypeCard;


import { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from '@/hooks/use-mobile';

interface UseEventCardInteractionResult {
  activeEventTypeIndex: number | null;
  hoveredCardIndex: number | null;
  showTapHint: number | null;
  animatedCards: number[];
  sectionRef: React.RefObject<HTMLDivElement>;
  handleFlipCard: (index: number) => void;
  handleTouchStart: (index: number) => void;
  handleTouchEnd: () => void;
  setHoveredCardIndex: (index: number | null) => void;
}

export const useEventCardInteraction = (itemCount: number): UseEventCardInteractionResult => {
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setAnimatedCards(Array.from({ length: itemCount }, (_, i) => i));
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
  }, [itemCount]);

  return {
    activeEventTypeIndex,
    hoveredCardIndex,
    showTapHint,
    animatedCards,
    sectionRef,
    handleFlipCard,
    handleTouchStart,
    handleTouchEnd,
    setHoveredCardIndex
  };
};

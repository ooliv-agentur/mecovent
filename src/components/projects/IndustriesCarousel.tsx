
import React, { useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel';
import CategoryItem from './CategoryItem';
import SectionTitle from './SectionTitle';
import ScrollIndicator from './ScrollIndicator';
import { industryItems } from './data';
import { useInView } from 'react-intersection-observer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface IndustriesCarouselProps {
  activeIndustryIndex: number;
  setActiveIndustryIndex: (index: number) => void;
  openIndustryDialog: (title: string) => void;
}

const IndustriesCarousel = ({ activeIndustryIndex, setActiveIndustryIndex, openIndustryDialog }: IndustriesCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Create multiple intersection observers for different industry cards
  const industryRefs = industryItems.map((_, i) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
      triggerOnce: false
    });
    return { ref, inView };
  });

  // Watch for industries coming into view
  useEffect(() => {
    const inViewIndex = industryRefs.findIndex(item => item.inView);
    if (inViewIndex !== -1) {
      setActiveIndustryIndex(inViewIndex);
      if (api) {
        api.scrollTo(inViewIndex);
      }
    }
  }, [industryRefs.map(ref => ref.inView), api, setActiveIndustryIndex]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveIndustryIndex(api.selectedScrollSnap());
    });
  }, [api, setActiveIndustryIndex]);

  return (
    <div>
      <SectionTitle 
        title="Branchen, in denen wir tätig sind" 
        subtitle="Ein dynamisches Erlebnis durch unsere Fachgebiete"
      />
      
      <div className="relative overflow-hidden bg-secondary/20 rounded-lg shadow-inner">
        <ScrollArea className="h-[450px]" ref={scrollRef}>
          <div className="p-6 space-y-16">
            {industryItems.map((industry, index) => (
              <div 
                key={index}
                ref={industryRefs[index].ref}
                className={`
                  transition-all duration-700 transform
                  ${industryRefs[index].inView 
                    ? 'opacity-100 translate-y-0' 
                    : index < activeIndustryIndex 
                      ? 'opacity-30 -translate-y-4' 
                      : 'opacity-30 translate-y-4'
                  }
                `}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div 
                  className={`
                    relative rounded-lg overflow-hidden cursor-pointer
                    ${industryRefs[index].inView ? 'shadow-lg' : 'shadow'}
                    transition-all duration-500
                  `} 
                  onClick={() => openIndustryDialog(industry.title)}
                >
                  <div 
                    className={`
                      absolute inset-0 bg-gradient-to-r opacity-20 transition-opacity duration-500
                      ${industryRefs[index].inView ? 'opacity-40' : 'opacity-10'}
                    `}
                    style={{
                      background: getIndustryGradient(index)
                    }}
                  />
                  
                  <CategoryItem 
                    title={industry.title}
                    description={industry.description}
                    onClick={() => openIndustryDialog(industry.title)}
                    index={index}
                    active={index === activeIndustryIndex}
                    showMapIndicator={industryRefs[index].inView}
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/80 animate-bounce">
          <span className="text-xs mb-1">Scroll für mehr</span>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
      
      <ScrollIndicator active={activeIndustryIndex} total={industryItems.length} />
    </div>
  );
};

// Function to generate different background gradients for each industry
const getIndustryGradient = (index: number): string => {
  const gradients = [
    'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
    'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
    'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
    'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
    'linear-gradient(90deg, hsla(29, 92%, 70%, 1) 0%, hsla(0, 87%, 73%, 1) 100%)',
    'linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)',
    'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',
    'linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)',
  ];
  
  return gradients[index % gradients.length];
};

export default IndustriesCarousel;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
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

interface IndustriesCarouselProps {
  activeIndustryIndex: number;
  setActiveIndustryIndex: (index: number) => void;
  openIndustryDialog: (title: string) => void;
}

const IndustriesCarousel = ({ activeIndustryIndex, setActiveIndustryIndex, openIndustryDialog }: IndustriesCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();

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
      
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => api?.scrollPrev()}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Zurück</span>
          </Button>
          
          <span className="text-sm font-medium">
            {activeIndustryIndex + 1} / {industryItems.length}
          </span>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => api?.scrollNext()}
            className="flex items-center gap-1"
          >
            <span>Weiter</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <CarouselContent className="-ml-2 md:-ml-4">
          {industryItems.map((industry, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
              <CategoryItem 
                title={industry.title}
                description={industry.description}
                onClick={() => openIndustryDialog(industry.title)}
                index={index}
                active={index === activeIndustryIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <ScrollIndicator active={activeIndustryIndex} total={industryItems.length} />
    </div>
  );
};

export default IndustriesCarousel;

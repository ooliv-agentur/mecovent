
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LightbulbIcon, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CategoryItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  index: number;
  active: boolean;
}

const CategoryItem = ({ title, description, icon, onClick, index, active }: CategoryItemProps) => (
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

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-8 animate-fade-in">
    <h3 className="text-xl font-medium mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

// Create a component for the horizontal scroll indicator
const ScrollIndicator = ({ active, total }: { active: number, total: number }) => {
  return (
    <div className="flex items-center justify-center gap-1 mt-4">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i} 
          className={cn(
            "h-1.5 rounded-full transition-all duration-300",
            i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
};

const ProjectsSection = () => {
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeEventTypeIndex, setActiveEventTypeIndex] = useState(0);
  const [openIndustryDialog, setOpenIndustryDialog] = useState<string | null>(null);
  const [openEventDialog, setOpenEventDialog] = useState<string | null>(null);
  const [api1, setApi1] = useState<CarouselApi>();
  const [api2, setApi2] = useState<CarouselApi>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const industryItems = [
    { 
      title: "Pharma & Medizintechnik", 
      description: "Wissenschaftliche Kongresse, Tagungen, Fortbildungen",
      details: "Wir organisieren hochkarätige wissenschaftliche Veranstaltungen mit präzisem Teilnehmermanagement und anspruchsvoller technischer Umsetzung für die Pharma- und Medizintechnikbranche."
    },
    { 
      title: "Automobil & Verkehrswesen", 
      description: "Produktpräsentationen, Messen, Networking-Events",
      details: "Von dynamischen Fahrzeugpräsentationen bis zu exklusiven Händlerevents – wir inszenieren automotive Highlights mit dem richtigen Gespür für Technik, Design und Emotion."
    },
    { 
      title: "Chemie & Industrie", 
      description: "Corporate Events, Jubiläen, Mitarbeiterevents",
      details: "Für produzierende Unternehmen und die Chemieindustrie konzipieren wir Veranstaltungsformate, die komplexe Themen verständlich kommunizieren und Menschen begeistern."
    },
    { 
      title: "Finanz- & Versicherungswesen", 
      description: "Leadership Summits, exklusive Kundenveranstaltungen",
      details: "Diskretion, Professionalität und stilvolles Ambiente – unsere Events für die Finanz- und Versicherungsbranche überzeugen durch passende Locations und hochwertige Umsetzung."
    },
    { 
      title: "Technologie & IT", 
      description: "Digitale Konferenzen, hybride Events, Hackathons",
      details: "Innovation erlebbar machen: Mit hybriden Eventformaten, technischer Exzellenz und kreativen Setups gestalten wir zukunftsweisende Tech-Events."
    },
    { 
      title: "Bildung & Wissenschaft", 
      description: "Fachkongresse, Preisverleihungen, Workshops",
      details: "Wissen vermitteln, Expertise feiern und akademische Erfolge würdigen – unsere Veranstaltungen im Bildungs- und Wissenschaftssektor vereinen Wissensvermittlung mit inspirierendem Rahmenprogramm."
    }
  ];

  const eventTypes = [
    { 
      title: "Wissenschaftliche Konferenzen", 
      description: "Experten vernetzen & Wissen teilen",
      details: "Von der Keynote bis zum Posterslam: Wir organisieren Fachkonferenzen mit präziser Teilnehmerbetreuung, simultaner Übersetzung und intelligentem Raum- und Zeitmanagement."
    },
    { 
      title: "Produktlaunches & Präsentationen", 
      description: "Begeisterung für Innovationen schaffen",
      details: "Der große Auftritt für Ihr Produkt: Mit spektakulärer Inszenierung, technischer Perfektion und emotionalem Storytelling machen wir Ihren Launch unvergesslich."
    },
    { 
      title: "Interaktive Workshops", 
      description: "Lernen durch Erleben",
      details: "Partizipative Formate mit kreativem Setup, durchdachter Moderation und inspirierenden Methoden, die Wissen aktivieren und Teilnehmer zu aktiven Gestaltern machen."
    },
    { 
      title: "Firmenevents & Mitarbeiterveranstaltungen", 
      description: "Teamgeist & Unternehmenswerte stärken",
      details: "Corporate Culture erleben: Von der Jahreskonferenz bis zum Sommerfest – wir schaffen Veranstaltungen, die Ihre Unternehmenskultur prägen und Mitarbeiter begeistern."
    },
    { 
      title: "Galas & exklusive Abendveranstaltungen", 
      description: "Stilvolle Inszenierungen mit besonderem Flair",
      details: "Exquisite Locations, durchdachte Dramaturgie und erstklassiges Catering – unsere Abendveranstaltungen verbinden festlichen Glanz mit unvergesslichen Momenten."
    },
    { 
      title: "Outdoor- & Teamevents", 
      description: "Erlebnisse, die zusammenschweißen",
      details: "Gemeinsam wachsen: Mit herausfordernden Aktivitäten und inspirierenden Naturerlebnissen schaffen wir Teamevents, die verbinden und motivieren."
    }
  ];

  const IndustryDialog = ({ industry, isOpen, onClose }: { industry: typeof industryItems[0], isOpen: boolean, onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{industry.title}</DialogTitle>
          <DialogDescription className="text-base pt-2">{industry.description}</DialogDescription>
        </DialogHeader>
        <div className="placeholder-box h-48 rounded-md mb-4">
          [Platzhalter für Branchenbild]
        </div>
        <p className="text-sm text-muted-foreground mb-4">{industry.details}</p>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">Typische Eventformate:</h4>
          <div className="grid grid-cols-2 gap-2">
            {eventTypes.slice(0, 4).map((event, i) => (
              <div key={i} className="text-xs p-2 bg-secondary/50 rounded-md">{event.title}</div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const EventDialog = ({ event, isOpen, onClose }: { event: typeof eventTypes[0], isOpen: boolean, onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">{event.title}</DialogTitle>
          <DialogDescription className="text-base pt-2">{event.description}</DialogDescription>
        </DialogHeader>
        <div className="placeholder-box h-48 rounded-md mb-4">
          [Platzhalter für Eventtyp-Bild]
        </div>
        <p className="text-sm text-muted-foreground mb-4">{event.details}</p>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-medium">Passt perfekt für Branchen wie:</h4>
          <div className="grid grid-cols-2 gap-2">
            {industryItems.slice(0, 4).map((industry, i) => (
              <div key={i} className="text-xs p-2 bg-secondary/50 rounded-md">{industry.title}</div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="projects" className="bg-secondary/30 overflow-hidden" ref={sectionRef}>
      <div className="container-section overflow-visible">
        <div className={cn("text-center max-w-3xl mx-auto mb-12", 
                           isVisible ? "animate-fade-in" : "opacity-0")}>
          <div className="section-tag">Branchen & Eventtypen</div>
          <h2 className="header-section">So vielfältig sind unsere Events</h2>
          <p className="subheader-section mb-6">
            Wir bringen Expertise aus zahlreichen Branchen mit und wissen genau, worauf es bei jeder Zielgruppe ankommt.
          </p>
        </div>
        
        {/* Industries Section - Dynamic Scroll Map */}
        <div className={cn("mb-20 transition-all duration-700 transform", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}>
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
            setApi={setApi1}
            onSelect={() => {
              if (api1) {
                setActiveIndustryIndex(api1.selectedScrollSnap());
              }
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => api1?.scrollPrev()}
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
                onClick={() => api1?.scrollNext()}
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
                    onClick={() => setOpenIndustryDialog(industry.title)}
                    index={index}
                    active={index === activeIndustryIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <ScrollIndicator active={activeIndustryIndex} total={industryItems.length} />
          
          {/* Industry Dialogs */}
          {industryItems.map((industry, index) => (
            <IndustryDialog 
              key={index}
              industry={industry}
              isOpen={openIndustryDialog === industry.title}
              onClose={() => setOpenIndustryDialog(null)}
            />
          ))}
        </div>
        
        {/* Event Types Section - Interactive Timeline */}
        <div className={cn("mt-16 transition-all duration-700 transform", 
                          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0")}
             style={{ transitionDelay: "300ms" }}>
          <SectionTitle 
            title="Eventarten, die wir realisieren" 
            subtitle="Interaktive Timeline unserer Event-Expertise"
          />
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
            setApi={setApi2}
            onSelect={() => {
              if (api2) {
                setActiveEventTypeIndex(api2.selectedScrollSnap());
              }
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => api2?.scrollPrev()}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Zurück</span>
              </Button>
              
              <span className="text-sm font-medium">
                {activeEventTypeIndex + 1} / {eventTypes.length}
              </span>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => api2?.scrollNext()}
                className="flex items-center gap-1"
              >
                <span>Weiter</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <CarouselContent className="-ml-2 md:-ml-4">
              {eventTypes.map((event, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-4/5 lg:basis-3/4">
                  <CategoryItem 
                    title={event.title}
                    description={event.description}
                    onClick={() => setOpenEventDialog(event.title)}
                    index={index}
                    active={index === activeEventTypeIndex}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          <ScrollIndicator active={activeEventTypeIndex} total={eventTypes.length} />
          
          {/* Event Type Dialogs */}
          {eventTypes.map((event, index) => (
            <EventDialog 
              key={index}
              event={event}
              isOpen={openEventDialog === event.title}
              onClose={() => setOpenEventDialog(null)}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <p className="flex items-center justify-center gap-2 text-primary">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

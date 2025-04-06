
import React from 'react';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  BarChart4,
  PartyPopper,
  ArrowRightCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl, index }: ServiceCardProps) => {
  // Alternate the card designs based on index
  const isEven = index % 2 === 0;
  
  return (
    <Card 
      className={cn(
        "h-full overflow-hidden group transition-all duration-500 ease-in-out",
        "hover:shadow-xl hover:scale-[1.02] hover:z-10",
        "border border-border/40 dark:border-border/20",
        isEven ? "bg-card" : "bg-primary/5"
      )}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="font-medium text-xl text-white mb-1">{title}</h3>
          <div className="h-0.5 w-12 bg-[#009fe3] group-hover:w-24 transition-all duration-500" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 rounded-full p-2 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground">
          {description}
        </p>
        <div className="mt-4 flex items-center text-[#009fe3] font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
          <span>Mehr erfahren</span>
          <ArrowRightCircle size={16} className="ml-1" />
        </div>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      title: "Strategische Eventberatung", 
      description: "Analyse Ihrer Ziele & maßgeschneiderte Konzepte", 
      icon: BarChart4,
      imageUrl: "/lovable-uploads/a5711a2e-3fe8-4825-a540-2c8a57a36cfd.png" 
    },
    { 
      title: "Eventmanagement", 
      description: "Konzeption, Planung & Durchführung", 
      icon: LightbulbIcon,
      imageUrl: "/lovable-uploads/f385109c-4e96-4e47-b083-40a9b15bddac.png" 
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Einladung, Buchung & Betreuung", 
      icon: Users,
      imageUrl: "/lovable-uploads/5cefe1bc-f4db-41da-8076-6a902d7c71b5.png" 
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühne, Licht, Ton & Video für den perfekten Auftritt", 
      icon: Music,
      imageUrl: "/lovable-uploads/20cca07c-10d1-4d83-a2b9-98f9aac3b283.png" 
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Motivation & Erlebnis für Ihr Team", 
      icon: Smartphone,
      imageUrl: "/lovable-uploads/3b884e4a-3302-4e39-928b-44f68f55994d.png" 
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für mehr Reichweite", 
      icon: PartyPopper,
      imageUrl: "/lovable-uploads/5869c2e4-85a2-474b-87bc-d34a4bfa1333.png" 
    }
  ];

  return (
    <section id="services" className="bg-background overflow-hidden">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
            Unsere Leistungen – Ihr Event, perfekt geplant.
          </h2>
          <p className="subheader-section">
            Von strategischer Beratung bis zur perfekten Umsetzung – wir machen Ihr Event einzigartig.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ob Fachkonferenz, Kick-off oder hybride Messe – wir begleiten Sie von der ersten Idee bis zur Umsetzung mit Strategie, Hingabe und Erfahrung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
      
      {/* New USP Section with unique design */}
      <div className="relative mt-24 mb-12 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#009fe3]/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#009fe3]/10 blur-3xl"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-8 md:p-12 shadow-xl transform hover:scale-[1.01] transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-[#009fe3]/10 p-6 rounded-full">
                <LightbulbIcon className="h-12 w-12 text-[#009fe3]" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-[#009fe3] bg-clip-text text-transparent">Ihr Erfolg ist unsere Mission</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Von der ersten Idee bis zur erfolgreichen Umsetzung – wir übernehmen Planung, Umsetzung & Teilnehmerbetreuung mit höchster Präzision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

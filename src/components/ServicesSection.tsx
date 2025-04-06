import React from 'react';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  BarChart4,
  PartyPopper
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl }: ServiceCardProps) => (
  <Card className="h-full hover:shadow-md transition-shadow group overflow-hidden">
    <div className="relative">
      <AspectRatio ratio={16/9}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </AspectRatio>
      <div className="absolute top-0 right-0 m-4 p-2 bg-white/90 dark:bg-black/70 rounded-full">
        <Icon className="w-5 h-5 text-primary" />
      </div>
    </div>
    <CardContent className="p-6">
      <h3 className="font-medium text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </CardContent>
  </Card>
);

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
      imageUrl: "/lovable-uploads/team-events.jpg" 
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für mehr Reichweite", 
      icon: PartyPopper,
      imageUrl: "/lovable-uploads/event-marketing.jpg" 
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="flex items-center justify-center gap-2 text-primary max-w-2xl mx-auto border-t pt-8 border-muted/30">
            <LightbulbIcon className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">Von der ersten Idee bis zur erfolgreichen Umsetzung – wir übernehmen Planung, Umsetzung & Teilnehmerbetreuung mit höchster Präzision.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from 'react';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  Cake,
  BarChart4,
  PartyPopper
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
  <Card className="h-full hover:shadow-md transition-shadow group">
    <CardContent className="p-6">
      <div className="w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-primary/80" />
      </div>
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
      icon: BarChart4 
    },
    { 
      title: "Eventmanagement", 
      description: "Konzeption, Planung & Durchführung", 
      icon: LightbulbIcon 
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Einladung, Buchung & Betreuung", 
      icon: Users 
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühne, Licht, Ton & Video für den perfekten Auftritt", 
      icon: Music 
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Motivation & Erlebnis für Ihr Team", 
      icon: Smartphone 
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für mehr Reichweite", 
      icon: PartyPopper 
    },
    { 
      title: "Exklusive Private Events", 
      description: "Hochzeiten, Jubiläen, Gala-Dinner", 
      icon: Cake 
    }
  ];

  return (
    <section id="services" className="bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="header-section">Unsere Leistungen – Mehr als nur Eventplanung</h2>
          <p className="subheader-section">
            Wir schaffen nicht nur Events – wir gestalten Erlebnisse, die in Erinnerung bleiben. Dank unserer langjährigen Erfahrung und einem starken Netzwerk sind wir Ihr zuverlässiger Partner für Veranstaltungen mit Wirkung.
          </p>
          
          <p className="font-medium text-primary mt-4 mb-6">
            Von der ersten Idee bis zum finalen Eventerlebnis – wir übernehmen Planung, Umsetzung & Teilnehmerbetreuung mit höchster Präzision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="flex items-center justify-center gap-2 text-primary max-w-2xl mx-auto border-t pt-8 border-muted/30">
            <LightbulbIcon className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">Jede Veranstaltung ist eine neue Herausforderung – wir übernehmen die Verantwortung, damit Ihr Event reibungslos abläuft.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

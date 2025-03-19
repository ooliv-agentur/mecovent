
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  Cake,
  BarChart4,
  PartyPopper
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
  <div className="border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card">
    <div className="w-12 h-12 mb-4 flex items-center justify-center">
      <Icon className="w-7 h-7 text-primary/80" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      {description}
    </p>
  </div>
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

  const [view, setView] = useState<"grid" | "slider">("grid");

  return (
    <section id="services">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="header-section">Unsere Leistungen – Mehr als nur Eventplanung</h2>
          <p className="subheader-section">
            Wir realisieren nicht einfach Events – wir erschaffen Erlebnisse. Dank unserer langjährigen Erfahrung und einem starken Netzwerk sind wir Ihr zuverlässiger Partner für professionelle Veranstaltungsorganisation.
          </p>
          
          <p className="font-medium text-primary mt-4 mb-6">
            Von strategischer Planung bis zur perfekten Umsetzung – wir bieten alles aus einer Hand.
          </p>
          
          <div className="flex justify-center mt-6 mb-8">
            <Tabs defaultValue="grid" onValueChange={(value) => setView(value as "grid" | "slider")}>
              <TabsList>
                <TabsTrigger value="grid">Grid-Ansicht</TabsTrigger>
                <TabsTrigger value="slider">Slider-Ansicht</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        <div className={`${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2"} animate-fade-in-up`}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-primary">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Jede Veranstaltung ist eine neue Herausforderung – wir übernehmen die Verantwortung, damit Ihr Event reibungslos abläuft.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Code, 
  Users, 
  Music, 
  Smartphone,
  Cake
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => (
  <div className="border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card">
    <div className="w-12 h-12 mb-4 flex items-center justify-center">
      <Icon className="w-6 h-6" />
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
      title: "Eventmanagement", 
      description: "Planung & Durchführung maßgeschneiderter Veranstaltungen", 
      icon: Code 
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Einladung, Buchung, Betreuung Ihrer Gäste", 
      icon: Users 
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühnenbau, Licht, Ton & Videotechnik", 
      icon: Music 
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Unvergessliche Erlebnisse für Ihr Team", 
      icon: Smartphone 
    },
    { 
      title: "Private Events", 
      description: "Hochzeiten, Jubiläen & exklusive Feiern", 
      icon: Cake 
    }
  ];

  const [view, setView] = useState<"grid" | "slider">("grid");

  return (
    <section id="services">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="header-section">Unsere Leistungen</h2>
          <p className="subheader-section">
            Unsere Kernkompetenzen im Überblick - maßgeschneiderte Lösungen für Ihren Erfolg
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
      </div>
    </section>
  );
};

export default ServicesSection;

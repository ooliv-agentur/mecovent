
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Code, 
  PenTool, 
  BarChart, 
  Smartphone 
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceCard = ({ title, icon: Icon }: ServiceCardProps) => (
  <div className="border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card">
    <div className="w-12 h-12 mb-4 flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      [Platzhalter für kurze Beschreibung der Leistung]
    </p>
  </div>
);

const ServicesSection = () => {
  const services = [
    { title: "Leistung 1", icon: Code },
    { title: "Leistung 2", icon: PenTool },
    { title: "Leistung 3", icon: BarChart },
    { title: "Leistung 4", icon: Smartphone }
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
        
        <div className={`${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" : "grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2"} animate-fade-in-up`}>
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


import React from 'react';

interface ServiceCardProps {
  title: string;
  index: number;
}

const ServiceCard = ({ title, index }: ServiceCardProps) => (
  <div className="border rounded-lg p-6 hover:shadow-sm transition-shadow bg-card">
    <div className="w-12 h-12 placeholder-box rounded-md mb-4">
      [Icon]
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      [Platzhalter für kurze Beschreibung der Leistung]
    </p>
  </div>
);

const ServicesSection = () => {
  const services = [
    { title: "Leistung 1" },
    { title: "Leistung 2" },
    { title: "Leistung 3" },
    { title: "Leistung 4" }
  ];

  return (
    <section id="services">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="header-section">Unsere Leistungen</h2>
          <p className="subheader-section">
            [Platzhalter für kurze Einleitung zu den Leistungen]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

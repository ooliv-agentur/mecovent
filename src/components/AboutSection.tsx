
import React from 'react';
import { Heart, Award, Leaf } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ValueCard = ({ title, description, icon: Icon }: ValueCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 flex items-center justify-center mb-6">
      <Icon className="w-16 h-16" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      {description}
    </p>
  </div>
);

const AboutSection = () => {
  const values = [
    { 
      title: "Diskretion", 
      description: "Vertrauen ist unsere oberste Priorität.", 
      icon: Heart 
    },
    { 
      title: "Kreativität", 
      description: "Wir entwickeln maßgeschneiderte Eventkonzepte.", 
      icon: Award 
    },
    { 
      title: "Nachhaltigkeit", 
      description: "Ressourcenbewusstes und effektives Eventmanagement.", 
      icon: Leaf 
    }
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Über Uns</h2>
          <p className="subheader-section">
            Unsere Mission ist es, sich an individuelle Herausforderungen anzupassen und bedeutsame Veranstaltungen zu realisieren. Von der ersten Idee bis zur perfekten Umsetzung – wir bringen Ihre Vision zum Leben.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title} 
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

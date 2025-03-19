
import React from 'react';
import { Heart, Star, Award } from 'lucide-react';

interface ValueCardProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ValueCard = ({ title, icon: Icon }: ValueCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 flex items-center justify-center mb-6">
      <Icon className="w-16 h-16" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      [Platzhalter für kurze Beschreibung des Wertes]
    </p>
  </div>
);

const AboutSection = () => {
  const values = [
    { title: "Wert 1", icon: Heart },
    { title: "Wert 2", icon: Star },
    { title: "Wert 3", icon: Award }
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Über Uns</h2>
          <p className="subheader-section">
            [Platzhalter für Mission (2-3 Zeilen)]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title} 
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

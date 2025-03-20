
import React from 'react';
import { Heart, Lightbulb, Leaf } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ValueCard = ({ title, description, icon: Icon }: ValueCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <Icon className="w-10 h-10 text-primary/80" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground">
      {description}
    </p>
  </div>
);

const WhyMecovent = () => {
  const values = [
    { 
      title: "INDIVIDUELL", 
      description: "Jedes Event ist einzigartig. Wir passen uns Ihren Herausforderungen an und entwickeln maßgeschneiderte Lösungen – ob Corporate Event, wissenschaftliche Konferenz oder Team-Building-Erlebnis.", 
      icon: Heart
    },
    { 
      title: "KREATIV", 
      description: "Mit Ihren Impulsen und unserer Kreativität garantieren wir den Erfolg Ihrer Veranstaltung. Ihre Vision und Ziele stehen im Mittelpunkt – wir setzen innovative Konzepte mit Leidenschaft um.", 
      icon: Lightbulb
    },
    { 
      title: "NACHHALTIG", 
      description: "Durch strategische Planung und ein starkes Netzwerk gestalten wir ressourcenschonende Events, die langfristige Wirkung zeigen – ökologisch, wirtschaftlich und sozial nachhaltig.", 
      icon: Leaf
    }
  ];

  return (
    <section id="why-mecovent">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Unsere Mission</div>
          <h2 className="header-section">Warum MECOVENT? – Unsere Mission ist Ihr Erfolg.</h2>
          <p className="subheader-section">
            Wir helfen Unternehmen, ihre Visionen in einzigartige Veranstaltungen zu verwandeln. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
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

export default WhyMecovent;

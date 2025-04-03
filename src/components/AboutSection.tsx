
import React from 'react';
import { Heart, Award, Leaf, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const ValueCard = ({ icon: Icon, title, description, delay = 0 }: ValueCardProps) => {
  return (
    <div 
      className="flex flex-col items-center text-center animate-fade-in-up group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-20 h-20 flex items-center justify-center mb-6 text-neutral-500 group-hover:text-[#00B5E2] transition-all duration-300 group-hover:scale-110">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="font-bold text-xl mb-4 text-neutral-800">{title}</h3>
      <p className="text-neutral-600">
        {description}
      </p>
    </div>
  );
};

interface StrengthCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const StrengthCard = ({ icon: Icon, title, description }: StrengthCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="group">
        <Icon className="h-10 w-10 text-neutral-500 mb-4 group-hover:text-[#00B5E2] transition-colors duration-300" />
      </div>
      <h4 className="font-medium text-lg mb-2 text-neutral-800">{title}</h4>
      <p className="text-sm text-neutral-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const values = [
    { 
      icon: Heart, 
      title: "INDIVIDUELL", 
      description: "Maßgeschneiderte Lösungen für Ihr Event - angepasst an Ihre Herausforderungen und Ziele.",
      delay: 100
    },
    { 
      icon: Lightbulb, 
      title: "KREATIV", 
      description: "Innovative Konzepte, die inspirieren - Ihre Vision und unsere Kreativität garantieren den Erfolg.",
      delay: 200
    },
    { 
      icon: Leaf, 
      title: "NACHHALTIG", 
      description: "Ressourcenbewusste Planung mit langfristiger Wirkung - ökologisch, wirtschaftlich und sozial.",
      delay: 300
    }
  ];

  const strengths = [
    {
      icon: Award,
      title: "Langjährige Erfahrung",
      description: "Expertennetzwerk für erfolgreiche Events."
    },
    {
      icon: Award,
      title: "Budgeteffiziente Planung",
      description: "Transparente Kosten, wirtschaftliche Umsetzung."
    },
    {
      icon: Award,
      title: "Hand in Hand",
      description: "Sie genießen, wir kümmern uns um alles."
    }
  ];

  return (
    <section 
      id="ueber-uns" 
      className="bg-neutral-50 pt-32 pb-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="uppercase tracking-wider text-xs font-medium text-neutral-500 mb-3">Über Uns</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 leading-tight">
            Warum MECOVENT? – Unsere Mission ist Ihr Erfolg.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Wir verwandeln Ihre Vision in unvergessliche Erlebnisse. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
          </p>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Jedes Event erzählt eine Geschichte. Unsere Aufgabe ist es, diese Geschichte sichtbar, spürbar und nachhaltig zu gestalten – mit Respekt vor Ihrer Marke und dem Ziel, Menschen zu verbinden.
          </p>
        </div>
        
        {/* Core values section */}
        <div className="mb-24">
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3",
            "gap-6 md:gap-12"
          )}>
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={value.delay}
              />
            ))}
          </div>
        </div>
        
        {/* Strengths section */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-bold text-center mb-10 text-neutral-800">Unsere Stärken</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <StrengthCard 
                key={index}
                icon={strength.icon}
                title={strength.title} 
                description={strength.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

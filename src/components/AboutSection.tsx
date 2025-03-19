
import React from 'react';
import { Heart, Award, Leaf, CheckCircle } from 'lucide-react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  explanation: string;
}

const ValueCard = ({ title, description, icon: Icon, explanation }: ValueCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-28 h-28 flex items-center justify-center mb-6">
      <Icon className="w-20 h-20 text-primary/80" />
    </div>
    <h3 className="font-medium text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground mb-4">
      {description}
    </p>
    <p className="text-sm text-foreground/90">
      {explanation}
    </p>
  </div>
);

const AboutSection = () => {
  const values = [
    { 
      title: "INDIVIDUELL", 
      description: "Jedes Event wird genau auf Ihre Bedürfnisse zugeschnitten", 
      icon: Heart,
      explanation: "Jede Veranstaltung ist einzigartig. Wir passen uns Ihren Herausforderungen an und entwickeln maßgeschneiderte Lösungen – egal ob Corporate Event, wissenschaftliche Konferenz oder Team-Building-Erlebnis."
    },
    { 
      title: "KREATIV", 
      description: "Innovative & inspirierende Konzepte für nachhaltige Erlebnisse", 
      icon: Award,
      explanation: "Wir kombinieren Ihre Impulse mit unserer kreativen Expertise, um innovative Eventformate zu schaffen, die begeistern. Ihre Ziele stehen bei uns immer im Fokus."
    },
    { 
      title: "NACHHALTIG", 
      description: "Effiziente, ressourcenschonende Eventlösungen", 
      icon: Leaf,
      explanation: "Durch strategische Planung, ressourcenschonende Konzepte und ein starkes Netzwerk gestalten wir Events, die langfristige Wirkung zeigen."
    }
  ];

  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Über Uns</div>
          <h2 className="header-section">Unsere Kompetenz für Ihre Events, unsere Kreativität für Ihren Erfolg!</h2>
          <p className="subheader-section">
            Events sind emotionale Begegnungen, die im Gedächtnis bleiben. Wir verwandeln Ihre Vision in ein unvergessliches Erlebnis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title} 
              description={value.description}
              icon={value.icon}
              explanation={value.explanation}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center text-xl font-medium mb-6">Unsere Werte</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background/80 p-6 rounded-lg border">
              <h4 className="font-medium text-lg mb-2 text-primary">Diskretion</h4>
              <p className="text-sm">Vertrauen ist unser höchstes Gut. Unsere Kundenbeziehungen basieren auf absoluter Vertraulichkeit.</p>
            </div>
            <div className="bg-background/80 p-6 rounded-lg border">
              <h4 className="font-medium text-lg mb-2 text-primary">Hingabe</h4>
              <p className="text-sm">Unsere Leidenschaft für Events treibt uns an, für Sie das perfekte Erlebnis zu gestalten.</p>
            </div>
            <div className="bg-background/80 p-6 rounded-lg border">
              <h4 className="font-medium text-lg mb-2 text-primary">Verlässlichkeit</h4>
              <p className="text-sm">Von der ersten Idee bis zur finalen Umsetzung – wir stehen Ihnen als Partner zur Seite.</p>
            </div>
          </div>
          
          <h3 className="text-center text-xl font-medium mb-4">Warum MECOVENT?</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Langjährige Erfahrung & ein starkes Partnernetzwerk</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Budgeteffiziente & transparente Planung</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span>Persönlicher Rundum-Service – Sie genießen das Event, wir kümmern uns um alles!</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

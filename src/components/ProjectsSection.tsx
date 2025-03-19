
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CategoryItemProps {
  title: string;
  description: string;
}

const CategoryItem = ({ title, description }: CategoryItemProps) => (
  <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow group">
    <div className="aspect-video placeholder-box rounded-t-lg flex items-center justify-center text-muted-foreground">
      [Platzhalter für Branchenbild]
    </div>
    <div className="p-5">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">
        {description}
      </p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const categories = ["Alle", "Branchen", "Eventarten"];
  const [activeCategory, setActiveCategory] = useState("Alle");
  
  const industryItems = [
    { 
      title: "Pharma & Medizintechnik", 
      description: "Wissenschaftliche Konferenzen, Produktlaunches und Fachveranstaltungen für die Pharma- und Medizintechnikbranche." 
    },
    { 
      title: "Automobil & Verkehrswesen", 
      description: "Events und Konferenzen für die Automobilbranche und das Verkehrswesen mit innovativen Präsentationen." 
    },
    { 
      title: "Chemie & Industrie", 
      description: "Fachtagungen, Kongresse und Mitarbeiterveranstaltungen für die Chemie- und Industriebranche." 
    },
    { 
      title: "Finanz- & Versicherungswesen", 
      description: "Diskrete und professionelle Events für Finanzdienstleister und Versicherungsunternehmen." 
    },
    { 
      title: "Technologie & IT", 
      description: "Technologiekonferenzen, Produkteinführungen und interaktive Workshops für die IT-Branche." 
    },
    { 
      title: "Bildung & Wissenschaft", 
      description: "Wissenschaftliche Symposien, Fachkonferenzen und Bildungsveranstaltungen." 
    }
  ];

  const eventTypes = [
    { 
      title: "Wissenschaftliche Konferenzen", 
      description: "Fachveranstaltungen für den Wissensaustausch mit Experten aus verschiedenen Disziplinen." 
    },
    { 
      title: "Produktlaunches & Präsentationen", 
      description: "Beeindruckende Events zur Markteinführung von Produkten und Dienstleistungen." 
    },
    { 
      title: "Interaktive Workshops", 
      description: "Kollaborative Formate für Wissenstransfer, Innovation und Teambuilding." 
    },
    { 
      title: "Firmenevents & Mitarbeiterveranstaltungen", 
      description: "Motivierende und verbindende Events für Teams und Unternehmen." 
    },
    { 
      title: "Galas & exklusive Abendveranstaltungen", 
      description: "Elegante Abendveranstaltungen in exklusiven Locations mit erstklassigem Service." 
    },
    { 
      title: "Outdoor- & Teamevents", 
      description: "Unvergessliche Erlebnisse unter freiem Himmel für Teambuilding und Incentives." 
    }
  ];

  const getFilteredItems = () => {
    if (activeCategory === "Branchen") return industryItems;
    if (activeCategory === "Eventarten") return eventTypes;
    return [...industryItems, ...eventTypes];
  };

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Branchen & Eventtypen</div>
          <h2 className="header-section">So vielfältig sind unsere Events</h2>
          <p className="subheader-section">
            Unsere Erfahrung erstreckt sich über zahlreiche Branchen und Eventformate. Jedes Projekt wird individuell konzipiert – immer mit höchster Diskretion und Professionalität.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {getFilteredItems().map((item, index) => (
            <CategoryItem 
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="text-center mt-10 text-muted-foreground animate-fade-in">
          <p className="flex items-center justify-center gap-2">
            <span className="inline-block w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center text-xs">💡</span>
            Diskretion ist unser oberstes Prinzip – auf Wunsch stellen wir Ihnen gerne weitere Informationen zur Verfügung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

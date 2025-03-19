
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LightbulbIcon } from 'lucide-react';

interface CategoryItemProps {
  title: string;
  description: string;
}

const CategoryItem = ({ title, description }: CategoryItemProps) => (
  <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow group">
    <div className="aspect-video placeholder-box rounded-t-lg flex items-center justify-center text-muted-foreground bg-muted/50">
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
      description: "Wissenschaftliche Kongresse, Tagungen, Fortbildungen" 
    },
    { 
      title: "Automobil & Verkehrswesen", 
      description: "Produktpräsentationen, Messen, Networking-Events" 
    },
    { 
      title: "Chemie & Industrie", 
      description: "Corporate Events, Jubiläen, Mitarbeiterevents" 
    },
    { 
      title: "Finanz- & Versicherungswesen", 
      description: "Leadership Summits, exklusive Kundenveranstaltungen" 
    },
    { 
      title: "Technologie & IT", 
      description: "Digitale Konferenzen, hybride Events, Hackathons" 
    },
    { 
      title: "Bildung & Wissenschaft", 
      description: "Fachkongresse, Preisverleihungen, Workshops" 
    }
  ];

  const eventTypes = [
    { 
      title: "Wissenschaftliche Konferenzen", 
      description: "Experten vernetzen & Wissen teilen" 
    },
    { 
      title: "Produktlaunches & Präsentationen", 
      description: "Begeisterung für Innovationen schaffen" 
    },
    { 
      title: "Interaktive Workshops", 
      description: "Lernen durch Erleben" 
    },
    { 
      title: "Firmenevents & Mitarbeiterveranstaltungen", 
      description: "Teamgeist & Unternehmenswerte stärken" 
    },
    { 
      title: "Galas & exklusive Abendveranstaltungen", 
      description: "Stilvolle Inszenierungen mit besonderem Flair" 
    },
    { 
      title: "Outdoor- & Teamevents", 
      description: "Erlebnisse, die zusammenschweißen" 
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
            Wir bringen Expertise aus zahlreichen Branchen mit und wissen genau, worauf es bei jeder Zielgruppe ankommt.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-md scale-105" 
                    : "hover:bg-primary/10"
                }`}
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
        
        <div className="text-center mt-10 animate-fade-in">
          <p className="flex items-center justify-center gap-2 text-primary">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Diskretion & Vertraulichkeit stehen für uns an erster Stelle.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

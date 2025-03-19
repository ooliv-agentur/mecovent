
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  category: string;
}

const ProjectCard = ({ title, category }: ProjectCardProps) => (
  <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow group">
    <div className="aspect-video placeholder-box rounded-t-lg flex items-center justify-center text-muted-foreground">
      [Platzhalter für Projektbild]
    </div>
    <div className="p-5">
      <div className="text-xs text-muted-foreground mb-1">{category}</div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">
        [Kurzbeschreibung des Projekts]
      </p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const categories = ["Alle", "Pharma & Medizintechnik", "Automobil & Verkehrswesen", "Chemie & Industrie", "Finanz- & Versicherungswesen"];
  const [activeCategory, setActiveCategory] = useState("Alle");
  
  const projects = [
    { title: "Projekt 1", category: "Pharma & Medizintechnik" },
    { title: "Projekt 2", category: "Automobil & Verkehrswesen" },
    { title: "Projekt 3", category: "Pharma & Medizintechnik" },
    { title: "Projekt 4", category: "Chemie & Industrie" },
    { title: "Projekt 5", category: "Finanz- & Versicherungswesen" },
    { title: "Projekt 6", category: "Automobil & Verkehrswesen" }
  ];

  const filteredProjects = activeCategory === "Alle" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Erfolgreiche Projekte</div>
          <h2 className="header-section">Unsere Referenzen</h2>
          <p className="subheader-section">
            Unsere Erfahrung spricht für sich. Wir haben bereits Events für zahlreiche Branchen erfolgreich umgesetzt.
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
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


import React from 'react';

const ProjectCard = () => (
  <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow group">
    <div className="aspect-video placeholder-box rounded-t-lg">
      [Platzhalter für Projektbild]
    </div>
    <div className="p-5">
      <h3 className="font-medium text-lg mb-2">Projekt Titel</h3>
      <p className="text-muted-foreground text-sm">
        [Kurzbeschreibung des Projekts]
      </p>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-secondary/30">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Erfolgreiche Projekte</div>
          <h2 className="header-section">Unsere Referenzen</h2>
          <p className="subheader-section">
            [Platzhalter für kurze Einleitung zu den Referenzen]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

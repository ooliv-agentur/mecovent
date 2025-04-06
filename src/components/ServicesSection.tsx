
import React from 'react';
import { LightbulbIcon, CheckCircle2 } from 'lucide-react';
import ServiceCarousel from './services/ServiceCarousel';

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#F6F6F7] overflow-hidden">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="section-tag">Was wir bieten</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift break-words">
            Unsere Leistungen – Ihr Event, perfekt geplant.
          </h2>
          <p className="subheader-section">
            Von strategischer Beratung bis zur perfekten Umsetzung – wir machen Ihr Event einzigartig.
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ob Fachkonferenz, Kick-off oder hybride Messe – wir begleiten Sie von der ersten Idee bis zur Umsetzung mit Strategie, Hingabe und Erfahrung.
          </p>
        </div>
        
        {/* Replace grid with new carousel component */}
        <div className="animate-fade-in-up">
          <ServiceCarousel />
        </div>
      </div>
      
      <div className="relative py-24 mt-12 mb-0 bg-gradient-to-b from-[#F6F6F7] to-background overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="relative h-full w-full">
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#009fe3]/20 to-[#009fe3]/5 blur-xl animate-pulse"></div>
                  <div className="relative bg-white dark:bg-black/40 p-6 md:p-8 rounded-2xl shadow-lg border border-[#009fe3]/10">
                    <LightbulbIcon className="h-14 w-14 text-[#009fe3] mb-4" />
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-[#009fe3] bg-clip-text text-transparent">
                      Ihr Erfolg ist unsere Mission
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-7">
                <div className="bg-white dark:bg-black/40 rounded-2xl shadow-lg p-8 relative border border-[#009fe3]/10">
                  <p className="text-lg leading-relaxed mb-6">
                    Von der ersten Idee bis zur erfolgreichen Umsetzung – wir übernehmen Planung, Umsetzung & Teilnehmerbetreuung mit höchster Präzision.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009fe3] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">Ganzheitliche Betreuung</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009fe3] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">Maßgeschneiderte Konzepte</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009fe3] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">Höchste Qualitätsstandards</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#009fe3] mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">Persönlicher Ansprechpartner</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#009fe3]/30 to-primary/5 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#009fe3]/5 blur-[100px]"></div>
        <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#009fe3]/5 blur-[80px]"></div>
      </div>
    </section>
  );
};

export default ServicesSection;

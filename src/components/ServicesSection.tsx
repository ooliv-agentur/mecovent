
import React from 'react';
import { 
  LightbulbIcon, 
  Users, 
  Music, 
  Smartphone,
  BarChart4,
  PartyPopper,
  ArrowRightCircle,
  CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  imageUrl: string;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, imageUrl, index }: ServiceCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <Card 
      className={cn(
        "h-full overflow-hidden group transition-all duration-500 ease-in-out",
        "hover:shadow-xl hover:scale-[1.02] hover:z-10",
        "border border-border/40 dark:border-border/20",
        "bg-white dark:bg-card"
      )}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <h3 className="font-medium text-xl text-white mb-1">{title}</h3>
          <div className="h-0.5 w-12 bg-[#009fe3] group-hover:w-24 transition-all duration-500" />
        </div>
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 rounded-full p-2 shadow-lg transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    { 
      title: "Strategische Eventberatung", 
      description: "Analyse Ihrer Ziele & maßgeschneiderte Konzepte", 
      icon: BarChart4,
      imageUrl: "/lovable-uploads/a5711a2e-3fe8-4825-a540-2c8a57a36cfd.png" 
    },
    { 
      title: "Eventmanagement", 
      description: "Konzeption, Planung & Durchführung", 
      icon: LightbulbIcon,
      imageUrl: "/lovable-uploads/f385109c-4e96-4e47-b083-40a9b15bddac.png" 
    },
    { 
      title: "Teilnehmermanagement", 
      description: "Einladung, Buchung & Betreuung", 
      icon: Users,
      imageUrl: "/lovable-uploads/5cefe1bc-f4db-41da-8076-6a902d7c71b5.png" 
    },
    { 
      title: "Veranstaltungstechnik", 
      description: "Bühne, Licht, Ton & Video für den perfekten Auftritt", 
      icon: Music,
      imageUrl: "/lovable-uploads/20cca07c-10d1-4d83-a2b9-98f9aac3b283.png" 
    },
    { 
      title: "Incentives & Teamevents", 
      description: "Motivation & Erlebnis für Ihr Team", 
      icon: Smartphone,
      imageUrl: "/lovable-uploads/3b884e4a-3302-4e39-928b-44f68f55994d.png" 
    },
    { 
      title: "Marketing & Eventkommunikation", 
      description: "Zielgerichtete Kampagnen für mehr Reichweite", 
      icon: PartyPopper,
      imageUrl: "/lovable-uploads/5869c2e4-85a2-474b-87bc-d34a4bfa1333.png" 
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              index={index}
            />
          ))}
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

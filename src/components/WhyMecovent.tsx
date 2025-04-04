import React, { useRef, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

interface ValueCardProps {
  title: string;
  description: string;
  videoSrc: string;
  index: number;
}

const ValueCard = ({ title, description, videoSrc, index }: ValueCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const gradientColors = [
    'from-blue-400 to-cyan-300',
    'from-rose-400 to-orange-300',
    'from-green-400 to-emerald-300'
  ];

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };
  
  const resetCardTransform = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div 
      ref={cardRef}
      className={`relative group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl transition-all duration-300 h-full
                 ${isHovered ? 'shadow-2xl' : 'shadow-md'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        handleMouseLeave();
        resetCardTransform();
      }}
      onMouseMove={handleMouseMove}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl opacity-70 ${gradientColors[index % 3]} rounded-bl-full -z-0 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
      
      <div className="flex flex-col items-center text-center p-6 z-10 relative">
        <div className="w-full aspect-video mb-6 overflow-hidden rounded-lg relative">
          <video 
            ref={videoRef}
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
            src={videoSrc}
            muted
            playsInline
            loop
          />
          
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
            </div>
          </div>
        </div>
        
        <h3 className="font-bold text-xl mb-3 relative">
          {title}
          <div className={`h-0.5 w-0 bg-gradient-to-r ${gradientColors[index % 3]} transition-all duration-500 mx-auto ${isHovered ? 'w-full' : 'w-0'}`}></div>
        </h3>
        
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

const StrengthCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 text-center relative overflow-hidden h-full">
        <div className={`absolute ${isHovered ? 'scale-100 opacity-10' : 'scale-50 opacity-0'} transition-all duration-500 ease-out rounded-full w-[200%] aspect-square bg-gradient-to-tr from-blue-400 to-cyan-200 -top-1/2 -left-1/2`}></div>
        
        <div className="flex justify-center mb-4 relative">
          <div className={`text-4xl transition-transform duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
            {icon}
          </div>
        </div>
        
        <h4 className="text-xl font-medium mb-2 relative">
          {title}
          <div className={`h-0.5 w-0 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-500 mx-auto ${isHovered ? 'w-1/2' : 'w-0'}`}></div>
        </h4>
        
        <p className="text-muted-foreground relative">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

const WhyMecovent = () => {
  const isMobile = useIsMobile();
  const values = [
    { 
      title: "INDIVIDUELL", 
      description: "Maßgeschneiderte Lösungen für Ihr Event - angepasst an Ihre Herausforderungen und Ziele.", 
      videoSrc: "/20250404_1452_Creative Meeting Energy_simple_compose_01jr0drfsmefxanqxqrn5njypd.mp4"
    },
    { 
      title: "KREATIV", 
      description: "Innovative Konzepte, die inspirieren - Ihre Vision und unsere Kreativität garantieren den Erfolg.", 
      videoSrc: "/20250404_1449_Elegant Dinner Ambiance_simple_compose_01jr0dj223en599495f6e38dkm.mp4"
    },
    { 
      title: "NACHHALTIG", 
      description: "Ressourcenbewusste Planung mit langfristiger Wirkung - ökologisch, wirtschaftlich und sozial.", 
      videoSrc: "/20250404_1457_Eco-Friendly Table Setup_simple_compose_01jr0e00p5fq1vm5pwka8gnwve.mp4"
    }
  ];

  return (
    <section id="why-mecovent" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30 pointer-events-none"></div>
      
      <div className="container-section relative">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <div className="section-tag">ÜBER UNS</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#1EAEDB]">
            Warum MECOVENT? – Unsere Mission ist Ihr Erfolg.
          </h2>
          <p className="subheader-section">
            Wir verwandeln Ihre Vision in unvergessliche Erlebnisse. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
          </p>
          <p className="mt-4 text-muted-foreground">
            Jedes Event erzählt eine Geschichte. Unsere Aufgabe ist es, diese Geschichte sichtbar, spürbar und nachhaltig zu gestalten – mit Respekt vor Ihrer Marke und dem Ziel, Menschen zu verbinden.
          </p>
        </div>
        
        {isMobile ? (
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {values.map((value, index) => (
                <CarouselItem key={index} className="py-2">
                  <ValueCard 
                    key={index}
                    title={value.title}
                    description={value.description}
                    videoSrc={value.videoSrc}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                title={value.title}
                description={value.description}
                videoSrc={value.videoSrc}
                index={index}
              />
            ))}
          </div>
        )}

        <div className="mt-20">
          <h3 className="text-2xl font-medium text-center mb-10 relative inline-block mx-auto">
            Unsere Stärken
            <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-2"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrengthCard 
              icon="🏆"
              title="Langjährige Erfahrung"
              description="Expertennetzwerk für erfolgreiche Events."
            />
            <StrengthCard 
              icon="📊"
              title="Budgeteffiziente Planung"
              description="Transparente Kosten, wirtschaftliche Umsetzung."
            />
            <StrengthCard 
              icon="🤝"
              title="Hand in Hand"
              description="Sie genießen, wir kümmern uns um alles."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMecovent;

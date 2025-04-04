
import React, { useRef } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  videoSrc: string;
}

const ValueCard = ({ title, description, videoSrc }: ValueCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className="flex flex-col items-center text-center relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full aspect-video mb-6 overflow-hidden rounded-lg relative">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={videoSrc}
          muted
          playsInline
          loop
        />
      </div>
      <h3 className="font-medium text-xl mb-3">{title}</h3>
      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

const WhyMecovent = () => {
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
    <section id="why-mecovent">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">ÜBER UNS</div>
          <h2 className="header-section">Warum MECOVENT? – Unsere Mission ist Ihr Erfolg.</h2>
          <p className="subheader-section">
            Wir verwandeln Ihre Vision in unvergessliche Erlebnisse. Ob Change, Innovation oder Markeninszenierung – Ihre Botschaft wird lebendig.
          </p>
          <p className="mt-4 text-muted-foreground">
            Jedes Event erzählt eine Geschichte. Unsere Aufgabe ist es, diese Geschichte sichtbar, spürbar und nachhaltig zu gestalten – mit Respekt vor Ihrer Marke und dem Ziel, Menschen zu verbinden.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-fade-in-up">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              title={value.title} 
              description={value.description}
              videoSrc={value.videoSrc}
            />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-medium text-center mb-10">Unsere Stärken</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 text-gray-500">🏆</div>
              </div>
              <h4 className="text-xl font-medium mb-2">Langjährige Erfahrung</h4>
              <p className="text-muted-foreground">Expertennetzwerk für erfolgreiche Events.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 text-gray-500">📊</div>
              </div>
              <h4 className="text-xl font-medium mb-2">Budgeteffiziente Planung</h4>
              <p className="text-muted-foreground">Transparente Kosten, wirtschaftliche Umsetzung.</p>
            </div>
            <div className="bg-white rounded-lg p-8 text-center shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 text-gray-500">🤝</div>
              </div>
              <h4 className="text-xl font-medium mb-2">Hand in Hand</h4>
              <p className="text-muted-foreground">Sie genießen, wir kümmern uns um alles.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMecovent;

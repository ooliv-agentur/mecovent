
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const AGB = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 flex flex-col">
      <Navigation />
      
      {/* Hero Background Image */}
      <div 
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ 
          backgroundImage: "url('/lovable-uploads/e50f5e2d-1e8c-48d5-9423-960fe140f53c.png')" 
        }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Allgemeine Geschäftsbedingungen</h1>
        </div>
      </div>
      
      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Hier finden Sie die Allgemeinen Geschäftsbedingungen der MECOVENT GmbH.
            </p>
            
            {/* Add AGB content here */}
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Geltungsbereich</h2>
                <p>Die folgenden Allgemeinen Geschäftsbedingungen gelten für alle Verträge und Leistungen der MECOVENT GmbH.</p>
              </section>
              
              <Separator />
              
              {/* Add more sections as needed */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;

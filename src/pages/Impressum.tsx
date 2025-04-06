import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Impressum = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Impressum</h1>
        </div>
      </div>
      
      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-medium mb-6">Angaben gemäß § 5 TMG</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">Unternehmen</h2>
                <p>MECOVENT GmbH</p>
                <p>Wormser Straße 44</p>
                <p>55294 Bodenheim</p>
                <p>Deutschland</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
                <p>Telefon: +49 (0) 6135 703959-0</p>
                <p>Telefax: +49 (0) 6135 703959-9</p>
                <p>E-Mail: <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a></p>
                <p>Web: <a href="https://www.mecovent.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.mecovent.de</a></p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Vertretung</h2>
                <p>Vertreten durch die Geschäftsführer:</p>
                <p>Thomas Rösinger, Maximilian Dick</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Registrierung</h2>
                <p>Eintragung im Handelsregister</p>
                <p>Registergericht: Amtsgericht Mainz</p>
                <p>Handelsregisternummer: HRB 43786</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Umsatzsteuer</h2>
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                <p>DE281678943</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Konzept und Umsetzung</h2>
                <p>Konzept, Design & technische Umsetzung:</p>
                <p>ooliv</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Rechtlicher Hinweis</h2>
                <p className="text-sm leading-relaxed mb-4">
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernimmt die MECOVENT GmbH jedoch keine Gewähr. Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                </p>
                <p className="text-sm leading-relaxed">
                  Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung oder jede andere Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der MECOVENT GmbH.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;

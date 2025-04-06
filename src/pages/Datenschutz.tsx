
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Datenschutz = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Datenschutzerklärung</h1>
        </div>
      </div>
      
      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Wir, die MECOVENT GmbH, nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst und behandeln Ihre Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Verantwortlicher</h2>
                <p>MECOVENT GmbH</p>
                <p>Wormser Straße 44</p>
                <p>55294 Bodenheim</p>
                <p>Telefon: +49 (0) 6135 703959-0</p>
                <p>E-Mail: <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a></p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">2. Zugriffsdaten / Server-Logfiles</h2>
                <p className="text-sm leading-relaxed">
                  Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese sogenannten Server-Logfiles beinhalten z. B. Browsertyp, Betriebssystem, Referrer-URL und IP-Adresse in anonymisierter Form. Eine Zuordnung zu bestimmten Personen ist nicht möglich. Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und der Verbesserung unseres Angebots.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">3. Cookies</h2>
                <p className="text-sm leading-relaxed">
                  Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie dienen dazu, unsere Website nutzerfreundlicher, effektiver und sicherer zu machen. In Ihren Browsereinstellungen können Sie den Einsatz von Cookies jederzeit einschränken oder deaktivieren.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">4. Webanalyse</h2>
                <p className="text-sm leading-relaxed">
                  Diese Website kann Funktionen eines Webanalysedienstes wie z. B. Google Analytics nutzen. Dabei kann es zur Verarbeitung pseudonymer Nutzungsprofile kommen. Die Analyse erfolgt auf Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO. Sie können der Erhebung Ihrer Daten jederzeit widersprechen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">5. Ihre Rechte</h2>
                <p className="text-sm leading-relaxed">
                  Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit. Darüber hinaus können Sie der Verarbeitung Ihrer personenbezogenen Daten jederzeit widersprechen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">6. Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p className="text-sm leading-relaxed">
                  Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutzaufsichtsbehörde zu. Eine Übersicht finden Sie unter:
                  <br />
                  <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.bfdi.bund.de
                  </a>
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">7. Änderungen</h2>
                <p className="text-sm leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an aktuelle rechtliche Anforderungen oder Änderungen unserer Leistungen anzupassen.
                </p>
              </section>
              
              <div className="mt-8 text-right text-sm text-muted-foreground">
                <p>Stand: April 2025</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;


import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Datenschutz = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Set meta title and description
  useEffect(() => {
    document.title = "Datenschutzerklärung | MECOVENT GmbH";
    
    // Find existing meta description or create a new one
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Erfahren Sie, wie MECOVENT GmbH Ihre personenbezogenen Daten schützt. Alle Informationen zur Datensicherheit und Ihren Rechten finden Sie hier.');
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
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Datenschutzerklärung</h1>
        </div>
      </div>
      
      <main className="flex-1 pt-16 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-8">
              Wir, die MECOVENT GmbH, freuen uns über Ihren Besuch auf unserer Website und Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Wer ist verantwortlich?</h2>
                <p>MECOVENT GmbH</p>
                <p>Wormser Straße 44</p>
                <p>55294 Bodenheim, Deutschland</p>
                <p>Telefon: +49 (0) 6135 703959-0</p>
                <p>E-Mail: <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a></p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Welche Daten erfassen wir?</h2>
                <p className="mb-4">
                  Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (sogenannte Server-Logfiles). Dazu gehören:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Browsertyp und -version</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer-URL</li>
                  <li>IP-Adresse (anonymisiert)</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                </ul>
                <p>Eine Zuordnung zu einer bestimmten Person ist nicht möglich.</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Wofür nutzen wir Ihre Daten?</h2>
                <p className="mb-4">
                  Wir verwenden Ihre Daten ausschließlich für folgende Zwecke:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sicherstellung eines reibungslosen Verbindungsaufbaus der Website</li>
                  <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                  <li>Auswertung der Systemsicherheit und -stabilität</li>
                  <li>administrative Zwecke</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Cookies und Einwilligungsmanagement</h2>
                <p className="mb-2">
                  Unsere Website verwendet Cookies. Technisch notwendige Cookies werden auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO) eingesetzt.
                </p>
                <p className="mb-2">
                  Andere Cookies (z. B. Statistik, Marketing) werden erst nach Ihrer ausdrücklichen Einwilligung gesetzt.
                </p>
                <p>
                  Ihre Einwilligungen können Sie jederzeit über unser Cookie-Consent-Tool verwalten oder widerrufen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Kontaktaufnahme</h2>
                <p className="mb-2">
                  Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage.
                </p>
                <p>
                  Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Webanalyse</h2>
                <p className="mb-2">
                  Zur Optimierung unserer Website können Analyse-Tools eingesetzt werden. Die Auswertung erfolgt pseudonymisiert auf Grundlage berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Sie können der Verarbeitung jederzeit widersprechen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Wie lange speichern wir Ihre Daten?</h2>
                <p>
                  Wir speichern personenbezogene Daten nur so lange, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Welche Rechte haben Sie?</h2>
                <p className="mb-4">
                  Sie haben das Recht auf:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Auskunft (Art. 15 DSGVO)</li>
                  <li>Berichtigung (Art. 16 DSGVO)</li>
                  <li>Löschung (Art. 17 DSGVO)</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
                  <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p>Zur Wahrnehmung Ihrer Rechte genügt eine formlose Nachricht an <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a>.</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p className="mb-2">
                  Im Falle datenschutzrechtlicher Verstöße können Sie sich an eine Aufsichtsbehörde wenden.
                </p>
                <p>
                  Eine Übersicht der zuständigen Stellen finden Sie unter: 
                  <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://www.bfdi.bund.de
                  </a>
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Wie schützen wir Ihre Daten?</h2>
                <p>
                  Wir verwenden technische und organisatorische Sicherheitsmaßnahmen (z. B. SSL-/TLS-Verschlüsselung), um Ihre Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Änderungen dieser Datenschutzerklärung</h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Es gilt die jeweils aktuelle, auf dieser Website veröffentlichte Fassung.
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

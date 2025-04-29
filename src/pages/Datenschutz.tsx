
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
                <h2 className="text-xl font-semibold mb-3">Wer ist verantwortlich?</h2>
                <p>MECOVENT GmbH</p>
                <p>Wormser Straße 44</p>
                <p>55294 Bodenheim, Deutschland</p>
                <p>Telefon: +49 (0) 6135 703959-0</p>
                <p>E-Mail: <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a></p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Welche Daten erfassen wir?</h2>
                <p className="text-sm leading-relaxed">
                  Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (sogenannte Server-Logfiles). Dazu gehören:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Browsertyp und -version,</li>
                  <li>verwendetes Betriebssystem,</li>
                  <li>Referrer-URL,</li>
                  <li>IP-Adresse (anonymisiert),</li>
                  <li>Datum und Uhrzeit des Zugriffs.</li>
                </ul>
                <p className="text-sm mt-2">Eine Zuordnung zu einer bestimmten Person ist nicht möglich.</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Wofür nutzen wir Ihre Daten?</h2>
                <p className="text-sm leading-relaxed">
                  Wir verwenden Ihre Daten ausschließlich für folgende Zwecke:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Sicherstellung eines reibungslosen Verbindungsaufbaus der Website,</li>
                  <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                  <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                  <li>administrative Zwecke.</li>
                </ul>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Cookies und Einwilligungsmanagement</h2>
                <p className="text-sm leading-relaxed">
                  Unsere Website verwendet Cookies. Technisch notwendige Cookies setzen wir auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                  <br />Andere Cookies (Statistik, Marketing) werden erst nach Ihrer ausdrücklichen Einwilligung gesetzt.
                  <br />Ihre Einstellungen können Sie jederzeit über unser Cookie-Consent-Tool anpassen oder widerrufen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Kontaktaufnahme</h2>
                <p className="text-sm leading-relaxed">
                  Wenn Sie uns kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse) zur Bearbeitung Ihrer Anfrage.
                  <br />Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Webanalyse</h2>
                <p className="text-sm leading-relaxed">
                  Zur Optimierung unserer Website können Analyse-Tools eingesetzt werden. Die Auswertung erfolgt pseudonymisiert auf Basis berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO).
                  <br />Sie können der Datenverarbeitung jederzeit widersprechen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Wie lange speichern wir Ihre Daten?</h2>
                <p className="text-sm leading-relaxed">
                  Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt oder Sie Ihre Einwilligung widerrufen.
                  <br />Gesetzliche Aufbewahrungspflichten bleiben unberührt.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Welche Rechte haben Sie?</h2>
                <p className="text-sm leading-relaxed">
                  Sie haben das Recht auf:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                  <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO),</li>
                  <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
                  <li>Löschung Ihrer Daten (Art. 17 DSGVO),</li>
                  <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
                  <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
                  <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO),</li>
                  <li>Widerruf Ihrer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</li>
                </ul>
                <p className="text-sm mt-2">Zur Wahrnehmung Ihrer Rechte genügt eine formlose E-Mail an <a href="mailto:info@mecovent.de" className="text-primary hover:underline">info@mecovent.de</a>.</p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p className="text-sm leading-relaxed">
                  Im Falle datenschutzrechtlicher Verstöße können Sie sich bei einer Aufsichtsbehörde beschweren.
                  <br />
                  Eine Übersicht der zuständigen Stellen finden Sie unter:
                  <br />
                  <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://www.bfdi.bund.de
                  </a>
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Wie schützen wir Ihre Daten?</h2>
                <p className="text-sm leading-relaxed">
                  Wir setzen technische und organisatorische Sicherheitsmaßnahmen (insbesondere SSL-/TLS-Verschlüsselung) ein, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
                </p>
              </section>
              
              <Separator />
              
              <section>
                <h2 className="text-xl font-semibold mb-3">Änderungen dieser Datenschutzerklärung</h2>
                <p className="text-sm leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. Es gilt jeweils die auf unserer Website veröffentlichte aktuelle Version.
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

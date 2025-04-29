
import React from 'react';
import { Phone, Mail, Info, HelpCircle, Users, Calendar, User, Globe, Building, Sparkles, CircleDot } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from '@/components/ui/button';
import { SectionLabel } from '@/components/ui/section-label';

const ContactSection = () => {
  const faqCategories = {
    allgemein: [
      {
        question: "Was macht MECOVENT genau?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>MECOVENT ist eine Full-Service-Eventagentur für Unternehmen, Institutionen und Fachverbände. Unser Fokus: maßgeschneiderte Events mit klarer Struktur, kreativem Konzept und reibungsloser Umsetzung.</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Kongresse & Konferenzen</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Produktlaunches & Firmenveranstaltungen</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Workshops, Teamevents & Incentives</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Outdoor-Events & exklusive Abendformate</span>
              </div>
            </div>
            <p>Unser Leistungsspektrum umfasst Projektplanung, Teilnehmermanagement, Veranstaltungstechnik und Kommunikationsmaßnahmen – <span className="text-foreground font-medium">alles aus einer Hand.</span></p>
          </div>
        )
      },
      {
        question: "Warum sollte ich MECOVENT für mein Event buchen?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Mit MECOVENT entscheiden Sie sich für eine Zusammenarbeit, die auf Vertrauen, Präzision und Erfahrung basiert.</p>
            <p className="font-medium text-foreground">Unsere Stärken:</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Individuelle Konzepte</span> für jede Branche & Zielgruppe</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Kreative und budgeteffiziente Planung</span></span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Verlässliche Umsetzung</span> mit erfahrenem Partnernetzwerk</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Partnerschaftlicher Service:</span> Sie genießen, wir kümmern uns um alles</span>
              </div>
            </div>
          </div>
        )
      },
      {
        question: "Welche Veranstaltungsgrößen betreut MECOVENT?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Wir realisieren Veranstaltungen für jede Größenordnung:</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Kleine Meetings & Workshops</span> ab 10 Personen</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Mittlere Formate</span> wie Tagungen oder Teamevents</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Großveranstaltungen</span> mit über 1.000 Gästen</span>
              </div>
            </div>
            <p>Je nach Bedarf skalieren wir Planung, Technik und Teilnehmermanagement flexibel mit – für Events, die passen.</p>
          </div>
        )
      },
    ],
    planung: [
      {
        question: "Kann MECOVENT auch digitale oder hybride Events umsetzen?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Ja – wir planen und realisieren digitale & hybride Formate mit bewährter Technik und interaktiven Tools:</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Hybride Events</span> mit Vor-Ort- und Online-Komponenten</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Digitale Konferenzen</span> mit interaktiven Plattformen</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Live-Streaming & Simultantechnik</span> für weltweite Reichweite</span>
              </div>
            </div>
            <p>Wir sorgen für eine stimmige User Journey – vom Teilnehmerhandling bis zur Live-Interaktion.</p>
          </div>
        )
      },
      {
        question: "Unterstützt MECOVENT bei der Location-Suche?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Ja – wir helfen Ihnen, die passende Location für Ihre Veranstaltung zu finden:</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Hotels, Kongresszentren, Outdoor- oder Speziallocations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Exklusiver Zugang zu Partnerlocations</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Berücksichtigung von Technik, Logistik und Atmosphäre</span>
              </div>
            </div>
            <p>Unsere Vorschläge sind immer auf Ihr Eventformat abgestimmt.</p>
          </div>
        )
      },
    ],
    technisch: [
      {
        question: "Welche technischen Services bietet MECOVENT?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Gemeinsam mit erfahrenen Technikpartnern bieten wir:</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Bühnenbau & Dekoration</span> für jede Raumgröße</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Licht-, Ton- & Videotechnik</span> für überzeugende Auftritte</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Präsentationstechnik</span> für professionelle Inhalte</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span><span className="text-foreground">Simultantechnik & Interaktion</span> bei internationalen Events</span>
              </div>
            </div>
            <p>Technik ist bei uns kein Add-on – sondern fester Bestandteil des Gesamtkonzepts.</p>
          </div>
        )
      },
      {
        question: "Wie transparent sind die Kosten?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Unsere Angebote sind vollständig transparent und verständlich aufgeschlüsselt.</p>
            <div className="space-y-3 pl-1">
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Keine versteckten Kosten</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Detaillierte Budgetübersicht</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CircleDot className="h-3.5 w-3.5 text-primary mt-1.5 flex-shrink-0" />
                <span>Anpassungen jederzeit möglich</span>
              </div>
            </div>
            <p>Wir arbeiten mit klarem Kostenrahmen – und holen das Beste aus Ihrem Budget heraus.</p>
          </div>
        )
      },
      {
        question: "Gibt es Referenzen von MECOVENT?",
        answer: (
          <div className="space-y-4 text-muted-foreground">
            <p>Aus Diskretion gegenüber unseren Kund:innen veröffentlichen wir keine Projektlisten auf der Website.</p>
            <p>In einem persönlichen Gespräch teilen wir gerne anonymisierte Beispiele aus unserer Praxis – für einen realistischen Eindruck unserer Arbeit.</p>
          </div>
        )
      }
    ]
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <SectionLabel label="Kontakt" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">
            Wie können wir Sie unterstützen?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Ob erste Idee oder konkreter Anlass – wir sind für Sie da. Persönlich, klar und auf Augenhöhe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Card className="shadow-lg bg-secondary/20 backdrop-blur-sm border border-secondary/50 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-secondary/50">
                <h3 className="text-xl font-medium text-center">Direkter Kontakt</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <p className="text-center text-muted-foreground">
                    Kontaktieren Sie uns gerne telefonisch oder per E-Mail.
                  </p>
                  
                  <div className="flex flex-col gap-4 my-6">
                    <a href="tel:+4961357039590" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">+49 6135 70 39 59 -0</span>
                    </a>
                    <a href="mailto:info@mecovent.de" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">info@mecovent.de</span>
                    </a>
                  </div>
                  
                  <div className="pt-4 border-t border-secondary/50">
                    <Collapsible className="w-full">
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center justify-center gap-2 w-full text-muted-foreground text-sm">
                          <HelpCircle className="h-4 w-4" />
                          <span>Haben Sie weitere Fragen?</span>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="text-center p-3 text-sm text-muted-foreground">
                        Unser Team hilft Ihnen gerne bei allen Fragen zu Ihrer Veranstaltung. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Häufige Fragen – klar beantwortet
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Sie möchten mehr über unsere Leistungen, Abläufe oder technischen Möglichkeiten wissen? Hier finden Sie die wichtigsten Antworten im Überblick.
              </p>
              
              <Tabs defaultValue="allgemein" className="w-full">
                <TabsList className="w-full mb-6 bg-secondary/50 p-1">
                  <TabsTrigger value="allgemein" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                    Allgemein
                  </TabsTrigger>
                  <TabsTrigger value="planung" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                    Planung & Ablauf
                  </TabsTrigger>
                  <TabsTrigger value="technisch" className="data-[state=active]:bg-primary data-[state=active]:text-white text-base">
                    Technische Fragen
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="allgemein">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqCategories.allgemein.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`allgemein-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-5 px-4 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all text-lg">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-5 pt-2 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="planung">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqCategories.planung.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`planung-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-5 px-4 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all text-lg">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-5 pt-2 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="technisch">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqCategories.technisch.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`technisch-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-5 px-4 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all text-lg">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-5 pt-2 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

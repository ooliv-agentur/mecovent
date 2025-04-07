import React from 'react';
import { Phone, Mail, Info, HelpCircle, Users, Calendar, User, Globe, Building, Sparkles } from 'lucide-react';
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
          <div className="space-y-3 text-muted-foreground">
            <p>MECOVENT ist eine Full-Service-Eventagentur, die sich auf die <span className="text-foreground font-medium">Planung, Organisation und Durchführung</span> maßgeschneiderter Veranstaltungen spezialisiert hat. Wir bieten Lösungen für:</p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Kongresse & Konferenzen</span>
              </li>
              <li className="flex items-start gap-2">
                <Building className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Produktlaunches & Firmenveranstaltungen</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Workshops, Incentives & Teamevents</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Outdoor-Events & exklusive Abendveranstaltungen</span>
              </li>
            </ul>
            <p>Unsere Leistungen umfassen <span className="text-foreground font-medium">Projektmanagement, Teilnehmermanagement, Eventmanagement, Veranstaltungstechnik & Marketingmaßnahmen</span> – alles Hand in Hand!</p>
          </div>
        )
      },
      {
        question: "Warum sollte ich MECOVENT für mein Event buchen?",
        answer: (
          <div className="space-y-3 text-muted-foreground">
            <p>Unsere drei Kernwerte – <span className="text-foreground font-medium">INDIVIDUELL, KREATIV, NACHHALTIG</span> – stehen für maßgeschneiderte Events, innovative Konzepte und verantwortungsvolle Umsetzung. Wir bieten:</p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Langjährige Erfahrung & ein starkes Partnernetzwerk</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Kreative & budgeteffiziente Planung</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Transparente Kosten & professionelle Umsetzung</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Verlässliche Partnerschaft – Sie genießen das Event, wir arbeiten mit Hingabe!</span>
              </li>
            </ul>
          </div>
        )
      },
      {
        question: "Welche Veranstaltungsgrößen betreut MECOVENT?",
        answer: (
          <p className="text-muted-foreground">
            Wir organisieren Events jeder Größe – von <span className="text-foreground font-medium">kleinen exklusiven Meetings (10 Personen)</span> bis hin zu <span className="text-foreground font-medium">großen Firmenveranstaltungen mit über 1.000 Teilnehmern</span>. Egal ob Konferenz, Gala oder Teamevent, wir haben die passenden Lösungen.
          </p>
        )
      },
    ],
    planung: [
      {
        question: "Kann MECOVENT auch digitale oder hybride Events umsetzen?",
        answer: (
          <div className="space-y-3 text-muted-foreground">
            <p>Absolut! Wir bieten Lösungen für:</p>
            <ul className="space-y-2 pl-1">
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Hybride Events</span>
                  <p className="text-sm mt-1">Kombination aus Live- und Online-Teilnahme</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Digitale Konferenzen & Webinare</span>
                  <p className="text-sm mt-1">Virtuelle Plattformen mit interaktiven Elementen</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Live-Streaming & Simultantechnik</span>
                  <p className="text-sm mt-1">Professionelle Übertragung weltweit</p>
                </div>
              </li>
            </ul>
            <p>Wir helfen Ihnen, Ihr digitales Event so interaktiv und wirkungsvoll wie möglich zu gestalten.</p>
          </div>
        )
      },
      {
        question: "Kann MECOVENT bei der Location-Suche helfen?",
        answer: (
          <p className="text-muted-foreground">
            Ja, wir unterstützen Sie bei der Auswahl der passenden Location – egal ob Hotel, Konferenzzentrum, Outdoor-Event oder exklusive Eventlocation. Wir haben Zugang zu einer Vielzahl an <span className="text-foreground font-medium">Top-Locations deutschlandweit & international</span>.
          </p>
        )
      },
    ],
    technisch: [
      {
        question: "Welche technischen Services bietet MECOVENT?",
        answer: (
          <div className="space-y-3 text-muted-foreground">
            <p>Wir arbeiten mit führenden Anbietern für Veranstaltungstechnik zusammen und bieten:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Bühnenbau & Dekoration</span>
                  <p className="text-sm mt-1">Perfektes Setup für Ihre Veranstaltung</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Licht-, Ton- & Videotechnik</span>
                  <p className="text-sm mt-1">Hochwertige technische Umsetzung</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Präsentationstechnik</span>
                  <p className="text-sm mt-1">Optimale Darstellung Ihrer Inhalte</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-foreground">Simultantechnik</span>
                  <p className="text-sm mt-1">Interaktive Abstimmungen & Mehrsprachigkeit</p>
                </div>
              </div>
            </div>
            <p className="mt-2">Unsere Technik-Experten sorgen für ein serviceorientiertes Event-Erlebnis.</p>
          </div>
        )
      },
      {
        question: "Wie transparent sind die Kosten?",
        answer: (
          <div className="space-y-3 text-muted-foreground">
            <p>Unsere Kostenstruktur ist <span className="text-foreground font-medium">vollständig transparent</span>. Wir arbeiten mit <span className="text-foreground font-medium">klaren Budgets & detaillierten Angeboten</span>, damit Sie immer die volle Kontrolle haben. Keine versteckten Kosten, keine Überraschungen.</p>
            <div className="flex items-center gap-2 bg-secondary/70 p-3 rounded-lg mt-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">Tipp: Wir optimieren Ihr Budget so, dass Sie den maximalen Mehrwert erhalten.</span>
            </div>
          </div>
        )
      },
      {
        question: "Kann ich Referenzen von MECOVENT einsehen?",
        answer: (
          <p className="text-muted-foreground">
            Aus <span className="text-foreground font-medium">Loyalität & Diskretion</span> gegenüber unseren Kunden führen wir keine direkten Referenzen auf der Website auf. Gerne geben wir Ihnen jedoch in einem persönlichen Gespräch weitere Informationen über erfolgreich umgesetzte Projekte.
          </p>
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
            Lassen Sie uns Ihr Event planen!
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Verbinden Sie sich mit uns und wir besprechen gemeinsam Ihre individuellen Eventanforderungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          <div className="lg:col-span-4 order-2 lg:order-1">
            <Card className="shadow-lg bg-secondary/20 backdrop-blur-sm border border-secondary/50 overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 border-b border-secondary/50">
                <h3 className="text-xl font-medium text-center">Persönliche Beratung gewünscht?</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 my-6">
                    <a href="tel:+4961357039590" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">+49 6135 70 39 59 -0</span>
                    </a>
                    <a href="mailto:info@mecovent.de" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors group">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
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
                Häufig gestellte Fragen
              </h3>
              
              <Tabs defaultValue="allgemein" className="w-full">
                <TabsList className="w-full mb-6 bg-secondary/50 p-1">
                  <TabsTrigger value="allgemein" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    Allgemein
                  </TabsTrigger>
                  <TabsTrigger value="planung" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    Planung & Ablauf
                  </TabsTrigger>
                  <TabsTrigger value="technisch" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    Technische Fragen
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="allgemein">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {faqCategories.allgemein.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`allgemein-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-4 px-3 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-4 pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="planung">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {faqCategories.planung.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`planung-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-4 px-3 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-4 pt-2">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="technisch">
                  <Accordion type="single" collapsible className="w-full space-y-3">
                    {faqCategories.technisch.map((faq, index) => (
                      <AccordionItem 
                        key={index}
                        value={`technisch-${index}`}
                        className="border border-secondary/30 rounded-lg overflow-hidden bg-secondary/10 px-1"
                      >
                        <AccordionTrigger className="py-4 px-3 hover:no-underline hover:bg-secondary/30 data-[state=open]:bg-secondary/20 rounded-lg transition-all">
                          <span className="text-left font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-4 pt-2">
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


import React from 'react';
import { Phone, Mail, Info, HelpCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger
} from "@/components/ui/tabs";

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => (
  <AccordionItem value={question} className="border-b">
    <AccordionTrigger className="text-left font-medium py-4">{question}</AccordionTrigger>
    <AccordionContent className="pb-6">{answer}</AccordionContent>
  </AccordionItem>
);

const ContactSection = () => {
  // Group FAQs by category
  const faqCategories = {
    allgemein: [
      {
        question: "Was macht MECOVENT genau?",
        answer: (
          <div className="space-y-2">
            <p>MECOVENT ist eine Full-Service-Eventagentur, die sich auf die <strong>Planung, Organisation und Durchführung</strong> maßgeschneiderter Veranstaltungen spezialisiert hat. Wir bieten Lösungen für:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Kongresse & Konferenzen</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Produktlaunches & Firmenveranstaltungen</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Workshops, Incentives & Teamevents</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Outdoor-Events & exklusive Abendveranstaltungen</strong></span>
              </li>
            </ul>
            <p>Unsere Leistungen umfassen <strong>Projektmanagement, Teilnehmermanagement, Eventmanagement, Veranstaltungstechnik & Marketingmaßnahmen</strong> – alles Hand in Hand!</p>
          </div>
        )
      },
      {
        question: "Warum sollte ich MECOVENT für mein Event buchen?",
        answer: (
          <div className="space-y-2">
            <p>Unsere drei Kernwerte – <strong>INDIVIDUELL, KREATIV, NACHHALTIG</strong> – stehen für maßgeschneiderte Events, innovative Konzepte und verantwortungsvolle Umsetzung. Wir bieten:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Langjährige Erfahrung & ein starkes Partnernetzwerk</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Kreative & budgeteffiziente Planung</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Transparente Kosten & professionelle Umsetzung</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Verlässliche Partnerschaft – Sie genießen das Event, wir arbeiten mit Hingabe!</strong></span>
              </li>
            </ul>
          </div>
        )
      },
      {
        question: "Welche Veranstaltungsgrößen betreut MECOVENT?",
        answer: (
          <p>Wir organisieren Events jeder Größe – von <strong>kleinen exklusiven Meetings (10 Personen)</strong> bis hin zu <strong>großen Firmenveranstaltungen mit über 1.000 Teilnehmern</strong>. Egal ob Konferenz, Gala oder Teamevent, wir haben die passenden Lösungen.</p>
        )
      },
    ],
    planung: [
      {
        question: "Kann MECOVENT auch digitale oder hybride Events umsetzen?",
        answer: (
          <div className="space-y-2">
            <p>Absolut! Wir bieten Lösungen für:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Hybride Events</strong> – Kombination aus Live- und Online-Teilnahme</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Digitale Konferenzen & Webinare</strong> – Virtuelle Plattformen mit interaktiven Elementen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Live-Streaming & Simultantechnik</strong> – Professionelle Übertragung weltweit</span>
              </li>
            </ul>
            <p>Wir helfen Ihnen, Ihr digitales Event so interaktiv und wirkungsvoll wie möglich zu gestalten.</p>
          </div>
        )
      },
      {
        question: "Kann MECOVENT bei der Location-Suche helfen?",
        answer: (
          <p>Ja, wir unterstützen Sie bei der Auswahl der passenden Location – egal ob Hotel, Konferenzzentrum, Outdoor-Event oder exklusive Eventlocation. Wir haben Zugang zu einer Vielzahl an <strong>Top-Locations deutschlandweit & international</strong>.</p>
        )
      },
    ],
    technisch: [
      {
        question: "Welche technischen Services bietet MECOVENT?",
        answer: (
          <div className="space-y-2">
            <p>Wir arbeiten mit führenden Anbietern für Veranstaltungstechnik zusammen und bieten:</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Bühnenbau & Dekoration</strong> – Perfektes Setup für Ihre Veranstaltung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Licht-, Ton- & Videotechnik</strong> – Hochwertige technische Umsetzung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Präsentationstechnik & Kameratechnik</strong> – Optimale Darstellung Ihrer Inhalte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-4 w-4 mt-1 text-primary">✓</span>
                <span><strong>Simultantechnik & TED-Systeme</strong> – Interaktive Abstimmungen & Mehrsprachigkeit</span>
              </li>
            </ul>
            <p>Unsere Technik-Experten sorgen für ein serviceorientiertes Event-Erlebnis.</p>
          </div>
        )
      },
      {
        question: "Wie transparent sind die Kosten?",
        answer: (
          <div className="space-y-2">
            <p>Unsere Kostenstruktur ist <strong>vollständig transparent</strong>. Wir arbeiten mit <strong>klaren Budgets & detaillierten Angeboten</strong>, damit Sie immer die volle Kontrolle haben. Keine versteckten Kosten, keine Überraschungen.</p>
            <p className="flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" />
              <span><strong>Tipp:</strong> Wir optimieren Ihr Budget so, dass Sie den maximalen Mehrwert erhalten.</span>
            </p>
          </div>
        )
      },
      {
        question: "Kann ich Referenzen von MECOVENT einsehen?",
        answer: (
          <p>Aus <strong>Loyalität & Diskretion</strong> gegenüber unseren Kunden führen wir keine direkten Referenzen auf der Website auf. Gerne geben wir Ihnen jedoch in einem persönlichen Gespräch weitere Informationen über erfolgreich umgesetzte Projekte.</p>
        )
      }
    ]
  };

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="section-tag">Kontakt</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">
            Lassen Sie uns Ihr Event planen!
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Verbinden Sie sich mit uns und wir besprechen gemeinsam Ihre individuellen Eventanforderungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto animate-fade-in-up">
          {/* Contact Information Card */}
          <div className="lg:col-span-1">
            <Card className="shadow-md bg-secondary/30">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-medium mb-6">Persönliche Beratung gewünscht?</h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-3 my-6">
                    <a href="tel:+4961357039590" className="font-medium flex items-center justify-center gap-2 hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                      +49 6135 70 39 59 -0
                    </a>
                    <a href="mailto:info@MECOVENT.de" className="font-medium flex items-center justify-center gap-2 hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                      info@MECOVENT.de
                    </a>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="flex items-center justify-center gap-2 mb-2 text-sm text-muted-foreground">
                      <HelpCircle className="h-4 w-4" />
                      <span>Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter!</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div>
              <h3 className="text-2xl font-bold mb-6">Häufig gestellte Fragen</h3>
              
              <Tabs defaultValue="allgemein" className="w-full">
                <TabsList className="w-full mb-4">
                  <TabsTrigger value="allgemein" className="flex-1">Allgemein</TabsTrigger>
                  <TabsTrigger value="planung" className="flex-1">Planung & Ablauf</TabsTrigger>
                  <TabsTrigger value="technisch" className="flex-1">Technische Fragen</TabsTrigger>
                </TabsList>
                
                <TabsContent value="allgemein">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqCategories.allgemein.map((faq, index) => (
                      <FAQItem 
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="planung">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqCategories.planung.map((faq, index) => (
                      <FAQItem 
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
                    ))}
                  </Accordion>
                </TabsContent>
                
                <TabsContent value="technisch">
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqCategories.technisch.map((faq, index) => (
                      <FAQItem 
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                      />
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

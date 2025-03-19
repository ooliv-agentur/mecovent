
import React from 'react';
import { Calendar, Phone, Mail, Info, HelpCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQItem = ({ question, answer }: { question: string; answer: React.ReactNode }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const ContactSection = () => {
  const faqs = [
    {
      question: "Was macht MECOVENT genau?",
      answer: (
        <div className="space-y-2">
          <p>MECOVENT ist eine Full-Service-Eventagentur, die sich auf die <strong>Planung, Organisation und Durchführung</strong> maßgeschneiderter Veranstaltungen spezialisiert hat. Wir bieten Lösungen für:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Kongresse & Konferenzen</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Produktlaunches & Firmenveranstaltungen</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Workshops, Incentives & Teamevents</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Outdoor-Events & exklusive Abendveranstaltungen</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Private Feiern wie Hochzeiten & Jubiläen</strong></span>
            </li>
          </ul>
          <p>Unsere Leistungen umfassen <strong>Projektmanagement, Teilnehmermanagement, Eventmanagement, Veranstaltungstechnik & Marketingmaßnahmen</strong> – alles aus einer Hand!</p>
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
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Langjährige Erfahrung & ein starkes Partnernetzwerk</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Kreative & budgeteffiziente Planung</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Transparente Kosten & professionelle Umsetzung</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Kompletten Rundum-Service – Sie genießen das Event, wir kümmern uns um alles!</strong></span>
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
    {
      question: "Unterstützt MECOVENT auch private Feiern?",
      answer: (
        <p>Ja! Neben Firmenveranstaltungen planen wir auch <strong>Hochzeiten, Geburtstage, Jubiläen und private Feiern</strong>. Unser Team übernimmt die gesamte Organisation, damit Sie sich entspannt zurücklehnen und Ihren besonderen Tag genießen können.</p>
      )
    },
    {
      question: "Kann MECOVENT auch digitale oder hybride Events umsetzen?",
      answer: (
        <div className="space-y-2">
          <p>Absolut! Wir bieten Lösungen für:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Hybride Events</strong> – Kombination aus Live- und Online-Teilnahme</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Digitale Konferenzen & Webinare</strong> – Virtuelle Plattformen mit interaktiven Elementen</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Live-Streaming & Simultantechnik</strong> – Professionelle Übertragung weltweit</span>
            </li>
          </ul>
          <p>Wir helfen Ihnen, Ihr digitales Event so interaktiv und wirkungsvoll wie möglich zu gestalten.</p>
        </div>
      )
    },
    {
      question: "Welche technischen Services bietet MECOVENT?",
      answer: (
        <div className="space-y-2">
          <p>Wir arbeiten mit führenden Anbietern für Veranstaltungstechnik zusammen und bieten:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Bühnenbau & Dekoration</strong> – Perfektes Setup für Ihre Veranstaltung</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Licht-, Ton- & Videotechnik</strong> – Hochwertige technische Umsetzung</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Präsentationstechnik & Kameratechnik</strong> – Optimale Darstellung Ihrer Inhalte</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-1 text-primary" />
              <span><strong>Simultantechnik & TED-Systeme</strong> – Interaktive Abstimmungen & Mehrsprachigkeit</span>
            </li>
          </ul>
          <p>Unsere Technik-Experten sorgen für ein reibungsloses Event-Erlebnis.</p>
        </div>
      )
    },
    {
      question: "Kann MECOVENT bei der Location-Suche helfen?",
      answer: (
        <p>Ja, wir unterstützen Sie bei der Auswahl der passenden Location – egal ob Hotel, Konferenzzentrum, Outdoor-Event oder exklusive Eventlocation. Wir haben Zugang zu einer Vielzahl an <strong>Top-Locations deutschlandweit & international</strong>.</p>
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
  ];

  return (
    <section id="contact">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Kontakt</div>
          <h2 className="header-section">Lassen Sie uns Ihr Event planen!</h2>
          <p className="subheader-section">
            Nehmen Sie Kontakt mit uns auf und wir besprechen gemeinsam Ihre individuellen Eventanforderungen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto animate-fade-in-up">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Häufig gestellte Fragen</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <FAQItem 
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Accordion>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg text-center">
              <h3 className="text-xl font-medium mb-4">Persönliche Beratung gewünscht?</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">Kontaktieren Sie uns direkt:</p>
                <div className="flex flex-col gap-2">
                  <p className="font-medium flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    +49 6135 70 39 59 -0
                  </p>
                  <p className="font-medium flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    info@MECOVENT.de
                  </p>
                </div>
                <Button className="gap-2 mt-2">
                  <Calendar className="h-4 w-4" />
                  Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-card border rounded-lg p-8">
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-1">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                
                <div>
                  <Label htmlFor="concern" className="block text-sm font-medium mb-1">Anliegen</Label>
                  <select
                    id="concern"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Bitte auswählen</option>
                    <option value="eventmanagement">Eventmanagement</option>
                    <option value="teilnehmermanagement">Teilnehmermanagement</option>
                    <option value="veranstaltungstechnik">Veranstaltungstechnik</option>
                    <option value="incentives">Incentives & Teamevents</option>
                    <option value="private">Private Events</option>
                    <option value="digitale-events">Digitale & Hybride Events</option>
                    <option value="location">Location-Suche</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Ihre Nachricht"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Jetzt Anfrage senden
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t">
                <p className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <HelpCircle className="h-4 w-4" />
                  <span>Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter!</span>
                </p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  <span>Wir behandeln Ihre Daten vertraulich und kontaktieren Sie schnellstmöglich.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

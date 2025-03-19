
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <AccordionItem value={question}>
    <AccordionTrigger>{question}</AccordionTrigger>
    <AccordionContent>{answer}</AccordionContent>
  </AccordionItem>
);

const ContactSection = () => {
  const faqs = [
    {
      question: "Häufige Frage 1",
      answer: "[Platzhalter für Antwort auf häufige Frage 1]"
    },
    {
      question: "Häufige Frage 2",
      answer: "[Platzhalter für Antwort auf häufige Frage 2]"
    },
    {
      question: "Häufige Frage 3",
      answer: "[Platzhalter für Antwort auf häufige Frage 3]"
    }
  ];

  return (
    <section id="contact">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Kontakt</div>
          <h2 className="header-section">Jetzt Kontakt aufnehmen</h2>
          <p className="subheader-section">
            [Platzhalter für kurze Aufforderung zur Kontaktaufnahme]
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
              <Button className="gap-2">
                <Calendar className="h-4 w-4" />
                Termin vereinbaren
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-card border rounded-lg p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Ihr Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>
                
                <div>
                  <label htmlFor="concern" className="block text-sm font-medium mb-1">Anliegen</label>
                  <select
                    id="concern"
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    defaultValue=""
                  >
                    <option value="" disabled>Bitte auswählen</option>
                    <option value="option1">Anliegen 1</option>
                    <option value="option2">Anliegen 2</option>
                    <option value="option3">Anliegen 3</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-4 py-2"
                    placeholder="Ihre Nachricht"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Absenden
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-muted-foreground mb-2">Oder kontaktieren Sie uns direkt:</p>
                <p className="font-medium">+49 123 456 789</p>
                <p className="font-medium">info@beispiel.de</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

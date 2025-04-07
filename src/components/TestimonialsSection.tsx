
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionLabel } from '@/components/ui/section-label';
import VideoSection from '@/components/VideoSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Die Professionalität und Kreativität von MECOVENT haben unser Event auf ein neues Level gehoben.",
      attribution: ""
    },
    {
      quote: "Selten so reibungslos und partnerschaftlich zusammengearbeitet – das Ergebnis hat unsere Erwartungen übertroffen.",
      attribution: ""
    },
    {
      quote: "Unsere Botschaft wurde nicht nur sichtbar, sondern erlebbar gemacht. Danke für die starke Umsetzung!",
      attribution: ""
    },
    {
      quote: "Verlässlichkeit, Empathie und ein klarer Plan – besser kann man ein Event nicht begleiten.",
      attribution: ""
    },
    {
      quote: "MECOVENT hat unser Event strategisch durchdacht und emotional inszeniert. Der perfekte Mix für unsere Zielgruppe.",
      attribution: ""
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <section id="testimonials" className="bg-background py-20">
        <div className="container-section">
          <SectionLabel label="Kundenstimmen" />
          
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.6] break-words">
              Vertrauen, das bleibt – Stimmen unserer Kund:innen.
            </h2>
            <p className="subheader-section">
              Jede Rückmeldung erzählt von Zusammenarbeit, Vertrauen und gemeinsamem Erfolg.
            </p>
            <p className="text-base text-muted-foreground mt-2">
              Erleben Sie, wie unsere Events nicht nur begeistern – sondern nachhaltig wirken.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <Card className="shadow-md h-full">
                        <CardContent className="p-10">
                          <div className="mb-6">
                            <Quote className="h-12 w-12 text-primary/40" />
                          </div>
                          <blockquote className="text-3xl font-medium mb-6 leading-relaxed">
                            {testimonial.quote}
                          </blockquote>
                          {testimonial.attribution && (
                            <cite className="block text-right text-muted-foreground not-italic">
                              — {testimonial.attribution}
                            </cite>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-4 items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-sm hover:shadow-md transition-all h-10 w-10" 
                  onClick={prevTestimonial}
                  aria-label="Vorheriges Testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-3 rounded-full transition-all ${
                        currentTestimonial === index 
                          ? "bg-primary w-6" 
                          : "bg-muted w-3"
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                      aria-label={`Testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-sm hover:shadow-md transition-all h-10 w-10" 
                  onClick={nextTestimonial}
                  aria-label="Nächstes Testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Updated Video Section */}
      <VideoSection />
      
      {/* CTA Section with blue background */}
      <div className="bg-primary py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <SectionLabel 
              label="Vertrauen entsteht im gemeinsamen Tun" 
              className="mb-8"
            />
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Verbindung knüpfen – gemeinsam mehr bewegen.
            </h3>
            
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Sie haben eine Idee, wir die Erfahrung. Lassen Sie uns gemeinsam etwas starten, das bleibt.
            </p>
            
            <a 
              href="mailto:info@mecovent.de" 
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-white/90 transition-colors px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span>Jetzt kennenlernen</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;

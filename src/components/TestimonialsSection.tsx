
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Mail, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Die Professionalität und Kreativität von MECOVENT haben unser Event auf ein neues Level gehoben.",
      attribution: "Projektleiter, Tech-Konferenz 2025"
    },
    {
      quote: "Von der ersten Beratung bis zur Umsetzung – absolut zuverlässig, transparent und professionell!",
      attribution: "Marketing Direktor, Corporate Event"
    },
    {
      quote: "Die individuelle Betreuung war hervorragend. Jedes Detail wurde präzise ausgearbeitet.",
      attribution: "Veranstaltungsmanager, Produkteinführung"
    },
    {
      quote: "Wir waren beeindruckt von der strategischen Planung und reibungslosen Durchführung.",
      attribution: "CEO, Firmenjubiläum"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-background py-20 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 backdrop-blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 backdrop-blur-xl"></div>
      
      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="h-[1px] w-12 bg-primary/50"></div>
            <div className="section-tag px-3 py-1 bg-primary/10 text-primary rounded-full">Kundenstimmen</div>
            <div className="h-[1px] w-12 bg-primary/50"></div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift leading-[1.2] break-words">
            Was andere über uns sagen
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie, wie wir mit Leidenschaft und Präzision Events gestalten, die in Erinnerung bleiben.
          </p>
        </div>
        
        {isMobile ? (
          <div className="mt-8">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="static relative transform-none mx-0" />
                <CarouselNext className="static relative transform-none mx-0" />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <TestimonialCard testimonial={testimonial} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mt-10 gap-6 items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full shadow-sm hover:shadow-md transition-all h-12 w-12 border-primary/20" 
                  onClick={prevTestimonial}
                  aria-label="Vorheriges Testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-primary" />
                </Button>
                
                <div className="flex gap-3 items-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`h-3 rounded-full transition-all ${
                        currentTestimonial === index 
                          ? "bg-primary w-10" 
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
                  className="rounded-full shadow-sm hover:shadow-md transition-all h-12 w-12 border-primary/20" 
                  onClick={nextTestimonial}
                  aria-label="Nächstes Testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-primary" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Redesigned CTA Section with blue background and gradient */}
      <div className="bg-gradient-to-br from-primary to-primary/80 mt-32 py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-white/20"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-white/10"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-white/10 blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-3/5 text-white">
                <div className="inline-flex items-center justify-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-8">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">Lassen Sie uns etwas Großartiges schaffen</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Bereit, Ihre Veranstaltung auf das nächste Level zu bringen?
                </h3>
                
                <p className="text-white/80 text-lg mb-8 md:mb-0">
                  Teilen Sie uns Ihre Vision mit – gemeinsam verwandeln wir sie in ein unvergessliches Erlebnis.
                </p>
              </div>
              
              <div className="md:w-2/5 flex justify-center md:justify-end">
                <a 
                  href="mailto:info@mecovent.de" 
                  className="group inline-flex items-center gap-3 bg-white hover:bg-white/90 text-primary transition-all px-8 py-5 rounded-full font-medium shadow-lg hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
                  <span>Kontakt aufnehmen</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <Card className="shadow-lg h-full hover:shadow-xl transition-all border-0 bg-white/50 backdrop-blur-sm">
    <CardContent className="p-10">
      <div className="flex gap-1 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="h-5 w-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-foreground">
        "{testimonial.quote}"
      </blockquote>
      {testimonial.attribution && (
        <cite className="block not-italic text-muted-foreground font-medium">
          {testimonial.attribution}
        </cite>
      )}
    </CardContent>
  </Card>
);

export default TestimonialsSection;

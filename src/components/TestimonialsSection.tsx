import React, { useState } from 'react';
import { LightbulbIcon, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Die Professionalität und Kreativität von MECOVENT haben unser Event auf ein neues Level gehoben.",
      attribution: ""
    },
    {
      quote: "Von der ersten Beratung bis zur Umsetzung – absolut zuverlässig, transparent und professionell!",
      attribution: ""
    },
    {
      quote: "Die individuelle Betreuung war hervorragend. Jedes Detail wurde präzise ausgearbeitet.",
      attribution: ""
    },
    {
      quote: "Wir waren beeindruckt von der strategischen Planung und reibungslosen Durchführung.",
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
    <section id="testimonials" className="bg-background py-20">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Kundenstimmen</div>
          <h2 className="header-section">Was andere über uns sagen</h2>
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
      
      {/* Extracted CTA as a separate section with explicit margins */}
      <section className="bg-background mt-[80px] mb-[80px]">
        <div className="container-section">
          <div className="text-center animate-fade-in">
            <p className="flex items-center justify-center gap-2 text-primary mb-6">
              <LightbulbIcon className="h-5 w-5" />
              <span className="font-medium">Vertrauen entsteht im gemeinsamen Tun.</span>
            </p>
            
            <div className="mt-8">
              <p className="text-lg mb-4">Lassen Sie uns in Verbindung treten – wir freuen uns auf den ersten Austausch.</p>
              <Button size="lg" className="rounded-full px-8 py-6 text-base">
                Erste Verbindung herstellen
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TestimonialsSection;

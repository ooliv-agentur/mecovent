
import React from 'react';
import { MessageSquare, LightbulbIcon } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Die Professionalität und Kreativität von MECOVENT haben unser Event auf ein neues Level gehoben.",
      attribution: ""
    },
    {
      quote: "Von der ersten Beratung bis zur Umsetzung – absolut zuverlässig, transparent und professionell!",
      attribution: ""
    }
  ];

  return (
    <section id="testimonials">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <div className="section-tag">Kundenstimmen</div>
          <h2 className="header-section">Was andere über uns sagen</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-lg p-8 shadow-sm">
              <MessageSquare className="h-10 w-10 text-primary/20 mb-4" />
              <blockquote className="text-xl font-medium mb-4">
                "{testimonial.quote}"
              </blockquote>
              {testimonial.attribution && (
                <cite className="block text-right text-muted-foreground not-italic">
                  — {testimonial.attribution}
                </cite>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 animate-fade-in">
          <p className="flex items-center justify-center gap-2 text-primary">
            <LightbulbIcon className="h-5 w-5" />
            <span className="font-medium">Events sind Vertrauenssache – unser Anspruch ist es, Ihre Erwartungen zu übertreffen.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

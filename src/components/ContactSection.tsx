
import React from 'react';

const ContactSection = () => {
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
        
        <div className="max-w-lg mx-auto animate-fade-in-up">
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
                >
                  <option value="" disabled selected>Bitte auswählen</option>
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
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-md px-4 py-2 font-medium hover:opacity-90 transition-opacity"
              >
                Absenden
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-muted-foreground mb-2">Oder kontaktieren Sie uns direkt:</p>
              <p className="font-medium">+49 123 456 789</p>
              <p className="font-medium">info@beispiel.de</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import SectionTextBlockSimple from '@/components/ui/section-text-block-simple';

const IntroSection = () => {
  return (
    <section 
      id="intro" 
      className="py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#009fe3]/10 to-[#005a80]/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-[#005a80]/5 to-[#009fe3]/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#009fe3]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-section relative z-10">
        {/* Header Section */}
        <SectionTextBlockSimple
          label="MEETING. CONGRESS. EVENT."
          line1="Meeting."
          line2="Congress."
          line3="Event."
          subline="Strategisch geplant, emotional inszeniert, nachhaltig umgesetzt – für Events, die verbinden und wirken."
          alignment="center"
          className="mb-16"
        />
        
        {/* Value propositions with modern layout */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Strategic Planning */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#009fe3]/10 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#005a80] to-[#009fe3] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">/</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#005a80] transition-colors">
                      Strategisch geplant
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jedes Detail durchdacht, jeder Moment perfekt orchestriert für unvergessliche Erlebnisse.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Staging */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#005a80]/10 to-transparent rounded-2xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#009fe3] to-[#005a80] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">/</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#005a80] transition-colors">
                      Emotional inszeniert
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Wir schaffen Momente, die berühren und verbinden – authentisch und von Herzen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sustainable Implementation */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#009fe3]/10 to-transparent rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#005a80] to-[#009fe3] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-xl">/</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#005a80] transition-colors">
                      Nachhaltig umgesetzt
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mit Weitblick und Verantwortung für Generationen – heute und morgen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emotional tagline */}
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-700 font-light italic">
            "Wo <span className="font-medium text-[#009fe3]">Begegnungen</span> zu <span className="font-medium text-[#005a80]">Erinnerungen</span> werden."
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

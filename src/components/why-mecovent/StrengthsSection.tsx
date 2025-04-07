
import React from 'react';
import StrengthCard from '@/components/StrengthCard';

const StrengthsSection = () => {
  return (
    <div className="mt-32 relative">
      <h3 className="text-2xl font-medium text-center mb-14 relative">
        <span className="relative z-10">Was uns stark macht.</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StrengthCard 
          iconType="trophy"
          title="Erfahrung, auf die Verlass ist"
          description="Seit über 15 Jahren. Strategisch. Unaufgeregt. Erfolgreich."
        />
        <StrengthCard 
          iconType="chart"
          title="Planung mit Weitblick"
          description="Wir denken wirtschaftlich – und machen es auch so."
        />
        <StrengthCard 
          iconType="handshake"
          title="Hand in Hand"
          description="Partnerschaftlich, klar, zuverlässig – vom ersten Gespräch bis zur Umsetzung."
        />
      </div>
    </div>
  );
};

export default StrengthsSection;

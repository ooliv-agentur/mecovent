
import React from 'react';
import StrengthCard from '@/components/StrengthCard';

const StrengthsSection = () => {
  return (
    <div className="mt-32 relative">
      <h3 className="text-2xl font-medium text-center mb-14 relative">
        <span className="relative z-10 bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift text-shadow">Unsere Stärken</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StrengthCard 
          iconType="trophy"
          title="Langjährige Erfahrung"
          description="Expertennetzwerk für erfolgreiche Events."
        />
        <StrengthCard 
          iconType="chart"
          title="Budgeteffiziente Planung"
          description="Transparente Kosten, wirtschaftliche Umsetzung."
        />
        <StrengthCard 
          iconType="handshake"
          title="Hand in Hand"
          description="Sie genießen, wir kümmern uns um alles."
        />
      </div>
    </div>
  );
};

export default StrengthsSection;

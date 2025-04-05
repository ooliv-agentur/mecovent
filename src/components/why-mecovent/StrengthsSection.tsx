
import React from 'react';
import StrengthCard from '@/components/StrengthCard';

const StrengthsSection = () => {
  return (
    <div className="mt-32 relative">
      {/* Add a decorative element for visual separation */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0] rounded-full"></div>
      
      <h3 className="text-2xl font-medium text-center mb-14 relative inline-block mx-auto">
        <span className="relative z-10 bg-gradient-to-r from-white to-[#009fe3] bg-clip-text text-transparent bg-200% animate-gradient-shift">Unsere Stärken</span>
        <div className="h-1 w-20 bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0] mx-auto mt-3"></div>
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

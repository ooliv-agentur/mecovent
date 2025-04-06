
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, BarChart3 } from 'lucide-react';
import HandshakeIcon from './icons/HandshakeIcon';

interface StrengthCardProps {
  iconType: 'trophy' | 'chart' | 'handshake';
  title: string;
  description: string;
}

const StrengthCard = ({ iconType, title, description }: StrengthCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Rotate through brand colors based on icon type
  const getBrandColor = () => {
    switch (iconType) {
      case 'trophy':
        return 'text-brand-blue';
      case 'chart':
        return 'text-brand-coral';
      case 'handshake':
        return 'text-brand-mint';
      default:
        return 'text-brand-blue';
    }
  };
  
  // Get gradient background based on icon type
  const getGradientBg = () => {
    switch (iconType) {
      case 'trophy':
        return 'from-brand-blue/60 to-brand-blue/40';
      case 'chart':
        return 'from-brand-coral/60 to-brand-coral/40';
      case 'handshake':
        return 'from-brand-mint/60 to-brand-mint/40';
      default:
        return 'from-brand-blue/60 to-brand-blue/40';
    }
  };
  
  const getIcon = () => {
    const colorClass = getBrandColor();
    
    switch (iconType) {
      case 'trophy':
        return <Trophy className={`${colorClass} stroke-[1.5]`} size={36} />;
      case 'chart':
        return <BarChart3 className={`${colorClass} stroke-[1.5]`} size={36} />;
      case 'handshake':
        return <HandshakeIcon className={colorClass} size={36} />;
      default:
        return null;
    }
  };
  
  return (
    <Card 
      className="h-full overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg border-none bg-white/5 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 text-center relative overflow-hidden h-full">
        <div className={`absolute ${isHovered ? 'scale-100 opacity-10' : 'scale-50 opacity-0'} transition-all duration-500 ease-out rounded-full w-[200%] aspect-square bg-gradient-to-tr ${getGradientBg()} -top-1/2 -left-1/2`}></div>
        
        <div className="flex justify-center mb-6 relative">
          <div className={`transition-transform duration-300 p-4 rounded-full ${isHovered ? 'scale-110' : 'scale-100'}`} style={{ backgroundColor: 'rgba(211, 228, 253, 0.3)' }}>
            {getIcon()}
          </div>
        </div>
        
        <h4 className="text-xl font-medium mb-3 relative">
          {title}
          <div className={`h-0.5 w-0 bg-gradient-to-r ${getGradientBg()} transition-all duration-500 mx-auto ${isHovered ? 'w-1/3' : 'w-0'}`}></div>
        </h4>
        
        <p className="text-muted-foreground relative">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default StrengthCard;


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
  
  const getIcon = () => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="text-primary" size={36} />;
      case 'chart':
        return <BarChart3 className="text-primary" size={36} />;
      case 'handshake':
        return <HandshakeIcon className="text-primary" size={36} />;
      default:
        return null;
    }
  };
  
  return (
    <Card 
      className="h-full overflow-hidden group transition-all duration-300 border-none bg-white/5 backdrop-blur-sm hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 text-center relative overflow-hidden h-full">
        <div className={`absolute ${isHovered ? 'scale-100 opacity-10' : 'scale-50 opacity-0'} transition-all duration-500 ease-out rounded-full w-[200%] aspect-square bg-gradient-to-tr from-black/10 to-black/5 -top-1/2 -left-1/2`}></div>
        
        <div className="flex justify-center mb-6 relative">
          <div className={`transition-transform duration-300 p-4 rounded-full bg-[#D3E4FD]/30`}>
            {getIcon()}
          </div>
        </div>
        
        <h4 className="text-xl font-medium mb-3 relative text-foreground">
          {title}
        </h4>
        
        <p className="text-muted-foreground relative">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default StrengthCard;

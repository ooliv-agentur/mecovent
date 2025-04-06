
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
        return <Trophy className="text-[#1EAEDB] stroke-[1.5]" size={36} />;
      case 'chart':
        return <BarChart3 className="text-[#1EAEDB] stroke-[1.5]" size={36} />;
      case 'handshake':
        return <HandshakeIcon className="text-[#1EAEDB]" size={36} />;
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
        <div className={`absolute ${isHovered ? 'scale-100 opacity-10' : 'scale-50 opacity-0'} transition-all duration-500 ease-out rounded-full w-[200%] aspect-square bg-gradient-to-tr from-[#1EAEDB]/60 to-[#33C3F0]/40 -top-1/2 -left-1/2`}></div>
        
        <div className="flex justify-center mb-6 relative">
          <div className={`transition-transform duration-300 p-4 rounded-full bg-[#D3E4FD]/30 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            {getIcon()}
          </div>
        </div>
        
        <h4 className="text-xl font-medium mb-3 relative">
          {title}
          <div className={`h-0.5 w-0 bg-gradient-to-r from-[#1EAEDB] to-[#33C3F0] transition-all duration-500 mx-auto ${isHovered ? 'w-1/3' : 'w-0'}`}></div>
        </h4>
        
        <p className="text-muted-foreground relative">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default StrengthCard;

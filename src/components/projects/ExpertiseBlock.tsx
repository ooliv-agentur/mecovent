
import React from 'react';
import { Pill, Car, Building2, Cpu, GraduationCap, Beaker } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IndustryItem {
  title: string;
  description: string;
  details: string;
}

interface ExpertiseBlockProps {
  industry: IndustryItem;
  index: number;
  isActive: boolean;
}

const ExpertiseBlock = ({ industry, index, isActive }: ExpertiseBlockProps) => {
  // Background images array (using existing images from the project)
  const backgroundImages = [
    "/lovable-uploads/e8ff3d2b-2cdb-410f-8f87-23a186090341.png", // Pharma
    "/lovable-uploads/43952276-1e56-4b27-8b37-0f0b1fb8b29f.png", // Automobil
    "/lovable-uploads/fea35b42-ca42-4504-99e8-b3dff4088edc.png", // Chemie
    "/lovable-uploads/ace534d0-d95e-41f7-b18a-f0801e6112e4.png", // Finanz
    "/lovable-uploads/9a28bc3c-dfc5-4caa-b4e5-1bfcc9df1300.png", // Technologie
    "/lovable-uploads/e7c6685c-c5c7-4909-9502-dc03749ac872.png"  // Bildung
  ];
  
  return (
    <div 
      className={cn(
        "relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden",
        "transition-all duration-500",
        isActive ? "scale-100" : "scale-95 opacity-90"
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={backgroundImages[index % backgroundImages.length]}
          alt={industry.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20"></div>
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
        <div 
          className={cn(
            "w-full max-w-xl mx-auto bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg",
            "transition-all duration-700 transform",
            isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"
          )}
        >
          <div className="mb-6 flex justify-center">
            {getIndustryIcon(index)}
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
            {industry.title}
          </h3>
          
          <p className="text-center text-gray-700 mb-2">
            {industry.description}
          </p>
          
          <p className="text-sm text-center text-gray-600">
            {industry.details}
          </p>
        </div>
      </div>
    </div>
  );
};

const getIndustryIcon = (index: number) => {
  const iconClassNames = "w-8 h-8 text-[#009fe3]";
  const iconComponents = [
    <Pill className={iconClassNames} />,
    <Car className={iconClassNames} />,
    <Beaker className={iconClassNames} />,
    <Building2 className={iconClassNames} />,
    <Cpu className={iconClassNames} />,
    <GraduationCap className={iconClassNames} />
  ];
  
  return (
    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full border border-gray-200 shadow-md">
      {iconComponents[index % iconComponents.length]}
    </div>
  );
};

export default ExpertiseBlock;

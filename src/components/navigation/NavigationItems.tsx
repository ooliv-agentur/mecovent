
import React from 'react';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

export const navigationItems = [
  { id: 'hero', label: 'Start' },
  { id: 'ueber-uns', label: 'Über Uns' },
  { id: 'services', label: 'Leistungen' },
  { id: 'projects', label: 'Unsere Expertise' },
  { id: 'eventformate', label: 'Veranstaltungsformate' },
  { id: 'testimonials', label: 'Kundenstimmen' },
  { id: 'contact', label: 'Kontakt' }
];

interface NavigationItemsProps {
  activeSection: string;
  onItemClick: (sectionId: string) => void;
}

export const NavigationItems: React.FC<NavigationItemsProps> = ({
  activeSection,
  onItemClick,
}) => {
  return (
    <ul className="space-y-8 text-center">
      {navigationItems.map((item) => (
        <li key={item.id}>
          <button
            onClick={() => onItemClick(item.id)}
            className={cn(
              "text-lg md:text-xl lg:text-2xl py-2 px-4 transition-all duration-200 rounded-md relative",
              activeSection === item.id 
                ? "font-medium text-[#009fe3]" 
                : "text-gray-700 hover:text-[#009fe3] font-normal",
              "group"
            )}
          >
            {item.label}
            <span className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#009fe3] transition-all duration-300",
              activeSection === item.id ? "w-2/3" : "w-0 group-hover:w-2/3"
            )}></span>
          </button>
        </li>
      ))}
    </ul>
  );
};

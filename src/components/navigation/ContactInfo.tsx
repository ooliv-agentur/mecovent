
import React from 'react';
import { Phone, Mail } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="py-10 border-t border-gray-100 mt-16">
      <div className="container mx-auto max-w-md px-4">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-700 mb-6">
            Wir freuen uns auf Ihre Anfrage
          </h3>
          <div className="flex flex-col items-center space-y-5">
            <a 
              href="tel:+4961357039590" 
              className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors text-base md:text-lg"
            >
              <Phone size={16} className="mr-3 text-[#009fe3]" />
              <span>+49 6135 70 39 59 -0</span>
            </a>
            <a 
              href="mailto:info@mecovent.de" 
              className="flex items-center text-gray-700 hover:text-[#009fe3] transition-colors text-base md:text-lg"
            >
              <Mail size={16} className="mr-3 text-[#009fe3]" />
              <span>info@mecovent.de</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

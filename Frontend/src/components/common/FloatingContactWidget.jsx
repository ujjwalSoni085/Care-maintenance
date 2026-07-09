import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingContactWidget = ({ 
  whatsappNumber = "+91 8287003241", 
  phoneNumber = "+91 8287003241",
  whatsappMessage = "Hi Care Maintenance, I want to book a service" 
}) => {
  // Sanitize for WhatsApp (only numbers, e.g., '918287003241')
  const cleanWhatsapp = whatsappNumber.replace(/\D/g, '');
  // Sanitize for Phone (keep + and numbers)
  const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');

  const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${cleanPhone}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-slide-in-right">
      {/* WhatsApp Button */}
      <div className="relative group">
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25 duration-1000"></div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/50 backdrop-blur-md bg-opacity-100 border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
          <FaWhatsapp size={34} className="drop-shadow-md" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            Chat on WhatsApp
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90"></span>
          </span>
        </a>
      </div>

      {/* Call Button */}
      <div className="relative group">
        <a
          href={phoneUrl}
          aria-label="Call Us"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/50 backdrop-blur-md bg-opacity-100 border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
          <Phone size={26} className="animate-pulse-custom drop-shadow-md" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-gray-900/90 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
            Call Us
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContactWidget;

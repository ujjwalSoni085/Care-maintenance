import React, { useState } from 'react';

const LocationMap = ({ address, mapEmbedUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[450px] bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-gray-400 mb-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-gray-500 font-medium text-sm">Loading Map...</span>
          </div>
        </div>
      )}
      <iframe
        title={`Map of ${address}`}
        src={mapEmbedUrl}
        className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default LocationMap;

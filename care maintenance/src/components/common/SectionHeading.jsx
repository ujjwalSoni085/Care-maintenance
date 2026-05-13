import React from 'react';

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  accentWord,
  className = ''
}) => {
  const alignmentClass = centered ? 'text-center items-center' : 'text-left items-start';
  
  const renderTitle = () => {
    if (!accentWord) return title;
    
    // Split the title by the accent word (case-insensitive) to highlight it
    const parts = title.split(new RegExp(`(${accentWord})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === accentWord.toLowerCase() ? 
        <span key={i} className="text-accent">{part}</span> : 
        part
    );
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-heading">
        {renderTitle()}
      </h2>
      
      {/* Accent colored underline bar */}
      <div className="w-20 h-1.5 bg-accent rounded-full mb-6"></div>
      
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

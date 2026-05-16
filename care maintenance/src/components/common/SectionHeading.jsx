import React from 'react';
import { motion } from 'framer-motion';

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
    <div className={`flex flex-col mb-10 sm:mb-14 ${alignmentClass} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-heading tracking-tight leading-tight">
        {renderTitle()}
      </h2>
      
      {/* Accent colored underline bar */}
      <motion.div 
        initial={{ width: 0 }} 
        whileInView={{ width: '3rem' }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-1 bg-accent rounded-full mb-6"
      />
      
      {subtitle && (
        <p className="text-gray-600 max-w-2xl text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

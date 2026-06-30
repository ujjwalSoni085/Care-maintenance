import React from 'react';

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const baseStyles = "bg-card rounded-2xl shadow-md transition-all duration-300";
  const hoverStyles = hoverable ? "hover:-translate-y-1 hover:shadow-xl" : "";
  
  // Combine all styles, filtering out any extra spaces
  const cardStyles = `${baseStyles} ${hoverStyles} ${className}`.trim();

  return (
    <div className={cardStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;
 
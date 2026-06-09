import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating, setRating, readOnly = false, size = "text-xl" }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        
        return (
          <label key={index} className={readOnly ? "cursor-default" : "cursor-pointer"}>
            {!readOnly && (
              <input
                type="radio"
                name="rating"
                className="hidden"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
            )}
            <FaStar
              className={`transition-colors duration-200 ${size} ${
                ratingValue <= (hover || rating)
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
              onMouseEnter={() => !readOnly && setHover(ratingValue)}
              onMouseLeave={() => !readOnly && setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;

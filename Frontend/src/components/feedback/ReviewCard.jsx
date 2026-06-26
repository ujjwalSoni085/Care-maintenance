import React, { useState } from 'react';
import RatingStars from './RatingStars';
import { FiUser } from 'react-icons/fi';

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const date = new Date(review.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
          {review.name ? (
            <span className="font-bold text-lg">{review.name.charAt(0).toUpperCase()}</span>
          ) : (
            <FiUser className="text-xl" />
          )}
        </div>
        <div>
          <h4 className="font-semibold text-slate-800">{review.name || 'Anonymous User'}</h4>
          <div className="flex items-center gap-2 mt-1">
            <RatingStars rating={review.rating} readOnly size="text-sm" />
            <span className="text-xs text-slate-500">{date}</span>
          </div>
        </div>
      </div>
      <div className="flex-grow flex flex-col items-start">
        <p className={`text-slate-600 leading-relaxed text-sm ${!isExpanded ? 'line-clamp-3' : ''}`}>
          "{review.message}"
        </p>
        {review.message && review.message.length > 120 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-700 font-medium text-xs mt-2 transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;

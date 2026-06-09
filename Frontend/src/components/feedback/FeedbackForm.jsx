import React, { useState, useEffect } from 'react';
import RatingStars from './RatingStars';
import { feedbackService } from '../../services/feedbackService';
import toast from 'react-hot-toast';

const FeedbackForm = ({ existingFeedback = null, onSuccess, onCancel }) => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (existingFeedback) {
      setRating(existingFeedback.rating);
      setMessage(existingFeedback.message);
    }
  }, [existingFeedback]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }
    if (!message.trim()) {
      toast.error('Please enter a feedback message');
      return;
    }

    setIsSubmitting(true);
    try {
      if (existingFeedback) {
        await feedbackService.updateFeedback(existingFeedback._id, { rating, message });
        toast.success('Feedback updated successfully!');
      } else {
        await feedbackService.createFeedback({ rating, message });
        toast.success('Feedback submitted successfully!');
      }
      if (onSuccess) onSuccess();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to submit feedback. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-6">
        {existingFeedback ? 'Edit Your Feedback' : 'Leave a Review'}
      </h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">Overall Rating *</label>
        <RatingStars rating={rating} setRating={setRating} size="text-3xl" />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Your Feedback *
        </label>
        <textarea
          id="message"
          rows="4"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
          placeholder="Tell us about your experience..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : (existingFeedback ? 'Update Feedback' : 'Submit Feedback')}
        </button>
        {existingFeedback && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-all duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default FeedbackForm;

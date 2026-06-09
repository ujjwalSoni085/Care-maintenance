import React, { useState, useEffect } from 'react';
import { feedbackService } from '../services/feedbackService';
import { useAuth } from '../context/AuthContext';
import Container from '../components/common/Container';
import ReviewCard from '../components/feedback/ReviewCard';
import FeedbackForm from '../components/feedback/FeedbackForm';
import RatingStars from '../components/feedback/RatingStars';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

const FeedbackPage = () => {
  const { isAuthenticated, user } = useAuth();
  const [feedbacks, setFeedbacks] = useState([]);
  const [stats, setStats] = useState({ averageRating: 0, totalReviews: 0 });
  const [myFeedback, setMyFeedback] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      const data = await feedbackService.getAllFeedbacks();
      setFeedbacks(data.data);
      setStats({
        averageRating: data.averageRating,
        totalReviews: data.totalReviews
      });
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      toast.error('Failed to load reviews');
    }
  };

  const fetchMyFeedback = async () => {
    if (!isAuthenticated) return;
    try {
      const data = await feedbackService.getMyFeedback();
      if (data.data) {
        setMyFeedback(data.data);
      }
    } catch (error) {
      console.error('Error fetching my feedback:', error);
    }
  };

  const loadData = async () => {
    setIsLoading(true);
    await Promise.all([fetchFeedbacks(), fetchMyFeedback()]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [isAuthenticated]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete your feedback?')) return;
    
    try {
      await feedbackService.deleteFeedback(myFeedback._id);
      toast.success('Feedback deleted successfully');
      setMyFeedback(null);
      fetchFeedbacks(); // Refresh the list
    } catch (error) {
      toast.error('Failed to delete feedback');
    }
  };

  const handleSuccess = () => {
    setIsEditing(false);
    loadData();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Abstract shapes for background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Feedback & Reviews</h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              We value your feedback and continuously improve our services based on your suggestions. See what others are saying about us.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 flex items-center justify-center gap-2">
                  <span className="text-yellow-400">★</span> {stats.averageRating}
                </div>
                <div className="text-sm text-blue-200 uppercase tracking-wider font-medium">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-white/20"></div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{stats.totalReviews}</div>
                <div className="text-sm text-blue-200 uppercase tracking-wider font-medium">Total Reviews</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="mt-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content - Reviews List */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              Recent Reviews
              <span className="bg-blue-100 text-blue-700 text-sm py-1 px-3 rounded-full font-semibold">
                {feedbacks.length}
              </span>
            </h2>
            
            {feedbacks.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl text-slate-300">★</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">No reviews yet</h3>
                <p className="text-slate-500">Be the first to share your experience with us!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {feedbacks.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Submission Form / User's Own Feedback */}
          <div className="lg:col-span-4 order-1 lg:order-2 sticky top-28">
            {!isAuthenticated ? (
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiEdit2 className="text-2xl text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Have something to say?</h3>
                <p className="text-slate-600 mb-6">Log in to leave your feedback and help us improve our services.</p>
                <a href="/login" className="inline-block w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all duration-300">
                  Log In to Review
                </a>
              </div>
            ) : myFeedback && !isEditing ? (
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  Your Review
                </h3>
                <div className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <RatingStars rating={myFeedback.rating} readOnly size="text-lg" />
                  </div>
                  <p className="text-slate-700 leading-relaxed italic">"{myFeedback.message}"</p>
                  <p className="text-xs text-slate-500 mt-4 font-medium">
                    Posted on {new Date(myFeedback.createdAt).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                  >
                    <FiEdit2 /> Edit
                  </button>
                  <button 
                    onClick={handleDelete}
                    className="flex-1 flex justify-center items-center gap-2 px-4 py-2.5 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-red-50 hover:text-red-600 transition-all duration-300"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>
            ) : (
              <FeedbackForm 
                existingFeedback={myFeedback} 
                onSuccess={handleSuccess}
                onCancel={myFeedback ? () => setIsEditing(false) : undefined}
              />
            )}
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default FeedbackPage;

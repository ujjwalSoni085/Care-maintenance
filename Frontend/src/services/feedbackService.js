import api from '../api/axios';

const API_URL = '/feedback';

export const feedbackService = {
  // Get all feedbacks
  getAllFeedbacks: async () => {
    const response = await api.get(API_URL);
    return response.data;
  },

  // Get current user's feedback
  getMyFeedback: async () => {
    const response = await api.get(`${API_URL}/my`);
    return response.data;
  },

  // Create new feedback
  createFeedback: async (feedbackData) => {
    const response = await api.post(API_URL, feedbackData);
    return response.data;
  },

  // Update existing feedback
  updateFeedback: async (id, feedbackData) => {
    const response = await api.put(`${API_URL}/${id}`, feedbackData);
    return response.data;
  },

  // Delete feedback
  deleteFeedback: async (id) => {
    const response = await api.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

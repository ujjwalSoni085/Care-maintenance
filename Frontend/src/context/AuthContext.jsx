import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('care_maintenance_token');
      if (token) {
        try {
          const response = await api.get('/auth/me');
          const userData = response.data?.data?.user || response.data?.data;
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Failed to load user from backend:', error);
          setUser(null);
          setIsAuthenticated(false);
          localStorage.removeItem('care_maintenance_token');
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login with Email/Password (Local API)
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      const { token, user: userData } = response.data.data;
      
      localStorage.setItem('care_maintenance_token', token);
      setUser(userData);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed. Please check your credentials.' 
      };
    }
  };

  // Register with Email/Password (Local API)
  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      // We don't automatically log them in per user request (redirect to Login instead).
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed. Please try again.' 
      };
    }
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    try {
      const response = await api.post('/auth/forgot-password', { email });
      return { success: true, message: response.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to send OTP. Please try again.'
      };
    }
  };

  // Verify OTP
  const verifyOTP = async (email, otp) => {
    try {
      const response = await api.post('/auth/verify-otp', { email, otp });
      return { success: true, message: response.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Invalid or expired OTP.'
      };
    }
  };

  // Reset Password
  const resetPassword = async (email, otp, newPassword) => {
    try {
      const response = await api.post('/auth/reset-password', { email, otp, newPassword });
      return { success: true, message: response.data.message };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Failed to reset password.'
      };
    }
  };

  // Logout
  const logout = async () => {
    try {
      localStorage.removeItem('care_maintenance_token');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    verifyOTP,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

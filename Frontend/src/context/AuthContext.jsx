import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '../api/axios';
import { auth, googleProvider } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  onAuthStateChanged,
  signOut
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Authenticate with Backend using Firebase token
  const authenticateWithBackend = async (firebaseUser) => {
    try {
      const idToken = await firebaseUser.getIdToken();
      const response = await api.post('/auth/firebase-auth', { idToken });
      const { token, user: userData } = response.data.data || response.data;
      
      localStorage.setItem('care_maintenance_token', token);
      setUser(userData);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      console.error('Backend auth failed:', error);
      signOut(auth); // Sign out from Firebase if backend fails
      return { 
        success: false, 
        message: error.response?.data?.message || 'Authentication failed on server.' 
      };
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Only load user if we already have a local token (meaning they are already logged in to our backend)
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
            signOut(auth);
          }
        }
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('care_maintenance_token');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login with Email/Password
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return await authenticateWithBackend(userCredential.user);
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Login failed. Please check your credentials.' 
      };
    }
  };

  // Register with Email/Password
  const register = async (userData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      return await authenticateWithBackend(userCredential.user);
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Registration failed. Please try again.' 
      };
    }
  };

  // Login with Google
  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      return await authenticateWithBackend(userCredential.user);
    } catch (error) {
      return { 
        success: false, 
        message: error.message || 'Google Login failed. Please try again.' 
      };
    }
  };

  // Logout
  const logout = async () => {
    try {
      await signOut(auth);
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
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

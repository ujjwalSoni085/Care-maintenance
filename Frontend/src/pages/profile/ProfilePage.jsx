import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiCalendar, FiShield, FiEdit2, FiLogOut } from 'react-icons/fi';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext';
import Container from '../../components/common/Container';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { logout, user: authUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/auth/me');
        // The backend returns the user object inside 'data.user'
        const userData = response.data?.data?.user || response.data?.data || response.data;
        setProfileData(userData);
        setError('');
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile information. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-red-50 text-red-600 p-6 rounded-2xl max-w-md w-full text-center border border-red-100 shadow-sm">
          <p className="mb-4 font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium shadow-sm"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!profileData) return null;

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">My Profile</h1>
              <p className="text-slate-600">Manage your personal information and account settings.</p>
            </div>
            <div className="flex items-center gap-3">
              
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors border border-red-100 shadow-sm md:hidden"
              >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column: Avatar Card */}
            <div className="col-span-1">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
                <div className="w-32 h-32 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-6 shadow-md border-4 border-blue-50">
                  {profileData.name ? profileData.name.charAt(0).toUpperCase() : <FiUser />}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">{profileData.name || 'User'}</h2>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-6">
                  {profileData.role || 'Customer'}
                </span>
                
                <p className="text-sm text-slate-500 mt-auto pt-6 border-t border-gray-100 w-full">
                  Member since {formatDate(profileData.createdAt)}
                </p>
              </div>
            </div>

            {/* Right Column: Details Card */}
            <div className="col-span-1 md:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <FiUser className="text-blue-600" /> Personal Information
                </h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block group-hover:text-blue-600 transition-colors">
                        Full Name
                      </label>
                      <div className="flex items-center gap-3 text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all">
                        <FiUser className="text-slate-400 group-hover:text-blue-500" />
                        <span className="font-medium">{profileData.name || 'Not provided'}</span>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block group-hover:text-blue-600 transition-colors">
                        Email Address
                      </label>
                      <div className="flex items-center gap-3 text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all">
                        <FiMail className="text-slate-400 group-hover:text-blue-500" />
                        <span className="font-medium truncate">{profileData.email || 'Not provided'}</span>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block group-hover:text-blue-600 transition-colors">
                        Phone Number
                      </label>
                      <div className="flex items-center gap-3 text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all">
                        <FiPhone className="text-slate-400 group-hover:text-blue-500" />
                        <span className="font-medium">{profileData.phone || 'Not provided'}</span>
                      </div>
                    </div>

                    {/* Account Role */}
                    <div className="group">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block group-hover:text-blue-600 transition-colors">
                        Account Type
                      </label>
                      <div className="flex items-center gap-3 text-slate-800 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-all">
                        <FiShield className="text-slate-400 group-hover:text-blue-500" />
                        <span className="font-medium capitalize">{profileData.role || 'Customer'}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-blue-50 rounded-xl p-4 flex items-start gap-4 border border-blue-100">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <FiCalendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Account History</h4>
                      <p className="text-sm text-slate-600 mt-1">
                        Your account was created on <span className="font-semibold text-slate-800">{formatDate(profileData.createdAt)}</span>. Thank you for being a valued part of Care Maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProfilePage;

import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/layout/ScrollToTop';
import SplashIntro from './components/common/SplashIntro';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import FloatingContactWidget from './components/common/FloatingContactWidget';
import './App.css';

const LocationPage = React.lazy(() => import('./pages/LocationPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const TeamPage = React.lazy(() => import('./pages/TeamPage'));
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'));
const RegisterPage = React.lazy(() => import('./pages/auth/RegisterPage'));
const ForgotPasswordPage = React.lazy(() => import('./pages/auth/ForgotPasswordPage'));
const VerifyOTPPage = React.lazy(() => import('./pages/auth/VerifyOTPPage'));
const ResetPasswordPage = React.lazy(() => import('./pages/auth/ResetPasswordPage'));
const ProfilePage = React.lazy(() => import('./pages/profile/ProfilePage'));
const EasyPaymentPage = React.lazy(() => import('./pages/services/EasyPaymentPage'));
const SatisfactionGuaranteePage = React.lazy(() => import('./pages/services/SatisfactionGuaranteePage'));
const TechnicianOnboardingPage = React.lazy(() => import('./pages/services/TechnicianOnboardingPage'));
const FeedbackPage = React.lazy(() => import('./pages/FeedbackPage'));
const TermsAndConditionsPage = React.lazy(() => import('./pages/TermsAndConditionsPage'));

// Blog Pages
const BlogListPage = React.lazy(() => import('./pages/blog/BlogListPage'));
const BlogPostPage = React.lazy(() => import('./pages/blog/BlogPostPage'));

// Admin Pages
const AdminLayout = React.lazy(() => import('./pages/admin/AdminLayout'));
const AdminBlogList = React.lazy(() => import('./pages/admin/AdminBlogList'));
const AdminBlogCreateEdit = React.lazy(() => import('./pages/admin/AdminBlogCreateEdit'));

// Service Detail Pages
const ElectricianPage = React.lazy(() => import('./pages/services/ElectricianPage'));
const PlumberPage = React.lazy(() => import('./pages/services/PlumberPage'));
const CarpenterPage = React.lazy(() => import('./pages/services/Carpainter'));
const ACServicesPage = React.lazy(() => import('./pages/services/ACServicesPage'));
const PestControlPage = React.lazy(() => import('./pages/services/PestControlPage'));
const ApplianceMaintenancePage = React.lazy(() => import('./pages/services/ApplianceMaintenancePage'));
const CommercialApplianceMaintenancePage = React.lazy(() => import('./pages/services/CommercialApplianceMaintenancePage'));
const WaterTankCleaningPage = React.lazy(() => import('./pages/services/WaterTankCleaningPage'));
const CommercialPlumberPage = React.lazy(() => import('./pages/services/CommercialPlumberPage'));
const CommercialHVACMaintenance = React.lazy(() => import('./pages/services/CommercialHVACMaintenance'));
const CommercialElectricalSystems = React.lazy(() => import('./pages/services/CommercialElectricalSystems'));
const CommercialCarpenter = React.lazy(() => import('./pages/services/CommercialCarpenter'));
const CommercialPestControl = React.lazy(() => import('./pages/services/CommercialPestControl'));
const CorporateComplaintManagement = React.lazy(() => import('./pages/services/CorporateComplaintManagement'));
const GovernmentAMCPage = React.lazy(() => import('./pages/services/GovernmentAMCPage'));
const GovernmentTenderPage = React.lazy(() => import('./pages/services/GovernmentTenderPage'));
const OnCallServicesPage = React.lazy(() => import('./pages/services/OnCallServicesPage'));
function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if we need to show splash (only once per session)
    if (!sessionStorage.getItem('care_maintenance_intro')) {
      setShowSplash(true);
    }

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
    <AuthProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        {showSplash && <SplashIntro onComplete={() => setShowSplash(false)} />}
        <ScrollToTop />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow pt-[72px]">
          <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh]"><div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/verify-otp" element={<VerifyOTPPage />} />
              <Route path="/reset-password" element={<ResetPasswordPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="/easy-payment" element={<EasyPaymentPage />} />
              <Route path="/satisfaction-guarantee" element={<SatisfactionGuaranteePage />} />
              <Route path="/technician-onboarding" element={<TechnicianOnboardingPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
              
              {/* Service Pages */}
              <Route path="/services/electrician" element={<ElectricianPage />} />
              <Route path="/services/plumber" element={<PlumberPage />} />
              <Route path="/services/carpenter" element={<CarpenterPage />} />
              <Route path="/services/ac-services" element={<ACServicesPage />} />
              <Route path="/services/pest-control" element={<PestControlPage />} />
              <Route path="/services/appliance-maintenance" element={<ApplianceMaintenancePage />} />
              <Route path="/services/water-tank-cleaning" element={<WaterTankCleaningPage />} />

              {/* Aliases for Header Links */}
              <Route path="/residential/electrician" element={<ElectricianPage />} />
              <Route path="/residential/plumber" element={<PlumberPage />} />
              <Route path="/residential/carpenter" element={<CarpenterPage />} />
              <Route path="/residential/ac-services" element={<ACServicesPage />} />
              <Route path="/residential/pest-control" element={<PestControlPage />} />
              <Route path="/residential/appliance-maintenance" element={<ApplianceMaintenancePage />} />
              <Route path="/residential/water-tank-cleaning" element={<WaterTankCleaningPage />} />
              
              <Route path="/commercial/plumber" element={<CommercialPlumberPage />} />
              <Route path="/commercial/hvac-maintenance" element={<CommercialHVACMaintenance />} />
              <Route path="/commercial/electrical-systems" element={<CommercialElectricalSystems />} />
              <Route path="/commercial/carpenter" element={<CommercialCarpenter />} />
              <Route path="/commercial/pest-control" element={<CommercialPestControl />} />
              <Route path="/commercial/appliance-maintenance" element={<CommercialApplianceMaintenancePage />} />
              <Route path="/commercial/corporate-helpdesk" element={<CorporateComplaintManagement />} />
              
              <Route path="/services/government-amc" element={<GovernmentAMCPage />} />
              <Route path="/services/government-tender" element={<GovernmentTenderPage />} />
              <Route path="/services/on-call" element={<OnCallServicesPage />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Admin Dashboard */}
              <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
                <Route index element={<div className="text-2xl font-bold">Welcome to Admin Dashboard</div>} />
                <Route path="blogs" element={<AdminBlogList />} />
                <Route path="blogs/create" element={<AdminBlogCreateEdit />} />
                <Route path="blogs/edit/:id" element={<AdminBlogCreateEdit />} />
              </Route>
              
            </Routes>
          </Suspense>
        </main>
        <FloatingContactWidget />
        <Footer />
      </div>
      </BrowserRouter>
    </AuthProvider>
    </HelmetProvider>
  );
}

export default App;

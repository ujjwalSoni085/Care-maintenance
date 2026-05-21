import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ScrollToTop from './components/layout/ScrollToTop';
import './App.css';

const LocationPage = React.lazy(() => import('./pages/LocationPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const EasyPaymentPage = React.lazy(() => import('./pages/services/EasyPaymentPage'));
const SatisfactionGuaranteePage = React.lazy(() => import('./pages/services/SatisfactionGuaranteePage'));
const TechnicianOnboardingPage = React.lazy(() => import('./pages/services/TechnicianOnboardingPage'));


// Service Detail Pages
const ElectricianPage = React.lazy(() => import('./pages/services/ElectricianPage'));
const PlumberPage = React.lazy(() => import('./pages/services/PlumberPage'));
const CarpenterPage = React.lazy(() => import('./pages/services/Carpainter'));
const ACServicesPage = React.lazy(() => import('./pages/services/ACServicesPage'));
const PestControlPage = React.lazy(() => import('./pages/services/PestControlPage'));
const ApplianceMaintenancePage = React.lazy(() => import('./pages/services/ApplianceMaintenancePage'));
const WaterTankCleaningPage = React.lazy(() => import('./pages/services/WaterTankCleaningPage'));
function App() {
  return (
    <BrowserRouter>
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
              <Route path="/easy-payment" element={<EasyPaymentPage />} />
              <Route path="/satisfaction-guarantee" element={<SatisfactionGuaranteePage />} />
              <Route path="/technician-onboarding" element={<TechnicianOnboardingPage />} />
              
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
              
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

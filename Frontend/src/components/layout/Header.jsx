import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';
import { FaBolt, FaWrench, FaHammer, FaSnowflake, FaBug, FaPlug, FaWater, FaFan, FaFireExtinguisher, FaBuilding, FaLeaf } from 'react-icons/fa6';
import { FaCoffee } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';
import { useAuth } from '../../context/AuthContext';
import MobileMenu from './MobileMenu';
import Container from '../common/Container';
import { FaHeadset } from "react-icons/fa";

const residentialServices = [
  { name: 'Electrician', icon: <FaBolt className="text-yellow-500" />, path: '/residential/electrician' },
  { name: 'Plumber', icon: <FaWrench className="text-blue-400" />, path: '/residential/plumber' },
  { name: 'Carpenter', icon: <FaHammer className="text-orange-500" />, path: '/residential/carpenter' },
  { name: 'AC Services', icon: <FaSnowflake className="text-blue-300" />, path: '/residential/ac-services' },
  { name: 'Pest Control', icon: <FaBug className="text-green-600" />, path: '/residential/pest-control' },
  { name: 'All Electronic Appliance Maintenance', icon: <FaPlug className="text-gray-500" />, path: '/residential/appliance-maintenance' },
  { name: 'Water Tank Cleaning (Overhead & Underground)', icon: <FaWater className="text-blue-600" />, path: '/residential/water-tank-cleaning' },
];

const commercialServices = [
  { name: 'HVAC Maintenance', icon: <FaFan className="text-blue-500" />, path: '/commercial/hvac-maintenance' },
  { name: 'Electrical Systems', icon: <FaBolt className="text-yellow-500" />, path: '/commercial/electrical-systems' },
  { name: 'Plumber', icon: <FaWrench className="text-blue-400" />, path: '/commercial/plumber' },
  { name: 'Carpenter', icon: <FaHammer className="text-orange-500" />, path: '/commercial/carpenter' },
  { name: 'Pest Control', icon: <FaBug className="text-green-600" />, path: '/commercial/pest-control' },
  { name: 'All Electronic Appliance Maintenance', icon: <FaPlug className="text-gray-500" />, path: '/commercial/appliance-maintenance' },
  { name: 'Corporate Complaint & Query Management',icon: <FaHeadset className="text-gray-500" />,path: '/commercial/corporate-helpdesk'},
];

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isScrolled = scrollPosition > 50;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex flex-col justify-center ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 h-[72px]' : 'bg-transparent h-[88px]'
        }`}
      >
        <Container>
          <div className="flex items-center gap-12 justify-between w-full">
            {/* Logo */}
            <Link to="/" onClick={handleHomeClick}>
            <div className="flex items-center flex-1 pr-4">
                <img
                  src="/images/care-maintenance-logo-removebg-preview.webp"
                  alt="Care Maintenance Logo"
                  className="h-11 md:h-15 w-auto object-contain"
                />
            </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
              <Link to="/" onClick={handleHomeClick} className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Home</Link>
              
              {/* Residential Dropdown */}
              <div 
                className="relative flex items-center"
                onMouseEnter={() => setHoveredDropdown('residential')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={`flex items-center gap-1 font-medium hover:text-blue-600 transition-all duration-300 py-2 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                  Residential <FiChevronDown className={`transition-transform ${hoveredDropdown === 'residential' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 transform origin-top flex flex-col overflow-hidden ${hoveredDropdown === 'residential' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {residentialServices.map((service, idx) => {
                      const isActive = location.pathname === service.path;
                      return (
                        <Link key={idx} to={service.path} onClick={() => setHoveredDropdown(null)} className={`flex items-start gap-3 p-2 rounded-lg transition-colors group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
                          <div className={`p-2 rounded-lg shadow-sm transition-colors ${isActive ? 'bg-white' : 'bg-blue-50 group-hover/item:bg-white'}`}>
                            {service.icon}
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{service.name}</p>
                            <p className={`text-xs mt-0.5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>Professional residential service</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <Link to="/residential" onClick={() => setHoveredDropdown(null)} className="text-sm font-medium text-blue-600 hover:text-blue-700">View all residential services &rarr;</Link>
                  </div>
                </div>
              </div>

              {/* Commercial Dropdown */}
              <div 
                className="relative flex items-center"
                onMouseEnter={() => setHoveredDropdown('commercial')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={`flex items-center gap-1 font-medium hover:text-blue-600 transition-all duration-300 py-2 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                  Commercial <FiChevronDown className={`transition-transform ${hoveredDropdown === 'commercial' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 transform origin-top flex flex-col overflow-hidden ${hoveredDropdown === 'commercial' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {commercialServices.map((service, idx) => {
                      const isActive = location.pathname === service.path;
                      return (
                        <Link key={idx} to={service.path} onClick={() => setHoveredDropdown(null)} className={`flex items-start gap-3 p-2 rounded-lg transition-colors group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
                          <div className={`p-2 rounded-lg shadow-sm transition-colors ${isActive ? 'bg-white' : 'bg-blue-50 group-hover/item:bg-white'}`}>
                            {service.icon}
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{service.name}</p>
                            <p className={`text-xs mt-0.5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>Expert commercial solutions</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <Link to="/commercial" onClick={() => setHoveredDropdown(null)} className="text-sm font-medium text-blue-600 hover:text-blue-700">View all commercial services &rarr;</Link>
                  </div>
                </div>
              </div>

              <a href="/#reviews" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Happy Customers</a>
              <Link to="/about" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>About</Link>
            </nav>

            {/* Actions */}
            <div className="flex-1 flex justify-end items-center gap-4 ml-8 xl:ml-12">
              {isAuthenticated ? (
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <FiUser />
                    </div>
                    <span className="hidden lg:block truncate max-w-[120px]">{user?.name}</span>
                  </div>
                  <button 
                    onClick={logout}
                    className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors flex items-center gap-1"
                    title="Logout"
                  >
                    <FiLogOut /> <span className="hidden lg:block">Logout</span>
                  </button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <Link to="/login" className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-800 hover:text-blue-600' : 'text-slate-800 hover:text-blue-600'}`}>
                    Log in
                  </Link>
                  <Link to="/register" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-full shadow-sm transition-all hover:-translate-y-0.5">
                    Sign up
                  </Link>
                </div>
              )}
              
              <Link to="/contact" className="hidden md:inline-flex items-center justify-center px-7 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-blue-600 rounded-full shadow-md shadow-slate-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
                Contact Us
              </Link>
              
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-900 md:text-white hover:bg-white/10'}`}
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        residentialServices={residentialServices}
        commercialServices={commercialServices}
      />
    </>
  );
};

export default Header;

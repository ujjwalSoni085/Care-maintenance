import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiUser, FiLogOut, FiMessageSquare } from 'react-icons/fi';
import { FaBolt, FaWrench, FaHammer, FaSnowflake, FaBug, FaPlug, FaWater, FaFan, FaFireExtinguisher, FaBuilding, FaLeaf } from 'react-icons/fa6';
import { FaCoffee } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';
import { useAuth } from '../../context/AuthContext';
import MobileMenu from './MobileMenu';
import Container from '../common/Container';
import { FaHeadset } from "react-icons/fa";
import toast from 'react-hot-toast';

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

const governmentServices = [
  { name: 'Government AMC', icon: <FaBuilding className="text-blue-600" />, path: '/services/government-amc' },
  { name: 'Government Tenders', icon: <FaBuilding className="text-gray-500" />, path: '/services/government-tender' },
  { name: 'On-Call Services', icon: <FaHeadset className="text-green-500" />, path: '/services/on-call' },
];

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    setHoveredDropdown(null);
    toast.success('Logged out successfully');
    navigate('/');
    setTimeout(() => {
      logout();
    }, 100);
  };

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
          <div className="flex items-center justify-between w-full gap-4">
            {/* Logo */}
            <div className="flex-1 flex items-center">
              <Link to="/" onClick={handleHomeClick} className="z-50">
                <img
                  src="/images/care-maintenance-logo-removebg-preview.webp"
                  alt="Care Maintenance Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-none">
              <Link to="/" onClick={handleHomeClick} className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Home</Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative flex items-center"
                onMouseEnter={() => setHoveredDropdown('services')}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className={`flex items-center gap-1 font-medium hover:text-blue-600 transition-all duration-300 py-2 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                  Services <FiChevronDown className={`transition-transform ${hoveredDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[240px] bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-200 transform origin-top flex flex-col overflow-visible ${hoveredDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                  
                  {/* Residential */}
                  <div className="relative group/residential">
                    <Link 
                      to="/residential" 
                      onClick={() => setHoveredDropdown(null)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50"
                    >
                      Residential
                      <FiChevronDown className="-rotate-90" />
                    </Link>
                    <div className="absolute top-0 left-full w-[400px] hidden group-hover/residential:flex flex-col bg-white rounded-xl shadow-xl border border-gray-100 ml-1">
                      <div className="p-5 grid grid-cols-1 gap-y-3">
                        {residentialServices.map((service, idx) => {
                          const isActive = location.pathname === service.path;
                          return (
                            <Link key={idx} to={service.path} onClick={() => setHoveredDropdown(null)} className={`flex items-start gap-3 p-2 rounded-lg transition-colors group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
                              <div className={`p-2 rounded-lg shadow-sm transition-colors ${isActive ? 'bg-white' : 'bg-blue-50 group-hover/item:bg-white'}`}>
                                {service.icon}
                              </div>
                              <div>
                                <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{service.name}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Commercial */}
                  <div className="relative group/commercial">
                    <Link 
                      to="/commercial" 
                      onClick={() => setHoveredDropdown(null)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50"
                    >
                      Commercial
                      <FiChevronDown className="-rotate-90" />
                    </Link>
                    <div className="absolute top-0 left-full w-[400px] hidden group-hover/commercial:flex flex-col bg-white rounded-xl shadow-xl border border-gray-100 ml-1">
                      <div className="p-5 grid grid-cols-1 gap-y-3">
                        {commercialServices.map((service, idx) => {
                          const isActive = location.pathname === service.path;
                          return (
                            <Link key={idx} to={service.path} onClick={() => setHoveredDropdown(null)} className={`flex items-start gap-3 p-2 rounded-lg transition-colors group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
                              <div className={`p-2 rounded-lg shadow-sm transition-colors ${isActive ? 'bg-white' : 'bg-blue-50 group-hover/item:bg-white'}`}>
                                {service.icon}
                              </div>
                              <div>
                                <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{service.name}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Government */}
                  <div className="relative group/government">
                    <div className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors cursor-pointer rounded-b-xl">
                      Government
                      <FiChevronDown className="-rotate-90" />
                    </div>
                    <div className="absolute top-0 left-full w-[400px] hidden group-hover/government:flex flex-col bg-white rounded-xl shadow-xl border border-gray-100 ml-1">
                      <div className="p-5 grid grid-cols-1 gap-y-3">
                        {governmentServices.map((service, idx) => {
                          const isActive = location.pathname === service.path;
                          return (
                            <Link key={idx} to={service.path} onClick={() => setHoveredDropdown(null)} className={`flex items-start gap-3 p-2 rounded-lg transition-colors group/item ${isActive ? 'bg-blue-50 ring-1 ring-blue-100' : 'hover:bg-gray-50'}`}>
                              <div className={`p-2 rounded-lg shadow-sm transition-colors ${isActive ? 'bg-white' : 'bg-blue-50 group-hover/item:bg-white'}`}>
                                {service.icon}
                              </div>
                              <div>
                                <p className={`font-semibold text-sm ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>{service.name}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <Link to="/feedback" className={`font-medium hover:text-blue-600 transition-all duration-300 whitespace-nowrap ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Happy Customers</Link>
              <Link to="/blog" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Blog</Link>
              <Link to="/about" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>About</Link>
              <Link to="/team" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Team</Link>
            </nav>

            {/* Actions */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <Link to="/contact" className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 rounded-full transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap shadow-sm">
                Contact Us
              </Link>

              {isAuthenticated ? (
                <div 
                  className="relative hidden md:flex items-center"
                  onMouseEnter={() => setHoveredDropdown('profile')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-blue-600 transition-colors py-2 focus:outline-none">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm transition-transform hover:scale-105">
                      {user?.name ? <span className="font-bold text-sm">{user.name.charAt(0).toUpperCase()}</span> : <FiUser className="text-lg" />}
                    </div>
                    <span className="hidden lg:block truncate max-w-[120px] font-semibold">{user?.name || 'User'}</span>
                    <FiChevronDown className={`transition-transform duration-300 text-slate-400 ${hoveredDropdown === 'profile' ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  
                  <div className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-lg shadow-blue-900/5 border border-slate-100 transition-all duration-200 transform origin-top-right flex flex-col overflow-hidden z-50 ${hoveredDropdown === 'profile' ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-2 scale-95'}`}>
                    {user?.email && (
                      <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                        <p className="text-sm font-semibold text-slate-800 truncate">{user?.name || 'User'}</p>
                        <p className="text-xs text-slate-500 truncate mt-0.5">{user.email}</p>
                      </div>
                    )}
                    <div className="p-2">
                      <Link 
                        to="/profile" 
                        onClick={() => setHoveredDropdown(null)}
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group"
                      >
                        <div className="p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          <FiUser />
                        </div>
                        Profile
                      </Link>
                      <Link 
                        to="/feedback" 
                        onClick={() => setHoveredDropdown(null)}
                        className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 group mt-1"
                      >
                        <div className="p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                          <FiMessageSquare />
                        </div>
                        Feedback & Reviews
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-200 mt-1 group"
                      >
                        <div className="p-1.5 rounded-md bg-slate-100 text-slate-500 group-hover:bg-red-100 group-hover:text-red-600 transition-colors">
                          <FiLogOut />
                        </div>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                  <Link to="/login" className={`text-sm font-semibold transition-colors px-2 whitespace-nowrap ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}>
                    Log in
                  </Link>
                  <Link to="/register" className="text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap">
                    Sign up
                  </Link>
                </div>
              )}
              
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
        governmentServices={governmentServices}
      />
    </>
  );
};

export default Header;

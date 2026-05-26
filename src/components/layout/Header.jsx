import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaBolt, FaWrench, FaHammer, FaSnowflake, FaBug, FaPlug, FaWater, FaFan, FaFireExtinguisher, FaBuilding, FaLeaf } from 'react-icons/fa6';
import { FaCoffee } from 'react-icons/fa';
import useScrollPosition from '../../hooks/useScrollPosition';
import MobileMenu from './MobileMenu';
import Container from '../common/Container';

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
  { name: 'Fire Safety', icon: <FaFireExtinguisher className="text-red-500" />, path: '/commercial/fire-safety' },
  { name: 'Elevator & Escalator Upkeep', icon: <FaBuilding className="text-gray-600" />, path: '/commercial/elevator-escalator' },
  { name: 'Pest Control', icon: <FaBug className="text-green-600" />, path: '/commercial/pest-control' },
  { name: 'Pantry & Cafeteria Services', icon: <FaCoffee className="text-orange-500" />, path: '/commercial/pantry-cafeteria' },
  { name: 'Landscaping & Gardening', icon: <FaLeaf className="text-green-500" />, path: '/commercial/landscaping-gardening' },
];

const Header = () => {
  const scrollPosition = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link to="/">
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
              <Link to="/" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Home</Link>
              
              {/* Residential Dropdown */}
              <div className="relative group flex items-center">
                <button className={`flex items-center gap-1 font-medium hover:text-blue-600 transition-all duration-300 py-2 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                  Residential <FiChevronDown className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top group-hover:translate-y-0 translate-y-2 flex flex-col overflow-hidden">
                  <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {residentialServices.map((service, idx) => (
                      <Link key={idx} to={service.path} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group/item">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover/item:bg-white shadow-sm transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Professional residential service</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <Link to="/residential" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all residential services &rarr;</Link>
                  </div>
                </div>
              </div>

              {/* Commercial Dropdown */}
              <div className="relative group flex items-center">
                <button className={`flex items-center gap-1 font-medium hover:text-blue-600 transition-all duration-300 py-2 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                  Commercial <FiChevronDown className="transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top group-hover:translate-y-0 translate-y-2 flex flex-col overflow-hidden">
                  <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                    {commercialServices.map((service, idx) => (
                      <Link key={idx} to={service.path} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors group/item">
                        <div className="p-2 bg-blue-50 rounded-lg group-hover/item:bg-white shadow-sm transition-colors">
                          {service.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{service.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5">Expert commercial solutions</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <Link to="/commercial" className="text-sm font-medium text-blue-600 hover:text-blue-700">View all commercial services &rarr;</Link>
                  </div>
                </div>
              </div>

              <a href="/#reviews" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>Happy Customers</a>
              <Link to="/about" className={`font-medium hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>About</Link>
            </nav>

            {/* Actions */}
            <div className="flex-1 flex justify-end items-center gap-4 ml-8 xl:ml-12">
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

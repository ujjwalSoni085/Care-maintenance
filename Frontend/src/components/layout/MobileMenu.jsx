import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const MobileMenu = ({ isOpen, onClose, residentialServices, commercialServices }) => {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Care<span className="text-blue-600">Maintenance</span>
            </span>
          </Link>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-5">
          <nav className="flex flex-col space-y-1">
            <Link to="/" className="px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg" onClick={onClose}>
              Home
            </Link>

            {/* Residential Mobile */}
            <div>
              <button 
                onClick={() => toggleSection('residential')}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Residential
                {openSection === 'residential' ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {openSection === 'residential' && (
                <div className="px-3 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                  {residentialServices.map((service, idx) => {
                    const isActive = location.pathname === service.path;
                    return (
                      <Link key={idx} to={service.path} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-blue-700 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`} onClick={onClose}>
                        {service.icon}
                        {service.name}
                      </Link>
                    );
                  })}
                  <Link to="/residential" className="block px-3 py-2 text-sm font-medium text-blue-600 mt-2" onClick={onClose}>
                    View all residential &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Commercial Mobile */}
            <div>
              <button 
                onClick={() => toggleSection('commercial')}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Commercial
                {openSection === 'commercial' ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {openSection === 'commercial' && (
                <div className="px-3 py-2 space-y-1 bg-gray-50 rounded-lg mt-1">
                  {commercialServices.map((service, idx) => {
                    const isActive = location.pathname === service.path;
                    return (
                      <Link key={idx} to={service.path} className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${isActive ? 'text-blue-700 bg-blue-100' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`} onClick={onClose}>
                        {service.icon}
                        {service.name}
                      </Link>
                    );
                  })}
                  <Link to="/commercial" className="block px-3 py-2 text-sm font-medium text-blue-600 mt-2" onClick={onClose}>
                    View all commercial &rarr;
                  </Link>
                </div>
              )}
            </div>

            <Link to="/happy-customers" className="px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg" onClick={onClose}>
              Happy Customers
            </Link>
            <Link to="/about" className="px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg" onClick={onClose}>
              About
            </Link>
            <Link to="/reliable-management" className="px-3 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 rounded-lg" onClick={onClose}>
              Reliable Management
            </Link>
          </nav>
        </div>

        <div className="p-5 border-t border-gray-100">
          <Link to="/quote" className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors" onClick={onClose}>
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

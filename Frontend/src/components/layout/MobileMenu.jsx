import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiX, FiChevronDown, FiChevronUp, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const MobileMenu = ({ isOpen, onClose, residentialServices, commercialServices }) => {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    onClose();
    toast.success('Logged out successfully');
    navigate('/');
    setTimeout(() => {
      logout();
    }, 100);
  };

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
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

            {/* Services Mobile */}
            <div>
              <button 
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg"
              >
                Services
                {openSections['services'] ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              {openSections['services'] && (
                <div className="px-2 py-2 space-y-2 bg-gray-50 rounded-lg mt-1">
                  
                  {/* Residential Mobile */}
                  <div>
                    <button 
                      onClick={() => toggleSection('residential')}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                    >
                      Residential
                      {openSections['residential'] ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {openSections['residential'] && (
                      <div className="px-3 py-2 space-y-1 bg-white rounded-lg mt-1 ml-2 border border-gray-100">
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
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                    >
                      Commercial
                      {openSections['commercial'] ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {openSections['commercial'] && (
                      <div className="px-3 py-2 space-y-1 bg-white rounded-lg mt-1 ml-2 border border-gray-100">
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

                  {/* Government Mobile */}
                  <div>
                    <button 
                      onClick={() => toggleSection('government')}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-lg"
                    >
                      Government
                      {openSections['government'] ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {openSections['government'] && (
                      <div className="px-3 py-2 space-y-1 bg-white rounded-lg mt-1 ml-2 border border-gray-100 flex justify-center">
                        <span className="text-gray-500 italic text-sm py-2">Coming soon</span>
                      </div>
                    )}
                  </div>

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

        <div className="p-5 border-t border-gray-100 flex flex-col gap-3">
          {isAuthenticated ? (
            <>
              <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-800 bg-slate-50 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FiUser />
                </div>
                <span className="truncate">{user?.name}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors gap-2"
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-3">
              <Link to="/login" className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors" onClick={onClose}>
                Log in
              </Link>
              <Link to="/register" className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-colors" onClick={onClose}>
                Sign up
              </Link>
            </div>
          )}
          <Link to="/contact" className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-slate-800 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors mt-2" onClick={onClose}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

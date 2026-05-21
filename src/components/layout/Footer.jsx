import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Wrench, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Wrench className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white font-outfit">
                CareMaintenance services Pvt Ltd.
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              Professional, reliable, and comprehensive home maintenance services designed to keep your property in perfect condition year-round.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-slate-400 hover:text-red-500 hover:scale-125 transition-all duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-500 hover:scale-125 transition-all duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 hover:scale-125 transition-all duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-green-500 hover:scale-125 transition-all duration-300">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors duration-200">About</Link></li>
              <li><Link to="/easy-payment" className="hover:text-primary-400 transition-colors duration-200">Easy Payment</Link></li>
              <li><Link to="/satisfaction-guarantee" className="hover:text-primary-400 transition-colors duration-200">Satisfaction Guarantee</Link></li>
              <li><Link to="/technician-onboarding" className="hover:text-primary-400 transition-colors duration-200">Technician Onboarding</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/residential" className="hover:text-primary-400 transition-colors duration-200">Residential</Link></li>
              <li><Link to="/services/commercial" className="hover:text-primary-400 transition-colors duration-200">Commercial</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block mb-1">F-321, Old MB Road Lado Sarai,<br />New Delhi - 110030</span>
                  <Link to="/location" className="text-primary-400 hover:text-primary-300 hover:underline font-medium">
                    Office Location
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300">Working Hours:</span>
                  <span className="block text-slate-400 font-medium">6:00 AM – 12:00 PM</span>
                </div>
              </li>
              <li className="flex items-center gap-3 mt-2">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300">Contact Hours:</span>
                  <span className="block text-slate-400 font-medium">10:00 AM – 6:00 PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CareMaintenance Services Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

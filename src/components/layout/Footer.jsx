import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Wrench, MapPin, Clock, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
                <img src="/images/care-maintenance-logo-removebg-preview.webp" alt="CareMaintenance Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold text-white font-outfit">
                CareMaintenance services Pvt Ltd.
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 pr-4">
              Trusted maintenance services designed to keep homes, commercial properties, offices, and facilities in perfect condition year-round.
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
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/residential" className="hover:text-primary-400 transition-colors duration-200">Residential</Link></li>
              <li><Link to="/services/commercial" className="hover:text-primary-400 transition-colors duration-200">Commercial</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Our Locations & Contact</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
              <a href="https://maps.google.com/?q=F-321,+Old+MB+Road+Lado+Sarai,+New+Delhi+-+110030" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">F-321, Old MB Road Lado Sarai,<br />New Delhi - 110030</span>
              </a>
              <a href="https://maps.google.com/?q=2/30B,+Opp.Surya+Hotel+Sarai+Jullena,+New+Delhi+-+110025" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">2/30B, Opp.Surya Hotel Sarai Jullena,<br />New Delhi - 110025</span>
              </a>
              <a href="https://maps.google.com/?q=A-55/8,+DLF-1+Gurugram,+Haryana+-+122002" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">A-55/8, DLF-1 Gurugram,<br />Haryana - 122002</span>
              </a>
              <a href="https://maps.google.com/?q=G-36,+1st+Floor,+(One+Internet),+Connaught+Place,+New+Delhi+-+110001" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">G-36, 1st Floor, (One Internet),<br />Connaught Place, New Delhi - 110001</span>
              </a>
              <a href="https://maps.google.com/?q=E+24+1st+floor,+Noida+sector+3" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 sm:col-span-2 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">E 24 1st floor, Noida sector 3</span>
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300 text-sm">Working Hours:</span>
                  <span className="block text-slate-400 text-sm font-medium">6:00 AM – 12:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300 text-sm">Contact Hours:</span>
                  <span className="block text-slate-400 text-sm font-medium">10:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>
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

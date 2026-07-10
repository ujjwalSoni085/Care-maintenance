import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaWhatsapp, FaReddit, FaPinterest } from 'react-icons/fa';
import { Wrench, MapPin, Clock, Phone } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/register'];

  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1 - Brand */}
          <div className="lg:col-span-4">
            <div className="flex flex-col items-start mb-4">
              <div className="w-28 sm:w-32 flex-shrink-0">
                <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058411/care_maintenance/frontend_assets/care-maintenance-logo-removebg-preview.webp" alt="CareMaintenance Logo" className="w-full h-auto object-contain object-left" />
              </div>
              <span className="-mt-3 text-lg sm:text-xl font-bold text-white font-outfit whitespace-nowrap">
                Care Maintenance Services Pvt Ltd.
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 pr-4">
              Trusted maintenance services designed to keep homes, commercial properties, offices, and facilities in perfect condition year-round.
            </p>
            <div className="flex space-x-5 mb-8">
              <a href="https://www.youtube.com/@caremsindia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 hover:scale-125 transition-all duration-300">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/caremsindia/" className="text-slate-400 hover:text-pink-500 hover:scale-125 transition-all duration-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/caremsindia/" className="text-slate-400 hover:text-blue-500 hover:scale-125 transition-all duration-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/caremsindia/" className="text-slate-400 hover:text-black hover:scale-125 transition-all duration-300">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.reddit.com/user/caremsindia/" className="text-slate-400 hover:text-orange-500 hover:scale-125 transition-all duration-300">
                <FaReddit className="w-6 h-6" />
              </a>
              <a href="https://in.pinterest.com/caremsindia/" className="text-slate-400 hover:text-red-600 hover:scale-125 transition-all duration-300">
                <FaPinterest className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300 text-sm">Working Hours:</span>
                  <span className="block text-slate-400 text-sm font-medium">9:00 AM – 8:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300 text-sm">Contact Hours:</span>
                  <span className="block text-slate-400 text-sm font-medium">9:00 AM – 9:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-300 text-sm">WhatsApp Support</span>
                  <span className="block text-slate-400 text-sm font-medium">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">About</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/easy-payment" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Easy Payment</Link></li>
              <li><Link to="/satisfaction-guarantee" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Satisfaction Guarantee</Link></li>
              <li><Link to="/technician-onboarding" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Technician Onboarding</Link></li>
              <li><Link to="/feedback" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Feedback & Reviews</Link></li>
              <li><Link to="/terms-and-conditions" onClick={() => window.scrollTo(0, 0)} className="hover:text-primary-400 transition-colors duration-200">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-default">Residential</li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-default">Commercial</li>
              <li className="hover:text-primary-400 transition-colors duration-200 cursor-default">Government</li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white font-outfit mb-6">Our Locations & Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6">
              
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">
                  <a
                    href="https://maps.app.goo.gl/kyN2tD59sMzmRHJ26"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p>F-321, 2nd Floor, Opp. Shiv Mandir, </p>
                    <p>near PNB Bank, Lado Sarai, New Delhi - 110030</p>
                  </a>
                  {/* Number */}
                  <div className="mt-2 text-primary-400">
                    <a href="tel:01141085151" className="block hover:text-primary-300 transition-colors">01141085151</a>
                    <a href="tel:01141085152" className="block hover:text-primary-300 transition-colors">01141085152</a>
                    <a href="tel:+918285003241" className="block hover:text-primary-300 transition-colors">+91 8285003241</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">
                  <a
                    href="https://maps.app.goo.gl/bxMstaUZzvyS8ejQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p>2, 30B, opp. Surya Hotel, Sarai Jullena,</p>
                    <p>New Friends Colony, New Delhi - 110025</p>
                  </a>
                  {/* Number */}
                  <div className="mt-2 text-primary-400">
                    <a href="tel:+919354794313" className="block hover:text-primary-300 transition-colors">+91 9354794313</a>
                    <a href="tel:+911144754727" className="block hover:text-primary-300 transition-colors">+91 11 4475 4727</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">
                  <a
                    href="https://maps.app.goo.gl/1YF89swXwBzdFv9r6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p>A-55, 8, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002</p>
                  </a>
                  {/* Number */}
                  <div className="mt-2 text-primary-400">
                    <a href="tel:+918285512203" className="block hover:text-primary-300 transition-colors">+91 8285512203</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">
                  <a
                    href="https://maps.app.goo.gl/GN1iC3raQUXeCcLM6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p>First Floor, one internet, G-35, Hanuman Road Area,</p>
                    <p>Connaught Place, New Delhi - 110001</p>
                  </a>
                  {/* Number */}
                  <div className="mt-2 text-primary-400">
                    <a href="tel:01141085153" className="block hover:text-primary-300 transition-colors">01141085153</a>
                    <a href="tel:+919508434900" className="block hover:text-primary-300 transition-colors">+91 9508434900</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2 group">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5 group-hover:text-primary-400 transition-colors" />
                <div className="text-sm text-slate-400 leading-snug group-hover:text-primary-400 transition-colors">
                  <a
                    href="https://maps.google.com/?q=E+24+1st+floor,+Noida+sector+3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <p>E-24 1st Floor,</p>
                    <p>Noida sector 3</p>
                  </a>
                  {/* Number */}
                  <div className="mt-2 text-primary-400">
                    <a href="tel:+917503712272" className="block hover:text-primary-300 transition-colors">+91 7503712272</a>
                  </div>
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

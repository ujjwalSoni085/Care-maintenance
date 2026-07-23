import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBolt, FaWrench, FaHammer, FaSnowflake, FaBug, FaPlug, FaWater, FaFan, FaBuilding, FaClipboardList, FaCalculator } from 'react-icons/fa6';
import { FaHeadset } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';

const residentialServices = [
  { name: 'Electrician', icon: <FaBolt className="w-5 h-5 text-yellow-500" />, path: '/residential/electrician', description: 'Expert electrical repair and installation services.' },
  { name: 'Plumber', icon: <FaWrench className="w-5 h-5 text-blue-400" />, path: '/residential/plumber', description: 'Reliable plumbing solutions for leaks and installations.' },
  { name: 'Carpenter', icon: <FaHammer className="w-5 h-5 text-orange-500" />, path: '/residential/carpenter', description: 'Custom carpentry and furniture repairs.' },
  { name: 'AC Services', icon: <FaSnowflake className="w-5 h-5 text-blue-300" />, path: '/residential/ac-services', description: 'AC maintenance, cleaning, and repair.' },
  { name: 'Pest Control', icon: <FaBug className="w-5 h-5 text-green-600" />, path: '/residential/pest-control', description: 'Safe and effective pest eradication.' },
  { name: 'All Electronic Appliance Maintenance', icon: <FaPlug className="w-5 h-5 text-gray-500" />, path: '/residential/appliance-maintenance', description: 'Quick repair for all home appliances.' },
  { name: 'Water Tank Cleaning (Overhead & Underground)', icon: <FaWater className="w-5 h-5 text-blue-600" />, path: '/residential/water-tank-cleaning', description: 'Hygienic deep cleaning for water tanks.' },
  { name: 'Book Service', icon: <FaClipboardList className="w-5 h-5 text-purple-600" />, path: '/#pricing', description: 'Complete Property Maintenance Services Annual Plan.' },
];

const commercialServices = [
  { isCalculator: true },
  { name: 'HVAC Maintenance', icon: <FaFan className="w-5 h-5 text-blue-500" />, path: '/commercial/hvac-maintenance', description: 'Commercial heating, ventilation, and AC services.' },
  { name: 'Electrical Systems', icon: <FaBolt className="w-5 h-5 text-yellow-500" />, path: '/commercial/electrical-systems', description: 'Industrial electrical setups and maintenance.' },
  { name: 'Plumber', icon: <FaWrench className="w-5 h-5 text-blue-400" />, path: '/commercial/plumber', description: 'Commercial-grade plumbing solutions.' },
  { name: 'Carpenter', icon: <FaHammer className="w-5 h-5 text-orange-500" />, path: '/commercial/carpenter', description: 'Office woodwork and customized structures.' },
  { name: 'Pest Control', icon: <FaBug className="w-5 h-5 text-green-600" />, path: '/commercial/pest-control', description: 'Regular pest management for businesses.' },
  { name: 'All Electronic Appliance Maintenance', icon: <FaPlug className="w-5 h-5 text-gray-500" />, path: '/commercial/appliance-maintenance', description: 'Maintenance of commercial electronic equipment.' },
  { name: 'Corporate Complaint & Query Management', icon: <FaHeadset className="w-5 h-5 text-gray-500" />, path: '/commercial/corporate-helpdesk', description: 'Helpdesk for handling corporate queries effectively.'},
];

const governmentServices = [
  { name: 'Government AMC', icon: <FaBuilding className="w-5 h-5 text-blue-600" />, path: '/services/government-amc', description: 'Annual maintenance contracts for government buildings.' },
  { name: 'Government Tenders', icon: <FaBuilding className="w-5 h-5 text-gray-500" />, path: '/services/government-tender', description: 'Dedicated service for government tender projects.' },
  { name: 'On-Call Services', icon: <FaHeadset className="w-5 h-5 text-green-500" />, path: '/services/on-call', description: 'Immediate response on-call maintenance services.' },
];

const CommercialCalculator = () => {
  const [area, setArea] = useState('');
  const ratePerSqFt = 9;

  return (
    <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 shadow-md transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="p-4 rounded-2xl bg-indigo-100 text-indigo-600 flex-shrink-0 shadow-inner">
          <FaCalculator className="w-8 h-8" />
        </div>
        <div className="flex-1 w-full">
          <h3 className="font-bold text-slate-800 mb-2 text-xl font-outfit">Quick Estimate Calculator</h3>
          <p className="text-slate-600 mb-5">
            Estimate your commercial maintenance cost instantly at <strong className="text-indigo-700 font-bold">₹{ratePerSqFt}/sq.ft.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-5 items-end">
            <div className="flex-1 w-full">
              <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Property Area (Sq. Ft.)</label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g. 2000"
                  className="w-full pl-4 pr-12 py-3 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 bg-white transition-all text-slate-700 font-medium"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">sq ft</span>
              </div>
            </div>
            <div className="flex-1 w-full bg-white px-5 py-3 rounded-xl border-2 border-indigo-100 flex items-center justify-between shadow-sm min-h-[52px]">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wide">Estimated Cost</span>
              <span className="text-2xl font-bold text-indigo-700 font-outfit">
                ₹{area ? (Number(area) * ratePerSqFt).toLocaleString() : '0'}
              </span>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
             <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-105">
               <span>Book Service Now</span>
               <FiChevronRight className="w-5 h-5" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('residential');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && ['residential', 'commercial', 'government'].includes(category)) {
      setActiveCategory(category);
    }
  }, [location]);

  const categories = [
    { id: 'residential', title: 'Residential Services', data: residentialServices },
    { id: 'commercial', title: 'Commercial Services', data: commercialServices },
    { id: 'government', title: 'Government Services', data: governmentServices },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 font-inter">
      <Helmet>
        <title>Our Services | Care Maintenance Services</title>
        <meta name="description" content="Explore our wide range of maintenance services for Residential, Commercial, and Government sectors." />
      </Helmet>

      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-outfit mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">
            Comprehensive maintenance solutions designed to keep your properties running smoothly and efficiently.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl shadow-blue-900/5 overflow-hidden border border-slate-100">
          {categories.map((category) => (
            <div key={category.id} className="border-b border-slate-100 last:border-0">
              <button
                onClick={() => setActiveCategory(activeCategory === category.id ? '' : category.id)}
                className={`w-full flex items-center justify-between p-6 transition-colors duration-300 ${
                  activeCategory === category.id ? 'bg-blue-50/50' : 'hover:bg-slate-50'
                }`}
              >
                <h2 className={`text-2xl font-bold font-outfit ${
                  activeCategory === category.id ? 'text-blue-700' : 'text-slate-800'
                }`}>
                  {category.title}
                </h2>
                <div className={`p-2 rounded-full transition-transform duration-300 ${
                  activeCategory === category.id ? 'bg-blue-100 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <FiChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50/50">
                  {category.data.map((service, idx) => {
                    if (service.isCalculator) {
                      return <CommercialCalculator key={idx} />;
                    }
                    return (
                      <Link
                        key={idx}
                        to={service.path}
                        onClick={() => {
                          if (!service.path.includes('#')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <div className="self-center flex-shrink-0 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300">
                          <FiChevronRight className="w-5 h-5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServicesPage;

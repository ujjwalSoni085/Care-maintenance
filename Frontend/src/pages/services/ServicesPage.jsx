import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBolt, FaWrench, FaHammer, FaSnowflake, FaBug, FaPlug, FaWater, FaFan, FaBuilding } from 'react-icons/fa6';
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
];

const commercialServices = [
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
                  {category.data.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => window.scrollTo(0, 0)}
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
                  ))}
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

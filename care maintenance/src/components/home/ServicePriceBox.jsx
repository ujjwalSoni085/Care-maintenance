import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';

const comboPackages = [
  {
    id: 'basic',
    name: 'Basic Combo Plan',
    price: 24999,
    features: ['Quarterly maintenance visits', 'Standard support', 'Essential services included']
  },
  {
    id: 'standard',
    name: 'Standard Combo Plan',
    isPopular: true,
    price: 44999,
    features: ['Monthly maintenance visits', 'Priority booking', 'Minor repair coverage']
  },
  {
    id: 'premium',
    name: 'Premium Combo Plan',
    price: 69999,
    features: ['Unlimited emergency support', 'Dedicated technician', '24/7 priority assistance', 'Full maintenance protection']
  }
];

const AnimatedNumber = ({ value }) => {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('en-IN'));

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return <motion.span>{display}</motion.span>;
};

const PlanDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find(opt => opt.id === value);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative max-w-lg mx-auto mb-12" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white/80 backdrop-blur-md border border-white/50 rounded-full px-8 py-5 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-accent/20 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-accent/40 group relative overflow-hidden"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex items-center gap-4 relative z-10">
          <div className="p-2 bg-primary/5 rounded-full text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className={`font-bold text-lg sm:text-xl ${selected ? 'text-gray-800' : 'text-gray-400'}`}>
            {selected ? selected.name : 'Select Annual Maintenance Plan'}
          </span>
        </div>
        <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-500 ease-in-out relative z-10 ${isOpen ? 'rotate-180 text-accent' : 'group-hover:text-accent'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute z-30 w-full mt-4 bg-white/90 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            <div className="p-3 flex flex-col gap-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onChange(option.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-left transition-all duration-200 group ${
                    value === option.id 
                      ? 'bg-accent/10 text-accent font-bold' 
                      : 'text-gray-600 hover:bg-gray-50/80 font-semibold hover:text-primary'
                  }`}
                >
                  <span className="text-lg">{option.name}</span>
                  {value === option.id && (
                    <motion.div layoutId="activeCheck">
                      <Check className="w-5 h-5 text-accent" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServicePriceBox = () => {
  const [selectedPackageId, setSelectedPackageId] = useState('');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const activePackageData = comboPackages.find(p => p.id === selectedPackageId) || comboPackages[1];
  const activePrice = selectedPackageId ? activePackageData.price : 0;

  return (
    <section className="py-16 sm:py-24 bg-surface relative overflow-hidden" ref={ref}>
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="bg-white/70 backdrop-blur-2xl rounded-[2.5rem] shadow-lg md:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white overflow-hidden ring-1 ring-gray-100/50 p-6 sm:p-10 md:p-16 transition-all duration-300">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase mb-6 border border-accent/20">
              <Sparkles className="w-4 h-4" /> Comprehensive Care
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary font-heading mb-6 tracking-tight leading-tight">
              Complete Home Care <br className="hidden sm:block" /> Annual Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Protect your entire home with our comprehensive combo packages combining all essential services.
            </p>
          </div>

          {/* Animated Dropdown */}
          <PlanDropdown 
            options={comboPackages} 
            value={selectedPackageId} 
            onChange={setSelectedPackageId} 
          />

          <div className="space-y-12">
            {/* Package Selection Cards */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative">
                {comboPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    whileHover={{ y: -8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    layout
                    className={`relative cursor-pointer rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 flex flex-col h-full bg-white/90 backdrop-blur-sm z-10 ${
                      selectedPackageId === pkg.id
                        ? 'border-accent shadow-[0_25px_50px_-12px_rgba(249,115,22,0.25)] ring-4 ring-accent/10 scale-[1.02] md:scale-105 z-20'
                        : 'border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-xl opacity-70 hover:opacity-100'
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg whitespace-nowrap z-20">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold font-heading mb-2 transition-colors duration-300 ${selectedPackageId === pkg.id ? 'text-accent' : 'text-primary'}`}>
                        {pkg.name}
                      </h3>
                      <div className={`mt-4 pt-4 border-t transition-colors duration-300 ${selectedPackageId === pkg.id ? 'border-accent/20' : 'border-gray-100'}`}>
                        <p className={`text-3xl font-extrabold font-heading ${selectedPackageId === pkg.id ? 'text-accent' : 'text-gray-800'}`}>
                          ₹{pkg.price.toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-400 font-medium mt-1">per year</p>
                      </div>
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-4">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`mt-0.5 rounded-full p-1 transition-colors duration-300 ${selectedPackageId === pkg.id ? 'bg-accent/10' : 'bg-gray-50'}`}>
                              <Check className={`w-4 h-4 shrink-0 ${selectedPackageId === pkg.id ? 'text-accent' : 'text-gray-400'}`} />
                            </div>
                            <span className={`font-medium text-sm sm:text-base leading-snug transition-colors duration-300 ${selectedPackageId === pkg.id ? 'text-gray-800' : 'text-gray-500'}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Final Price and CTA */}
            <AnimatePresence>
              {selectedPackageId && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-16 pt-12 border-t border-gray-100/80 flex flex-col md:flex-row items-center justify-between gap-10"
                >
                  <div className="text-center md:text-left flex-1">
                    <div className="inline-block px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-5 border bg-blue-50/80 backdrop-blur-sm text-blue-700 border-blue-200 shadow-sm shadow-blue-100/50">
                      Save up to 30% with Combo Plan
                    </div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-3">Total Annual Cost</p>
                    <div className="flex items-end justify-center md:justify-start gap-2">
                      <span className="text-6xl sm:text-7xl font-extrabold text-accent font-heading tracking-tight drop-shadow-sm">
                        ₹<AnimatedNumber value={activePrice} />
                      </span>
                      <span className="text-2xl sm:text-3xl text-gray-400 font-medium mb-2">/ year</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full md:w-auto px-8 sm:px-12 py-6 bg-primary hover:bg-primary-light text-white rounded-2xl font-bold text-xl sm:text-2xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex items-center justify-center gap-4 relative overflow-hidden group border border-white/10"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    <span>Get Complete Home Protection</span>
                    <ChevronDown className="w-7 h-7 -rotate-90 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default ServicePriceBox;

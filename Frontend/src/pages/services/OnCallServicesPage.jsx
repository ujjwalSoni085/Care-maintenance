import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Shield, Wrench, Clock, 
  Droplets, Building2, HardHat, TrendingUp, ChevronDown,
  Star, Phone, Mail, Award, Zap, Bug, Wind
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const OnCallServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] min-h-screen text-gray-900 font-sans selection:bg-blue-200">
      
      {/* 1. Hero Section */}
      <section className="relative pt-16 pb-14 lg:pt-20 lg:pb-22 overflow-hidden px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Quick & Reliable Assistance
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.15] tracking-tight mb-6 min-h-[140px] md:min-h-[180px] lg:min-h-[220px] max-w-2xl text-balance">
              On-Call Services, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Whenever You Need Us</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Need immediate maintenance support without a contract? Our verified professionals are ready to deliver expert one-time service with transparent pricing.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
             <Link to="/#service-price-box" className="px-8 py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-600/20">
                Book Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button onClick={() => window.location.href = 'tel:8287003241'} className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm flex justify-center gap-2">
                <Phone className="w-5 h-5"/> Call Now
            </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058950/care_maintenance/frontend_assets/services/ac1.webp" 
              alt="On-Call Maintenance Service" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Swift</p>
                  <p className="text-sm text-gray-600 font-medium">Response Time</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* 2. Services Overview Section */}
      <section className="py-12 lg:py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Our One-Time Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Expert maintenance delivered right to your doorstep for immediate requirements.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Wind, title: 'One-Time AC Service', desc: 'Instant cooling fixes, gas refilling, and thorough cleaning for your AC units.' },
            { icon: Zap, title: 'Emergency Electrician', desc: 'Rapid response for power outages, short circuits, and fixture installations.' },
            { icon: Droplets, title: 'Plumber Visit', desc: 'Immediate assistance for leaks, blockages, and pipe repairs.' },
            { icon: Wrench, title: 'Carpenter Service', desc: 'Quick fixes for furniture, doors, and minor structural repairs.' },
            { icon: Bug, title: 'Pest Control', desc: 'Effective one-time treatments to instantly eliminate unwanted pests.' },
            { icon: HardHat, title: 'Appliance Repair', desc: 'On-spot diagnostics and repair for essential household and office appliances.' },
            { icon: Building2, title: 'Water Tank Cleaning', desc: 'Prompt and hygienic water tank cleaning services on demand.' }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} transition={{ delay: i * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-blue-400">
                  <service.icon className="w-6 h-6 group-hover:rotate-3 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059060/care_maintenance/frontend_assets/services/plumber9-.webp" alt="Verified Technicians" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl hidden md:block max-w-xs transition-all duration-500 group-hover:-translate-y-[55%] group-hover:shadow-blue-500/20">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-xl mb-2">Verified Professionals</h4>
              <p className="text-sm text-gray-600">All our on-call technicians undergo strict background checks.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-600">Hassle-free maintenance, when you need it.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Skip the long wait times. Our on-call service is designed to provide you with immediate relief from maintenance headaches, ensuring your space remains functional and comfortable.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: 'Flexible Scheduling', desc: 'Book a visit at a time that works best for you.' },
                { title: 'Transparent Pricing', desc: 'Know what you pay upfront, with no hidden surprises.' },
                { title: 'Quality Assured', desc: 'Even for one-time jobs, we bring enterprise-level expertise.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-green-50 text-green-600 rounded-full p-1 h-fit">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="py-12 lg:py-18 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">How it works.</h2>
          <p className="text-gray-600 text-lg font-medium">Three simple steps to resolve your maintenance issues.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200 -z-10" />
          {[
            { num: '01', title: 'Book Service', desc: 'Select your required service and preferred time slot online or via call.' },
            { num: '02', title: 'Technician Visit', desc: 'Our verified expert arrives at your location to diagnose and fix the issue.' },
            { num: '03', title: 'Payment & Feedback', desc: 'Pay transparently and share your feedback on the completed job.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="text-4xl font-extralight text-gray-300 mb-6 group-hover:text-blue-300 transition-colors duration-500">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 text-red-600 group-hover:text-blue-600 transition-colors duration-500">{step.title}</h3>
                <p className="text-gray-500 font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            <div className="w-full lg:w-[40%] order-1 lg:order-2">
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <img 
                  src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059056/care_maintenance/frontend_assets/services/plumber3.webp" 
                  alt="On-Call FAQs" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </div>
            </div>

            <div className="w-full lg:w-[60%] order-2 lg:order-1">
              <div className="mb-10 lg:mb-12">
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-red-600">Frequently asked questions.</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: 'How fast can a technician arrive?', a: 'For on-call services, we strive to dispatch a technician within a few hours of your booking, subject to availability and your location.' },
                  { q: 'Do I need a contract to book an on-call service?', a: 'No, our on-call services are completely contract-free. You simply pay for the one-time service you request.' },
                  { q: 'Is there a warranty on the work performed?', a: 'Yes, we provide a standard service warranty on the specific repairs or installations completed by our technicians.' },
                  { q: 'How do you determine the pricing?', a: 'Pricing is based on the specific service requested. We maintain transparent pricing and will provide an estimate before commencing work.' }
                ].map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full text-left p-6 flex justify-between items-center font-semibold text-lg hover:bg-gray-50 transition-colors"
                    >
                      {faq.q}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 text-gray-600 leading-relaxed"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Final CTA Banner */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">Need Immediate Assistance?</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Don't wait. Book your one-time service today and get your issues resolved quickly and professionally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = 'tel:8287003241'} className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 8287003241
              </button>
              <Link to="/#service-price-box" className="px-8 py-4 bg-blue-600 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                Book Service Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OnCallServicesPage;

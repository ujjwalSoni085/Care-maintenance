import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Shield, Wrench, Clock, 
  Droplets, Building2, HardHat, TrendingUp, ChevronDown,
  Star, Phone, Mail, Award, Factory, Zap, Bug, Wind
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

const TRUSTED_COMPANIES = [
  { name: 'Rajdhani Besan Mills', logo: 'https://res.cloudinary.com/reuof8q6/image/upload/v1783059067/care_maintenance/frontend_assets/services/rajchani_besan.webp' },
  { name: 'The Rugs', logo: 'https://res.cloudinary.com/reuof8q6/image/upload/v1783059071/care_maintenance/frontend_assets/services/the_rugs.webp' },
  { name: 'Affinity Salon', logo: 'https://res.cloudinary.com/reuof8q6/image/upload/v1783058971/care_maintenance/frontend_assets/services/affinity_salon.webp' },
  { name: 'Anmol Biscuits', logo: 'https://res.cloudinary.com/reuof8q6/image/upload/v1783058972/care_maintenance/frontend_assets/services/anmol_biscuits.webp' },
];

const GovernmentAMCPage = () => {
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
              Government Sector AMC
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.15] tracking-tight mb-6 min-h-[140px] md:min-h-[180px] lg:min-h-[220px] max-w-2xl text-balance">
              Government AMC Services, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">All-in-One Contract</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Simplify facility management with a single comprehensive Annual Maintenance Contract covering electrical, plumbing, HVAC, and more for government organizations.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
             <Link to="/#service-price-box" className="px-8 py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-600/20">
                Request AMC Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/contact" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm">
                Schedule Site Inspection
            </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058994/care_maintenance/frontend_assets/services/cleaning_4.webp" 
              alt="Government AMC Services" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600 font-medium">Compliance Guarantee</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-15 lg:py-20 relative overflow-hidden bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-tr from-blue-50/60 via-purple-50/30 to-blue-50/60 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-600 mb-6 leading-[1.05]">
              Trusted by Leading Organizations
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-500 leading-relaxed">
              Delivering reliable, enterprise-grade maintenance solutions to public sector and government entities.
            </motion.p>
          </motion.div>

          {/* Premium Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16 py-5 px-10 bg-white/80 backdrop-blur-xl rounded-full border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] "
          >
            {[
              { value: '500+', label: 'Government Contracts' },
              { value: '99%', label: 'Service Uptime' },
              { value: '24/7', label: 'Dedicated Support' },
            ].map((metric, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="flex flex-col items-center sm:items-start">
                  <span className="text-2xl font-extrabold text-blue-500 leading-none">{metric.value}</span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{metric.label}</span>
                </div>
                {i !== 2 && <div className="hidden sm:block w-px h-10 bg-gray-200" />}
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto"
          >
            {TRUSTED_COMPANIES.map((company, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="group relative h-32 md:h-40 bg-white/60 backdrop-blur-xl rounded-[24px] border border-[#f1f5f9] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex items-center justify-center p-8 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 relative z-10 scale-95 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-12 lg:py-24 max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Single Contract, Complete Maintenance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Consolidate all your facility maintenance requirements under one comprehensive Annual Maintenance Contract.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Electrical Services', desc: 'Complete electrical system maintenance, repairs, and appliance upkeep.' },
            { icon: Droplets, title: 'Plumbing Solutions', desc: 'Preventative plumbing care, leak detection, and rapid emergency response.' },
            { icon: Wind, title: 'AC Installation & Maintenance', desc: 'Comprehensive HVAC and AC servicing for optimal cooling efficiency.' },
            { icon: Bug, title: 'Pest Control', desc: 'Regular and specialized pest management to ensure a hygienic environment.' },
            { icon: Wrench, title: 'Carpentry', desc: 'Expert carpentry repairs, fixture installation, and office furniture maintenance.' },
            { icon: Shield, title: 'Deep Cleaning & Water Tank', desc: 'Intensive facility deep cleaning and periodic water tank sanitization.' }
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

      {/* 4. Comprehensive Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058974/care_maintenance/frontend_assets/services/carpainter_hader_image.webp" alt="Why Choose AMC" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl hidden md:block max-w-xs transition-all duration-500 group-hover:-translate-y-[55%] group-hover:shadow-blue-500/20">
              <Shield className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-xl mb-2">Vetted Workforce</h4>
              <p className="text-sm text-gray-600">Background-checked and certified technicians for secure facilities.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-600">Streamline your facility operations.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Managing multiple vendors is inefficient and costly. Our unified Government AMC model ensures seamless maintenance, reduced overhead, and strict adherence to service level agreements.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: 'Single Point of Contact', desc: 'Dedicated project managers for all your maintenance needs.' },
                { title: 'Preventative Approach', desc: 'Routine schedules that minimize unexpected breakdowns.' },
                { title: 'Compliance & Documentation', desc: 'Detailed reporting to meet government audit standards.' }
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

      {/* 5. Process / Workflow Section */}
      <section className="py-12 lg:py-18 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Our AMC onboarding process.</h2>
          <p className="text-gray-600 text-lg font-medium">A structured approach to ensure smooth transition and continuous service.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200 -z-10" />
          {[
            { num: '01', title: 'Assessment', desc: 'Thorough audit of existing facility infrastructure.' },
            { num: '02', title: 'Proposal', desc: 'Customized AMC structuring and SLA definition.' },
            { num: '03', title: 'Deployment', desc: 'Assigning dedicated personnel and establishing protocols.' },
            { num: '04', title: 'Execution', desc: 'Ongoing proactive maintenance and rapid response.' }
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

      {/* 5.5 Case Studies / Projects Showcase */}
      <section className="py-10 lg:py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-6xl lg:text-10xl font-semibold tracking-tight mb-16 text-red-600"
        >
          Recent Government Contracts
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group cursor-pointer rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[600px]"
          >
            <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058947/care_maintenance/frontend_assets/services/ac_after_image.webp" alt="Central Air Conditioning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-4">HVAC AMC</div>
              <h3 className="text-3xl font-bold text-white mb-2">Central Air Conditioning</h3>
              <p className="text-gray-200 line-clamp-2">Complete maintenance and gas refilling for a 15-story government administrative building.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px]"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058993/care_maintenance/frontend_assets/services/cleaning_3.webp" alt="Deep Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Sanitization</div>
                <h3 className="text-xl font-bold text-white">Facility Deep Cleaning</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px]"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059024/care_maintenance/frontend_assets/services/elect_7.webp" alt="Electrical Audit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Electrical</div>
                <h3 className="text-xl font-bold text-white">Electrical System Audit</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Stats / Achievements Section */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 text-center">
            {[
              { num: '200+', label: 'Active AMCs' },
              { num: '10+', label: 'Years Serving Govt.' },
              { num: '24/7', label: 'Priority Support' },
              { num: '100%', label: 'SLA Adherence' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">{stat.num}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">Contact Our Government Services Team</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Get in touch to structure a customized AMC that fulfills all your facility maintenance protocols and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = 'tel:8287003241'} className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 8287003241
              </button>
              <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-blue-600 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Request AMC Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GovernmentAMCPage;

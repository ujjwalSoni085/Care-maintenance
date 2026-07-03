import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Shield, Wrench, Clock, 
  Droplets, Building2, HardHat, TrendingUp, ChevronDown,
  Star, Phone, Mail, Award, Factory, Zap, Bug, Wind, FileText
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

const GovernmentTenderPage = () => {
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
              Government Tender Participation
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.15] tracking-tight mb-6 min-h-[140px] md:min-h-[180px] lg:min-h-[220px] max-w-2xl text-balance">
              Government Tender Services, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Reliable Execution</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Partner with an experienced organization capable of fulfilling complex government maintenance tenders nationwide with full compliance and documentation support.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
             <Link to="/contact" className="px-8 py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-600/20">
                Request Tender Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/about" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm">
                Download Company Profile
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
              src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058998/care_maintenance/frontend_assets/services/cleaning_7.webp" 
              alt="Government Tender Services" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-sm text-gray-600 font-medium">Tender Compliance</p>
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
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Major Tender Service Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We execute maintenance and facility management tenders across a wide range of specialized services.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Bug, title: 'Pest Control', desc: 'Large-scale fumigation and integrated pest management.' },
            { icon: Zap, title: 'Electrical', desc: 'High-voltage maintenance, panel upgrades, and lighting.' },
            { icon: Droplets, title: 'Plumbing', desc: 'Municipal-grade plumbing, pipeline, and drainage services.' },
            { icon: Wrench, title: 'Carpentry', desc: 'Extensive carpentry repairs and modular setups.' },
            { icon: Wind, title: 'HVAC/AC Services', desc: 'Centralized cooling system installation and upkeep.' },
            { icon: Shield, title: 'Deep Cleaning', desc: 'Sanitization and deep cleaning for large public facilities.' },
            { icon: HardHat, title: 'Appliance Maintenance', desc: 'Servicing of industrial and commercial grade appliances.' },
            { icon: Building2, title: 'Water Tank Cleaning', desc: 'Mechanized water tank cleaning and purification.' }
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
                <p className="text-gray-500 leading-relaxed font-medium text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive Section */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-600">Why partner with us for Government Tenders?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Successfully executing government tenders requires strict adherence to guidelines, an experienced workforce, and robust operational capabilities. We bring all these to the table.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: 'Tender Compliance', desc: '100% adherence to specific tender technical and financial requirements.' },
                { title: 'Experienced Workforce', desc: 'Skilled professionals adept at handling large-scale public sector projects.' },
                { title: 'Nationwide Execution', desc: 'Logistical capabilities to execute tenders across multiple regions seamlessly.' }
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

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden">
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059050/care_maintenance/frontend_assets/services/pest8.webp" alt="Tender Execution" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl hidden md:block max-w-xs transition-all duration-500 group-hover:-translate-y-[55%] group-hover:shadow-blue-500/20">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-xl mb-2">Timely Execution</h4>
              <p className="text-sm text-gray-600">We guarantee project completion within stipulated tender deadlines.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3.5 Tender Execution Showcase */}
      <section className="py-10 lg:py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-6xl lg:text-10xl font-semibold tracking-tight mb-16 text-red-600"
        >
          Recent Tender Executions
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group cursor-pointer rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[600px]"
          >
            <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058976/care_maintenance/frontend_assets/services/carpenter_11.webp" alt="Modular Office Setup" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-10">
              <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-4">Carpentry</div>
              <h3 className="text-3xl font-bold text-white mb-2">Modular Office Setup</h3>
              <p className="text-gray-200 line-clamp-2">Complete carpentry and modular setup for a newly constructed municipal building.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px]"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058980/care_maintenance/frontend_assets/services/carpenter_15.webp" alt="Custom Furniture Fabrication" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Woodwork</div>
                <h3 className="text-xl font-bold text-white">Custom Furniture Fabrication</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px]"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058999/care_maintenance/frontend_assets/services/cleaning_8.webp" alt="Public Sector Cleaning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Cleaning Services</div>
                <h3 className="text-xl font-bold text-white">Public Sector Cleaning</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Final CTA Banner */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">Discuss a Tender Opportunity</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Reach out to our tender participation team to explore partnership and execution capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = 'tel:9990959502'} className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Tender Team
              </button>
              <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-blue-600 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Tender Team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GovernmentTenderPage;

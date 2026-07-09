import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Shield, Clock, 
  TrendingUp, ChevronDown, Phone, Mail, Award, 
  Wrench, RotateCw, Tv, Flame, Droplet, Zap
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

const CommercialApplianceMaintenancePage = () => {
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
              Premium Appliance Repair & Care
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.15] tracking-tight mb-6 min-h-[140px] md:min-h-[180px] lg:min-h-[220px] max-w-2xl text-balance">
              Commercial Appliances, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Maintained & Simplified</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Keep your business running smoothly with quick, certified, and dependable repairs for commercial washing machines, refrigerators, TVs, microwaves, geysers, and water purifiers.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link to="/#service-price-box" className="px-8 py-4 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-red-600/20">
                Get A Free Estimate
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link to="/feedback" className="px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all shadow-sm">
                See What We Do
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-200 flex items-center justify-center min-h-[350px]"
          >
            <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059027/care_maintenance/frontend_assets/services/elect1.webp" alt="Service Hero" className="w-full h-full object-cover" />
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">100% Safe</p>
                  <p className="text-sm text-gray-600 font-medium">Genuine Parts & Certified</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trusted By Section */}
      <section className="py-15 lg:py-20 relative overflow-hidden bg-white">
        {/* Subtle moving gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-gradient-to-tr from-blue-50/60 via-purple-50/30 to-blue-50/60 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          
          {/* Headline & Subtitle */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-red-600 mb-6 leading-[1.05]">
              Trusted by Delhi NCR Businesses
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-500 leading-relaxed">
              Providing fast, reliable, and manufacturer-approved repair solutions for all major commercial electronics.
            </motion.p>
          </motion.div>

          {/* Premium Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16 py-5 px-10 bg-white/80 backdrop-blur-xl rounded-full border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] "
          >
            {[
              { value: '10000+', label: 'Repairs Completed' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '50+', label: 'Certified Experts' },
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

          {/* Logo Grid */}
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
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Comprehensive Commercial Appliance Care</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Providing prompt, reliable, and professional repair services for your commercial appliances of all makes and models</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Wrench, title: 'Refrigerator Repair & Servicing', desc: 'Expert fix for cooling loss, compressor breakdowns, sensor faults, and gas refilling for single/double door units.' },
            { icon: RotateCw, title: 'Washing Machine & Dryer Fixes', desc: 'Resolving drum noise, drainage clogs, motor failures, and PCB board repair for front and top loaders.' },
            { icon: Flame, title: 'Microwave & Oven Repair', desc: 'Addressing heating failures, magnetron issues, touch panel bugs, and electrical wiring safety faults.' },
            { icon: Tv, title: 'LED / Smart TV Repair', desc: 'Fixes for black screens, sound issues, display panel replacements, motherboard service, and HDMI ports.' },
            { icon: Droplet, title: 'Water Purifier (RO) Servicing', desc: 'Regular filter cleaning, membrane replacements, TDS calibration, pump repairs, and water leakage control.' },
            { icon: Zap, title: 'Geyser & Water Heater Repair', desc: 'Heating element replacements, thermostat checks, pressure valve adjustments, and safety wiring inspections.' }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeInUp} transition={{ delay: i * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Subtle gradient glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Animated Accent Top Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon Container with hover scale and gradient transition */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-blue-400">
                  <service.icon className="w-6 h-6 group-hover:rotate-3 transition-transform duration-500" />
                </div>
                
                {/* Improved Typography */}
                <h3 className="text-xl font-bold text-red-600 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Details / Value Proposition Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-200 flex items-center justify-center min-h-[350px]">
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059028/care_maintenance/frontend_assets/services/elect2.webp" alt="Details" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl hidden md:block max-w-xs transition-all duration-500 group-hover:-translate-y-[55%] group-hover:shadow-blue-500/20">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-xl mb-2">100% Genuine Parts</h4>
              <p className="text-sm text-gray-600">All repairs are carried out using authentic OEM components with warranty coverage.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-600">The trusted partner for hassle-free business operations.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that a broken appliance disrupts your daily business routine. That's why our expert engineers are trained to provide fast diagnostics, prompt repairs, and completely transparent billing.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: 'Minimal Operational Disruption', desc: 'Flexible in-home service scheduling that works around your busy day.' },
                { title: 'Transparent Upfront Pricing', desc: 'Clear itemized estimates before we begin any repair work, with no hidden fees.' },
                { title: 'Certified Brand Experts', desc: 'Our technicians undergo thorough training to repair all major appliance makes and models.' }
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
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Our seamless repair process.</h2>
          <p className="text-gray-600 text-lg font-medium">Book your repair in seconds and let our certified team take care of the rest.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200 -z-10" />
          {[
            { num: '01', title: 'Schedule Visit', desc: 'Book your service online or via phone in under a minute.' },
            { num: '02', title: 'Inspection', desc: 'Doorstep inspection and root cause diagnostic by experts.' },
            { num: '03', title: 'Quality Fix', desc: 'Precision repair using 100% genuine manufacturer parts.' },
            { num: '04', title: 'Warranty', desc: 'Rigorous post-service checks and a dedicated work warranty.' }
          ].map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Subtle gradient glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Animated Accent Top Line */}
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

      {/* 7. Case Studies / Projects Showcase */}
      <section className="py-10 lg:py-16 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.h2 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-6xl lg:text-10xl font-semibold tracking-tight mb-16 text-red-600"
        >
          Recent Appliance Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group cursor-pointer rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[600px] bg-gray-200 flex items-center justify-center min-h-[350px]"
          >
            <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059029/care_maintenance/frontend_assets/services/elect3.webp" alt="Project 1" className="w-full h-full object-cover absolute z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-10 z-10">
              <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-4">Double-Door Refrigerator</div>
              <h3 className="text-3xl font-bold text-white mb-2">Smart Inverter Compressor Restoration</h3>
              <p className="text-gray-200 line-clamp-2">Successfully replaced inverter controller unit and refilled eco-friendly refrigerant, restoring optimal cooling.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px] bg-gray-200 flex items-center justify-center"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059030/care_maintenance/frontend_assets/services/elect4.webp" alt="Project 2" className="w-full h-full object-cover absolute z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Washing Machine</div>
                <h3 className="text-xl font-bold text-white">Front-Load Washer Drum Repair & Align</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px] bg-gray-200 flex items-center justify-center"
            >
              <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059031/care_maintenance/frontend_assets/services/elect5.webp" alt="Project 3" className="w-full h-full object-cover absolute z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Kitchen Chimney</div>
                <h3 className="text-xl font-bold text-white">Commercial Deep-Clean & Motor Repair</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Stats / Achievements Section */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200 text-center">
            {[
              { num: '10000+', label: 'Appliances Serviced' },
              { num: '15+', label: 'Years Experience' },
              { num: '2-Hour', label: 'Response Time' },
              { num: '100%', label: 'Genuine Spare Parts' }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-500 mb-2">{stat.num}</div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            
            {/* Image Section */}
            <div className="w-full lg:w-[40%] order-1 lg:order-2">
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-200 flex items-center justify-center min-h-[350px]">
                <img src="https://res.cloudinary.com/reuof8q6/image/upload/v1783059034/care_maintenance/frontend_assets/services/elect6.webp" alt="FAQ" className="w-full h-full object-cover absolute z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10" />
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="w-full lg:w-[60%] order-2 lg:order-1">
              <div className="mb-10 lg:mb-12">
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-red-600">Frequently asked questions.</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: 'Do you use original manufacturer spare parts?', a: 'Yes, we source and install only genuine, manufacturer-approved OEM spare parts to guarantee performance, longevity, and safety.' },
                  { q: 'Is there a warranty on your repair services?', a: 'Yes, we provide a service warranty on all completed repairs and parts replaced, ensuring you are fully covered in case of any issues.' },
                  { q: 'What is the standard turnaround time for a repair?', a: 'Most repairs (like washing machine, refrigerator, TV, and RO fixes) are diagnosed and resolved on the very same day. For complex motherboard issues, it may take 24-48 hours.' },
                  { q: 'Do you service all brands of household electronics?', a: 'Absolutely. Our certified experts are fully trained to service all leading brands including LG, Samsung, Whirlpool, Bosch, IFB, Haier, Godrej, Panasonic, and more.' }
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

      {/* 11. Final CTA Banner */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">Ready to restore your appliance?</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Get in touch with our expert repair specialists today to schedule your service or receive a fast estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = 'tel:8287003241'} className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 8287003241
              </button>
              <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-blue-600 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-500 transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CommercialApplianceMaintenancePage;

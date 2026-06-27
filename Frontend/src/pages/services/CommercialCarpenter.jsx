import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, Shield, Zap, Clock, 
  Lightbulb, Building2, HardHat, TrendingUp, ChevronDown,
  Star, Phone, Mail, Award, Factory, Power, Wrench, Hammer, PencilRuler, Home, Shovel, Trees
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
  { name: 'Rajdhani Besan Mills', logo: '/images/services/rajchani besan.webp' },
  { name: 'The Rugs', logo: '/images/services/the rugs.webp' },
  { name: 'Affinity Salon', logo: '/images/services/affinity salon.webp' },
  { name: 'Anmol Biscuits', logo: '/images/services/anmol biscuits.webp' },
];

const CommercialCarpenter = () => {
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
              Premium Carpentry Services
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.15] tracking-tight mb-6 min-h-[140px] md:min-h-[180px] lg:min-h-[220px] max-w-2xl text-balance">
              Commercial Carpentry, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Crafted & Simplified</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Transform your space with expert craftsmanship. From bespoke furniture and custom cabinetry to detailed wood repairs and structural framing.
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
            className="relative lg:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 bg-gray-200 flex items-center justify-center"
          >
            <img src="/images/services/carpenter 15.webp" alt="Commercial Carpentry" className="w-full h-full object-cover" />
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl max-w-xs"
            >
              <div className="flex gap-4 items-center">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                  <Hammer className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Expert</p>
                  <p className="text-sm text-gray-600 font-medium">Craftsmanship</p>
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
              Trusted by Leading Brands Delhi NCR
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-500 leading-relaxed">
              Building long-term partnerships through uncompromising reliability, premium service, and enterprise-grade trust.
            </motion.p>
          </motion.div>

          {/* Premium Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-16 py-5 px-10 bg-white/80 backdrop-blur-xl rounded-full border border-[#f1f5f9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] "
          >
            {[
              { value: '5000+', label: 'Projects Completed' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '500+', label: 'Enterprise Clients' },
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
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Comprehensive Carpentry Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Providing precise and dependable woodwork for properties of all types and sizes, with a commitment to aesthetics, durability, and long-term performance.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Home, title: 'Custom Furniture', desc: 'Bespoke wardrobes, tables, and cabinets designed perfectly for your available space.' },
            { icon: Wrench, title: 'Wood Repair', desc: 'Restoration and repair of damaged woodwork, restoring its original beauty and structural integrity.' },
            { icon: Building2, title: 'Cabinet Installation', desc: 'Professional installation of kitchen and bathroom cabinets with precision alignment.' },
            { icon: PencilRuler, title: 'Door & Window Framing', desc: 'Accurate and secure framing for doors and windows to ensure perfect fitting and insulation.' },
            { icon: HardHat, title: 'Hardwood Flooring', desc: 'Installation and refinishing of hardwood floors to elevate the elegance of any room.' },
            { icon: Trees, title: 'Deck & Patio Construction', desc: 'High-quality outdoor wooden structures built to withstand weather and time.' }
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

      {/* 4.Comprehensive Services  */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-200 relative">
              <img src="/images/services/carpenter 12.webp" alt="Expert Carpentry" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-2xl hidden md:block max-w-xs transition-all duration-500 group-hover:-translate-y-[55%] group-hover:shadow-blue-500/20">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="font-bold text-xl mb-2">Expert Crafters</h4>
              <p className="text-sm text-gray-600">Our carpenters have years of experience delivering top-tier woodwork.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-red-600">The trusted partner for modern facilities.</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We understand that carpentry isn't just about cutting wood—it's about enhancing your environment, ensuring structural integrity, and bringing your design vision to life.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                { title: 'Attention to Detail', desc: 'Precision in every cut, joint, and finish.' },
                { title: 'Quality Materials', desc: 'We source the best wood to ensure lasting durability.' },
                { title: 'Clean Workspaces', desc: 'We leave your property spotless after the job is done.' }
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
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-red-600">Our seamless workflow.</h2>
          <p className="text-gray-600 text-lg font-medium">From initial design to final polish, we ensure a smooth experience.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gray-200 -z-10" />
          {[
            { num: '01', title: 'Consultation', desc: 'Discussing your vision and measuring the space.' },
            { num: '02', title: 'Design', desc: 'Creating detailed plans and selecting materials.' },
            { num: '03', title: 'Crafting', desc: 'Expert construction with precise attention to detail.' },
            { num: '04', title: 'Installation', desc: 'Seamless fitting and final finishing touches.' }
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
          Recent Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="group cursor-pointer rounded-[2rem] overflow-hidden relative aspect-square md:aspect-auto md:h-[600px] bg-gray-200"
          >
            <img src="/images/services/carpenter 11.webp" alt="Recent Project" className="w-full h-full object-cover absolute inset-0 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex flex-col justify-end p-10 z-10">
              <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-4">Residential</div>
              <h3 className="text-3xl font-bold text-white mb-2">Custom Walk-in Closet</h3>
              <p className="text-gray-200 line-clamp-2">Designed and built a premium oak wood walk-in closet optimized for maximum storage space.</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px] bg-gray-200"
            >
              <img src="/images/services/carepenter 13.webp" alt="Recent Project" className="w-full h-full object-cover absolute inset-0 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Commercial</div>
                <h3 className="text-xl font-bold text-white">Office Reception Desk</h3>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="group cursor-pointer rounded-[2rem] overflow-hidden relative h-[284px] bg-gray-200"
            >
              <img src="/images/services/carpenter image 13.webp" alt="Recent Project" className="w-full h-full object-cover absolute inset-0 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col justify-end p-8 z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit px-4 py-1 rounded-full text-white text-sm mb-3">Outdoor</div>
                <h3 className="text-xl font-bold text-white">Redwood Patio Deck</h3>
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
              { num: '500+', label: 'Happy Clients' },
              { num: '15+', label: 'Years Experience' },
              { num: '1000+', label: 'Custom Pieces' },
              { num: '100%', label: 'Quality Guaranteed' }
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
            
            {/* Image Section (Shows above FAQ on mobile, right on desktop) */}
            <div className="w-full lg:w-[40%] order-1 lg:order-2">
              <div className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-200">
                <img src="/images/services/carpenter 15.webp" alt="Carpentry Details" className="w-full h-full object-cover absolute inset-0 z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent z-10" />
              </div>
            </div>

            {/* FAQ Section */}
            <div className="w-full lg:w-[60%] order-2 lg:order-1">
              <div className="mb-10 lg:mb-12">
                <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-red-600">Frequently asked questions.</h2>
              </div>

              <div className="space-y-4">
                {[
                  { q: 'Do you offer custom furniture design?', a: 'Yes, we specialize in bespoke furniture tailored to your exact specifications, style preferences, and spatial requirements.' },
                  { q: 'What types of wood do you work with?', a: 'We work with a wide variety of woods, including oak, walnut, mahogany, pine, and specialized engineered woods, depending on your budget and project needs.' },
                  { q: 'How long does a typical custom project take?', a: 'Timelines vary based on the complexity of the piece, but typically range from 2 to 6 weeks from final design approval.' },
                  { q: 'Can you match the stain or paint to my existing furniture?', a: 'Absolutely. We offer custom stain matching and finishing services to ensure your new pieces blend perfectly with your current decor.' }
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
            <h2 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight mb-6">Ready to start your carpentry project?</h2>
            <p className="text-blue-100 text-lg lg:text-xl max-w-2xl mx-auto mb-10">
              Get in touch with our expert carpenters today to discuss your vision and receive a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.href = 'tel:9990959502'} className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 9990959502
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

export default CommercialCarpenter;

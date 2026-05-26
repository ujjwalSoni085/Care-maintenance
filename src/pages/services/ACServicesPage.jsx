import React from 'react';
import BeforeAfterSlider from '../../components/common/BeforeAfterSlider';
import { serviceData } from './serviceData';
import { Link } from 'react-router-dom';

const ACServicesPage = () => {
  const service = serviceData['ac-services'];

  if (!service) return null;

  return (
    <div className="stitch-redesign">
      <main className="pt-12 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col gap-12">
        
        {/* === HERO SECTION === */}
        <section className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 border border-outline-variant/20 shadow-lg flex flex-col md:flex-row items-center gap-10 md:gap-14 relative overflow-hidden">
          {/* Subtle Ambient Backgrounds */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>
          
          <div className="flex-1 space-y-7 z-10 w-full">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-variant/30 border border-outline-variant/30 text-surface-dark text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for Service
            </div>
            
            {/* Typography Refinements */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 leading-[1.1] tracking-tight">
                Professional AC Care & Cooling Solutions
              </h1>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg font-medium">
                Complete AC installation, repair, and maintenance services for efficient cooling and year-round comfort.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-1">
              <div className="flex items-center gap-2 bg-surface-variant/30 px-3 py-1.5 rounded-lg border border-outline-variant/30 shadow-sm">
                <span className="text-primary text-[16px] font-bold">✔</span>
                <span className="text-sm text-surface-dark font-semibold tracking-wide">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-variant/30 px-3 py-1.5 rounded-lg border border-outline-variant/30 shadow-sm">
                <span className="text-primary text-[16px] font-bold">✔</span>
                <span className="text-sm text-surface-dark font-semibold tracking-wide">Certified Technicians</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-variant/30 px-3 py-1.5 rounded-lg border border-outline-variant/30 shadow-sm">
                <span className="text-primary text-[16px] font-bold">✔</span>
                <span className="text-sm text-surface-dark font-semibold tracking-wide">Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Elevated Call-to-Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90 transition-all duration-300">
                Schedule Service
              </button>
              <button className="flex items-center justify-center gap-2 bg-surface-dark text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 hover:bg-surface-dark/90 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex-1 w-full aspect-[4/3] md:aspect-[5/4] rounded-[2rem] overflow-hidden relative shadow-2xl group">
            {service.gallery && service.gallery.length > 0 && (
              <img src={service.gallery[0]} alt="AC Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 pointer-events-none">
              <div className="text-white flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                </div>
                <div>
                  <div className="font-bold text-lg tracking-wide drop-shadow-md">Premium Care</div>
                  <div className="text-white/80 text-sm font-medium">Top-rated professionals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === ABOUT OUR AC & COOLING SERVICES === */}
        <section className="py-12 relative overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -z-10" />
          
          <div className="max-w-6xl mx-auto text-center space-y-8 px-4 sm:px-6">
            <div className="flex flex-col items-center gap-4">
              {/* AC Themed Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/50 text-blue-600 flex items-center justify-center shadow-sm relative z-10">
                <span className="material-symbols-outlined text-3xl font-black animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight font-heading">
                About Our AC & Cooling Services
              </h2>
              <div className="h-1 bg-blue-500 rounded-full w-12" />
            </div>

            {/* Spacious Glassmorphic Container with two columns */}
            <div className="group relative bg-gradient-to-br from-white/90 via-white/80 to-blue-50/[0.02] backdrop-blur-2xl p-8 md:p-14 rounded-[2.5rem] border border-outline-variant/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(59,130,246,0.08)] hover:border-blue-300 transition-all duration-700 overflow-hidden text-left">
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400" />
              
              {/* Decorative subtle electrical waves/glow in background */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute -left-20 -top-20 w-60 h-60 bg-blue-400/5 rounded-full blur-[80px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                {/* Left Side: Elegant Paragraph with Quotes */}
                <div className="lg:col-span-7 space-y-6 text-left pr-0 lg:pr-6 relative">
                  <span className="absolute -top-16 -left-6 text-[10rem] font-serif text-blue-500/10 select-none pointer-events-none leading-none">“</span>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-semibold relative z-10 italic pl-4">
                    Our certified technicians deliver professional, energy-efficient, and comprehensive cooling solutions tailored for homes and businesses. From quick repairs and leak detection to full installations and advanced deep cleaning, we ensure every unit runs at peak efficiency and care. With rapid response times, skilled professionals, and a commitment to absolute comfort, we make AC services simple, refreshing, and stress-free for every customer.
                  </p>
                  <span className="absolute -bottom-24 right-4 text-[10rem] font-serif text-blue-500/10 select-none pointer-events-none leading-none">”</span>
                </div>

                {/* Right Side: Trust & Value Pillars */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                  {[
                    {
                      icon: "verified_user",
                      title: "100% Certified Experts",
                      desc: "All technicians are fully certified for all AC models."
                    },
                    {
                      icon: "bolt",
                      title: "Rapid Emergency Response",
                      desc: "Fast, reliable dispatch for urgent cooling concerns."
                    },
                    {
                      icon: "payments",
                      title: "Upfront Honest Pricing",
                      desc: "Clear itemized estimates before any hands-on work begins."
                    }
                  ].map((pillar, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 border border-outline-variant/40 hover:border-blue-200 hover:bg-blue-500/[0.01] shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 group/pillar"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/20 text-blue-600 flex items-center justify-center shadow-sm group-hover/pillar:scale-110 group-hover/pillar:bg-blue-500 group-hover/pillar:text-white transition-all duration-300 shrink-0">
                        <span className="material-symbols-outlined text-xl font-bold">{pillar.icon}</span>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-red-600 tracking-tight text-base group-hover/pillar:text-blue-600 transition-colors duration-300">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-text-muted leading-relaxed font-semibold">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === SERVICES GRID === */}
        <section className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-soft">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 flex flex-col gap-4 border-r-0 md:border-r border-blue-200 pr-0 md:pr-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30 overflow-hidden flex-shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>ac_unit</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4 tracking-tight leading-tight">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed font-medium">
                We handle everything from split units to central systems. No job is too big or too small for our <strong className="text-secondary font-bold">expert technicians</strong>.
              </p>
            </div>
            <div className="w-full md:w-2/3">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(service.features || []).map((type, index) => (
                  <li key={index} className="flex items-center gap-3 p-4 rounded-xl bg-surface-variant/30 text-surface-dark hover:bg-surface-container-high transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="font-label-bold text-sm">{type}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* === BEFORE & AFTER SLIDER === */}
        <BeforeAfterSlider />

        {/* === WHY CHOOSE US === */}
        <section className="space-y-12 pt-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">The Care Maintenance Difference</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(service.benefits || []).map((benefit, index) => (
              <div key={index} className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-outline-variant/50 hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden">
                {/* Subtle gradient glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Animated Accent Top Line */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Icon Container with hover scale and gradient transition */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-blue-400">
                    <span className="material-symbols-outlined text-2xl group-hover:rotate-3 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>{benefit.icon || 'verified'}</span>
                  </div>
                  
                  {/* Improved Typography */}
                  <h4 className="text-xl font-bold text-red-600 mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{benefit.title}</h4>
                  <p className="text-text-muted leading-relaxed font-medium">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === GALLERY === */}
        <section className="space-y-12 pt-16 relative">
          {/* Subtle Ambient Background for Section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[120%] bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-transparent blur-[120px] -z-10 rounded-full pointer-events-none"></div>

          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">Our Recent Work</h2>
            <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Premium installations and meticulously clean repairs, crafted with precision.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-2">
            {(service.gallery || []).map((imgSrc, index) => (
              <div key={index} className="group relative aspect-video md:aspect-square bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/30 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer">
                
                {/* Image with smooth zoom and brightness adjustment */}
                <img src={imgSrc} alt={`AC Service Work ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out" />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Shine/Light Sweep Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white mb-3 shadow-lg group-hover:scale-100 scale-75 transition-transform duration-500 delay-100">
                    <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  </div>
                  <h4 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md">Premium Finish</h4>
                  <p className="text-white/80 font-medium text-sm md:text-base">Flawless execution</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === CTA SECTION === */}
        {/* <section className="bg-gradient-to-r from-dark to-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl mt-8">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
           <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="material-symbols-outlined text-5xl text-secondary mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              <h2 className="font-display-sm md:font-display-md">Need urgent AC repair?</h2>
              <p className="font-body-lg text-white/80">Our technicians are on standby for emergency repairs. Don't sweat it out, call us now.</p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                 <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-bold text-lg hover:bg-white hover:text-dark transition-colors shadow-lg">Call +1 (800) 123-4567</button>
                 <Link to="/contact" className="bg-transparent border border-white/30 px-8 py-4 rounded-full font-label-bold text-lg hover:bg-white/10 transition-colors">Book Online</Link>
              </div>
           </div>
        </section> */}

      </main>
    </div>
  );
};

export default ACServicesPage;

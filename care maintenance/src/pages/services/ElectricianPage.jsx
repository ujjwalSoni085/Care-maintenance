import React from 'react';
import { serviceData } from './serviceData';
import { Link } from 'react-router-dom';

const ElectricianPage = () => {
  const service = serviceData['electrician'];

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-surface-dark leading-[1.1] tracking-tight">
                {service.headline}
              </h1>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg font-medium">
                {service.description}
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
                <span className="text-sm text-surface-dark font-semibold tracking-wide">Expert Electricians</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-variant/30 px-3 py-1.5 rounded-lg border border-outline-variant/30 shadow-sm">
                <span className="text-primary text-[16px] font-bold">✔</span>
                <span className="text-sm text-surface-dark font-semibold tracking-wide">Safety Guaranteed</span>
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
              <img src={service.gallery[0]} alt="Electrical Service" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 pointer-events-none">
              <div className="text-white flex items-center gap-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                </div>
                <div>
                  <div className="font-bold text-lg tracking-wide drop-shadow-md">Safe & Reliable</div>
                  <div className="text-white/80 text-sm font-medium">Top-rated professionals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === ELECTRICIAN SPECIFIC PRICING === */}
        <section className="space-y-16 py-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-surface-dark tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-text-muted font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              No hidden fees. Select the plan that fits your electrical needs perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl p-10 border border-outline-variant/30 flex flex-col hover:border-secondary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="mb-10">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-3">Basic Inspection & Repair</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-surface-dark">₹3999</span>
                  <span className="text-text-muted font-medium">/visit</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Fault Finding
                </li>
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Safety Check
                </li>
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Minor Repairs (Sockets/Switches)
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-surface-container-highest text-surface-dark font-bold hover:bg-secondary hover:text-white transition-all duration-300">
                Select Plan
              </button>
            </div>

            {/* Plan 2 - Featured (Standard Repair) */}
            <div className="bg-white rounded-3xl p-10 border-2 border-secondary/80 flex flex-col relative shadow-xl hover:shadow-2xl hover:-translate-y-2 lg:scale-105 lg:hover:scale-[1.07] transition-all duration-500 z-10 group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
                Recommended
              </div>
              <div className="mb-10">
                <h3 className="text-secondary font-bold uppercase tracking-widest text-xs mb-3">Appliance & Fixture Setup</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-surface-dark">₹9999</span>
                  <span className="text-text-muted font-medium">/job</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-center gap-3 text-surface-dark font-bold">
                  <span className="material-symbols-outlined text-secondary text-xl font-black">check</span>
                  Everything in Basic
                </li>
                <li className="flex items-center gap-3 text-surface-dark font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Ceiling Fan Installation
                </li>
                <li className="flex items-center gap-3 text-surface-dark font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Lighting Setup
                </li>
                <li className="flex items-center gap-3 text-surface-dark font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  MCB / Fuse Replacement
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-secondary text-white font-bold shadow-lg shadow-secondary/30 hover:bg-secondary/90 hover:shadow-xl transition-all duration-300">
                Book This Plan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-3xl p-10 border border-outline-variant/30 flex flex-col hover:border-secondary/40 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="mb-10">
                <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-3">Complete Rewiring</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-surface-dark">₹14999</span>
                  <span className="text-text-muted font-bold px-2 py-0.5 rounded-md bg-surface-variant/50 text-[10px] uppercase tracking-tighter self-center ml-2">Starting</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Full Room Rewiring
                </li>
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Panel Upgrades
                </li>
                <li className="flex items-center gap-3 text-surface-dark/80 font-medium">
                  <span className="material-symbols-outlined text-secondary text-xl">check</span>
                  Smart Home Integration
                </li>
              </ul>
              <button className="w-full py-4 rounded-2xl bg-surface-container-highest text-surface-dark font-bold hover:bg-secondary hover:text-white transition-all duration-300">
                Select Plan
              </button>
            </div>
          </div>
        </section>

        {/* === SERVICES GRID === */}
        <section className="bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-soft">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/3 flex flex-col gap-4 border-r-0 md:border-r border-blue-200 pr-0 md:pr-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-500/30 overflow-hidden flex-shrink-0">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-surface-dark mb-4 tracking-tight leading-tight">
                Comprehensive <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed font-medium">
                We handle everything from simple socket replacements to full house rewiring. No job is too big or too small for our <strong className="text-secondary font-bold">expert electricians</strong>.
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

        {/* === WHY CHOOSE US === */}
        <section className="space-y-12 pt-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark tracking-tight">The Care Maintenance Difference</h2>
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
                  <h4 className="text-xl font-bold text-surface-dark mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{benefit.title}</h4>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-surface-dark tracking-tight">Our Recent Work</h2>
            <p className="text-lg text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
              Safe, certified, and cleanly finished electrical projects for your peace of mind.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-2">
            {(service.gallery || []).map((imgSrc, index) => (
              <div key={index} className="group relative aspect-video md:aspect-square bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/30 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ease-out hover:-translate-y-2 cursor-pointer">
                
                {/* Image with smooth zoom and brightness adjustment */}
                <img src={imgSrc} alt={`Electrical Service Work ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-out" />
                
                {/* Premium Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Shine/Light Sweep Effect */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[45deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white mb-3 shadow-lg group-hover:scale-100 scale-75 transition-transform duration-500 delay-100">
                    <span className="material-symbols-outlined text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  </div>
                  <h4 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md">Professional Work</h4>
                  <p className="text-white/80 font-medium text-sm md:text-base">Guaranteed safety</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ElectricianPage;

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BeforeAfterSlider = ({ beforeImage = "/images/services/elect2.webp", afterImage = "/images/services/elect3.webp" }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  return (
    <section className="pt-12 w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 tracking-tight">Real Results, Real Difference</h2>
        <p className="text-text-muted mt-4 max-w-2xl mx-auto text-lg">Slide to see the incredible transformation</p>
      </div>
      
      <div className="max-w-5xl mx-auto w-full relative overflow-hidden rounded-3xl shadow-2xl border border-white/50 aspect-[4/3] md:aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 group">
        
        {/* After Image / Content (Background) */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-blue-50/50">
          {afterImage ? (
            <img src={afterImage} alt="After Service" className="w-full h-full object-cover object-center filter contrast-[1.15] saturate-[1.2] brightness-[1.05] transition-all duration-700 group-hover:scale-105" />
          ) : (
            <>
              <span className="material-symbols-outlined text-6xl text-blue-400 mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>imagesmode</span>
              <span className="text-blue-800 font-extrabold text-2xl tracking-wide uppercase">Coming Soon</span>
              <span className="text-blue-500/70 text-sm mt-1 font-medium">After Service</span>
            </>
          )}
        </div>

        {/* Before Image / Content (Foreground, clipped) */}
        <div 
          className="absolute inset-0 h-full flex flex-col items-center justify-center bg-gray-200/50 shadow-[inset_-10px_0_20px_-10px_rgba(0,0,0,0.1)]"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Using a pseudo element or absolute div centered to prevent content from shifting when clipping */}
          {beforeImage ? (
            <img src={beforeImage} alt="Before Service" className="absolute inset-0 w-full h-full object-cover object-center max-w-none filter grayscale-[0.5] contrast-[0.8] brightness-[0.9] sepia-[0.2] transition-all duration-700 group-hover:scale-105" />
          ) : (
            <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center min-w-[300px]">
              <span className="material-symbols-outlined text-6xl text-gray-400 mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>image_not_supported</span>
              <span className="text-gray-600 font-extrabold text-2xl tracking-wide uppercase">Coming Soon</span>
              <span className="text-gray-500/70 text-sm mt-1 font-medium">Before Service</span>
            </div>
          )}
        </div>

        {/* Slider Input overlay */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0 p-0"
        />

        {/* Custom Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none z-10 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform duration-75 ease-out"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-500 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-blue-600 font-bold select-none text-xl">swap_horiz</span>
          </div>
        </div>
        
        {/* Labels */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-6 left-6 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider pointer-events-none z-10 border border-white/20 shadow-lg"
        >
          BEFORE
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute top-6 right-6 bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider pointer-events-none z-10 border border-blue-400/50 shadow-lg"
        >
          AFTER
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashIntro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const taglinesRef = useRef(null);

  useEffect(() => {
    // Check if we've already shown the intro in this session
    const hasSeenIntro = sessionStorage.getItem('care_maintenance_intro');
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('care_maintenance_intro', 'true');
        onComplete();
      }
    });

    // Animate blobs continuously
    gsap.to(blob1Ref.current, {
      x: '20vw',
      y: '20vh',
      scale: 1.5,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to(blob2Ref.current, {
      x: '-20vw',
      y: '-20vh',
      scale: 1.5,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Entrance Timeline
    tl.set(containerRef.current, { visibility: 'visible' })
      // Animate Logo
      .fromTo('.splash-logo', 
        { scale: 0.5, opacity: 0, y: 50 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }
      )
      // Stagger tagline items
      .fromTo('.tagline-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out'
        },
        "-=0.4" // start slightly before logo finishes
      )
      // Hold for a moment to let user read
      .to({}, { duration: 1.0 })
      // Exit Animation
      .to('.tagline-item', {
        y: -30,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      })
      .to('.splash-logo', {
        scale: 0.5,
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: 'power2.in'
      }, "-=0.2")
      // Fade out whole container
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      });

    return () => tl.kill();
  }, [onComplete]);

  // If already seen in this render cycle, we don't return null here to avoid hook issues, 
  // but it will unmount very fast via the useEffect check.

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-surface flex flex-col items-center justify-center overflow-hidden"
      style={{ visibility: 'hidden' }}
    >
      {/* Blur Gradient Blobs */}
      <div 
        ref={blob1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none"
      />
      <div 
        ref={blob2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none"
      />
      
      {/* Split Text Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div ref={textRef} className="flex justify-center mb-8 perspective-[1000px]">
          <img 
            src="https://res.cloudinary.com/reuof8q6/image/upload/v1783058411/care_maintenance/frontend_assets/care-maintenance-logo-removebg-preview.webp" 
            alt="Care Maintenance Logo" 
            className="splash-logo w-72 md:w-96 lg:w-[450px] drop-shadow-2xl object-contain"
          />
        </div>
        
        {/* Staggered Taglines */}
        <div ref={taglinesRef} className="flex flex-wrap justify-center gap-6 mt-8">
          {["Reliable", "Professional", "Expert Care"].map((text, i) => (
            <div 
              key={i}
              className="tagline-item flex items-center gap-2 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="font-semibold text-gray-700 tracking-wide uppercase text-sm md:text-base">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashIntro;

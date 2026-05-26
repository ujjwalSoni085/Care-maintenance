import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { splitTextToSpans } from '../../utils/gsapUtils';

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
      // Stagger chars of main text
      .fromTo('.split-char', 
        { y: 100, opacity: 0, rotateX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0,
          duration: 1.2,
          stagger: 0.04,
          ease: 'power4.out'
        }
      )
      // Stagger tagline items
      .fromTo('.tagline-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        },
        "-=0.6" // start slightly before text finishes
      )
      // Hold for a moment to let user read
      .to({}, { duration: 1.5 })
      // Exit Animation
      .to('.tagline-item', {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.in'
      })
      .to('.split-char', {
        y: -100,
        opacity: 0,
        rotateX: 90,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power4.in'
      }, "-=0.3")
      // Fade out whole container
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
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
      <div className="relative z-10 text-center px-4">
        <h1 
          ref={textRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tight font-heading mb-8 perspective-[1000px]"
        >
          {splitTextToSpans("Care Maintenance")}
        </h1>
        
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

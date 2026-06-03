import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Button from '../common/Button';
import { slides } from '../../data/slides';

const HeroCarousel = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [slide.id]: true }));
      };
    });
  }, []);

  return (
    <section className="w-full bg-white pt-2 pb-6 md:pt-4 md:pb-8 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="relative w-full h-[75vh] md:h-[calc(100vh-100px)] rounded-[2.2rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow-[0_28px_70px_-15px_rgba(0,0,0,0.22)] hover:shadow-[0_35px_80px_-10px_rgba(0,0,0,0.28)] transition-all duration-700 bg-gray-900 hero-swiper overflow-hidden border border-outline-variant/20 max-w-[1600px] mx-auto">
        
        {/* Soft edge gradient fades to hide harsh cuts and blend elegantly */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-black/45 via-black/15 to-transparent pointer-events-none z-20" />

        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Parallax]}
          effect="fade"
          speed={1500}
          parallax={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3 !mx-2 !rounded-full !inline-block !cursor-pointer transition-all duration-300 hover:!bg-white',
            bulletActiveClass: '!bg-accent !w-8',
          }}
          className="w-full h-full"
        >
          {/* Parallax Background */}
          <div 
            className="absolute inset-0 w-[120%] h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${slides[0].image}')` }} // Fallback base
            data-swiper-parallax="-20%"
          />

          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              {({ isActive }) => (
                <>
                  {/* Loading Skeleton */}
                  {!loadedImages[slide.id] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse z-0" />
                  )}

                  {/* Background Image with slight scale animation using motion or swiper parallax */}
                  <motion.div 
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${loadedImages[slide.id] ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                    initial={{ scale: 1 }}
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    transition={{ duration: 7, ease: [0.25, 1, 0.5, 1] }}
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-dark/95 via-dark/70 md:via-dark/50 to-transparent" />
                  <div className="absolute inset-0 bg-black/40 md:bg-black/20" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto z-10">
                    <motion.div 
                      className="max-w-2xl text-white"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading leading-tight mb-4 md:mb-6 tracking-tight drop-shadow-md">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-xl font-light drop-shadow">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Button 
                          variant="primary" 
                          size="lg" 
                          onClick={() => {
                            const element = document.getElementById('service-price-box');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              window.location.href = '/#service-price-box';
                            }
                          }}
                          className="w-full sm:w-auto text-center justify-center"
                        >
                          {slide.cta}
                        </Button>
                       
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Global override for swiper pagination position */}
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 1.5rem !important;
          z-index: 20 !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 768px) {
          .hero-swiper .swiper-pagination {
            bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

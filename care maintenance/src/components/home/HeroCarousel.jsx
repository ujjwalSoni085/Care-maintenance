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
    <section className="relative w-full h-[70vh] md:h-[calc(100vh-72px)] hero-swiper overflow-hidden bg-gray-900">
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
          style={{ backgroundImage: `url(${slides[0].image})` }} // Fallback base
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
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ scale: 1 }}
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 6, ease: "easeOut" }}
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
                      <Button variant="primary" size="lg" href={slide.path} className="w-full sm:w-auto text-center justify-center">
                        {slide.cta}
                      </Button>
                      <Button variant="outline" size="lg" href="/services" className="w-full sm:w-auto text-center justify-center">
                        Our Services
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      
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

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const carouselSlides = [
  {
    id: 1,
    image: '/images/Group photo.webp',
    year: '2025',
  },
  {
    id: 2,
    image: '/images/services/poster iamge 4.webp',
    year: '2022',
  },
  {
    id: 3,
    image: '/images/services/party photo crausel 3.webp',
    year: '2024',
  },
  {
    id: 4,
    image: '/images/services/poster image 9.webp',
    year: '2024',
  },
  {
    id: 5,
    image: '/images/services/poster image 10.webp',
    year: '2024',
  },
  {
    id: 6,
    image: '/images/services/poster image 12.webp',
    year: '2025',
  }
];

const HeroCarousel = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    carouselSlides.forEach(slide => {
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
          modules={[Autoplay, Pagination, Navigation, Parallax]}
          speed={1500}
          parallax={true}
          navigation={true}
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
          {/* Parallax Background Base */}
          <div 
            className="absolute inset-0 w-[120%] h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${carouselSlides[0].image}')` }}
            data-swiper-parallax="-20%"
          />

          {carouselSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
              {({ isActive }) => (
                <>
                  {/* Loading Skeleton */}
                  {!loadedImages[slide.id] && (
                    <div className="absolute inset-0 bg-gray-800 animate-pulse z-0" />
                  )}

                  {/* Background Image with slight scale animation using motion */}
                  <motion.div 
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${loadedImages[slide.id] ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url('${slide.image}')` }}
                    initial={{ scale: 1 }}
                    animate={{ scale: isActive ? 1.06 : 1 }}
                    transition={{ duration: 7, ease: [0.25, 1, 0.5, 1] }}
                  />
                  
                  {/* Bottom Gradient Overlay for Text */}
                  <div className="absolute inset-x-0 bottom-0 pb-20 pt-48 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 flex flex-col justify-end items-center px-6 text-center" />

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center pb-12 sm:pb-16 md:pb-20 px-4 md:px-12 pointer-events-none text-center">
                    <motion.div 
                      className="max-w-4xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white tracking-wide drop-shadow-xl text-balance">
                        Reliable Commercial & Residential Maintenance
                        {slide.year && (
                          <span className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent font-serif italic tracking-widest drop-shadow-lg inline-block align-baseline">
                            {slide.year}
                          </span>
                        )}
                      </h2>
                    </motion.div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Global overrides for swiper pagination and navigation */}
      <style>{`
        .hero-swiper .swiper-pagination {
          bottom: 1.5rem !important;
          z-index: 30 !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @media (min-width: 768px) {
          .hero-swiper .swiper-pagination {
            bottom: 2rem !important;
          }
        }
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.2);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5);
          transform: scale(1.1);
        }
        .hero-swiper .swiper-button-next::after,
        .hero-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 640px) {
          .hero-swiper .swiper-button-next,
          .hero-swiper .swiper-button-prev {
            display: none; /* Hide arrows on very small screens to save space */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel;

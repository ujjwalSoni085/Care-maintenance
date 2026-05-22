import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { reviews } from '../../data/reviews';

import 'swiper/css';
import 'swiper/css/pagination';

const ReviewsSection = () => {
  return (
    <section className="pt-6 pb-14 md:pt-8 md:pb-16 bg-white overflow-hidden">
      <Container>
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Real reviews from happy customers"
          centered={true}
          accentWord="Customers"
          titleClassName="!text-5xl md:!text-6xl lg:!text-7xl"
          subtitleClassName="!text-xl md:!text-2xl lg:!text-3xl text-gray-700 font-medium"
          className="!mb-4 sm:!mb-6"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-2"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-20 pt-4 px-4 -mx-4" // padding for pagination dots and hover shadows
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="group relative bg-gradient-to-b from-white to-gray-50/50 backdrop-blur-xl p-8 h-full min-h-[320px] rounded-3xl border border-outline-variant/60 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between">
                  {/* Subtle top gradient bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-sm"></div>
                  
                  {/* Subtle background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Styled Quote Icon watermark */}
                  <div className="absolute top-6 right-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    <FaQuoteLeft className="text-6xl" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Vibrant Star Rating with subtle glow */}
                      <div className="flex gap-1 text-yellow-400 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 filter drop-shadow-[0_2px_4px_rgba(234,179,8,0.25)]" />
                        ))}
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-surface-dark text-base md:text-[17px] leading-relaxed font-medium mb-8 italic group-hover:text-black transition-colors duration-300">
                        "{review.text}"
                      </p>
                    </div>
                    
                    {/* User profile details */}
                    <div className="flex items-center mt-auto">
                      <div className="relative mr-4">
                        {/* Premium active avatar glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-sm opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center font-bold text-base shadow-md border-2 border-white">
                          {review.initials}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-600 group-hover:text-blue-600 transition-colors duration-300 tracking-tight text-base leading-snug">
                          {review.name}
                        </h4>
                        <p className="text-sm font-medium text-text-muted">
                          {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
};

export default ReviewsSection;

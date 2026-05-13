import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';
import { reviews } from '../../data/reviews';

import 'swiper/css';
import 'swiper/css/pagination';

const ReviewsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
      <Container>
        <SectionHeading 
          title="What Our Customers Say" 
          subtitle="Real reviews from happy customers"
          centered={true}
          accentWord="Customers"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12"
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
                <Card className="h-full min-h-[320px] p-8 flex flex-col relative bg-white">
                  <FaQuoteLeft className="text-accent/20 text-4xl absolute top-6 right-6" />
                  
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-8 flex-grow italic">
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg mr-4 shadow-sm">
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </Container>
    </section>
  );
};

export default ReviewsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';

const steps = [
  {
    id: 1,
    title: "Choose Your Service",
    description: "Select from our wide range of home or commercial services.",
    image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058963/care_maintenance/frontend_assets/services/admin_image_2.webp"
  },
  {
    id: 2,
    title: "Pick a Date & Time",
    description: "Choose a convenient slot that works for your schedule.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "We Send an Expert",
    description: "A verified, experienced professional arrives at your door.",
    image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058973/care_maintenance/frontend_assets/services/carepenter_13.webp"
  },
  {
    id: 4,
    title: "Job Done, Guaranteed",
    description: "Sit back and relax. Satisfaction guaranteed or we fix it free.",
    image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058980/care_maintenance/frontend_assets/services/carpenter_15.webp"
  }
];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pt-6 pb-14 md:pt-8 md:pb-16 bg-white relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading 
            title="How It Works" 
            subtitle="Book a service in 4 easy steps"
            centered={true}
            titleClassName="!text-5xl md:!text-6xl lg:!text-7xl"
            subtitleClassName="!text-xl md:!text-2xl lg:!text-3xl text-gray-700 font-medium"
            className="!mb-4 sm:!mb-6"
          />
        </div>

        <div 
          ref={ref}
          className="relative mt-2 max-w-6xl mx-auto"
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step) => (
              <motion.div 
                key={step.id} 
                className="flex flex-col group bg-white/70 backdrop-blur-xl rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:ring-1 hover:ring-blue-200/50 transition-all duration-500 hover:-translate-y-2 border border-outline-variant/50 hover:border-blue-300 relative overflow-hidden h-full"
                variants={itemVariants}
              >
                {/* Subtle gradient glow background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Image Section */}
                <div className="w-full h-48 sm:h-52 overflow-hidden relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-black text-lg flex items-center justify-center shadow-lg border-2 border-white z-20">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-y-3 items-center text-center p-6 sm:p-8 flex-grow">
                  <h3 className="text-xl font-bold text-red-600 font-heading group-hover:text-blue-600 transition-colors duration-500 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed font-medium z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;

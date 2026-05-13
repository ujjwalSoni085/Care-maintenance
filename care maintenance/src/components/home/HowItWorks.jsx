import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRegClipboard, FaRegCalendarAlt, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../common/SectionHeading';
import Container from '../common/Container';

const steps = [
  {
    id: 1,
    title: "Choose Your Service",
    description: "Select from our wide range of home or commercial services.",
    icon: <FaRegClipboard className="text-2xl text-white" />
  },
  {
    id: 2,
    title: "Pick a Date & Time",
    description: "Choose a convenient slot that works for your schedule.",
    icon: <FaRegCalendarAlt className="text-2xl text-white" />
  },
  {
    id: 3,
    title: "We Send an Expert",
    description: "A verified, experienced professional arrives at your door.",
    icon: <FaHardHat className="text-2xl text-white" />
  },
  {
    id: 4,
    title: "Job Done, Guaranteed",
    description: "Sit back and relax. Satisfaction guaranteed or we fix it free.",
    icon: <FaCheckCircle className="text-2xl text-white" />
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
        staggerChildren: 0.2,
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
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center">
          <SectionHeading 
            title="How It Works" 
            subtitle="Book a service in 4 easy steps"
            centered={true}
          />
        </div>

        <div 
          ref={ref}
          className="relative mt-16 max-w-6xl mx-auto"
        >
          {/* Connecting dashed line (Desktop only) */}
          {/* Adjusted top value to align with the center of the icons inside the cards */}
          <div className="hidden lg:block absolute top-[80px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-gray-300 z-0 opacity-60"></div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="flex flex-col items-center text-center group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                variants={itemVariants}
              >
                {/* Number Badge & Icon Container */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-50 shadow-inner flex items-center justify-center relative z-10 border border-gray-100">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center shadow-md border-2 border-white z-20">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;

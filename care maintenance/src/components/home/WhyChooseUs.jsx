import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Card from '../common/Card';

const features = [
  {
    icon: '🛡️',
    title: 'Licensed & Insured',
    description: 'Fully certified professionals you can trust.'
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    description: 'Same-day service available, 7 days a week.'
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    description: 'No hidden fees. Know the cost before we start.'
  },
  {
    icon: '🏆',
    title: 'Experienced Team',
    description: '10+ years of industry expertise.'
  },
  {
    icon: '🔧',
    title: 'Quality Guaranteed',
    description: 'We stand behind every job we do.'
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Round-the-clock customer assistance.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <Container>
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="Trusted by thousands of homes & businesses"
          centered={true}
          accentWord="Us"
        />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <div className="group relative bg-white/70 backdrop-blur-xl p-8 h-full rounded-3xl border border-outline-variant/50 hover:border-blue-300 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-blue-500/10 overflow-hidden flex flex-col items-center text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 text-blue-600 flex items-center justify-center text-4xl mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 ease-out group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:text-white group-hover:border-blue-400">
                    <span className="group-hover:rotate-3 transition-transform duration-500">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-surface-dark mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed font-medium">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

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
    <section className="py-16 md:py-24 bg-background overflow-hidden">
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
              <Card hoverable={true} className="p-8 h-full border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-heading">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Building2, Briefcase, Phone, Award, ThumbsUp, ShieldCheck, HeartHandshake } from 'lucide-react';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { icon: <Calendar className="w-8 h-8" />, title: "16+ Years", subtitle: "of Experience" },
    { icon: <Users className="w-8 h-8" />, title: "5000+", subtitle: "Families Served" },
    { icon: <Building2 className="w-8 h-8" />, title: "500+", subtitle: "Corporates" },
    { icon: <Briefcase className="w-8 h-8" />, title: "5000+", subtitle: "Projects Completed" }
  ];

  const features = [
    { icon: <Award className="w-8 h-8 text-blue-600" />, title: "Experienced Team", desc: "Highly skilled professionals" },
    { icon: <ThumbsUp className="w-8 h-8 text-blue-600" />, title: "Quality Service", desc: "Precision and excellence" },
    { icon: <HeartHandshake className="w-8 h-8 text-blue-600" />, title: "Affordable Pricing", desc: "Value for your money" },
    { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: "Customer Satisfaction", desc: "Guaranteed reliable results" }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888081622-c82d33458db4?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto"
          >
            Trusted Facility Management Services for Residential & Commercial Spaces
          </motion.p>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Our team of skilled workers has extensive experience in both residential and commercial Facility Management Services. We bring precision, attention to detail, and a dedication to quality in every project. Our goal is to provide reliable, professional, and affordable services that customers can trust.
          </p>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-gray-500 font-medium">{stat.subtitle}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-50"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Need Professional Facility Management Services?</h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a href="tel:+917654553226" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl backdrop-blur-sm transition-colors w-full sm:w-auto justify-center group">
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                <span className="text-xl font-semibold tracking-wide">+91 7654553226</span>
              </a>
              <a href="tel:+919990959502" className="flex items-center gap-3 bg-white/10 hover:bg-white/20 px-6 py-4 rounded-xl backdrop-blur-sm transition-colors w-full sm:w-auto justify-center group">
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                <span className="text-xl font-semibold tracking-wide">+91 9990959502</span>
              </a>
            </div>

            <motion.a 
              href="tel:+917654553226"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

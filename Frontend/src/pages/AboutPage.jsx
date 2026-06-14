import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Building2, Briefcase, Phone, Award, ThumbsUp, ShieldCheck, HeartHandshake, Zap, Activity, Eye } from 'lucide-react';

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
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Reliability & Quality",
      desc: "Maintaining reliability, and thus, growing the reputation of our clients is our primary concern for which we maintain the quality of assets."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Energy & Cost Efficiency",
      desc: "Helping you consume less energy, therefor indirectly less money spent on energy."
    },
    {
      icon: <Activity className="w-8 h-8 text-blue-600" />,
      title: "Real-Time Asset Analytics",
      desc: "Offering a unified view of the asset state along with scheduled analytics in real-time of the assets enabling you to act proactively accordingly."
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-600" />,
      title: "Service Transparency",
      desc: "Obstacles to service transparency and hence the peace of your mind are removed. We, take into account the factor of knowledge about technological infrastructure in facilities and how crucial a well-operated system is in such infrastructures."
    }
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
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight mb-8">Who We Are</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light max-w-3xl mx-auto text-left md:text-center">
            <p>
              I am excited to present CareMS to you, the industry-leading maintenance and repair solution provider in Delhi-NCR. With exclusive service packages offered to both residential and corporate sectors, our branches are strategically distributed throughout the region to ensure clients receive prompt and personalized care.
            </p>
            <p>
              Our goal is to extend the asset life of our clients' valuables and enhance their office experience, helping them keep their spaces functional, sanitized, and beautiful at all times, to build an attractive and healthy work environment.
            </p>
            <p>
              As a dedicated maintenance partner, we constantly monitor and measure results to modify our asset care solutions, preserving the original quality of our clients' corporate and housing interiors while reducing their operational expenses. Furthermore, our team provides comprehensive, real-time reporting including asset analytics, ensuring complete service transparency and absolute peace of mind.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 bg-blue-50 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[80px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-200/20 rounded-full blur-[80px] -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">Our Vision</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
              <p className="font-semibold text-gray-900 text-xl italic">
                "Our vision is built on retaining longevity, and to attain it we have tailored specialized asset care programs for meeting the specific and challenging needs of our clients'."
              </p>
              <p>
                Protecting the life of your assets is the main vision that we have so we are doing everything possible to implement this mission. We have our astute asset care programs which are planned to cater to the diverse demands of our customers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">Our Mission</h2>
              <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
              <p className="font-semibold text-gray-900 text-xl italic">
                "To become a well-renowned name in the maintenance care and repair industry in India with over 1000 million square feet of service area."
              </p>
              <p>
                At CareMS, our core business is the increasing of the life of our customers' goods and thereby, making their work and living areas better. We do this by:
              </p>
              <ul className="text-left max-w-xl mx-auto space-y-4 pt-2">
                {[
                  "Making regular and long-term maintenance and renovation services the first priority",
                  "Ensuring that sanitary and sustainable spaces are maintained",
                  "Designing workplaces that are both comfortable and eye-catching"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                      ✓
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              As the only dedicated maintenance partner, we are:
            </p>
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
                <h3 className="text-xl font-bold text-red-600 mb-3">{feature.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-10">Need Professional Facility Management Services?</h2>

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

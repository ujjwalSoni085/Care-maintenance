import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  RefreshCw, 
  Clock, 
  ThumbsUp, 
  Headphones,
  CheckCircle2,
  Star,
  HeartHandshake,
  Wrench
} from 'lucide-react';
import Container from '../../components/common/Container';

const guarantees = [
  {
    id: 'quality',
    title: 'Quality Assurance',
    description: 'We use premium materials and industry-best practices. Our skilled professionals are thoroughly vetted, trained, and committed to delivering exceptional workmanship on every job.',
    icon: <Award className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'warranty',
    title: '30-Day Service Warranty',
    description: 'Peace of mind comes standard. If an issue arises related to our service within 30 days, we will return and fix it promptly at no additional cost to you.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />
  },
  {
    id: 'rework',
    title: 'Rework Policy',
    description: 'Your satisfaction is our priority. If you are not completely satisfied with the results, we will make it right through our hassle-free rework process.',
    icon: <RefreshCw className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'support',
    title: '24/7 Support Availability',
    description: 'Home emergencies do not wait for business hours. Our dedicated customer support team is available around the clock to assist you with any inquiries or urgent requests.',
    icon: <Headphones className="w-8 h-8 text-orange-500" />
  }
];

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Homeowner',
    content: 'The team was incredibly professional and fixed our plumbing issue in no time. When a minor leak reappeared a week later, they came right back and sorted it out for free, no questions asked. True to their guarantee!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajiv Patel',
    role: 'Restaurant Owner',
    content: 'We rely on CareMaintenance for all our commercial appliance repairs. Their 30-day warranty gives us incredible peace of mind. Excellent service every single time.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Apartment Renter',
    content: 'I was hesitant to hire a new service, but their satisfaction guarantee won me over. They lived up to every promise. The technician was polite, clean, and extremely knowledgeable.',
    rating: 5
  }
];

const SatisfactionGuaranteePage = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen font-inter">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-6 shadow-sm border border-emerald-200"
          >
            <ShieldCheck className="w-4 h-4" />
            100% Satisfaction Guarantee
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-red-600 font-outfit mb-6 leading-tight"
          >
            We don't just promise. <br />
            <span className="text-blue-600">We guarantee it.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Your home is your sanctuary, and we treat it with the respect it deserves. 
            Our commitment to excellence ensures that you receive reliable, high-quality 
            service that you can trust, backed by our comprehensive guarantees.
          </motion.p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-red-600 font-outfit mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The CareMaintenance Standard */}
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-xl mb-24">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium text-sm mb-6 w-max border border-blue-500/30">
                <HeartHandshake className="w-4 h-4" />
                Our Commitment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit mb-6">
                The CareMaintenance Standard
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We believe that trust is earned through consistent, reliable, and transparent service. That's why we hold ourselves to the highest industry standards.
              </p>
              <ul className="space-y-4">
                {[
                  'Upfront, transparent pricing with no hidden fees',
                  'Background-checked and certified technicians',
                  'Punctual arrivals and clean workspaces',
                  'Eco-friendly and safe materials'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-600 p-10 md:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <ThumbsUp className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-white font-outfit mb-4">Done Right.</h3>
                <p className="text-blue-100 text-lg max-w-sm mx-auto">
                  Or we'll make it right. That's our promise to you and your home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 font-outfit mb-4">Trusted by Thousands</h2>
            <p className="text-slate-600">Don't just take our word for it. Hear from our satisfied customers.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{review.content}"</p>
                <div>
                  <h4 className="font-bold text-red-600 font-outfit">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SatisfactionGuaranteePage;

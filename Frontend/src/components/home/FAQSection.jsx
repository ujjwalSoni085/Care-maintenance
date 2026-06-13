import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/faq';
import SectionHeading from '../common/SectionHeading';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-16 bg-gray-50/80">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-7/12">
            <div className="mb-8 text-left">
              <SectionHeading 
                title="Frequently Asked Questions" 
                subtitle="Find answers to common questions about our services, plans, and guarantees."
                centered={false}
              />
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-colors duration-300 ${openIndex === index ? 'border-primary-500 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl transition-all duration-300"
                  >
                    <span className="text-lg font-semibold text-slate-900 font-heading pr-8">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-500'}`}>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 flex justify-center mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={inView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="/images/faq_illustration.png" 
                alt="FAQ Illustration" 
                className="w-full max-w-md lg:max-w-full drop-shadow-2xl rounded-2xl object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;

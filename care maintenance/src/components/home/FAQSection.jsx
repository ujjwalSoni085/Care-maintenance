import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/faq';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-outfit">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 font-inter max-w-2xl mx-auto">
            Find answers to common questions about our services, plans, and guarantees.
          </p>
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
                <span className="text-lg font-semibold text-slate-900 font-outfit pr-8">
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
                    <div className="p-6 pt-0 text-slate-600 font-inter leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;

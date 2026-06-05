import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CreditCard, 
  Smartphone, 
  Building, 
  Wallet, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  Receipt,
  FileText
} from 'lucide-react';
import Container from '../../components/common/Container';

const paymentMethods = [
  {
    id: 'upi',
    title: 'UPI',
    description: 'Google Pay, PhonePe, Paytm & more',
    icon: <Smartphone className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'card',
    title: 'Credit / Debit Card',
    description: 'Visa, Mastercard, RuPay & Amex',
    icon: <CreditCard className="w-8 h-8 text-indigo-500" />
  },
  {
    id: 'netbanking',
    title: 'Net Banking',
    description: 'All major Indian banks supported',
    icon: <Building className="w-8 h-8 text-emerald-500" />
  },
  {
    id: 'wallet',
    title: 'Wallets',
    description: 'Amazon Pay, MobiKwik, Freecharge',
    icon: <Wallet className="w-8 h-8 text-orange-500" />
  }
];

const EasyPaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    if (!selectedMethod) return;
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen font-inter">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            100% Secure & Encrypted Payments
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-red-600 font-outfit mb-6"
          >
            Easy, Fast & <span className="text-blue-600">Secure Payment</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            We offer a variety of payment methods to make your experience as smooth as possible. No hidden charges, complete transparency.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column - Payment Selection */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-red-600 font-outfit mb-6">Select Payment Method</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    className={`flex items-start gap-4 p-5 rounded-xl border-2 transition-all duration-200 text-left ${
                      selectedMethod === method.id 
                        ? 'border-blue-600 bg-blue-50 shadow-md' 
                        : 'border-slate-100 bg-white hover:border-blue-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-600">{method.title}</h3>
                      <p className="text-sm text-slate-500 mt-1">{method.description}</p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Payment Action Area */}
              <AnimatePresence>
                {selectedMethod && !isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-8 pt-8 border-t border-slate-100"
                  >
                    <button
                      onClick={handlePayment}
                      disabled={isProcessing}
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          Proceed to Pay <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Message */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 pt-8 border-t border-slate-100 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-600 mb-2">Payment Successful!</h3>
                    <p className="text-slate-600 mb-6">Your transaction has been securely processed.</p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setSelectedMethod(null);
                      }}
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Make another payment
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Right Column - Trust & Transparency info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Transparent Pricing Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-red-600 font-outfit mb-4 flex items-center gap-2">
                <Receipt className="w-5 h-5 text-blue-600" />
                Transparent Pricing
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong className="text-slate-800">No Hidden Fees:</strong> What you see is exactly what you pay.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong className="text-slate-800">Itemized Bills:</strong> Clear breakdown of service and material costs.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600"><strong className="text-slate-800">Price Guarantee:</strong> Fixed quotes provided before starting any work.</p>
                </li>
              </ul>
            </div>

            {/* Trust & Security Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-lg font-bold font-outfit mb-6 flex items-center gap-2 relative z-10">
                <Lock className="w-5 h-5 text-blue-400" />
                Bank-Grade Security
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                  <div>
                    <h4 className="font-semibold text-sm">256-bit Encryption</h4>
                    <p className="text-xs text-slate-300">Highest level of data protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <FileText className="w-8 h-8 text-blue-400" />
                  <div>
                    <h4 className="font-semibold text-sm">PCI DSS Compliant</h4>
                    <p className="text-xs text-slate-300">Secure payment processing</p>
                  </div>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default EasyPaymentPage;

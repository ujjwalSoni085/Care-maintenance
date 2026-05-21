import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, 
  Fingerprint, 
  ShieldCheck, 
  Wrench, 
  GraduationCap, 
  Star, 
  Award,
  CheckCircle2,
  Users
} from 'lucide-react';
import Container from '../../components/common/Container';

const onboardingSteps = [
  {
    id: 1,
    title: 'Application Submission',
    description: 'Candidates begin by submitting a detailed application outlining their professional experience, certifications, and areas of expertise. We look for individuals with a proven track record of excellence.',
    icon: <UserPlus className="w-6 h-6 text-blue-500" />,
    color: 'bg-blue-50 border-blue-200'
  },
  {
    id: 2,
    title: 'Identity Verification',
    description: 'We conduct a stringent identity verification process using government-issued IDs and biometric checks to ensure absolute authenticity and prevent any fraudulent applications.',
    icon: <Fingerprint className="w-6 h-6 text-indigo-500" />,
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    id: 3,
    title: 'Comprehensive Background Check',
    description: 'Safety is paramount. We partner with top-tier security agencies to perform rigorous criminal, financial, and professional background checks across multiple databases.',
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    id: 4,
    title: 'Technical Skill Assessment',
    description: 'Candidates undergo rigorous theoretical and practical tests in their specific trade (plumbing, electrical, etc.) evaluated by our senior technical panel.',
    icon: <Wrench className="w-6 h-6 text-amber-500" />,
    color: 'bg-amber-50 border-amber-200'
  },
  {
    id: 5,
    title: 'Soft Skills & Etiquette Training',
    description: 'Technical skills aren\'t enough. Technicians must complete our specialized customer service module, focusing on communication, punctuality, and in-home etiquette.',
    icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
    color: 'bg-purple-50 border-purple-200'
  },
  {
    id: 6,
    title: 'Quality Evaluation & Mock Scenarios',
    description: 'Before facing real customers, technicians navigate simulated service scenarios. They must demonstrate perfect problem-solving and adhere to our strict safety protocols.',
    icon: <Star className="w-6 h-6 text-pink-500" />,
    color: 'bg-pink-50 border-pink-200'
  },
  {
    id: 7,
    title: 'Final Approval & Activation',
    description: 'Only the top 5% of applicants make it to this stage. Upon final review by our quality assurance board, the technician is officially certified and activated on our platform.',
    icon: <Award className="w-6 h-6 text-blue-600" />,
    color: 'bg-blue-100 border-blue-300'
  }
];

const TechnicianOnboardingPage = () => {
  return (
    <div className="py-20 bg-slate-50 min-h-screen font-inter overflow-hidden">
      <Container>
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/30 blur-3xl rounded-full pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-blue-700 font-medium text-sm mb-6 shadow-sm border border-blue-100 relative z-10"
          >
            <ShieldCheck className="w-4 h-4" />
            Verified & Trusted Professionals
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 font-outfit mb-6 leading-tight relative z-10"
          >
            How We Select Our <br />
            <span className="text-blue-600">Expert Technicians</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed relative z-10"
          >
            Your safety and peace of mind are our highest priorities. Discover our rigorous 7-step onboarding process that ensures only the most qualified, trustworthy, and skilled professionals enter your home.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto relative mb-24">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform md:-translate-x-1/2 rounded-full"></div>

          <div className="space-y-8">
            {onboardingSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 bg-white rounded-full border-4 border-slate-50 shadow-sm z-10 mt-5 md:mt-0">
                    <div className="w-full h-full rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-base">
                      {step.id}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all duration-300 relative group overflow-hidden`}>
                      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${step.color} opacity-30 transform translate-x-4 -translate-y-4 transition-transform group-hover:scale-110`}></div>
                      
                      <div className="relative z-10">
                        <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center mb-4 shadow-sm`}>
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 font-outfit mb-2">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* The 5% Promise Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-outfit mb-6">
                The Top 5% Promise
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
                Out of thousands of applicants, only a select few meet our exacting standards. When you book a service with CareMaintenance, you are welcoming a vetted, highly-trained professional into your home.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 text-left">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">100% Background Checked</h4>
                  <p className="text-sm text-slate-400">Zero tolerance for security risks.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Fully Certified</h4>
                  <p className="text-sm text-slate-400">Verified trade licenses & skills.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-4" />
                  <h4 className="text-white font-bold mb-2">Continuous Evaluation</h4>
                  <p className="text-sm text-slate-400">Rated by customers after every job.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default TechnicianOnboardingPage;

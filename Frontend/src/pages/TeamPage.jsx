import React from 'react';
import { motion } from 'framer-motion';

const TeamPage = () => {
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

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-10 px-2 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto"
          >
            The dedicated professionals behind Care Maintenance Services
          </motion.p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="bg-white pt-16 pb-24 px-4 relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[120%] bg-gradient-to-tr from-blue-500/5 via-cyan-400/5 to-transparent blur-[120px] -z-10 rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 tracking-tight">Meet Our Leadership Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          >
            {[
              {
                name: "Pawan Gaur",
                role: "Head of Finance",
                desc: "Managing financial strategies, risk assessment, and fiscal growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058450/care_maintenance/frontend_assets/pawan_fincer_head.webp"
              },
              {
                name: "Vasudev Kumar Mahto",
                role: "Branch manager",
                desc: "Leading the company with vision, trust, and long-term growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058473/care_maintenance/frontend_assets/vashudev_sir_pic_for_managing_wale_me.webp"
              },
              {
                name: "Shweta saras mahto",
                role: "Managing Director",
                desc: "Driving overall business operations and strategic direction.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058410/care_maintenance/frontend_assets/care-maintance-mam-image.webp"
              },
              {
                name: "V K Mahto",
                role: "MD",
                desc: "Guiding the company with expert leadership and strategic vision.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058478/care_maintenance/frontend_assets/VK_Mahto_MD.webp"
              },
              {
                name: "Sanjeev Kumar Singh",
                role: "Deputy Finance Manager",
                desc: "Assisting in financial planning, reporting, and asset management.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058461/care_maintenance/frontend_assets/sanjeev_kumar_singh_deputy_finace_manager.webp"
              },
              {
                name: "Shudhansu Shekhar",
                role: "CMA",
                desc: "Ensuring financial efficiency and management accounting excellence.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058462/care_maintenance/frontend_assets/shudhansu_Shekhar_CMA.webp"
              },
              {
                name: "Amit Tripathi",
                role: "Software Partner",
                desc: "Providing technological solutions and software partnership.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058407/care_maintenance/frontend_assets/amit_Software_Partner_LOOPINTechies_Services_India_Pvt._Ltd..webp"
              },
              {
                name: "Sukhvinder Singh",
                role: "HR Relationship Manager",
                desc: "Fostering employee relations and talent management.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058463/care_maintenance/frontend_assets/shukh_hr_relstionship_manger.webp"
              },
               {
                name: "Bhoori singh",
                role: "Human Resources",
                desc: "Managing people, culture, and employee excellence.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058409/care_maintenance/frontend_assets/Bhuri_Sir.webp"
              },
              {
                name: "Vishal Kumar",
                role: "Marketing Manager(Central)",
                desc: "Building strong client relationships and business growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058475/care_maintenance/frontend_assets/vishal_kumar_2.webp"
              },
              {
                name: "Pankaj Kumar",
                role: "Sales Team Leader",
                desc: "Leading sales initiatives and driving revenue growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058449/care_maintenance/frontend_assets/pankaj_sir_new_image.webp"
              },
              {
                name: "Digambar Saw",
                role: "Marketing Manager",
                desc: "Driving marketing strategies and brand awareness.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058413/care_maintenance/frontend_assets/Digambar_Saw_marketing.webp"
              },
              {
                name: "Dushant Pandey",
                role: "Marketing Manager",
                desc: "Leading the marketing team and managing campaigns.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058414/care_maintenance/frontend_assets/dushant_pandey_sales_manager.webp"
              },
              {
                name: "Hargovind Singh",
                role: "Marketing Manager",
                desc: "Overseeing marketing operations and driving growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058423/care_maintenance/frontend_assets/Hargovind_Singh.webp"
              },
              {
                name: "Harshita Rajput",
                role: "Marketing",
                desc: "Executing marketing plans and promotional activities.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058425/care_maintenance/frontend_assets/Harshita_rajput_marketing.webp"
              },
              {
                name: "J.K Batra",
                role: "Marketing",
                desc: "Developing marketing collateral and engaging customers.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058428/care_maintenance/frontend_assets/jonny_Batra_2.webp"
              },
             
              {
                name: "Ujjwal Soni",
                role: "Software Developer",
                desc: "Building and maintaining technological solutions.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058471/care_maintenance/frontend_assets/ujjwal_soni_image.webp"
              },
              {
                name: "Lokesh Kumar",
                role: "Digital Marketing Specialist",
                desc: "Driving digital growth, branding, and online marketing initiatives.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058432/care_maintenance/frontend_assets/Lokesh_Kumar_Digital_marketing.webp"
              },
              {
                name: "Sandhya Pandey",
                role: "Business Growth Team",
                desc: "Fostering client acquisition, sales coordination, and growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058458/care_maintenance/frontend_assets/sandhya_pandey_2nd_image.webp"
              },
              {
                name: "Nikita",
                role: "Sales Representative",
                desc: "Connecting clients with customized facility management solutions.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058444/care_maintenance/frontend_assets/nikita_sales_person.webp"
              },
               {
                name: "Mansi Verma",
                role: "Senior Sales Executive",
                desc: "Generating leads and converting prospects into customers",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058434/care_maintenance/frontend_assets/Manshi_marketing.webp"
              },
              {
                name: "Surjeet Singh",
                role: "Sales Manager",
                desc: "Leading sales initiatives and driving revenue growth.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058467/care_maintenance/frontend_assets/Surjeet_Singh_Sales_manager.webp"
              },
              {
                name: "Swarnali Banerjee",
                role: "Admin",
                desc: "Managing administrative operations and ensuring organizational efficiency.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058468/care_maintenance/frontend_assets/swarnali_banerjee_from_Care_mentenace_Admin.webp"
              },
            
              {
                name: "Priya Mahor",
                role: "Admin",
                desc: "Supporting daily administrative tasks and office operations.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058453/care_maintenance/frontend_assets/Priya_mahor_Admin.webp"
              },
              {
                name: "Neha Singh",
                role: "Admin",
                desc: "Facilitating internal communication and administrative workflows.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058441/care_maintenance/frontend_assets/Neha_singh_Admin.webp"
              },
              {
                name: "Jyoti Singh",
                role: "Account",
                desc: "Managing financial records, billing, and accounting operations.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058429/care_maintenance/frontend_assets/Jyoti_singh_account_1.webp"
              },
              {
                name: "Md Kamil Hussain",
                role: "Head Electrician South Zone",
                desc: "Overseeing electrical maintenance and operations in the South Zone.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058435/care_maintenance/frontend_assets/Md_Kamil_Hussain_Head_Electrician_South_zone.webp"
              },
              
              {
                name: "Shyamu Raj",
                role: "Zonal Technician Head",
                desc: "Overseeing technical operations and ensuring service quality.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058464/care_maintenance/frontend_assets/shyamu_zonal_technician_head.webp"
              },
              {
                name: "Guddu Sharma",
                role: "Zonal Tech Head (NCR & Noida)",
                desc: "Managing technical services across NCR and Noida regions.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058421/care_maintenance/frontend_assets/guddu_Zonal_technician_head_NCF_Noida.webp"
              },
              {
                name: "Firoz Khan",
                role: "AC & Electrical Technician",
                desc: "Providing expert AC and electrical maintenance and repair services.",
                image: "https://res.cloudinary.com/reuof8q6/image/upload/v1783058418/care_maintenance/frontend_assets/firoz-khan-ac_electrical_technician.webp"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
              >
                <div className="w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-blue-50 group-hover:border-blue-100 transition-colors shadow-inner relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-1 group-hover:text-blue-600 transition-colors">{leader.name}</h3>
                <p className="text-blue-600 font-medium mb-4 uppercase tracking-wider text-sm">{leader.role}</p>
                <p className="text-gray-600 leading-relaxed font-light">{leader.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;

import React from 'react';

const ServiceDetailTemplate = ({ service }) => {
  if (!service) return null;

  return (
    <div className="stitch-redesign">
      <main className="pt-12 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col gap-12">
        
        {/* === SECTION 1: Hero Intro Card === */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-soft flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/30 text-secondary uppercase tracking-wider font-label-bold text-label-bold">
              <span className="material-symbols-outlined text-[16px]">home_repair_service</span>
              {service.badge || service.title}
            </div>
            <h1 className="font-display-md-mobile md:font-display-md text-surface-dark">
              {service.headline}
            </h1>
            <p className="font-body-lg text-text-muted">
              {service.subtext || service.description}
            </p>
            <button className="bg-gradient-primary text-on-secondary px-8 py-3 rounded-full font-label-bold text-label-bold hover:shadow-glow hover:brightness-110 transition-all duration-300">
              Book Service Now
            </button>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative bg-surface-variant">
            {service.heroImage ? (
              <img src={service.heroImage} alt={service.heroImageAlt || service.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-surface-variant">
                <span className="material-symbols-outlined text-6xl">image</span>
              </div>
            )}
          </div>
        </section>

        {/* === SECTION 2: Service Types Card === */}
        <section className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-soft flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 flex flex-col gap-4 border-r-0 md:border-r border-outline-variant/30 pr-0 md:pr-8">
            <div className="w-14 h-14 rounded-lg bg-primary-container flex items-center justify-center mb-6 text-secondary-container">
              <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
            </div>
            <h2 className="font-headline-md text-surface-dark mb-4">What We Offer</h2>
          </div>
          <div className="w-full md:w-2/3">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(service.serviceTypes || service.features || []).map((type, index) => (
                <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-transparent text-text-muted hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <span className="font-body-md">{type}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* === SECTION 3: Why Choose Us === */}
        <section className="space-y-8 pt-8">
          <div className="text-center">
            <h2 className="font-display-sm text-surface-dark">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(service.whyChooseUs || service.benefits || []).map((benefit, index) => (
              <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 text-center hover:-translate-y-1 transition-transform duration-300 shadow-soft hover:shadow-lg">
                <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{benefit.icon || 'verified'}</span>
                </div>
                <h4 className="font-label-bold text-surface-dark mb-2">{benefit.title}</h4>
                <p className="font-body-sm text-text-muted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === SECTION 4: Photo Gallery === */}
        <section className="space-y-8 pt-8">
          <div className="text-center">
            <h2 className="font-display-sm text-surface-dark mb-2">Our Work</h2>
            <p className="font-body-md text-text-muted">See our professionals in action.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(service.gallery || []).map((imgSrc, index) => (
              <div key={index} className="aspect-square bg-surface-variant rounded-xl overflow-hidden relative group shadow-soft">
                <img src={imgSrc} alt={`${service.title || 'Service'} Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
};

export default ServiceDetailTemplate;

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroCarousel from '../components/home/HeroCarousel';
import ServicePriceBox from '../components/home/ServicePriceBox';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="flex flex-col">
      <div id="home"><HeroCarousel /></div>
      <div id="pricing"><ServicePriceBox /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="about"><WhyChooseUs /></div>
      <div id="reviews"><ReviewsSection /></div>
      <div id="faq"><FAQSection /></div>
    </div>
  );
};

export default HomePage;

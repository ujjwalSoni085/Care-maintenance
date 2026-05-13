import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';

import HeroCarousel from './components/home/HeroCarousel';
import ServicePriceBox from './components/home/ServicePriceBox';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-[72px]">
          <HeroCarousel />
          <ServicePriceBox />
        </main>
      </div>
    </Router>
  );
}

export default App;

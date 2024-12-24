import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen font-sans" id="root">
    <Navbar />
    {/* Main content area */}
    <div className="flex-grow">
      <Routes>
        {/* Home page (About) */}
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </div>
);

export default App;

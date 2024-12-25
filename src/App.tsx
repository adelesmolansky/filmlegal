import React from 'react';
import Footer from './components/Footer';
import Landing from './Landing';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <div className="flex flex-col min-h-screen font-sans" id="root">
    <Navbar />
    <Landing />
    <Footer />
  </div>
);

export default App;

import { useState } from 'react';
import Header from './components/Header';
import Services from './sections/Services';
import ServicesModal, { PopupContent } from './components/MoreInfoPopup';
import Consultation from './sections/Consultation';
import About from './sections/About';

const LandingPage: React.FC = () => {
  const [popupContent, setPopupContent] = useState<PopupContent | null>(null);

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Header setModalContent={setPopupContent} />
      <Services setModalContent={setPopupContent} />
      {popupContent && (
        <ServicesModal content={popupContent} setContent={setPopupContent} />
      )}
      <About />
      <Consultation />
    </div>
  );
};

export default LandingPage;

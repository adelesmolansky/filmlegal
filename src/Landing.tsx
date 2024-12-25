import { useState } from 'react';
import Header from './components/Header';
import Services from './sections/Services';
import ServicesModal from './components/ServicesModal';
import Consultation from './sections/Consultation';
import WhyUs from './sections/WhyUs';

export type ModalContent = { title: string; description: string };

const LandingPage: React.FC = () => {
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <Header />
      <WhyUs />
      <Services setModalContent={setModalContent} />
      {modalContent && (
        <ServicesModal
          modalContent={modalContent}
          setModalContent={setModalContent}
        />
      )}
      <Consultation />
    </div>
  );
};

export default LandingPage;

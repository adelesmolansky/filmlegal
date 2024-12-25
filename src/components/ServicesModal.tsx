import { ModalContent } from '../Landing';

type ServicesModalProps = {
  modalContent: ModalContent;
  setModalContent: (content: ModalContent | null) => void;
};

const ServicesModal = ({
  modalContent,
  setModalContent,
}: ServicesModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg relative">
      <button
        className="absolute top-2 right-4  text-gray-900 hover:text-gray-600 text-2xl"
        onClick={() => setModalContent(null)}
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
      <p>{modalContent.description}</p>
    </div>
  </div>
);

export default ServicesModal;

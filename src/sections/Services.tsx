import { ModalContent } from '../Landing';
import services from '../services.json';

type ServicesProps = { setModalContent: (content: ModalContent) => void };

const Services: React.FC<ServicesProps> = ({ setModalContent }) => (
  <section className="py-16 px-6 bg-indigo-200" id="services">
    <h2>Tailored Services for the Entertainment Industry</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 container mx-auto">
      {services.map((service: any, index: number) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-2xl"
          onClick={() => setModalContent(service)}
        >
          <h3 className="font-bold text-xl mb-2">{service.title}</h3>
          <p className="text-md text-gray-700">{service.punchline}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;

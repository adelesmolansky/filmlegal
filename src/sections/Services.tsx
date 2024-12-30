import { PopupContent } from '../components/MoreInfoPopup';
import services from '../services.json';

type ServicesProps = { setModalContent: (content: PopupContent) => void };

const Services: React.FC<ServicesProps> = ({ setModalContent }) => {
  const onClick = (service: PopupContent) =>
    setModalContent({
      title: service.title,
      description: service.description || undefined,
      services: service.services || [],
    });

  return (
    <section className="py-16 px-6 bg-indigo-200" id="services">
      <h2>Tailored Services for the Entertainment Industry</h2>
      <p className="text-center mt-4 text-base">
        [SUMMARY OF SERVICES]. Click on a category below to learn more about how
        I can support your legal and business needs.
      </p>
      {/* Main Services */}
      {/* <div className="md:gap-20 gap-12 animate-fade-in mt-12 flex flex-row wrap mx-auto justify-center"> */}
      <div className="mx-auto grid grid-cols-3 lg:w-2/3 lg:grid-cols-6 gap-6 animate-fade-in mt-12">
        {services.main.map((service: any, index: number) => (
          <div
            className="text-center cursor-pointer"
            onClick={() => onClick(service)}
            key={index}
          >
            <div className="text-5xl md:text-6xl hover:text-grey">
              {service.icon}
            </div>
            <p className="text-xl md:text-lg">{service.title}</p>
          </div>
        ))}
      </div>

      {/* Additional Services Section */}
      <section className="mt-16">
        <h3 className="text-center text-2xl font-bold">
          Additional Key Services
        </h3>
        <p className="text-center mt-4 text-base">
          Explore other critical services, including Content Clearance and Fair
          Use, Corporate Formation, and Merchandising & Licensing.
        </p>
        <div className="mx-auto grid grid-cols-1 lg:w-2/3 lg:grid-cols-3 gap-6 animate-fade-in mt-12">
          {services.additional.map((service: any, index: number) => (
            <div
              className="text-center cursor-pointer"
              onClick={() => onClick(service)}
              key={index}
            >
              <div className="text-5xl md:text-6xl hover:text-grey">
                {service.icon}
              </div>
              <p className="text-xl md:text-lg">{service.title}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Services;

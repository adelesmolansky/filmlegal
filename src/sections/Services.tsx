import { PopupContent } from '../components/MoreInfoPopup';
import services from '../services.json';
import cx from 'classix';

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
      <div
        className={cx(
          // 2 columns on small, 3 columns on medium, 6 columns on large screens
          'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
          'lg:w-2/3',
          'mt-12 mx-auto gap-6',
          'animate-fade-in'
        )}
      >
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
        <div
          className={cx(
            // 1 column on small screens, 3 columns on large screens
            'grid grid-cols-1 lg:grid-cols-3',
            'mx-auto lg:w-2/3 gap-6 mt-12',
            'animate-fade-in'
          )}
        >
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

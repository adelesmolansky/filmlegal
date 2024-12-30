import { PopupContent } from './MoreInfoPopup';

const DESCRIPTIONS = {
  legal: {
    title: 'Legal Services',
    description:
      'Legal services on all aspects of documentaries, feature films, book publishing, podcasts, talent representation, merchandising and licensing',
  },
  business: {
    title: 'Business Services',
    services: [
      'Help clients make and close deals',
      'Save clients money by helping avoid disputes and litigations',
      'Introduce clients to key players in the industry',
    ],
  },
};

type HeaderProps = { setModalContent: (content: PopupContent) => void };

const Header: React.FC<HeaderProps> = ({ setModalContent }) => {
  const Button = ({ title, description, services }: PopupContent) => (
    <button
      className="bg-indigo-800 hover:bg-indigo-600 text-white font-semibold py-3 px-6 md:px-10 rounded mt-12 md:min-w-[14rem]"
      onClick={() => setModalContent({ title, description, services })}
    >
      {title}
    </button>
  );

  return (
    <header
      className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 h-screen bg-cover bg-center"
      id="header"
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
        <h1 className="sm:text-5xl text-3xl font-bold mb-4 max-w-[90%]">
          Empowering Clients With Expert Legal Guidance
        </h1>
        <p className="sm:text-xl text-lg mb-6 max-w-[80%]">
          With over 25 years of legal and business experience in the
          entertainment industry, Innes Smolansky has been the trusted advisor
          for countless creators, producers, and businesses worldwide.
        </p>

        <div className="flex justify-center md:gap-20 gap-8">
          <Button
            title={DESCRIPTIONS.legal.title}
            description={DESCRIPTIONS.legal.description}
          />
          <Button
            title={DESCRIPTIONS.business.title}
            services={DESCRIPTIONS.business.services}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

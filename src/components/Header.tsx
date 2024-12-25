const Header: React.FC = () => (
  <header
    className="relative bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 h-screen bg-cover bg-center"
    id="header"
  >
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center text-white">
      <h1 className="sm:text-5xl text-3xl font-bold mb-4 max-w-[90%]">
        Empowering Entertainment with Expert Legal Guidance
      </h1>
      <p className="sm:text-xl text-lg mb-6 max-w-[80%]">
        25 Years of Legal and Business Expertise in Film, TV, Books,
        Documentaries, and Podcasts
      </p>
      <a href="#consultation">
        <button className="bg-indigo-800 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded mt-12">
          Request a Consultation
        </button>
      </a>
    </div>
  </header>
);

export default Header;

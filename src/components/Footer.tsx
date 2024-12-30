import React from 'react';

const Footer: React.FC = () => (
  // background color should match the navbar color
  <footer className="bg-footer-and-nav text-white text-sm py-6" id="footer">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-center">
      <div className="w-full md:w-1/3 text-center md:text-left max-w-md">
        <h3 className="text-lg font-bold mb-2">Contact</h3>
        <p>
          Contact me for expert legal guidance in the entertainment industry,
          from film and TV to books and podcasts.
        </p>
      </div>
      <div className="w-full md:w-1/3 text-center my-4 md:my-0 flex flex-col justify-center items-center">
        <a
          href="https://www.linkedin.com/in/innes-smolansky-93b875/"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.imdb.com/name/nm2255025/"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMDb
        </a>
      </div>
      <div className="w-full md:w-1/3 text-center md:text-right">
        <p className="mb-2">Address: Brooklyn, NY 11215</p>
        <p className="mb-2">Phone: (212) 464-8191</p>
        <p>
          Email:{' '}
          <a
            href="mailto:innes@filmlegal.com"
            className="text-white hover:underline"
          >
            innes@filmlegal.com
          </a>
        </p>
      </div>
    </div>
    <div className="mt-4 text-center">
      <p>Copyright ©2025 Innes Smolansky. All rights reserved.</p>
      <p>Attorney Advertising</p>
    </div>
  </footer>
);

export default Footer;

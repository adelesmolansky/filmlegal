import React from 'react';

const Item = ({ icon, text }: { icon: string; text: string }) => (
  <div className="text-center">
    <div className="text-4xl">{icon}</div>
    <p>{text}</p>
  </div>
);

const WhyUs: React.FC = () => (
  <section id="why-us" className="py-16 px-6 bg-white text-center">
    <h2>Why Choose Us?</h2>
    <p className="text-lg max-w-3xl mx-auto mb-8">
      With over <span className="font-bold">25 years</span> of legal experience
      in the entertainment industry, Innes Smolansky has been the trusted
      advisor for countless creators, producers, and businesses worldwide.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-8 animate-fade-in">
      <Item icon="🎥" text="Documentaries" />
      <Item icon="📚" text="Books" />
      <Item icon="📺" text="Television" />
      <Item icon="🎬" text="Film" />
      <Item icon="🎙️" text="Podcasts" />
      <Item icon="🎭" text="Animation" />
    </div>
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Education</h3>
      <p>University of Pennsylvania (J.D.)</p>
      <p>Brown University (B.A., magna cum laude)</p>
      <p>
        University of Paris X (Diplôme d'Études Juridiques Européennes et
        Internationales)
      </p>
      <p>
        Hertzen Institute, St. Petersburg (Comparative Literature and Foreign
        Languages)
      </p>
    </div>
    <div className="mt-8">
      <h3 className="text-2xl font-bold">Connect</h3>
      <a
        href="https://www.linkedin.com/in/innes-smolansky-93b875/"
        className="text-blue-600 hover:underline mr-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://www.imdb.com/name/nm2255025/"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        IMDb
      </a>
    </div>
    <div className="mt-8">
      <img
        src="headshot.png"
        alt="Innes Smolansky"
        className="mx-auto rounded-full w-48 h-48 object-cover"
      />
    </div>
  </section>
);

export default WhyUs;

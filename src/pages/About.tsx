import React from 'react';

const About: React.FC = () => (
  <div className="container mx-auto px-4 py-8 relative">
    {/* Page Header / Title */}
    <div className="flex md:flex-row flex-col-reverse justify-between items-start">
      <div>
        <section id="title">
          <h1>Law Office of Innes Smolansky</h1>
          <p className="italic">Entertainment Transactional Attorney</p>
          <p>Carroll Street, Brooklyn, NY 11215</p>
          <p>innes@filmegal.com</p>
        </section>

        {/* About the Firm */}
        <section id="about-the-firm">
          <h2>About the Firm</h2>
          <p>
            Law Office of Innes Smolansky is a full-service entertainment law
            firm representing US and foreign producers, production companies,
            and talent in documentaries, motion picture, and television
            productions for all aspects of their productions, including shorts,
            features, or series, from the early stages of development through
            all stages of production, financing, distribution, and licensing,
            including rights clearances and fair use reviews.
          </p>
          <p>
            The firm also offers legal services in the areas of book publishing,
            theater, merchandising, new media, video game industries, and in the
            fields of design.
          </p>
        </section>
      </div>

      {/* Headshot and Contact Info */}
      <div className="text-center flex items-center md:flex-col flex-row">
        <img
          src="/headshot.png"
          alt="Innes Smolansky"
          className="md:w-[30rem] w-2/3 h-auto rounded-full mb-2 mx-auto"
        />
        <div>
          <p className="text-blue-600 underline">
            <a
              href="https://www.linkedin.com/in/innes-smolansky-93b875/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className="text-blue-600 underline">
            <a
              href="https://www.imdb.com/name/nm2255025/?ref_=fn_al_nm_1"
              target="_blank"
              rel="noreferrer"
            >
              IMDB
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* About Me */}
    <section>
      <h2>About Me</h2>
      <p>
        With over 20 years of experience in entertainment law, I've dedicated my
        career to facilitating client transactions and resolving disputes in the
        entertainment industry. I provide personalized, attentive service to
        each of my clients, combining in-depth industry knowledge with a passion
        for the arts. My goal is to empower creators, producers, and investors
        to navigate the complex legal landscape of the entertainment industry
        confidently and efficiently, while mitigating risks associated with each
        step of production and distribution.
      </p>
    </section>

    {/* Bar Admission */}
    <section>
      <h2>Bar Admission</h2>
      <p>NY State Bar 1996</p>
      <p>NY State Attorney Registration # 273-6619</p>
    </section>

    {/* Bar Association */}
    <section>
      <h2>Bar Association</h2>
      <p>
        Ms. Smolansky is a member of the New York State Bar Association and is
        an executive member of the Entertainment Arts and Sports Law section.
      </p>
    </section>

    {/* Education */}
    <section>
      <h2>Education</h2>
      <ul>
        <li>Brown University (B.A. magna cum laude)</li>
        <li>University of Pennsylvania (J.D.)</li>
        <li>
          University of Paris X (Diplôme d'Études Juridiques Européennes et
          Internationales)
        </li>
        <li>
          Hertzen Institute, St Petersburg, Russia Comparative Literature and
          Foreign Languages
        </li>
      </ul>
    </section>
  </div>
);

export default About;

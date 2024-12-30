import cx from 'classix';

const About = () => (
  <section id="about" className="py-16 px-6 bg-white text-left">
    <h2>About Me</h2>
    <div className="md:container w-full mx-auto">
      {/* Headshot and overview */}
      <div className="flex flex-col gap-4 md:flex-row md:gap-12">
        <div
          className={cx(
            'flex flex-col', // flex column
            'items-center justify-start mx-auto', // center items horizontally, start vertically
            'w-3/5 md:w-1/5', // 1/5 width on mobile, 3/5 on desktop
            'h-auto gap-4' // auto height
          )}
        >
          <img
            src="headshot.png"
            alt="Headshot of Innes Smolansky"
            className="mx-auto rounded-full w-full h-auto object-cover"
          />
          <p className="mb-4">
            <a
              href="https://www.imdb.com/name/nm2255025/?ref_=fn_al_nm_1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Representative Projects (IMDB)
            </a>
          </p>
        </div>
        <div className="md:w-2/3 w-full h-auto">
          <p>
            I am a transactional entertainment attorney with 25 years of
            experience representing US and foreign film and television
            producers, production companies, investors, writers, directors,
            visual artists, content developers, performers, and composers in
            independent motion picture production, documentaries, television,
            international co-productions, live theater, book publishing, video
            games, and personal management deals. I provide personalized,
            attentive service to each of my clients, combining in-depth industry
            knowledge with a passion for the arts.
          </p>
          <p>
            My goal is to empower creators, producers, and investors to navigate
            the complex legal landscape of the entertainment industry
            confidently and efficiently, while mitigating risks associated with
            each step of production and distribution.
          </p>
          {/* Lectures */}
          <section className="mb-6">
            <h3>Lectures</h3>
            <p>
              I have lectured on film and television law and business at the New
              York City Bar and New York State Bar CLE programs as well as The
              New School, NYU, IFP, DCTV, AIVF, Doc NYC, PGA East, and other
              industry organizations and festivals.
            </p>
          </section>
          {/* Experiences */}
          <section className="mb-6">
            <h3>Previous Experience</h3>
            <p>
              Prior to opening my practice, I worked as an entertainment
              attorney at Leavy Rosensweig & Hyman and at Cowan DeBaets Abrahams
              and Sheppard; and prior to that in the corporate department of
              Gordon Altman Butowsky Weizen Shalov & Wein and at the New York
              Office of Dewey Ballantine.
            </p>
          </section>
          {/* Associations */}
          <section className="mb-6">
            <h3>Professional Associations</h3>
            <p>
              Member of the New York State Bar Association, Executive Member of
              the Entertainment, Arts, and Sports Law Section.
            </p>
          </section>
          {/* Education */}
          <section>
            <h3>Education</h3>
            <ul className="list-disc list-inside">
              <li>Brown University B.A. magna cum laude</li>
              <li>University of Pennsylvania J.D.</li>
              <li>
                University of Paris X Diplome D&apos;Etudes Juridiques
                Europeennes et Internationales
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </section>
);

export default About;

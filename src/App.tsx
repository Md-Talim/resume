import { About, Education, Projects } from './sections';
import { UnderlinedLink } from './components';
import { talim } from './assets';
import Contact from './sections/Contact';

const App = () => {
  return (
    <main className="mx-4 sm:mx-auto my-20 max-w-lg">
      <section className="flex items-center justify-start gap-4">
        <figure>
          <img
            src={talim}
            alt="talim"
            className="aspect-square w-20 rounded-full"
          />
        </figure>
        <div>
          <h1 className="text-xl text-gray1">Mohammad Talim</h1>
          <p>
            2nd Year CSE Student at{' '}
            <UnderlinedLink
              title="GP Indri"
              link="https://gpindri.ac.in/"
              color="light"
            />
          </p>
          <UnderlinedLink
            title="md-talim.github.io"
            link="md-talim.github.io"
            color={'dark' as string}
          />
        </div>
      </section>

      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;

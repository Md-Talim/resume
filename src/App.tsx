import { Profile, About, Education, Projects, Contact } from './sections';

const App = () => {
  return (
    <main className="mx-4 my-10 max-w-lg sm:mx-auto sm:my-20">
      <Profile />
      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;

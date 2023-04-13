import { Profile, About, Education, Projects, Contact } from './sections';

const App = () => {
  return (
    <main className="mx-4 sm:mx-auto my-20 max-w-lg">
      <Profile />
      <About />
      <Education />
      <Projects />
      <Contact />
    </main>
  );
};

export default App;

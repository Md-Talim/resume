import { useState, useEffect } from 'react';
import { ThemeToggleButton } from './components';
import { Profile, About, Education, Projects, Contact } from './sections';
import { sun, moon } from './assets';

const App = () => {
  const html = document.querySelector('html');

  const [isDark, setIsDark] = useState(html?.classList.contains('dark'));
  const [themeIcon, setThemeIcon] = useState(isDark ? sun : moon);

  const toggleTheme = () => {
    html?.classList.toggle('dark');
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    setThemeIcon(isDark ? sun : moon);
  }, [isDark]);

  return (
    <main className="mx-4 my-10 max-w-lg sm:mx-auto sm:my-20">
      <Profile />
      <About />
      <Education />
      <Projects />
      <Contact />
      <ThemeToggleButton toggleTheme={toggleTheme} icon={themeIcon} />
    </main>
  );
};

export default App;

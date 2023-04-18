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

    if (html?.classList.contains('dark')) {
      localStorage.setItem('color-theme', 'dark');
    } else {
      localStorage.setItem('color-theme', 'light');
    }
    setIsDark((prevState) => !prevState);
  };

  useEffect(() => {
    setThemeIcon(isDark ? sun : moon);
  }, [isDark]);

  return (
    <main className="mx-6 my-10 max-w-lg sm:mx-auto sm:my-20">
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

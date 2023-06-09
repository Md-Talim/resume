import { sunnyside, snap, gameshub, searchx } from '../assets';
type Eduaction = {
  time: string;
  link: string;
  description: string;
}[];

type Projects = {
  time: string;
  name: string;
  src: string;
  link: string;
  liveLink: string;
  description: string;
}[];

type Contacts = {
  name: string;
  username: string;
  link: string;
}[];

export const projects: Projects = [
  {
    time: 'Jan 2023',
    name: 'Sunnyside agency landing page',
    src: sunnyside,
    link: 'https://md-talim.github.io/intro-section-with-dropdown-navigation/',
    liveLink: 'https://md-talim.github.io/sunnyside-agency-landing-page',
    description: 'Challange by Frontend Mentor.',
  },
  {
    time: 'Feb 2023',
    name: 'Snap intro section',
    src: snap,
    link: 'https://github.com/Md-Talim/intro-section-with-dropdown-navigation',
    liveLink:
      'https://md-talim.github.io/intro-section-with-dropdown-navigation/',
    description: 'Challange by Frontend Mentor.',
  },
  {
    time: 'April 2023',
    name: 'Games Hub',
    src: gameshub,
    link: 'https://github.com/Md-Talim/game-hub',
    liveLink: 'http://gameshub-rho.vercel.app/',
    description: 'A Game Database powered with the rawg.io api.',
  },
  {
    time: 'May 2023',
    name: 'SearchX',
    src: searchx,
    link: 'https://github.com/Md-Talim/search-x',
    liveLink: 'https://searchx-seven.vercel.app/',
    description: 'A functional search engine enhanced by Google.',
  },
];

export const education: Eduaction = [
  {
    time: '2019 — 2020',
    link: 'https://bseh.org.in/',
    description: 'Secondary School from BSEH',
  },
  {
    time: '2021 — Now',
    link: 'https://gpindri.ac.in/',
    description: 'Diploma in Computer Science Engineering',
  },
];

export const contacts: Contacts = [
  {
    name: 'Email',
    username: 'mohd.talim.work@gmail.com',
    link: 'mailto:mohd.talim.work@gmail.com',
  },
  {
    name: 'Github',
    username: 'Md-Talim',
    link: 'https://github.com/Md-Talim',
  },
  {
    name: 'LinkedIn',
    username: 'Md-Talim',
    link: 'https://www.linkedin.com/in/Md-Talim/',
  },
];

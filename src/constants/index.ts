import { sunnyside, snap } from '../assets';
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
    username: 'mdtalim470@gmail.com',
    link: 'mailto:mdtalim470@gmail.com',
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

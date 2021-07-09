import { ReactElement } from 'react';
import About from './About/About';
import Biography from './Biography/Biography';
import Career from './Career/Career';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Video from './Video/Video';

const Categories = (): ReactElement => (
  <>
    <About />
    <Video />
    <Contact />
    <Biography />
    <Career />
    <Skills />
    <Portfolio />
  </>
);

export default Categories;

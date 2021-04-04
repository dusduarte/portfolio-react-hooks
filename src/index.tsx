import ReactDOM from 'react-dom';
import './index.css';
import About from './categories/about/About';
import Contact from './categories/contact/Contact';
import Portfolio from './categories/portfolio/Portfolio';
import Skills from './categories/skills/Skills';
import Menu from './components/menu/Menu';

ReactDOM.render(
  <>
    <Menu />
    <main>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  </>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import About from './categories/About/About';
import Contact from './categories/Contact/Contact';
import Biography from './categories/Biography/Biography';
import Career from './categories/Career/Career';
import Portfolio from './categories/Portfolio/Portfolio';
import Skills from './categories/Skills/Skills';
import Video from './categories/Video/Video';
import './index.css';
import { ThemeProvider } from '@material-ui/core';
import theme from './materialMuiTheme';
import Menu from './Menu/Menu';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Menu />
    <main>
      <About />
      <Video />
      <Contact />
      <Biography />
      <Career />
      <Skills />
      <Portfolio />
    </main>
  </ThemeProvider>,
  document.getElementById('root')
);

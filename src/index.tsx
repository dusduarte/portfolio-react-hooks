import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import About from './categories/About/About';
import Contact from './categories/Contact/Contact';
import Biography from './categories/Biography/Biography';
import Career from './categories/Career/Career';
import Portfolio from './categories/Portfolio/Portfolio';
import Skills from './categories/Skills/Skills';
import Video from './categories/Video/Video';
import './index.css';
import theme from './materialMuiTheme';
import Menu from './Menu/Menu';
import Lgpd from './shared/components/Lgpd/Lgpd';
import Categories from './categories/Categories';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Menu />
    <main>
      <Categories />
      <Lgpd />
    </main>
  </ThemeProvider>,
  document.getElementById('root')
);

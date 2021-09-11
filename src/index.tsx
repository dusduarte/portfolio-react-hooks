import { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import './index.css';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import theme from './materialMuiTheme';
import Menu from './Menu/Menu';
import Lgpd from './shared/components/Lgpd/Lgpd';
import Categories from './categories/Categories';
import IItem from './Menu/Menu.interface';
import IPropsCategories from './categories/Categories.interface';
import { Anchor, Category } from './Menu/Menu.enum';
import About from './categories/About/About';
import Career from './categories/Career/Career';
import Skills from './categories/Skills/Skills';
import Portfolio from './categories/Portfolio/Portfolio';
import Biography from './categories/Biography/Biography';
import Contact from './categories/Contact/Contact';
// import Video from './categories/Video/Video';

export interface ISections {
  menuItem: IItem;
  component: (props: IPropsCategories) => ReactElement;
}

const sections: ISections[] = [
  {
    menuItem: {
      name: Category.About,
      icon: <PersonOutlineOutlinedIcon />,
      anchor: Anchor.About,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <About key={Category.About} bgColor={bgColor} />;
    },
  },
  {
    menuItem: {
      name: Category.Skills,
      icon: <ListAltOutlinedIcon />,
      anchor: Anchor.Skills,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <Skills key={Category.Skills} bgColor={bgColor} />;
    },
  },
  {
    menuItem: {
      name: Category.Biography,
      icon: <FaceOutlinedIcon />,
      anchor: Anchor.Biography,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <Biography key={Category.Biography} bgColor={bgColor} />;
    },
  },
  {
    menuItem: {
      name: Category.Career,
      icon: <WorkOutlineOutlinedIcon />,
      anchor: Anchor.Career,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <Career key={Category.Career} bgColor={bgColor} />;
    },
  },
  {
    menuItem: {
      name: Category.Portfolio,
      icon: <PermMediaOutlinedIcon />,
      anchor: Anchor.Portfolio,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <Portfolio key={Category.Portfolio} bgColor={bgColor} />;
    },
  },
  {
    menuItem: {
      name: Category.Contact,
      icon: <ChatBubbleOutlineIcon />,
      anchor: Anchor.Contact,
    },
    component: (props: IPropsCategories) => {
      const { bgColor } = props;
      return <Contact key={Category.Contact} bgColor={bgColor} />;
    },
  },
  // {
  //   menuItem: {
  //     name: Category.Videos,
  //     icon: <YouTubeIcon />,
  //     anchor: Anchor.Videos,
  //   },
  //   component: (props: IPropsCategories) => {
  //     const { bgColor } = props;
  //     return <Video key={Category.Videos} bgColor={bgColor} />;
  //   },
  // },
];

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Menu sections={sections} />
    <main>
      <Categories sections={sections} />
      <Lgpd />
    </main>
  </ThemeProvider>,
  document.getElementById('root')
);

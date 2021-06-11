import React, { ReactElement, useRef, useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {
  AppBar,
  Grid,
  Hidden,
  IconButton,
  ListItemIcon,
  MenuItem,
  MenuList,
  Toolbar,
} from '@material-ui/core';
import useStyle from './Menu.style';
import ContainerMaterial from '../shared/components/ContainerMaterial/ContainerMaterial';
import Logo from '../shared/components/Logo/Logo';
import { ClickAwayListener } from '@material-ui/core';

interface IItem {
  name: string;
  icon: ReactElement | string;
  anchor: ANCHOR;
}

export enum ANCHOR {
  About = 'about',
  Videos = 'videos',
  Biography = 'biography',
  Career = 'career',
  Skills = 'skills',
  Portfolio = 'portfolio',
  Contact = 'contact',
}

export const items: IItem[] = [
  {
    name: 'sobre',
    icon: <PersonOutlineOutlinedIcon />,
    anchor: ANCHOR.About,
  },
  {
    name: 'vídeos',
    icon: <YouTubeIcon />,
    anchor: ANCHOR.Videos,
  },
  {
    name: 'biografia',
    icon: <FaceOutlinedIcon />,
    anchor: ANCHOR.Biography,
  },
  {
    name: 'carreira',
    icon: <WorkOutlineOutlinedIcon />,
    anchor: ANCHOR.Career,
  },
  {
    name: 'habilidades',
    icon: <ListAltOutlinedIcon />,
    anchor: ANCHOR.Skills,
  },
  {
    name: 'portfólio',
    icon: <PermMediaOutlinedIcon />,
    anchor: ANCHOR.Portfolio,
  },
  {
    name: 'contato',
    icon: <MailOutlineOutlinedIcon />,
    anchor: ANCHOR.Contact,
  },
];

const Menu = (): ReactElement => {
  const classNames = useStyle();
  const menu = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickItem = (anchor: string) => {
    setIsOpen(false);
    const element = document.querySelector(`#${anchor}`);
    const yOffset = -50;
    const y =
      (element as HTMLElement).getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;
    window.scrollTo({ top: y });
  };

  return (
    <>
      <Hidden mdUp>
        <ClickAwayListener
          onClickAway={(event: React.MouseEvent<Document, MouseEvent>) => {
            if (event.target !== menu.current) {
              setIsOpen(false);
            }
          }}
        >
          <div className={classNames.navbar}>
            <AppBar>
              <Toolbar>
                <ContainerMaterial alignItems="center">
                  <Grid item xs={6}>
                    <Logo />
                  </Grid>
                  <Grid item xs={6}>
                    <IconButton
                      color="inherit"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Grid>
                </ContainerMaterial>
              </Toolbar>
            </AppBar>
          </div>
        </ClickAwayListener>
      </Hidden>

      <div className={classNames.menu}>
        <div className="container-menu" id={`${isOpen && 'open'}`}>
          <MenuList ref={menu}>
            <div className="container-logo">
              <Logo />
            </div>

            {items.map((item: IItem, index: number) => {
              return (
                <MenuItem
                  key={index}
                  onClick={() => handleClickItem(item.anchor)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <label>{item.name}</label>
                </MenuItem>
              );
            })}
          </MenuList>
        </div>
      </div>
    </>
  );
};

export default Menu;

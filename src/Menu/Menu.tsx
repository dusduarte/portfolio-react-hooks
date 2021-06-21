import React, { ReactElement, useEffect, useRef, useState } from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
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
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import useStyle from './Menu.style';
import Logo from '../shared/components/Logo/Logo';
import { ClickAwayListener } from '@material-ui/core';
import { Category, Anchor } from './menu.enum';
import IItem from './menu.interface'
import useScrollToElement from '../shared/helpers/scrollToElement/scrollToElement';
import { useBlockScrollbar, useUnblockScrollbar } from '../shared/helpers/blockScrollbar/blockScrollbar';

export const items: IItem[] = [
  {
    name: Category.About,
    icon: <PersonOutlineOutlinedIcon />,
    Anchor: Anchor.About,
  },
  {
    name: Category.Videos,
    icon: <YouTubeIcon />,
    Anchor: Anchor.Videos,
  },
  {
    name: Category.Contact,
    icon: <ChatBubbleOutlineIcon />,
    Anchor: Anchor.Contact,
  },
  {
    name: Category.Biography,
    icon: <FaceOutlinedIcon />,
    Anchor: Anchor.Biography,
  },
  {
    name: Category.Career,
    icon: <WorkOutlineOutlinedIcon />,
    Anchor: Anchor.Career,
  },
  {
    name: Category.Skills,
    icon: <ListAltOutlinedIcon />,
    Anchor: Anchor.Skills,
  },
  {
    name: Category.Portfolio,
    icon: <PermMediaOutlinedIcon />,
    Anchor: Anchor.Portfolio,
  },
];

const Menu = (): ReactElement => {
  const classNames = useStyle();
  const menu = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const scrollToElement = (element: string) => useScrollToElement(element);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const blockScroll = () => useBlockScrollbar();
  const unblockScroll = () => useUnblockScrollbar();

  useEffect(() => {
    isSmall && isOpen ? blockScroll() : unblockScroll();
  }, [isSmall, isOpen])

  const handleClickItem = (anchor: string) => {
    setIsOpen(false);
    scrollToElement(anchor);
  }

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleIsOpenMobile = (event: React.MouseEvent<Document, MouseEvent>) => {
    if (event.target !== menu.current) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <Hidden mdUp={true}>
        <ClickAwayListener onClickAway={handleIsOpenMobile}>
          <div className={classNames.navbar}>
            <AppBar>
              <Toolbar>
                <Grid container={true} alignItems="center">
                  <Grid item={true} xs={6}>
                    <Logo />
                  </Grid>
                  <Grid item={true} xs={6}>
                    <IconButton
                      color="inherit"
                      onClick={handleIsOpen}
                    >
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </div>
        </ClickAwayListener>
      </Hidden>

      <Grid component="nav" className={classNames.menu}>
        <div className="container-menu" id={`${isOpen && 'open'}`}>
          <MenuList ref={menu}>
            <div className="container-logo">
              <Logo />
            </div>

            {items.map((item: IItem, index: number) => {
              return (
                <MenuItem
                  key={index}
                  onClick={() => handleClickItem(item.Anchor)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <label>{item.name}</label>
                </MenuItem>
              );
            })}
          </MenuList>
        </div>
      </Grid>
    </>
  );
};

export default Menu;

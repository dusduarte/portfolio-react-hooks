import {
  ReactElement, useEffect, useRef, useState
} from 'react';
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
  ClickAwayListener
} from '@material-ui/core';
import useStyle from './Menu.style';
import Logo from '../shared/components/Logo/Logo';

import { Category, Anchor } from './menu.enum';
import IItem from './menu.interface';
import { blockScrollbar, unblockScrollbar } from '../shared/helpers/blockScrollbar/blockScrollbar';
import focusToElement from '../shared/helpers/focusToElement/focusToElement';

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
  const [menuA11yHidden, setMenuA11yHidden] = useState<boolean>(false);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const hiddenA11yMainElement = (
    isHidden: boolean
  ) => (document.querySelector('main') as HTMLElement).setAttribute('aria-hidden', String(isHidden));

  useEffect(() => {
    if (isSmall && isOpen) {
      blockScrollbar();
      hiddenA11yMainElement(true);
    } else {
      hiddenA11yMainElement(false);
      unblockScrollbar();
      setIsOpen(false);
    }
  }, [isSmall, isOpen]);

  useEffect(() => {
    (isSmall && isOpen) || !isSmall
      ? setMenuA11yHidden(false)
      : setMenuA11yHidden(true);
  }, [isSmall, isOpen]);

  const handleClickItem = (anchor: string) => {
    focusToElement(`#${anchor} h2`);
    if (isSmall) {
      setIsOpen(false);
      hiddenA11yMainElement(false);
    }
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => focusToElement('.MuiList-root li:nth-of-type(2)'), 200);
    }
  };

  const handleIsOpenMobile = (event: any) => {
    if (event.target !== menu.current) {
      setIsOpen(false);
    }
  };

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
                      aria-label="Menu"
                      tabIndex={0}
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
          <MenuList ref={menu} aria-hidden={menuA11yHidden}>
            <li className="container-logo" aria-hidden={isSmall}>
              <Logo />
            </li>

            {items.map((item: IItem, index: number) => (
              <MenuItem
                role="button"
                tabIndex={index + 1}
                key={index}
                onClick={() => handleClickItem(item.Anchor)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <label tabIndex={index}>{item.name}</label>
              </MenuItem>
            ))}
          </MenuList>
        </div>
      </Grid>
    </>
  );
};

export default Menu;

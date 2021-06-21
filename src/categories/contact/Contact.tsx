import React, { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import useStyle from './Contact.style';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import image from '../../assets/img/005.png';
import { Category, Anchor } from '../../Menu/menu.enum';

const Contact = (): ReactElement => {
  const classNames = useStyle();
  const theme = useTheme();

  return (
    <ContainerCategorie
      color={theme.palette.primary.main}
      title={Category.Contact}
      id={Anchor.Contact}
      customClass={classNames.root}
    >
      <Grid container={true}>
        <Grid item={true} xs={12} md={6}>
          <Grid item={true} xs={12}>
            <a href='https://www.instagram.com/devdescomplicado' target='_blank'>
              <InstagramIcon />
              <label>peditapronto</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href='https://www.youtube.com/channel/UChmhPmp1dm-jJWWY_J2dxew' target='_blank'>
              <YouTubeIcon />
              <label>Pedi, tá pronto?</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href='https://www.instagram.com/dustanisci' target='_blank'>
              <InstagramIcon />
              <label>dustanisci</label>
            </a>
          </Grid>

          <Grid item={true} xs={12} >
            <a href='https://github.com/dustanisci' target='_blank'>
              <GitHubIcon /> <label>dustanisci</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href='https://www.linkedin.com/in/dustanisci/' target='_blank'>
              <LinkedInIcon /> <label>dustanisci</label>
            </a>
          </Grid>
        </Grid>
        <Grid item={true} className="container-img" xs={12} md={6}>
          <img src={image} alt="Foto representativa de um robô" />
        </Grid>
      </Grid>

    </ContainerCategorie>
  );
};

export default Contact;

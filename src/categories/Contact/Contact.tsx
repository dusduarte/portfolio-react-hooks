import { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import useStyle from './Contact.style';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
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
            <a href="https://www.instagram.com/peditapronto/" target="_blank" tabIndex={0} rel="noreferrer">
              <InstagramIcon aria-hidden="true" />
              <label aria-label="Instagram do Pedi, tá pronto?">peditapronto</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href="https://www.youtube.com/channel/UCAF9UVmpuvir8_rg5ifqiHQ" target="_blank" tabIndex={0} rel="noreferrer">
              <YouTubeIcon aria-hidden="true" />
              <label aria-label="Canal do youtube do Pedi, tá pronto?">Pedi, tá pronto?</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href="https://github.com/dustanisci" target="_blank" tabIndex={0} rel="noreferrer">
              <GitHubIcon aria-hidden="true" />
              <label aria-label="GitHub de Eduardo">dustanisci</label>
            </a>
          </Grid>

          <Grid item={true} xs={12}>
            <a href="https://www.linkedin.com/in/dustanisci/" target="_blank" tabIndex={0} rel="noreferrer">
              <LinkedInIcon aria-hidden="true" />
              <label aria-label="LinkedIn de Eduardo">dustanisci</label>
            </a>
          </Grid>
        </Grid>
        <Grid item={true} className="container-img" xs={12} md={6}>
          <img
            src={image}
            alt="Imagem de um pequeno robô pequeno, cor azul de tons claro e escuro, possui uma antena na cabeça."
          />
        </Grid>
      </Grid>

    </ContainerCategorie>
  );
};

export default Contact;

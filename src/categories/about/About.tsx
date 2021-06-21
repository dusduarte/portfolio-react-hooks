import React, { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import { Category, Anchor } from '../../Menu/menu.enum';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import image from '../../assets/img/002.gif';
import useStyle from './About.style';

const About = (): ReactElement => {
  const classNames = useStyle();
  const theme = useTheme();

  return (
    <ContainerCategorie
      title="Sobre"
      color={theme.palette.primary.main}
      id={Anchor.About}
      customClass={classNames.root}>

      <Grid item={true} xs={12} md={6}>
        Eduardo Stanisci é desenvolvedor de sites, aplicativos e sistemas para a internet.
        É também o criador do canal Pedi, tá pronto? no Youtube, voltado na criação de conteúdo na área de tecnologia da informação.
      </Grid>

      <Grid item={true} xs={12} md={6}>
        <img src={image} />
      </Grid>

    </ContainerCategorie>
  );
}

export default About;

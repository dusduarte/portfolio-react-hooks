import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ANCHOR } from '../../Menu/Menu';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';

const About = (): ReactElement => (
  <ContainerCategorie title="sobre" id={ANCHOR.About}>
    <Grid item={true} sm={12} md={6}>
      [FOTO]
    </Grid>
    <Grid item={true} sm={12} md={6}>
      Desenvolvedor experiente na criação de sites, sistemas e aplicativos para
      a internet, formado em Análise e Desenvolvimento de Sistemas. É também o
      criador do canal DEV Descomplicado no Youtube, voltado na criação de
      conteúdo na área de tecnologia da informação.
    </Grid>
  </ContainerCategorie>
);

export default About;

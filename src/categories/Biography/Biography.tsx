import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { ANCHOR } from '../../Menu/Menu';

const Biography = (): ReactElement => (
  <ContainerCategorie title="biografia" id={ANCHOR.Biography}>
    <Grid item={true} sm={12} md={6}>
      <p>
        Nascido em São Paulo, 27 anos, Eduardo Stanisci é filho de um engenheiro
        elétrico e de uma professora. Despertou o interesse por tecnologia
        próximo dos 6 anos de idade, quando mexeu pela primeira vez em um
        computador com internet.
      </p>
      <p>
        Eduardo Stanisci passou a estudar programação com 9 anos, onde seu
        desejo era criar um site de conteúdo voltado a jogos. Aos 16 anos,
        iniciou em um curso de técnico em informática, o qual teve a
        oportunidade de fortificar seus conhecimentos e aumentar o grande
        interesse em trabalhar como desenvolvedor.
      </p>
    </Grid>
    <Grid item={true} sm={12} md={6}>
      [FOTO]
    </Grid>
  </ContainerCategorie>
);

export default Biography;

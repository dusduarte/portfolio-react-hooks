import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { ANCHOR } from '../../Menu/Menu';

const Skills = (): ReactElement => (
  <ContainerCategorie title="habilidades" id={ANCHOR.Skills}>
    <Grid item sm={12} md={6}>
      habilidades
    </Grid>
    <Grid item sm={12} md={6}>
      habilidades
    </Grid>
  </ContainerCategorie>
);

export default Skills;

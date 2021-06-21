import React, { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';

const Skills = (): ReactElement => {
  const theme = useTheme();

  return (
    <ContainerCategorie
      color={theme.palette.primary.light}
      title={Category.Skills}
      id={Anchor.Skills}>
      <Grid item={true} xs={12} md={6}>
        habilidades
      </Grid>
      <Grid item={true} xs={12} md={6}>
        habilidades
      </Grid>
    </ContainerCategorie>
  );
}

export default Skills;

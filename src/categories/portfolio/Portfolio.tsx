import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { ANCHOR } from '../../Menu/Menu';

const Portfolio = (): ReactElement => {
  return (
    <ContainerCategorie title="portfólio" id={ANCHOR.Portfolio}>
      <Grid item={true} sm={12}>
        [CAROUSEL VÍDEOS + MODAL]
      </Grid>
    </ContainerCategorie>
  );
};

export default Portfolio;

import { Grid } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { ANCHOR } from '../../Menu/Menu';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';

const Contact = (): ReactElement => {
  return (
    <ContainerCategorie title="contato" id={ANCHOR.Contact}>
      <Grid item={true} sm={12}>
        ícone dustanisci@outlook.com <br />
        ícone @devdescomplicado
      </Grid>
    </ContainerCategorie>
  );
};

export default Contact;

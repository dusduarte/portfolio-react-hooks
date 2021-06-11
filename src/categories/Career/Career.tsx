import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { ANCHOR } from '../../Menu/Menu';

const Career = (): ReactElement => (
  <ContainerCategorie title="carreira" id={ANCHOR.Career}>
    <Grid item={true} sm={12} md={6}>
      [FOTO]
    </Grid>
    <Grid item={true} sm={12} md={6}>
      <p>
        No início de 2016 e com 22 anos, Eduardo Stanisci passou por um estágio
        em programação, depois neste mesmo ano concluiu a faculdade, formou-se
        em Análise e Desenvolvimento de Sistemas pelo SENAC-SP.{' '}
      </p>

      <p>
        Eduardo Stanisci possui mais de 5 anos de experiência na área e tem uma
        carreira bem evolutiva, busca constantemente novos conhecimentos em
        tecnologia atuais e também crescimento profissional, passou por algumas
        empresas como o banco Santander e o Itaú Unibanco.
      </p>
    </Grid>
  </ContainerCategorie>
);

export default Career;

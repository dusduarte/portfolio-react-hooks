import { ReactElement } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import image from '../../assets/img/003.png';
import useStyle from './Career.style';
import useParagraphStyle from '../../shared/styles/paragraph';

const Career = (): ReactElement => {
  const classNames = useStyle();
  const theme = useTheme();
  const paragraphStyle = useParagraphStyle();

  return (
    <ContainerCategorie
      title={Category.Career}
      color={theme.palette.primary.main}
      id={Anchor.Career}
      customClass={classNames.root}>

      <Grid item={true} xs={12} md={6} className={paragraphStyle.root}>
        <p>No início de 2016 e com 22 anos, Eduardo Stanisci passou por um estágio em programação,
          depois neste mesmo ano concluiu a faculdade, formou-se em Análise e Desenvolvimento de Sistemas pelo SENAC-SP.</p>

        <p>Eduardo Stanisci possui mais de 5 anos de experiência na área e tem uma carreira bem evolutiva, busca
          constantemente novos conhecimentos em novas tecnologias e passou por algumas empresas como o banco Santander
          e o Itaú Unibanco.</p>
      </Grid>

      <Grid item={true} xs={12} md={6}>
        <img src={image} alt="Foto representativa de um código de site" />
      </Grid>

    </ContainerCategorie>
  );
}

export default Career;

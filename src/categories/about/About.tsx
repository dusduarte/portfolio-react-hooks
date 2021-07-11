import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress, Grid, useTheme } from '@material-ui/core';
import { Anchor } from '../../Menu/menu.enum';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import image from '../../assets/img/002.gif';
import useStyle from './About.style';
import Urls from '../../env';
import useParagraphStyle from '../../shared/styles/paragraph';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';

const About = (): ReactElement => {
  const classNames = useStyle();
  const theme = useTheme();
  const [data, setData] = useState<string[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const paragraphStyle = useParagraphStyle();
  const loaderStyle = useLoaderStyle();

  useEffect(() => {
    customFetch(Urls.About)
      .then((resp: { content: string[] }) => setData(resp.content))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      title="Sobre"
      color={theme.palette.primary.main}
      id={Anchor.About}
      customClass={`${classNames.root} ${paragraphStyle.root}`}
    >
      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt="Imagem de Eduardo Stanisci, homem branco com bigode,
        vestimenta com terno e chapéu preto, camiseta casual cinza, fundo escuro e um efeito de
        linha azul passando em volta dele."
        />
      </Grid>

      <Grid item={true} xs={12} md={6} tabIndex={0}>
        {!loader
          && data
          && data.map((resp: string, index: number) => <p key={index}>{resp}</p>)}

        {loader && <CircularProgress size={60} className={loaderStyle.root} />}
      </Grid>
    </ContainerCategorie>
  );
};

export default About;

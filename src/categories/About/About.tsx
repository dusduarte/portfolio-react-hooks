import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import { Anchor } from '../../Menu/Menu.enum';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import image from '../../assets/img/001.png';
import useStyle from './About.style';
import Urls from '../../env';
import useParagraphStyle from '../../shared/styles/paragraph';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';
import IPropsCategories from '../Categories.interface';
import years from '../../shared/helpers/years/years';

const About = ({ bgColor }: IPropsCategories): ReactElement => {
  const classNames = useStyle();
  const [data, setData] = useState<string[]>([]);
  const [loader, setLoader] = useState<boolean>(true);
  const paragraphStyle = useParagraphStyle();
  const loaderStyle = useLoaderStyle();
  const experience = years('2015-01-01');

  useEffect(() => {
    customFetch(Urls.About)
      .then((resp: { content: string[] }) => setData(resp.content))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      title="Sobre"
      color={bgColor}
      id={Anchor.About}
      customClass={`${classNames.root} ${paragraphStyle.root}`}
    >
      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt="Imagem de Eduardo Duarte Stanisci, cabelo penteado para cima,
        camiseta estilosa de figuras geométricas e um fundo de parede bege."
        />
      </Grid>

      <Grid item={true} xs={12} md={6} tabIndex={0}>
        {!loader
          && data
          && data.map((resp: string) => <p key={resp}>{resp.replace('{0}', experience)}</p>)}

        {loader && <CircularProgress size={60} className={loaderStyle.root} />}
      </Grid>
    </ContainerCategorie>
  );
};

export default About;

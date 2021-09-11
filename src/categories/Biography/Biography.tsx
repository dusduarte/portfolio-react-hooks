import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/Menu.enum';
import image from '../../assets/img/002.gif';
import useStyle from './Biography.style';
import useParagraphStyle from '../../shared/styles/paragraph';
import Urls from '../../env';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';
import IPropsCategories from '../Categories.interface';
import years from '../../shared/helpers/years/years';

const Biography = ({ bgColor }: IPropsCategories): ReactElement => {
  const classNames = useStyle();
  const paragraphStyle = useParagraphStyle();
  const [data, setData] = useState<string[]>([]);
  const loaderStyle = useLoaderStyle();
  const [loader, setLoader] = useState<boolean>(true);
  const age = years('1993-11-25');

  useEffect(() => {
    customFetch(Urls.Biography)
      .then((resp: { content: string[] }) => setData(resp.content))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      customClass={classNames.root}
      color={bgColor}
      title={Category.Biography}
      id={Anchor.Biography}
    >
      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt="Imagem de Eduardo Stanisci, homem branco com bigode,
        vestimenta com terno e chapéu preto, camiseta casual cinza, fundo escuro e um efeito de
        linha azul passando em volta dele."
        />
      </Grid>

      <Grid item={true} xs={12} md={6} className={paragraphStyle.root}>
        {!loader
          && data
          && data.map((resp: string) => (
            <p key={resp}>{resp.replace('{0}', age)}</p>
          ))}

        {loader && <CircularProgress size={60} className={loaderStyle.root} />}
      </Grid>
    </ContainerCategorie>
  );
};

export default Biography;

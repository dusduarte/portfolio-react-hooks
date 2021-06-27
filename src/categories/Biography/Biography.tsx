import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress, Grid, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import image from '../../assets/img/001.png';
import useStyle from './Biography.style';
import useParagraphStyle from '../../shared/styles/paragraph';
import Urls from '../../env';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';

const Biography = (): ReactElement => {
  const classNames = useStyle();
  const paragraphStyle = useParagraphStyle();
  const theme = useTheme();
  const [data, setData] = useState<string[]>([]);
  const loaderStyle = useLoaderStyle();
  const [loader, setLoader] = useState<boolean>(true);

  const age = (): string => {
    const diff = Date.now() - (new Date('1993-11-25')).getTime();
    const ageTime = new Date(diff);
    return String(Math.abs(ageTime.getUTCFullYear() - 1970));
  };

  useEffect(() => {
    customFetch(Urls.Biography)
      .then((resp: { content: string[] }) => setData(resp.content))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      customClass={classNames.root}
      color={theme.palette.primary.light}
      title={Category.Biography}
      id={Anchor.Biography}
    >

      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt="Imagem de Eduardo Duarte Stanisci, cabelo penteado para cima,
        camiseta estilosa de figuras geométricas e um fundo de parede bege."
        />
      </Grid>

      <Grid
        item={true}
        xs={12}
        md={6}
        className={paragraphStyle.root}
      >

        {!loader && data && data.map((resp: string, index: number) => (
          <p key={index}>{resp.replace('{0}', age())}</p>
        ))}

        {loader && (
          <CircularProgress size={60} className={loaderStyle.root} />
        )}
      </Grid>

    </ContainerCategorie>
  );
};

export default Biography;

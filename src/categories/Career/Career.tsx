import { ReactElement, useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/Menu.enum';
import image from '../../assets/img/003.png';
import useStyle from './Career.style';
import useParagraphStyle from '../../shared/styles/paragraph';
import Urls from '../../env';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';
import IPropsCategories from '../Categories.interface';

const Career = ({ bgColor }: IPropsCategories): ReactElement => {
  const classNames = useStyle();
  const paragraphStyle = useParagraphStyle();
  const [data, setData] = useState<string[]>([]);
  const loaderStyle = useLoaderStyle();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    customFetch(Urls.Career)
      .then((resp: { content: string[] }) => setData(resp.content))
      .finally(() => setLoader(false));
  }, []);

  return (
    <ContainerCategorie
      title={Category.Career}
      color={bgColor}
      id={Anchor.Career}
      customClass={classNames.root}
    >
      <Grid item={true} xs={12} md={6} className={paragraphStyle.root}>
        {!loader
          && data
          && data.map((resp: string) => <p key={resp}>{resp}</p>)}

        {loader && <CircularProgress size={60} className={loaderStyle.root} />}
      </Grid>

      <Grid item={true} xs={12} md={6}>
        <img
          src={image}
          alt="Imagem representando um navegador azul e com uma tag de código de programação."
        />
      </Grid>
    </ContainerCategorie>
  );
};

export default Career;

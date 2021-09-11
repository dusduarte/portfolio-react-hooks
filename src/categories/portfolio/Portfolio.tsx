import {
  ReactElement, useState, useEffect
} from 'react';
import {
  CircularProgress,
  Fade,
  Grid,
  Modal,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/Menu.enum';
import useStyle from './Portfolio.style';

import scrollToElement from '../../shared/helpers/scrollToElement/scrollToElement';
import { IPortfolio, IPortfolioData } from './Portfolio.interface';
import Carousel, { Type } from '../../shared/components/Carousel/Carousel';
import Urls from '../../env';
import useLoaderStyle from '../../shared/styles/loader';
import customFetch from '../../shared/helpers/fetch/fetch';
import IPropsCategories from '../Categories.interface';

const Portfolio = ({ bgColor }: IPropsCategories): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previewPortfolio, setPreviewPortfolio] = useState<string[]>([]);
  const [data, setData] = useState<IPortfolioData>({} as IPortfolioData);
  const classNames = useStyle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const countPaginaton = Math.round(
    data.portfolio ? data.portfolio.length / 2 : 0
  );
  const showOneElement = (currentPage - 1) * 2;
  const showTwoElement = (currentPage - 1) * 2 + 1;
  const loaderStyle = useLoaderStyle();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    customFetch(Urls.Portfolio)
      .then((resp: IPortfolioData) => setData(resp))
      .finally(() => setLoader(false));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePaginationClick = (indexPage: number) => {
    if (currentPage !== indexPage) {
      setCurrentPage(indexPage);

      if (isSmall) {
        scrollToElement(Anchor.Portfolio);
      }
    }
  };

  const handleOpenModal = (id: number) => {
    const found = data.portfolio.find((resp: IPortfolio) => resp.id === id);
    if (found) {
      setPreviewPortfolio(found.galleries);
      setOpen(true);
    }
  };

  return (
    <>
      {data && data.portfolio && (
        <>
          <ContainerCategorie
            color={bgColor}
            customClass={classNames.root}
            title={Category.Portfolio}
            id={Anchor.Portfolio}
          >
            {!loader && data && data.portfolio && (
              <>
                <Grid
                  container={true}
                  className={classNames.containerImage}
                  tabIndex={0}
                  aria-label="Imagens do portfólio de sites desenvolvidos pela participação de Eduardo"
                >
                  {data && data.portfolio[showOneElement] && (
                    <Grid item={true} xs={12} md={6}>
                      <img
                        src={data.portfolio[showOneElement].galleries[0]}
                        onClick={() => handleOpenModal(data.portfolio[showOneElement].id)}
                        aria-hidden="true"
                      />
                      <label>
                        Imagem 1 de
                        {` ${data.portfolio[showOneElement].galleries.length}`}
                      </label>
                    </Grid>
                  )}

                  {data.portfolio[showTwoElement] && (
                    <Grid item={true} xs={12} md={6}>
                      <img
                        src={data.portfolio[showTwoElement].galleries[0]}
                        onClick={() => handleOpenModal(data.portfolio[showTwoElement].id)}
                        aria-hidden="true"
                      />
                      <label>
                        Imagem 1 de
                        {` ${data.portfolio[showTwoElement].galleries.length}`}
                      </label>
                    </Grid>
                  )}
                </Grid>
                <Grid
                  container={true}
                  className={classNames.containerPagination}
                  spacing={isSmall ? 6 : 10}
                >
                  <Pagination
                    color="primary"
                    siblingCount={1}
                    hideNextButton={true}
                    hidePrevButton={true}
                    onChange={(event: any, index: number) => handlePaginationClick(index)}
                    page={currentPage}
                    count={countPaginaton}
                    aria-hidden="true"
                  />
                </Grid>
              </>
            )}

            {loader && (
              <CircularProgress size={60} className={loaderStyle.root} />
            )}
          </ContainerCategorie>

          <Modal className={classNames.modal} open={open} onClose={handleClose}>
            <Fade in={open}>
              <Grid container={true} className={classNames.paper}>
                <Carousel type={Type.Image} data={previewPortfolio} />
              </Grid>
            </Fade>
          </Modal>
        </>
      )}
    </>
  );
};

export default Portfolio;

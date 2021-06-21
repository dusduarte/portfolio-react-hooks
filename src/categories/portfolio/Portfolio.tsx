import React, { ReactElement, useState } from 'react';
import { Fade, Grid, Modal, useMediaQuery, useTheme } from '@material-ui/core';
import ContainerCategorie from '../../shared/components/ContainerCategorie/ContainerCategorie';
import { Category, Anchor } from '../../Menu/menu.enum';
import dataPortfolio from './portfolio.data';
import useStyle from './Portfolio.style';
import { useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import useScrollToElement from '../../shared/helpers/scrollToElement/scrollToElement';
import { IPortfolio } from './portfolio.interface';
import Carousel, { IType } from '../../shared/components/Carousel/Carousel';

const Portfolio = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previewPortfolio, setPreviewPortfolio] = useState<string[]>([]);
  const classNames = useStyle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const scrollToElement = (element: string) => useScrollToElement(element);
  const countPaginaton = Math.round(dataPortfolio.length / 2);
  const showOneElement = (currentPage - 1) * 2;
  const showTwoElement = (((currentPage - 1) * 2) + 1);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false)
  }, [])

  const handlePaginationClick = (indexPage: number) => {
    if (currentPage !== indexPage) {
      setCurrentPage(indexPage);

      if (isSmall) {
        scrollToElement(Anchor.Portfolio);
      }
    }
  }

  const handleOpenModal = (id: number) => {
    dataPortfolio.find((data: IPortfolio) => {
      if (data.id === id) {
        setPreviewPortfolio(data.galleries);
        setOpen(true);
      }
    });
  }

  return (<>
    <ContainerCategorie
      color={theme.palette.primary.main}
      customClass={classNames.root}
      title={Category.Portfolio}
      id={Anchor.Portfolio}>

      <Grid container={true} className={classNames.containerImage}>
        {dataPortfolio[showOneElement]
          && (
            <Grid item={true} xs={12} md={6}>
              <img
                src={dataPortfolio[showOneElement].galleries[0]}
                onClick={() => handleOpenModal(dataPortfolio[showOneElement].id)} />
              <label>Imagem 1 de {dataPortfolio[showOneElement].galleries.length}</label>
            </Grid>
          )}

        {dataPortfolio[showTwoElement]
          && (<Grid item={true} xs={12} md={6}>
            <img
              src={dataPortfolio[showTwoElement].galleries[0]}
              onClick={() => handleOpenModal(dataPortfolio[showTwoElement].id)} />
            <label>Imagem 1 de {dataPortfolio[showTwoElement].galleries.length}</label>
          </Grid>)}

      </Grid>
      <Grid container={true} className={classNames.containerPagination} spacing={isSmall ? 6 : 10}>
        <Pagination
          color="primary"
          siblingCount={1}
          hideNextButton={true}
          hidePrevButton={true}
          onChange={(event: any, index: number) => handlePaginationClick(index)}
          page={currentPage}
          count={countPaginaton} />
      </Grid>
    </ContainerCategorie>

    <Modal
      className={classNames.modal}
      open={open}
      onClose={handleClose}
    >
      <Fade in={open}>
        <Grid container={true} className={classNames.paper}>
          <Carousel type={IType.Image} data={previewPortfolio} />
        </Grid>
      </Fade>
    </Modal>
  </>);
};

export default Portfolio;

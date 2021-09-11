import {
  Fragment, ReactElement, useEffect, useState
} from 'react';
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import useStyle from './Lgpd.style';
import customFetch from '../../helpers/fetch/fetch';
import Urls from '../../../env';
import { ILgpd, IPrivacyPolicy } from './Lgpd.interface';
import {
  blockScrollbar,
  unblockScrollbar,
} from '../../helpers/blockScrollbar/blockScrollbar';
import useLoaderStyle from '../../styles/loader';

const setLgdp = (accept: string): void => sessionStorage.setItem('lgpd', accept);
const getLgdp = (): string => sessionStorage.getItem('lgpd') || '';

const Lgpd = (): ReactElement => {
  const classNames = useStyle();
  const [show, setShow] = useState<boolean>(!getLgdp());
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [data, setData] = useState<ILgpd>({} as ILgpd);
  const [loader, setLoader] = useState<boolean>(true);
  const loaderStyle = useLoaderStyle();

  const handleModalOpen = () => {
    blockScrollbar();
    setOpenModal(true);
  };

  const handleModalClose = () => {
    unblockScrollbar();
    setOpenModal(false);
  };

  const handleCloseLgpd = () => {
    setShow(false);
    setLgdp('accept');
  };

  useEffect(() => {
    customFetch(Urls.Lgpd)
      .then((resp: ILgpd) => setData(resp))
      .finally(() => setLoader(false));
  }, []);

  return (
    <>
      {show && (
        <>
          <div className={classNames.root}>
            <div>
              <p aria-label="Este site utiliza cookies e outras tecnologias semelhantes para
                melhorar a sua experiência. Ao utilizar este site, você concorda
                com tal monitoramento. Para mais informações consulte a política de privacidade"
              >
                Este site utiliza cookies e outras tecnologias semelhantes para
                melhorar a sua experiência. Ao utilizar este site, você concorda
                com tal monitoramento. Para mais informações consulte a
              </p>
              <button
                className="btn-policy"
                type="button"
                onClick={handleModalOpen}
                onKeyDown={handleModalOpen}
              >
                Política de Privacidade
              </button>
            </div>
            <Button
              className="btn-close"
              variant="outlined"
              size="small"
              onClick={handleCloseLgpd}
            >
              Fechar
            </Button>
          </div>
          <Dialog
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classNames.dialog}
          >
            <DialogTitle id="alert-dialog-title" tabIndex={0}>
              <h2>Termos e condições da utilização deste site</h2>
            </DialogTitle>
            <DialogContent>
              {loader && (
                <CircularProgress size={60} className={loaderStyle.root} />
              )}
              {!loader
                && data
                && data.privacyPolicy
                && data.privacyPolicy.map((resp:IPrivacyPolicy) => (
                  <Fragment key={resp.title}>
                    <h3>{resp.title}</h3>
                    <p>{resp.description}</p>
                  </Fragment>
                ))}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose} color="primary" autoFocus>
                Fechar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default Lgpd;

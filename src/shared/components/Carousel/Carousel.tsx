import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import {
  Button,
  Grid,
  MobileStepper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

import useStyle from './Carousel.style';
import {
  IVideo
} from '../../../categories/Video/Video.interface';
import useSwiper from '../../helpers/swiper/swiper';
import Swip from '../../helpers/swiper/swiper.enum';
import scrollToElement from '../../helpers/scrollToElement/scrollToElement';

export enum Type {
  Video,
  Image
}

interface IPropsCarousel {
  data: IVideo[] | string[];
  type: Type;
  achor?: string;
}

const Carousel = ({ data, type, achor }: IPropsCarousel): ReactElement => {
  const classNames = useStyle();
  const carouselRef = useRef<any>(null);
  const swiper = useSwiper(carouselRef);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const firstElement = activeStep * 2;
  const secondElement = firstElement + 1;
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback(() => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }, []);

  const handleOnClickNext = () => {
    handleNext();
    if (isSmall && achor) {
      scrollToElement(achor);
    }
  };

  const handleOnClickBack = () => {
    handleBack();
    if (isSmall && achor) {
      scrollToElement(achor);
    }
  };

  useEffect(() => {
    if (type === Type.Image) {
      setMaxSteps(data.length);
    } else {
      setMaxSteps(Math.ceil(data.length / 2));
    }
  }, [data.length, type]);

  useEffect(() => {
    if (swiper === Swip.Right && activeStep !== 0) {
      handleBack();
    }

    if (swiper === Swip.Left && activeStep !== maxSteps - 1) {
      handleNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  return (
    <Grid container={true} className={classNames.root} ref={carouselRef}>
      {type === Type.Video && (
        <>
          {data[firstElement] && (
            <Grid item={true} sm={12} md={6} xs={12}>
              <Typography>{(data[firstElement] as IVideo).title}</Typography>
              <iframe
                src={(data[firstElement] as IVideo).url}
                frameBorder="0"
                tabIndex={0}
                role="button"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
            </Grid>
          )}

          {data[secondElement] && (
            <Grid item={true} sm={12} md={6} xs={12}>
              <Typography>{(data[secondElement] as IVideo).title}</Typography>
              <iframe
                src={(data[secondElement] as IVideo).url}
                frameBorder="0"
                tabIndex={0}
                role="button"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
            </Grid>
          )}
        </>
      )}

      {type === Type.Image && (
        <Grid item={true} xs={12}>
          <img src={(data as string[])[activeStep]} />
        </Grid>
      )}

      <Grid item={true} xs={12} className={type === Type.Image ? classNames.stepperImage : classNames.stepperVideo}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={(
            <Button
              size="small"
              onClick={handleOnClickNext}
              disabled={activeStep === maxSteps - 1}
            >
              Próximo
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          )}
          backButton={(
            <Button
              size="small"
              onClick={handleOnClickBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Voltar
            </Button>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Carousel;

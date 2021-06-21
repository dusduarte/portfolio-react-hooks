import React, {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Button,
  Fade,
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
} from '../../../categories/Video/video.interface';
import useSwiper from '../../helpers/swiper/swiper';
import Swip from '../../helpers/swiper/swiper.enum';
import useScrollToElement from '../../helpers/scrollToElement/scrollToElement';
import { useCallback } from 'react';

export enum IType {
  Video,
  Image
}

interface IPropsCarousel {
  data: IVideo[] | string[];
  type: IType;
  achor?: string;
}

const Carousel = ({ data, type, achor }: IPropsCarousel): ReactElement => {
  const classNames = useStyle();
  const carouselRef = useRef<any>(null);
  const swiper = useSwiper(carouselRef);
  const theme = useTheme();
  const [fade, setFade] = useState(true);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [maxSteps, setMaxSteps] = useState<number>(0);
  const firstElement = activeStep * 2;
  const secondElement = firstElement + 1;
  const scrollToElement = () => achor && useScrollToElement(achor);
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNext = useCallback(() => {
    setFade(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      setFade(true);
    }, 250);
  }, []);

  const handleBack = useCallback(() => {
    setFade(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTimeout(() => {
      setFade(true);
    }, 250);
  }, []);

  const handleOnClickNext = () => {
    handleNext();
    if (isSmall) {
      scrollToElement();
    }
  }

  const handleOnClickBack = () => {
    handleBack();
    if (isSmall) {
      scrollToElement();
    }
  }

  useEffect(() => {
    if (type === IType.Image) {
      setMaxSteps(data.length);
    } else {
      setMaxSteps(Math.ceil(data.length / 2));
    }
  }, [maxSteps]);

  useEffect(() => {
    if (swiper === Swip.Right && activeStep !== 0) {
      handleBack();
    }

    if (swiper === Swip.Left && activeStep !== maxSteps - 1) {
      handleNext();
    }
  }, [swiper]);

  return (
    <Grid container={true} className={classNames.root} ref={carouselRef}>
      {type === IType.Video && (
        <Fade in={fade} timeout={{ enter: 1000, exit: 300 }}>
          <>
            {data[firstElement] && (<Grid item={true} sm={12} md={6} xs={12}>
              <Typography>{(data[firstElement] as IVideo).title}</Typography>
              <iframe
                src={(data[firstElement] as IVideo).url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
            </Grid>)}

            {data[secondElement] && (<Grid item={true} sm={12} md={6} xs={12}>
              <Typography>{(data[secondElement] as IVideo).title}</Typography>
              <iframe
                src={(data[secondElement] as IVideo).url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              />
            </Grid>)}
          </>
        </Fade>
      )}

      {type === IType.Image && (
        <Fade in={fade} timeout={{ enter: 1000, exit: 300 }}>
          <Grid item={true} xs={12}>
            <img src={(data as string[])[activeStep]} />
          </Grid>
        </Fade>
      )}

      <Grid item={true} xs={12} className={type === IType.Image ? classNames.stepperImage : classNames.stepperVideo}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
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
          }
          backButton={
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
          }
        />
      </Grid>
    </Grid>
  );
};

export default Carousel;

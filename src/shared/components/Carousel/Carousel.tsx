import React, {
  Fragment,
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
  useTheme,
} from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import ContainerMaterial from '../ContainerMaterial/ContainerMaterial';
import useSwiper, { Swip } from '../Swiper/Swiper';
import useStyle from './Carousel.style';
import {
  IVideo,
  ICarouselVideos,
} from '../../../categories/Video/video.interface';

interface IPropsCarousel {
  data: ICarouselVideos[];
}

const Carousel = ({ data }: IPropsCarousel): ReactElement => {
  const classNames = useStyle();
  const carouselRef = useRef<any>(null);
  const swiper = useSwiper(carouselRef);
  const theme = useTheme();
  const [fade, setFade] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setFade(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setTimeout(() => {
      setFade(true);
    }, 500);
  };

  const handleBack = () => {
    setFade(false);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTimeout(() => {
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    if (swiper === Swip.Right && activeStep !== 0) {
      handleBack();
    }

    if (swiper === Swip.Left && activeStep !== maxSteps - 1) {
      handleNext();
    }
  });

  return (
    <div className={classNames.root} ref={carouselRef}>
      <ContainerMaterial>
        {data[activeStep].videos.map((videos: IVideo, index: number) => {
          return (
            <Fragment key={index}>
              {data[activeStep].videos.length === 2 && (
                <Fade in={fade} timeout={{ enter: 1000, exit: 400 }}>
                  <Grid item={true} sm={12} md={6} xs={12}>
                    <Typography>{videos.title}</Typography>
                    <iframe
                      src={videos.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </Grid>
                </Fade>
              )}

              {data[activeStep].videos.length === 1 && (
                <Fade in={fade} timeout={{ enter: 1000, exit: 400 }}>
                  <Grid item={true} sm={12}>
                    <Typography>{videos.title}</Typography>
                    <iframe
                      src={videos.url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen={true}
                    />
                  </Grid>
                </Fade>
              )}
            </Fragment>
          );
        })}

        <Grid item={true} sm={12} className={classNames.stepper}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
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
                onClick={handleBack}
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
      </ContainerMaterial>
    </div>
  );
};

export default Carousel;

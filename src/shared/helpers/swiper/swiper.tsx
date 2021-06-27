/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Swip from './swiper.enum';

const useSwiper = (ref: any): Swip => {
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [swip, setSwip] = useState(Swip.None);

  useEffect(() => setSwip(Swip.None));

  useEffect(() => {
    ref.current.addEventListener('touchstart', (e: any) => {
      if (touchStart !== Math.round(Number(e.changedTouches[0].clientX))) {
        setTouchStart(e.changedTouches[0].clientX);
      }
    });

    ref.current.addEventListener('touchend', (e: any) => {
      if (touchEnd !== Math.round(Number(e.changedTouches[0].clientX))) {
        setTouchEnd(e.changedTouches[0].clientX);
      }
    });
  }, []);

  useEffect(() => {
    if (touchStart < touchEnd && touchEnd - touchStart > 65) {
      setSwip(Swip.Right);
    } else if (touchStart > touchEnd && touchStart - touchEnd > 65) {
      setSwip(Swip.Left);
    } else {
      setSwip(Swip.None);
    }
  }, [touchEnd]);

  return swip;
};

export default useSwiper;

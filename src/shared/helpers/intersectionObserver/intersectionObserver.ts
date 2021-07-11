import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref: Element): boolean => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => setScrollPosition(window.pageYOffset));
    return () => {
      document.removeEventListener('scroll', () => setScrollPosition(window.pageYOffset));
    };
  }, []);

  useEffect(() => {
    const observer = new (IntersectionObserver as any)(([entry]: any) => {
      if (entry === undefined || entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      root: null,
      rootMargin: '-60px 0px -60px 0px',
      threshold: 1.0
    });

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.disconnect();
      }
    };
  }, [ref, scrollPosition]);
  return isVisible;
};

export default useIntersectionObserver;

import {
  MutableRefObject, useEffect, useState
} from 'react';

const useIntersectionObserver = (ref: Element): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = new (IntersectionObserver as any)(
    ([entry]: any) => setIntersecting(entry.isIntersecting)
  );

  useEffect(() => {
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.disconnect();
      }
    };
  }, [observer, ref]);

  return isIntersecting;
};

export default useIntersectionObserver;

// useEffect(() => {
//   const teste = new IntersectionObserver((resp: any) => console.log(resp), options);

//   if (testeref.current) {
//     teste.observe(testeref.current);
//   }

//   return () => {
//     if (testeref.current) {
//       teste.unobserve(testeref.current);
//     }
//   };
// }, [testeref, options]);

import {
  ReactElement, useRef
} from 'react';
import { Grid } from '@material-ui/core';
import useStyle from './ContainerCategorie.style';
import useIntersectionObserver from '../../helpers/intersectionObserver/intersectionObserver';
import { useFadeIn } from '../../styles/effects';

export interface IPropsContainer {
  title: string;
  children: Element | Element[] | any;
  color: string;
  id: string;
  customClass?: string;
}

const ContainerCategorie = ({
  title,
  children,
  id,
  customClass,
  color,
}: IPropsContainer): ReactElement => {
  const classNames = useStyle({ background: color });
  const ref = useRef<any>(null);
  const intersection = useIntersectionObserver(ref.current);
  const effect = useFadeIn();

  return (
    <Grid container={true} id={id} className={`${classNames.root} ${customClass}`}>
      <Grid item={true} component="h2" tabIndex={0} ref={ref} className={`${intersection ? effect.on : effect.off}`}>
        {title}
      </Grid>
      <Grid container={true} className={`${intersection ? effect.on : effect.off}`}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContainerCategorie;

import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import useStyle from './ContainerCategorie.style';

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

  return (
    <Grid container={true} id={id} className={`${classNames.root} ${customClass}`}>
      <Grid item={true} component="h2" tabIndex={0}>
        {title}
      </Grid>
      <Grid container={true}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContainerCategorie;

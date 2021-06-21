import React, { ReactElement } from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import useStyle from './ContainerCategorie.style';

export interface IPropsContainer {
  title: string;
  children: JSX.Element | JSX.Element[] | any;
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
      <Grid item={true} component="h2">
        {title}
      </Grid>
      <Grid container={true}>
        {children}
      </Grid>
    </Grid>
  );
};

export default ContainerCategorie;

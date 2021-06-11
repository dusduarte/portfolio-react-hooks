import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import ContainerMaterial from '../ContainerMaterial/ContainerMaterial';
import useStyle from './ContainerCategorie.style';

export interface IPropsContainer {
  title: string;
  children: JSX.Element | JSX.Element[];
  id?: string;
}

const ContainerCategorie = ({
  title,
  children,
  id,
}: IPropsContainer): ReactElement => {
  const classNames = useStyle();

  return (
    <ContainerMaterial id={id} className={classNames.root}>
      <Grid item={true} xs={12}>
        <div className={classNames.containerTitle}>
          <h2>{title}</h2>
          <div className={classNames.graphic}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </Grid>
      <ContainerMaterial className={classNames.containerGrids}>
        {children}
      </ContainerMaterial>
    </ContainerMaterial>
  );
};

export default ContainerCategorie;

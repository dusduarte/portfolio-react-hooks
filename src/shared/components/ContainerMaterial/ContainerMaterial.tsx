import React, { MutableRefObject, ReactElement } from 'react';
import {
  Grid,
  GridContentAlignment,
  GridItemsAlignment,
  GridJustification,
  GridSpacing,
} from '@material-ui/core';

export interface IPropsContainer {
  children: JSX.Element | JSX.Element[] | any;
  alignItems?: GridItemsAlignment;
  justify?: GridJustification;
  alignContent?: GridContentAlignment;
  className?: any;
  id?: string;
  spacing?: GridSpacing;
  ref?: MutableRefObject<any>;
}

const ContainerMaterial = ({
  children,
  alignItems,
  justify,
  alignContent,
  className,
  id,
  spacing,
}: IPropsContainer): ReactElement => (
  <Grid
    container={true}
    id={id}
    className={className}
    alignItems={alignItems}
    justify={justify}
    alignContent={alignContent}
    style={{ margin: 0, width: '100%' }}
    spacing={spacing}
  >
    {children}
  </Grid>
);

export default ContainerMaterial;

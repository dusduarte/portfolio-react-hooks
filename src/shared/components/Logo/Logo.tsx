import { Grid } from '@material-ui/core';
import React, { CSSProperties, ReactElement } from 'react';
import useStyle from './Logo.style';

interface IProps {
  style?: CSSProperties;
}

const Logo = ({ style }: IProps): ReactElement => {
  const classNames = useStyle();
  return (
    <Grid className={classNames.root} style={style}>
      <div>
        <label>Pedi,</label>
      </div>
      <div>
        <label>
          tá pronto?
        </label>
      </div>
    </Grid>
  );
};

export default Logo;

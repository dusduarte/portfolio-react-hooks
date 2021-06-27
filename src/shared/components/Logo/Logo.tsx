import { CSSProperties, ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import useStyle from './Logo.style';

interface IProps {
  style?: CSSProperties;
}

const Logo = ({ style }: IProps): ReactElement => {
  const classNames = useStyle();
  return (
    <Grid className={classNames.root} style={style} aria-label="Pedi, tá pronto?" tabIndex={0}>
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

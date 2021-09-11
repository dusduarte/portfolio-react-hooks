import { CSSProperties, ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import useStyle from './Logo.style';

interface IProps {
  style?: CSSProperties;
}

const Logo = ({ style }: IProps): ReactElement => {
  const classNames = useStyle();
  return (
    <Grid className={classNames.root} style={style} aria-label="Eduardo Stanisci" tabIndex={0}>
      <div>
        <label>Eduardo</label>
      </div>
      <div>
        <label>
          Stanisci
        </label>
      </div>
    </Grid>
  );
};

export default Logo;

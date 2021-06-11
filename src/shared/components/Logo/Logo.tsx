import React, { CSSProperties, ReactElement } from 'react';
import useStyle from './Logo.style';

interface IProps {
  style?: CSSProperties;
}

const Logo = ({ style }: IProps): ReactElement => {
  const classNames = useStyle();
  return (
    <div className={classNames.root} style={style}>
      <div className={classNames.containerDev}>
        <div>
          <label>DEV</label>
        </div>
      </div>
      <label>Descomplicado</label>
    </div>
  );
};

export default Logo;

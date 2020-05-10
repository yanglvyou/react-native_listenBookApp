/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const Iconfaxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.881 22.632c-270.647 0-490.05 219.403-490.05 490.051 0 270.647 219.403 490.051 490.05 490.051 270.647 0 490.05-219.403 490.05-490.051S782.529 22.632 511.881 22.632z m47.702 527.742L236.218 765.268 453.159 450.09l319.272-204.661-212.848 304.945z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M469.532 503.302a36 36 0 1 0 73.678 0 36 36 0 1 0-73.678 0z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconfaxian.defaultProps = {
  size: 18,
};

export default Iconfaxian;

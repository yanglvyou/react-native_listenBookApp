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

const Iconindex: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M 569.805 21.2736 a 82.0736 82.0736 0 0 0 -110.285 0 L 13.568 444.723 a 41.1392 41.1392 0 0 0 55.0912 61.1072 l 7.0912 -6.7328 V 941.056 a 82.2784 82.2784 0 0 0 82.2784 82.3808 h 239.437 v -247.706 a 57.9328 57.9328 0 0 1 57.9584 -58.0096 h 112.666 a 57.9328 57.9328 0 0 1 57.9584 58.0096 v 247.706 h 245.12 a 82.2784 82.2784 0 0 0 82.304 -82.3808 V 504.499 c 18.2784 16.5376 44.2112 15.2832 59.4176 -1.664 a 41.1392 41.1392 0 0 0 -2.9696 -58.112 L 569.805 21.2992 Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconindex.defaultProps = {
  size: 18,
};

export default Iconindex;

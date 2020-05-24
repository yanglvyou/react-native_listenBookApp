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

const Iconjian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M551.850667 472.149333h159.232v79.701334H312.917333v-79.701334H551.850667zM512 870.4a358.4 358.4 0 1 0 0-716.8 358.4 358.4 0 0 0 0 716.8z m0 79.616A438.016 438.016 0 1 1 512 73.984a438.016 438.016 0 0 1 0 876.032z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjian.defaultProps = {
  size: 18,
};

export default Iconjian;

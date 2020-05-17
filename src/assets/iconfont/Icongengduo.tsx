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

const Icongengduo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M300.5 106.81a60.78 60.78 0 0 1 86 0L705.69 426a121.56 121.56 0 0 1 0 171.91L386.46 917.19a60.78 60.78 0 0 1-86 0 60.78 60.78 0 0 1 0-86L588 543.74a44.88 44.88 0 0 0 0-63.47L300.5 192.76a60.78 60.78 0 0 1 0-85.95z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongengduo.defaultProps = {
  size: 18,
};

export default Icongengduo;

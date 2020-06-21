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

const Iconbofang1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M527.878341 991.360464a493.756793 493.756793 0 0 1-350.566265-145.131258 492.274781 492.274781 0 0 1-106.210816-157.551925 493.333361 493.333361 0 0 1-38.920441-192.979053 493.756793 493.756793 0 0 1 145.131257-350.530979 492.274781 492.274781 0 0 1 157.587211-106.210815 493.333361 493.333361 0 0 1 192.943768-38.920442 493.756793 493.756793 0 0 1 350.566264 145.131257 492.274781 492.274781 0 0 1 106.210816 157.551925 493.333361 493.333361 0 0 1 38.885155 193.01434 493.756793 493.756793 0 0 1-145.095971 350.495692 493.756793 493.756793 0 0 1-350.530978 145.131258z m0-942.700385c-246.472608 0-447.073434 200.600827-447.073435 447.073435 0 246.402036 200.600827 447.002862 447.073435 447.002862 246.437322 0 447.002862-200.565541 447.002862-447.038148 0-246.437322-200.565541-447.038148-447.038148-447.038149z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M411.187587 300.990161v388.780986l336.769444-194.425779z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconbofang1.defaultProps = {
  size: 18,
};

export default Iconbofang1;

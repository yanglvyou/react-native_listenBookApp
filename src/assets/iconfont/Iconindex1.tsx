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

const Iconindex1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M569.8048 21.2736a82.0736 82.0736 0 0 0-110.2848 0L13.568 444.7232a41.1392 41.1392 0 0 0 55.0912 61.1072l7.0912-6.7328V941.056a82.2784 82.2784 0 0 0 82.2784 82.3808h239.4368v-247.7056a57.9328 57.9328 0 0 1 57.9584-58.0096h112.6656a57.9328 57.9328 0 0 1 57.9584 58.0096v247.7056h245.12a82.2784 82.2784 0 0 0 82.304-82.3808V504.4992c18.2784 16.5376 44.2112 15.2832 59.4176-1.664a41.1392 41.1392 0 0 0-2.9696-58.112L569.8048 21.2992z"
        fill={getIconColor(color, 0, '#31c9b1')}
      />
    </Svg>
  );
};

Iconindex1.defaultProps = {
  size: 18,
};

export default Iconindex1;

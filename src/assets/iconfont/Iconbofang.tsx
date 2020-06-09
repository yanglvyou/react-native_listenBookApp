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

const Iconbofang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M963.347692 455.660308l0.157539-0.098462L400.679385 80.167385c-0.256-0.177231-0.512-0.354462-0.787693-0.531693l-1.772307-1.181538v0.039384a92.928 92.928 0 0 0-49.979077-14.51323c-51.613538 0-93.44 41.826462-93.44 93.44V905.058462c0.059077 51.613538 41.944615 93.400615 93.538461 93.341538a92.943754 92.943754 0 0 0 54.055385-17.329231l557.922461-370.530461-0.019692-0.019693c24.556308-15.655385 41.176615-42.791385 42.062769-74.082461 0.059077-1.732923 0.059077-3.465846 0-5.198769-0.157538-31.094154-15.458462-58.604308-38.912-75.579077z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbofang.defaultProps = {
  size: 18,
};

export default Iconbofang;

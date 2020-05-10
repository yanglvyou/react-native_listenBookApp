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

const Iconshoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M780.781 963.775c-12.045-0.516-23.746-3.442-34.414-8.948l-235.05-117.525-236.771 117.353c-24.263 12.733-53.687 10.668-75.884-5.334-22.37-16.691-33.554-44.739-28.908-72.27l48.696-253.118-186.182-173.62c-19.616-19.961-27.187-48.87-20.132-75.885 8.26-27.187 31.49-46.975 59.709-50.589l258.624-47.147 115.804-235.05C458.49 16.518 483.613 0.515 511.49 0c28.047 0 53.342 16.175 65.215 41.641l115.632 235.05 258.452 45.256c27.704 3.785 50.417 23.745 57.816 50.589 8.948 26.67 1.893 56.095-18.067 75.883L804.355 623.933l46.976 253.118c4.99 27.703-6.195 55.75-28.908 72.27a65.215 65.215 0 0 1-41.642 14.454z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshoucang.defaultProps = {
  size: 18,
};

export default Iconshoucang;

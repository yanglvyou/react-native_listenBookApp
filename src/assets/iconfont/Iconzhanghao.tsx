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

const Iconzhanghao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 19.456c-274.432 2.048-494.592 228.352-488.96 503.296 5.632 264.704 222.72 479.744 487.936 481.792 274.432 2.56 497.664-219.136 497.664-492.544-1.536-272.896-223.744-493.056-496.64-492.544m0 147.968c84.992 0.512 152.576 72.192 146.944 157.696-5.12 73.728-65.024 133.12-138.24 137.216C434.688 467.968 363.52 399.872 363.52 314.88c-1.024-80.384 63.488-146.944 143.872-147.968 1.536 0.512 3.072 0.512 4.608 0.512m0 699.392c-116.736-0.512-225.792-57.344-293.376-152.064-3.072-4.096-4.096-9.216-3.584-13.824 10.752-93.184 200.704-144.896 296.96-144.896 96.256 0 287.232 51.2 297.472 144.384 0.512 5.12-0.512 9.728-3.584 13.824-67.584 95.744-177.152 152.064-293.888 152.576"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconzhanghao.defaultProps = {
  size: 18,
};

export default Iconzhanghao;

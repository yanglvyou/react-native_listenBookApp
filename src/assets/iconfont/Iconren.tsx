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

const Iconren: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.04 605.09a302.545 302.545 0 1 0 0-605.09 302.545 302.545 0 0 0 0 605.09z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M999.37 924.905c-21.085-121.344-89.227-230.773-191.069-306.781a63.72 63.72 0 0 0-81.687 5.027c-57.437 54.923-135.634 85.783-217.135 85.783-81.547 0-159.697-30.86-217.18-85.783a61.905 61.905 0 0 0-81.688-5.027c-99.7 76.986-165.888 186.275-185.81 306.734a80.71 80.71 0 0 0 20.015 70.19c17.64 19.27 43.52 29.883 70.377 28.859h793.972a91.043 91.043 0 0 0 69.958-29.138c17.501-19.223 24.948-44.87 20.294-69.91z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconren.defaultProps = {
  size: 18,
};

export default Iconren;

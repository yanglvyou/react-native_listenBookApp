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

const Iconxiayishou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1004.373333 422.4L565.248 96.768c-32.938667-24.405333-79.36-0.853333-79.36 39.936v262.144L79.018667 96.938667C47.786667 73.557333 3.754667 94.037333 0 131.754667V793.6c3.413333 37.546667 47.786667 58.197333 79.018667 34.816l407.04-302.250667v262.144c0 40.96 46.592 64.341333 79.36 39.936l438.954666-325.802666c26.624-19.797333 26.624-60.074667 0-80.042667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiayishou.defaultProps = {
  size: 18,
};

export default Iconxiayishou;

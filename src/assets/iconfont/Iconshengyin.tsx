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

const Iconshengyin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333 298.667v426.666H640V298.667h85.333z m-341.333 0v426.666h-85.333V298.667H384z m-170.667 128v170.666H128V426.667h85.333z m682.667 0v170.666h-85.333V426.667H896z m-341.333-256v682.666h-85.334V170.667h85.334z"
        fill={getIconColor(color, 0, '#BFBFBF')}
      />
    </Svg>
  );
};

Iconshengyin.defaultProps = {
  size: 18,
};

export default Iconshengyin;

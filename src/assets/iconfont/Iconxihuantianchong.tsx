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

const Iconxihuantianchong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1126 1024" width={size} height={size} {...rest}>
      <Path
        d="M68.939826 151.565484a314.416672 314.416672 0 0 0 23.133141 418.745608l442.389416 442.389415a38.555236 38.555236 0 0 0 54.539062 0l442.389415-442.389415a314.416672 314.416672 0 0 0 15.422094-428.039718l-4.595988-5.055587a274.840105 274.840105 0 0 0-383.203298-20.784081L561.731914 201.508557 464.45016 116.431706a274.789039 274.789039 0 0 0-395.561401 35.133778z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxihuantianchong.defaultProps = {
  size: 18,
};

export default Iconxihuantianchong;

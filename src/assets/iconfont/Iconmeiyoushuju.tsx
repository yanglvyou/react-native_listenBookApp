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

const Iconmeiyoushuju: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M457 335.8v165.6l397.7 1.1V372.8z"
        fill={getIconColor(color, 0, '#CBCBCB')}
      />
      <Path
        d="M457 335.8V485l-321.5-32.7v-46.8z"
        fill={getIconColor(color, 1, '#B9B9B9')}
      />
      <Path
        d="M136.6 405.5v432.6l380.3 76.3V442.5z"
        fill={getIconColor(color, 2, '#D3D3D3')}
      />
      <Path
        d="M136.6 405.5l-74 160.4 380.3 76.3 74-199.7z"
        fill={getIconColor(color, 3, '#E9E9E9')}
      />
      <Path
        d="M855.8 375v432.6L516.9 914.4V442.5z"
        fill={getIconColor(color, 4, '#C9C9C9')}
      />
      <Path
        d="M855.8 375l103.5 168.8-338.8 106.8-103.6-208.1z"
        fill={getIconColor(color, 5, '#DDDDDD')}
      />
      <Path
        d="M618.8 90.7l53.1-19.5-4.7 89.8-30.6 8.9zM688.5 176.6l17.7 13.6L789 92.6l-61.5-29.2zM752.7 215.9l11.4 31.6 95.3-31.6-10.9-63.2z"
        fill={getIconColor(color, 6, '#E9E9E9')}
      />
    </Svg>
  );
};

Iconmeiyoushuju.defaultProps = {
  size: 18,
};

export default Iconmeiyoushuju;

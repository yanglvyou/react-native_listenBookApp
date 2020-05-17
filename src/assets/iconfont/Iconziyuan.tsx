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

const Iconziyuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1038 1024" width={size} height={size} {...rest}>
      <Path
        d="M1038.894545 651.636364A512 512 0 0 1 93.090909 747.054545v102.4H0v-279.272727h279.272727v93.090909H156.858182A418.909091 418.909091 0 0 0 941.149091 651.636364zM934.167273 151.272727v85.178182A512 512 0 0 0 11.636364 372.363636h97.745454A418.909091 418.909091 0 0 1 884.363636 337.454545h-136.378181v93.09091h279.272727v-279.272728z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconziyuan.defaultProps = {
  size: 18,
};

export default Iconziyuan;

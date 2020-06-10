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

const Iconshangyishou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M19.968 551.936l438.954667 325.802667c32.768 24.405333 79.36 1.024 79.36-39.936V575.658667l407.04 302.250666c31.232 23.381333 75.605333 2.730667 79.018666-34.816V181.248c-3.754667-37.717333-47.786667-58.197333-79.018666-34.816L538.453333 448.341333V186.197333c0-40.789333-46.421333-64.341333-79.36-39.936L19.968 471.893333c-26.624 19.968-26.624 60.245333 0 80.042667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshangyishou.defaultProps = {
  size: 18,
};

export default Iconshangyishou;

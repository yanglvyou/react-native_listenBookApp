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

const Iconshanchu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M799.2 874.4c0 34.4-28 62.4-62.368 62.4H287.2a62.496 62.496 0 0 1-62.4-62.4v-662.4h574.4v662.4z m-449.6-774.4c0-7.2 5.6-12.8 12.8-12.8H662.4c7.2 0 12.768 5.6 12.768 12.8V137.6H349.6V100z m636.8 37.6h-236.8V100C749.6 52 710.4 12.8 662.4 12.8h-300A87.392 87.392 0 0 0 275.2 100V137.6H37.6C16.8 137.6 0 154.4 0 175.2S16.8 212.8 37.6 212.8h112v661.6a137.6 137.6 0 0 0 137.6 137.6h449.6a137.6 137.6 0 0 0 137.6-137.6v-662.4h112C1007.2 212 1024 195.2 1024 174.4s-16.8-36.8-37.6-36.8zM512 824c20.8 0 37.6-16.8 37.6-37.6v-400c0-20.8-16.768-37.6-37.6-37.6-20.8 0-37.6 16.8-37.6 37.6v400c0 20.8 16.8 37.6 37.6 37.6m-175.2 0c20.8 0 37.6-16.8 37.6-37.6v-400c0-20.8-16.8-37.6-37.6-37.6s-37.6 16.8-37.6 37.6v400c0.8 20.8 17.6 37.6 37.6 37.6m350.4 0c20.8 0 37.632-16.8 37.632-37.6v-400c0-20.8-16.8-37.6-37.632-37.6-20.768 0-37.6 16.8-37.6 37.6v400c0 20.8 16.8 37.6 37.6 37.6"
        fill={getIconColor(color, 0, '#5f5f5f')}
      />
    </Svg>
  );
};

Iconshanchu.defaultProps = {
  size: 18,
};

export default Iconshanchu;

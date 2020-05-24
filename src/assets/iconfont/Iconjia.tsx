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

const Iconjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 66.048C266.24 66.048 66.048 266.24 66.048 512S266.24 957.952 512 957.952s445.952-200.192 445.952-445.952S757.76 66.048 512 66.048z m0 830.464c-211.968 0-384.512-172.544-384.512-384.512S300.032 127.488 512 127.488s384.512 172.544 384.512 384.512-172.544 384.512-384.512 384.512z"
        fill={getIconColor(color, 0, '#040000')}
      />
      <Path
        d="M748.032 481.28H542.72V275.968c0-16.896-13.824-30.72-30.72-30.72s-30.72 13.824-30.72 30.72V481.28H275.968c-16.896 0-30.72 13.824-30.72 30.72s13.824 30.72 30.72 30.72H481.28v205.312c0 16.896 13.824 30.72 30.72 30.72s30.72-13.824 30.72-30.72V542.72h205.312c16.896 0 30.72-13.824 30.72-30.72s-13.824-30.72-30.72-30.72z"
        fill={getIconColor(color, 1, '#040000')}
      />
    </Svg>
  );
};

Iconjia.defaultProps = {
  size: 18,
};

export default Iconjia;

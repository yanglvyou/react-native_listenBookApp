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

const Iconshijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1007.483871 217.352258L779.56129 26.095484l-63.917419 75.809032 227.922581 191.256774zM307.860645 101.904516L244.43871 26.095484 16.516129 216.856774 80.433548 292.665806zM536.774194 330.322581H462.451613v297.290322l235.354839 141.212903 37.16129-60.944516-198.193548-117.429677z"
        fill={getIconColor(color, 0, '#EB2F32')}
      />
      <Path
        d="M512 132.129032c246.255484 0 445.935484 199.68 445.935484 445.935484S758.255484 1024 512 1024C265.249032 1024 66.064516 824.32 66.064516 578.064516S265.744516 132.129032 512 132.129032z m0 832.412903c213.652645 0 386.477419-172.824774 386.477419-386.477419 0-213.652645-172.824774-386.477419-386.477419-386.477419-213.652645 0-386.477419 172.824774-386.477419 386.477419 0 213.652645 172.824774 386.477419 386.477419 386.477419z"
        fill={getIconColor(color, 1, '#EB2F32')}
      />
    </Svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

export default Iconshijian;

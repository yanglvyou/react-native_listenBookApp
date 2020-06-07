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

const IconarrowDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M994.97073778 312.78307555c15.74570667-16.37262222 15.23825778-42.40952889-1.13664-58.15523555-16.37262222-15.74684445-42.40952889-15.23825778-58.15523556 1.13664L514.25735111 681.03964445 86.94556445 257.56444445c-16.14279111-16.00625778-42.20245333-15.89475555-58.21098667 0.24917333-16.00512 16.14165333-15.89361778 42.20245333 0.25031111 58.20984889L483.12661333 766.08853333c0.69632 0.70656 1.60426667 0.87267555 2.29831112 1.52462222 0.15473778 0.15473778 0.19797333 0.36408889 0.36408888 0.5279289l0.00910222 0.00796444c16.12686222 15.99032889 42.16035555 15.87655111 58.15182223-0.25031111l450.09806222-454.18609778c0.31402667-0.30264889 0.62122667-0.6144 0.9216-0.92956445z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconarrowDown.defaultProps = {
  size: 18,
};

export default IconarrowDown;

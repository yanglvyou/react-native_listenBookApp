/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconfaxian from './Iconfaxian';
import Iconiconfontxingxing from './Iconiconfontxingxing';
import Iconzhanghao from './Iconzhanghao';
import Iconren from './Iconren';
import Iconshoucang from './Iconshoucang';
import Iconyemian from './Iconyemian';
import Iconyemian1 from './Iconyemian1';
import Iconindex from './Iconindex';
import Iconindex1 from './Iconindex1';

export type IconNames = 'iconfaxian' | 'iconiconfontxingxing' | 'iconzhanghao' | 'iconren' | 'iconshoucang' | 'iconyemian' | 'iconyemian1' | 'iconindex' | 'iconindex1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconfaxian':
      return <Iconfaxian {...rest} />;
    case 'iconiconfontxingxing':
      return <Iconiconfontxingxing {...rest} />;
    case 'iconzhanghao':
      return <Iconzhanghao {...rest} />;
    case 'iconren':
      return <Iconren {...rest} />;
    case 'iconshoucang':
      return <Iconshoucang {...rest} />;
    case 'iconyemian':
      return <Iconyemian {...rest} />;
    case 'iconyemian1':
      return <Iconyemian1 {...rest} />;
    case 'iconindex':
      return <Iconindex {...rest} />;
    case 'iconindex1':
      return <Iconindex1 {...rest} />;
  }

  return null;
};

export default IconFont;

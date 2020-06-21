/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconbofang1 from './Iconbofang1';
import Iconshanchu from './Iconshanchu';
import Iconshangyishou from './Iconshangyishou';
import Iconxiayishou from './Iconxiayishou';
import Iconzantingtingzhi from './Iconzantingtingzhi';
import Iconbofang from './Iconbofang';
import IconarrowDown from './IconarrowDown';
import Iconshijian from './Iconshijian';
import Iconjia from './Iconjia';
import Iconjian from './Iconjian';
import Iconmeiyoushuju from './Iconmeiyoushuju';
import Iconshengyin from './Iconshengyin';
import IconiconTest from './IconiconTest';
import Iconshengyin1 from './Iconshengyin1';
import Iconxihuan from './Iconxihuan';
import Iconxihuantianchong from './Iconxihuantianchong';
import Iconziyuan from './Iconziyuan';
import Icongengduo from './Icongengduo';
import Iconfaxian from './Iconfaxian';
import Iconiconfontxingxing from './Iconiconfontxingxing';
import Iconzhanghao from './Iconzhanghao';
import Iconren from './Iconren';
import Iconshoucang from './Iconshoucang';
import Iconyemian from './Iconyemian';
import Iconyemian1 from './Iconyemian1';
import Iconindex from './Iconindex';
import Iconindex1 from './Iconindex1';

export type IconNames = 'iconbofang1' | 'iconshanchu' | 'iconshangyishou' | 'iconxiayishou' | 'iconzantingtingzhi' | 'iconbofang' | 'iconarrow-down' | 'iconshijian' | 'iconjia' | 'iconjian' | 'iconmeiyoushuju' | 'iconshengyin' | 'iconicon-test' | 'iconshengyin1' | 'iconxihuan-' | 'iconxihuantianchong' | 'iconziyuan' | 'icongengduo' | 'iconfaxian' | 'iconiconfontxingxing' | 'iconzhanghao' | 'iconren' | 'iconshoucang' | 'iconyemian' | 'iconyemian1' | 'iconindex' | 'iconindex1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'iconbofang1':
      return <Iconbofang1 {...rest} />;
    case 'iconshanchu':
      return <Iconshanchu {...rest} />;
    case 'iconshangyishou':
      return <Iconshangyishou {...rest} />;
    case 'iconxiayishou':
      return <Iconxiayishou {...rest} />;
    case 'iconzantingtingzhi':
      return <Iconzantingtingzhi {...rest} />;
    case 'iconbofang':
      return <Iconbofang {...rest} />;
    case 'iconarrow-down':
      return <IconarrowDown {...rest} />;
    case 'iconshijian':
      return <Iconshijian {...rest} />;
    case 'iconjia':
      return <Iconjia {...rest} />;
    case 'iconjian':
      return <Iconjian {...rest} />;
    case 'iconmeiyoushuju':
      return <Iconmeiyoushuju {...rest} />;
    case 'iconshengyin':
      return <Iconshengyin {...rest} />;
    case 'iconicon-test':
      return <IconiconTest {...rest} />;
    case 'iconshengyin1':
      return <Iconshengyin1 {...rest} />;
    case 'iconxihuan-':
      return <Iconxihuan {...rest} />;
    case 'iconxihuantianchong':
      return <Iconxihuantianchong {...rest} />;
    case 'iconziyuan':
      return <Iconziyuan {...rest} />;
    case 'icongengduo':
      return <Icongengduo {...rest} />;
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

import React, {useRef, useEffect, useState} from 'react';
import {Text, Animated, Easing, View} from 'react-native';
import BarrageItem from './BarrageItem'



export interface Message {
  id: number;
  title: string;
}

interface IProps {
  data: Message[];
}

interface IState {
  data: Message[];
  list: Message[];
}

const Barrage: React.FC<IProps> = (props) => {
  const {data: propsData} = props;
  console.log('propsData: ', propsData);
  const [data, setData] = useState(propsData);
  const [list, setList] = useState(propsData);
  console.log('list: ', list);

  useEffect(() => {
    setData(propsData);
    setList(list.concat(propsData));
  }, [propsData !== data]);

  const renderItem = (item: Message, index: number) => {
    return <BarrageItem key={item.id} data={item} />;
  };

  return <View>{list.map(renderItem)}</View>;
};

export default Barrage;

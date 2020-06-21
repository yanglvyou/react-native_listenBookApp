import React, {FunctionComponent, useState, useEffect} from 'react';
import {View, Text, Button, FlatList, ListRenderItemInfo} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import {useDispatch} from 'react-redux';
import {IFound} from '@/models/found';
import Item from './Item';
import { useFocusEffect } from '@react-navigation/native';

interface IProps {
  navigation: RootStackNavigation;
}

const Found: React.FC<IProps> = (props) => {
  const [list, setList] = useState([]);
  const {navigation} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'found/fetchList',
      callback: (data: IFound[]) => {
        console.log('data: ', data,2222222222);
        setList(data);
      },
    });
  }, []);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch({
  //       type: 'found/fetchList',
  //       callback: (data: IFound[]) => {
  //         console.log('data: ', data,2222222222);
  //         setList(data);
  //       },
  //     });
  //   }, [])
  // );

  const renderItem=({item}: ListRenderItemInfo<IFound>)=> {
    return <Item data={item} />
  }
  return <FlatList data={list} renderItem={renderItem} />;
};

export default Found;

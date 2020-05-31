import React from 'react';
import {View, Text, FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/models/index';
import { IProgram } from '@/models/album';

interface IProps{

}

const List:React.FC<IProps> = () => {
    const { list} = useSelector(({album}:RootState)=>album)

    function _renderItem({item,index}:ListRenderItemInfo<IProgram>){
        return (
        <Text>{item.title}</Text>
        )
    }

    function _keyExtractor(item:IProgram){
       return item.id
    }



  return (
   <FlatList data={list} renderItem={_renderItem} keyExtractor={_keyExtractor} />
  );
};

export default List;

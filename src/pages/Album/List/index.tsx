import React from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  Alert,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@/models/index';
import {IProgram} from '@/models/album';
import Item from './Item';

interface IProps {}

const List: React.FC<IProps> = () => {
  const {list} = useSelector(({album}: RootState) => album);
   function onPress(data:IProgram){
     Alert.alert('节目');
   }
  function _renderItem({item, index}: ListRenderItemInfo<IProgram>) {
    return <Item data={item} index={index} onPress={()=>{onPress(item)}}></Item>;
  }

  function _keyExtractor(item: IProgram) {
    return item.id;
  }

  return (
    <FlatList
      style={styles.container}
      data={list}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  );
};

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  }
})

export default List;

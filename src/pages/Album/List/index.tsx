import React from 'react';
import {
  View,
  Text,
  Animated,
  ListRenderItem,
  ListRenderItemInfo,
  Alert,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@/models/index';
import {IProgram} from '@/models/album';
import Item from './Item';
import {NativeViewGestureHandler, PanGestureHandler, TapGestureHandler} from 'react-native-gesture-handler';

export interface ITabProps {
  panRef:React.RefObject<PanGestureHandler>,
  tapRef:React.RefObject<TapGestureHandler>,
  nativeRef:React.RefObject<NativeViewGestureHandler>,
  onScrollDrag:(event:NativeSyntheticEvent<NativeScrollEvent>)=> void,
  onItemPress:(data:IProgram,index:number)=>void;
}

const List: React.FC<ITabProps> = (props) => {
  const {panRef,tapRef,nativeRef,onScrollDrag,onItemPress} =props
  const {list} = useSelector(({album}: RootState) => album);
  function onPress(data: IProgram,index:number) {
    onItemPress(data,index)
  }
  function _renderItem({item, index}: ListRenderItemInfo<IProgram>) {
    return (
      <Item
        data={item}
        index={index}
        onPress={() => {
          onPress(item,index);
        }}></Item>
    );
  }

  function _keyExtractor(item: IProgram) {
    return item.id;
  }

  return (
    <NativeViewGestureHandler simultaneousHandlers={panRef} waitFor={tapRef} ref={nativeRef}>
      <Animated.FlatList
        style={styles.container}
        data={list}
        onScrollBeginDrag={onScrollDrag}
        onScrollEndDrag={onScrollDrag}
        bounces={false}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
      />
    </NativeViewGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default List;

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Image,
} from 'react-native';
import {RootStackNavigation} from '@/navigator/index';
import realm, {IProgram} from '@/config/realm';
import IconFont from '@/assets/iconfont';
import {formatTime} from '../utils';
import Touchable from '@/components/Touchable';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

interface IProps {
  navigation: RootStackNavigation;
}

const Listen = () => {
  const [programs,setPrograms]=useState(realm.objects<IProgram>('Program'));
  useFocusEffect(
    React.useCallback(() => {
       const programs = realm.objects<IProgram>('Program');
       setPrograms(programs);
    }, []),
  );

  function deletePress(item: IProgram) {
    realm.write(() => {
      const program = realm.objects('Program').filtered(`id='${item.id}'`);
      realm.delete(program);
      const programs = realm.objects<IProgram>('Program');
      setPrograms(programs);
    });
  }
  const __renderItem = ({item}: ListRenderItemInfo<IProgram>) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.thumbnailUrl}} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.time}>
            <IconFont name="iconshijian" size={14} />
            <Text style={styles.timeTxt}>{formatTime(item.duration)}</Text>
            <Text style={styles.rates}>已播:{item.rate}%</Text>
          </View>
        </View>
        <Touchable
          style={styles.deleteBtn}
          onPress={() => {
            deletePress(item);
          }}>
          <IconFont name="iconshanchu" size={20} />
        </Touchable>
      </View>
    );
  };

  function empty(){
    return (
      <View style={styles.empty}>
        <IconFont name="iconmeiyoushuju" size={80} />
        <Text style={styles.emptyTxt}>暂无数据</Text>
      </View>
    )
  }

  return <FlatList data={programs} renderItem={__renderItem} ListEmptyComponent={empty()} />;
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 3,
    margin: 5,
  },
  title: {
    color: '#999',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeTxt: {
    color: '#999',
    marginLeft: 5,
  },
  rates: {
    marginLeft: 20,
    color: '#999',
  },
  deleteBtn: {
    padding: 10,
    justifyContent: 'center',
  },
  empty:{
    marginTop:250,
    justifyContent:'center',
    alignItems:'center',
  },
  emptyTxt:{
    color:'#999'
  }
});

export default Listen;

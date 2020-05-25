import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {DragSortableView} from 'react-native-drag-sort';
// import DraggableFlatList from 'react-native-draggable-flatlist'
import {useNavigation, useIsFocused, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import {CategoryModelState, ICategory} from '@/models/category';
import {RootState} from '@/models/index';
import Item, {parentWidth, itemHeight, marginTop} from './Item';
import {RootStackNavigation} from '@/navigator/index';
import HeaderRightBtn from './HeaderRightBtn';
import Touchable from '@/components/Touchable';
import {itemWidth} from 'styles/SliderEntry.style';

interface IProps extends CategoryModelState {
  navigation: RootStackNavigation;
}

interface IState {
  myCategorys: ICategory[];
}

const fixedItems = [0, 1];

const Category: React.FC<IProps> = () => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const {myCategorys, categorys, isEdit} = useSelector(
    ({category}: RootState) => category,
  );

  const onSubmit = () => {
    dispatch({
      type: 'category/toggleEditBtn',
    });
  };
  const classifyGroup = _.groupBy(categorys, (item) => item.classify);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRightBtn onSubmit={onSubmit} />,
    });
  }, [navigation, route]);

  function onLongPress() {
    dispatch({
      type: 'category/setState',
      payload: {
        isEdit: true,
      },
    });
  }

  function onPress(item: ICategory, index: number, selected: boolean) {
    const disabled = fixedItems.indexOf(index) > -1;
    if (disabled) return;
    if (isEdit) {
      if (selected) {
        dispatch({
          type: 'category/setState',
          payload: {
            myCategorys: myCategorys.filter(
              (selectedItem) => selectedItem.id !== item.id,
            ),
          },
        });
        return;
      }
      dispatch({
        type: 'category/setState',
        payload: {myCategorys: myCategorys.concat([item])},
      });
    }
  }

  useEffect(() => {
    if (!isFocused) {
      dispatch({
        type: 'category/setState',
        payload: {
          isEdit: false,
        },
      });
    }
  }, [!isFocused]);

  const _renderItem = (item: ICategory, index: number) => {
    const disabled = fixedItems.indexOf(index) > -1;
    return <Item data={item} isEdit={isEdit} selected disabled={disabled} />;
  };

  const _renderUnSelected = (item: ICategory, index: number) => {
    return (
      <Touchable
        key={item.id}
        onPress={() => {
          onPress(item, index, false);
        }}
        onLongPress={onLongPress}>
        <Item data={item} isEdit={isEdit} selected={false} />
      </Touchable>
    );
  };

  const onDataChange = (data: ICategory) => {
    dispatch({
      type: 'category/setState',
      payload: {
        myCategorys: data,
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.classifyName}>我的分类</Text>
      <View style={styles.classifyDragView}>
        <DragSortableView
          dataSource={myCategorys}
          renderItem={_renderItem}
          sortable={isEdit}
          keyExtractor={(item) => item.id}
          onDataChange={() => {
            onDataChange;
          }}
          parentWidth={parentWidth}
          childrenWidth={itemWidth}
          childrenHeight={itemHeight}
          marginChildrenTop={marginTop}
        />
      </View>
      <View>
        {Object.keys(classifyGroup).map((classify) => {
          return (
            <View key={classify}>
              <Text style={styles.classifyName}>{classify}</Text>
              <View style={styles.classifyView}>
                {classifyGroup[classify].map((item, index) => {
                  if (
                    myCategorys.find(
                      (selectedItem) => selectedItem.id === item.id,
                    )
                  ) {
                    return null;
                  }
                  return _renderUnSelected(item, index);
                })}
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f6',
  },
  classifyName: {
    fontSize: 16,
    marginTop: 14,
    marginBottom: 8,
    marginLeft: 10,
  },
  classifyView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  classifyDragView:{
    flexDirection: 'row',
    flexWrap:'wrap',
    padding: 5,
  }
});

export default Category;

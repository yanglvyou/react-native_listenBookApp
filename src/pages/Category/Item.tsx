import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {viewportWidth} from '@/utils/index';
import {ICategory} from '@/models/category';
import IconFont from '@/assets/iconfont';

interface IProps {
  isEdit: boolean;
  selected: boolean;
  data: ICategory;
  disabled?: boolean;
}

export const parentWidth = viewportWidth - 10;
export const itemWidth = parentWidth / 4;

export const itemHeight = 48;

export const marginTop=5;

const Item: React.FC<IProps> = (props) => {
  const {data, isEdit, selected, disabled} = props;
  return (
    <View key={data.id} style={styles.itemWrapper}>
      <View style={[styles.item, disabled && styles.disabled]}>
        <Text>{data.name}</Text>
        {isEdit && !disabled && (
          <View style={styles.icon}>
            {selected && !disabled ? (
              <IconFont name="iconjian" size={20} color="#fff"></IconFont>
            ) : (
              <IconFont name="iconjia" size={20} color="#fff"></IconFont>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    width: itemWidth,
    height: 48,
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  icon: {
    position: 'absolute',
    top: -5,
    right: -5,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f86442',
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: '#eee',
  },
});

export default Item;

import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {RootState} from '@/models/index';

interface IProps {
  onSubmit: () => void;
}

const HeaderRightBtn: React.FC<IProps> = (props) => {
  const {onSubmit} = props;
  const {isEdit }= useSelector(({category}: RootState) => category);
  return (
    <HeaderButtons>
      <Item
        title={isEdit ? '完成' : '编辑'}
        onPress={() => {
          onSubmit();
        }}></Item>
    </HeaderButtons>
  );
};

export default HeaderRightBtn;

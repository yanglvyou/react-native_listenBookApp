import React, {useMemo} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const Touchable: React.FC<TouchableOpacityProps> = React.memo((props) => {
  return <TouchableOpacity activeOpacity={0.8} {...props}></TouchableOpacity>;
});

export default Touchable;

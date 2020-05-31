import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '@/models/index';

const Introduction = () => {
  const {introduction} = useSelector(({album}: RootState) => album);
  return (
    <View style={styles.container}>
      <Text style={styles.introduction}>{introduction}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  introduction: {
    fontSize: 16,
  },
});

export default Introduction;

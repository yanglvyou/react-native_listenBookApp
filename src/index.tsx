import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {url} from '@/utils/index';

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text>少时诵诗书所</Text>
        <Text>{url}</Text>
      </View>
    </SafeAreaView>
  );
}

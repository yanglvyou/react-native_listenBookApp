import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, View, Text} from 'react-native';
import {url} from '@/utils/index';

export default function Index() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>少时诵诗书所33333113444444</Text>
          <Text>{url}</Text>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}

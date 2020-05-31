import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {TabView, TabBar, SceneRendererProps} from 'react-native-tab-view';
import Introduction from './Introduction';
import List from './List/index';

interface IRoute {
  key: string;
  title: string;
}

interface IState {
  routes: IRoute[];
  index: number;
}

interface IProps {
  routes: IRoute[];
  index: number;
}

const Tab: React.FC<IProps> = () => {
  const [tabIndex, setTabIndex] = React.useState(1);
  function onIndexChange(index: number) {
    setTabIndex(index);
  }

  function _renderScene({route}: {route: IRoute}) {
    switch (route.key) {
      case 'introduction':
        return <Introduction />;
      case 'albums':
        return <List />;
    }
  }

  function renderTabBar(props: SceneRendererProps & {navigationState: IState}) {
    return (
      <TabBar
        {...props}
        scrollEnabled
        tabStyle={styles.tabStyle}
        labelStyle={styles.labelStyle}
        style={styles.tabBar}
        indicatorStyle={styles.indicator}
      />
    );
  }

  return (
    <TabView
      navigationState={{
        routes: [
          {key: 'introduction', title: '简介'},
          {key: 'albums', title: '节目'},
        ],
        index: tabIndex,
      }}
      onIndexChange={onIndexChange}
      renderTabBar={renderTabBar}
      renderScene={_renderScene}></TabView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    width: 80,
  },
  labelStyle: {
    color: '#333',
  },
  tabBar: {
    backgroundColor: '#fff',
    ...Platform.select({
        android:{
            elevation:0,
            borderBottomColor:'#e3e3e3',
            borderBottomWidth:StyleSheet.hairlineWidth,
        }
    })
  },
  indicator: {
    backgroundColor: '#eb6d48',
    borderLeftWidth:25,
    borderRightWidth:25,
    borderColor:'#fff',
  },
});

export default Tab;

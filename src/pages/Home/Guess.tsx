import React, {useEffect, FunctionComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  useSelector,
  shallowEqual,
  ConnectedProps,
  useDispatch,
  connect,
} from 'react-redux';
import IconFont from '@/assets/iconfont';
import {RootState} from '@/models/index';
import {RootStackNavigation} from '@/navigator/index';
import {IGuess} from '@/models/home';
import Touchable from '@/components/Touchable';

const mapStateToProps = ({home}: RootState) => ({
  guess: home.guess,
});

const connector = connect(mapStateToProps);

type ModelState = ConnectedProps<typeof connector>;

interface IProps extends ModelState {
  namespace: string;
  onPress: (data: IGuess) => void;
}

class Guess extends React.Component<IProps> {
  changeBatch = () => {
    const {dispatch, namespace} = this.props;
    dispatch({
      type: namespace + '/fetchGuess',
    });
  };

  _keyExtractor = (item: IGuess) => {
    return item.id;
  };

  _renderItem = ({item}: {item: IGuess}) => {
    const {onPress} = this.props;
    return (
      <Touchable
        onPress={() => {
          onPress(item);
        }}
        style={styles.item}>
        <Image source={{uri: item.image}} style={styles.image}></Image>
        <Text numberOfLines={2}>{item.title}</Text>
      </Touchable>
    );
  };
  render() {
    const {guess} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.guessLike}>
            <IconFont name="iconxihuantianchong" color="#f86442"></IconFont>
            <Text style={styles.guessLikeTitle}>猜你喜欢</Text>
          </View>
          <View style={styles.more}>
            <Text style={styles.moreTitle}>更多</Text>
            <IconFont name="icongengduo"></IconFont>
          </View>
        </View>
        <FlatList
          numColumns={3}
          data={guess}
          renderItem={this._renderItem}
          style={styles.flatList}
          keyExtractor={this._keyExtractor}
        />
        <Touchable onPress={this.changeBatch} style={styles.change}>
          <IconFont name="iconziyuan" color="#f86442"></IconFont>
          <Text style={styles.changeText}>換一批</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 8,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  item: {
    flex: 1,
    marginVertical: 6,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  guessLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guessLikeTitle: {
    fontSize: 16,
    marginLeft: 5,
  },
  moreTitle: {
    fontSize: 16,
  },
  change: {
    paddingBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeText: {
    marginLeft: 5,
  },

  flatList: {
    padding: 10,
  },
});

export default connector(Guess);

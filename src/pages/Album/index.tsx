import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useHeaderHeight} from '@react-navigation/stack';
import {RootState} from '@/models/index';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/navigator/index';
import coverRight from '@/assets/cover-right.png';
import Tab from './Tab';

interface IProps {
  headerHeight: number;
  state: RootState;
  route: RouteProp<RootStackParamList, 'Album'>;
}

const Album: React.FC<IProps> = (props) => {
  const {route} = props;
  const {summary, list, introduction, author} = useSelector(
    ({album}: RootState) => album,
  );
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight();
  const dispatch = useDispatch();
  const {id} = route.params.item;

  useEffect(() => {
    dispatch({
      type: 'album/fetchAlbum',
      payload: {
        id,
      },
    });
  }, [navigation, route]);

  function renderHeader() {
    const {image, title} = route.params.item;
    return (
      <View style={[styles.header, {paddingTop: headerHeight}]}>
         <Image source={{uri:image}} style={styles.backgroundImage}></Image>
         <BlurView blurType='light' blurAmount={5} style={StyleSheet.absoluteFillObject}></BlurView>
        <View style={styles.leftView}>
          <Image source={{uri: image}} style={styles.thumbnail}></Image>
          <Image source={coverRight} style={styles.coverRight}></Image>
        </View>
        <View style={styles.rightView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.summary}>
            <Text numberOfLines={1} style={styles.summaryText}>{summary}</Text>
          </View>
          <View style={styles.author}>
            <Image source={{uri: author.avatar}} style={styles.avatar}></Image>
            <Text style={styles.name}>{author.name}</Text>
          </View>
        </View>
      </View>
    );
  }

  return <View style={styles.container}>{renderHeader()}
    <Tab />
  </View>;
};

const styles = StyleSheet.create({
  container:{
   flex:1,
  },
  header: {
    height: 260,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: 20,
  },
  backgroundImage:{
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'#eee',
  },
  leftView: {
    marginRight: 26,
  },
  thumbnail: {
    width: 98,
    height: 98,
    borderColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title:{
    color:'#fff',
    fontSize:18,
    fontWeight:'900',
  },
  coverRight: {
    height: 98,
    position: 'absolute',
    right: -23,
    resizeMode:'contain',
  },
  rightView: {
    flex: 1,
  },
  summary: {
    backgroundColor: 'rgba(0,0,0,.3)',
    padding: 10,
    marginVertical: 10,
    borderRadius: 4,
  },
  summaryText:{
   color:'#fff',
  },
  name:{
    color:'#fff',
  },
  avatar: {
    width: 26,
    height: 26,
    borderRadius: 13,
    marginRight:8,
    backgroundColor:'#eee',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Album;

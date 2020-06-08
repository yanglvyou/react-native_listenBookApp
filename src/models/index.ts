import {DvaLoadingState} from 'dva-loading-ts';
import player from './player';
import home from './home';
import category from './category';
import album from './album';
const models = [home, category,album,player];
export type RootState = {
  home: typeof home.state;
  category: typeof category.state;
  album: typeof album.state;
  player:typeof player.state;
  loading: DvaLoadingState;
} & {
  [key: string]: typeof home.state;
};

export default models;

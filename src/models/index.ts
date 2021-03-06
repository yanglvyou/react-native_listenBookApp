import {DvaLoadingState} from 'dva-loading-ts';
import player from './player';
import home from './home';
import category from './category';
import album from './album';
import found from './found';
const models = [home, category,album,player,found];
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

import {Model, Effect} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';

const ALBUM_URL = '/mock/11/yang/album/list';

//节目
export interface IProgram {
  id: string;
  title: string;
  playVolume: number;
  duration: string;
  date: string;
}

export interface IAuthor {
  name: string;
  avatar: string;
}

interface IAlbumModelState {
  id: string;
  title: string;
  summary: string;
  thumbnailUrl: string;
  introduction: string;
  author: IAuthor;
  list: IProgram[];
}

interface AlbumModel extends Model {
  namespace: 'album';
  state: IAlbumModelState;
  effects: {
    fetchAlbum: Effect;
  };
  reducers: {
    setState: Reducer<IAlbumModelState>;
    resetState: Reducer;
  };
}

const initialState: IAlbumModelState = {
  id: '',
  thumbnailUrl: '',
  title: '',
  summary: '',
  list: [],
  introduction: '',
  author: {
    name: '',
    avatar: '',
  },
};

const albumModel: AlbumModel = {
  namespace: 'album',
  state: initialState,
  effects: {
    *fetchAlbum(_, {call, put}) {
      const {data} = yield call(axios.get, ALBUM_URL);
      yield put({type: 'setState', payload: data});
    },
  },
  reducers: {
    setState(state = initialState, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
    resetState(state = initialState,{payload}) {
      return {...state, ...initialState};
    },
  },
};

export default albumModel;

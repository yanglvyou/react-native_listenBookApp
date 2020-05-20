import {RootState} from '@/models/index';
import {Model, Effect} from 'dva-core-ts';
import axios from 'axios';
import {Reducer} from 'redux';
const CAROUSEL_URL = 'mock/11/yang/carousel';
const GUESS_URL = 'mock/11/yang/guess';
const CHANNEL_URL = 'mock/11/yang/channel';
export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface IGuess {
  id: string;
  image: string;
  title: string;
}

export interface IChannel {
  id: string;
  image: string;
  title: string;
  remark: string;
  played: number;
  playing: number;
}
export interface IPagination {
  current: number;
  total: number;
  hasMore: boolean;
}
export interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
  activeCarouselIndex:number;//当前轮播图下标
  gradientVisible:boolean,
  channels: IChannel[];
  pagination: IPagination;
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
    fetchGuess: Effect;
    fetchChannels: Effect;
  };
}

const initialState: HomeState = {
  carousels: [],
  guess: [],
  channels: [],
  activeCarouselIndex:0,
  gradientVisible:true,
  pagination: {
    current: 1,
    total: 0,
    hasMore: true,
  },
};

const homeModel: HomeModel = {
  namespace: 'home',
  state: initialState,
  reducers: {
    setState(state = initialState, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    *fetchCarousels({payload}, {call, put}) {
      const {carouselList} = yield call(axios.get, CAROUSEL_URL);
      yield put({
        type: 'setState',
        payload: {
          carousels: carouselList,
        },
      });
    },
    *fetchGuess({payload}, {call, put, select}) {
      const {data} = yield call(axios.get, GUESS_URL);

      yield put({type: 'setState', payload: {guess: data}});
    },
    *fetchChannels({payload,callback}, {call, put, select}) {
      const {channels, pagination} = yield select(
        (state: RootState) => state.home,
      );
      let page = 1;
      if (payload && payload.loadMore) {

        page = pagination.current + 1;
      }
      const {data} = yield call(axios.get, CHANNEL_URL, {
        params: {
          page,
        },
      });

      let newChannels = data.results;
      if (payload && payload.loadMore) {
        newChannels = channels.concat(newChannels);
      }
      yield put({
        type: 'setState',
        payload: {channels: newChannels, pagination: {
          current:data.pagination.current,
          total:data.pagination.total,
          hasMore:newChannels.length < data.pagination.total,
        }},
      });

      if(typeof callback ==='function'){
        callback();
      }
    },
  },
};

export default homeModel;

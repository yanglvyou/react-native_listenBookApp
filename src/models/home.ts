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

export interface HomeState {
  carousels: ICarousel[];
  guess: IGuess[];
  channels: IChannel[];
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
    *fetchGuess({payload}, {call, put}) {
      const {data} = yield call(axios.get, GUESS_URL);
      yield put({type: 'setState', payload: {guess: data}});
    },
    *fetchChannels(_, {call, put}) {
      const {data} = yield call(axios.get, CHANNEL_URL);
      yield put({type: 'setState', payload: {channels: data.results}});
    },
  },
};

export default homeModel;

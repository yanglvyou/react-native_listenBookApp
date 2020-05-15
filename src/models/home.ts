import {Model, Effect} from 'dva-core-ts';
import axios from 'axios';
import {Reducer} from 'redux';
const CAROUSEL_URL = 'mock/11/yang/carousel';
export interface ICarousel {
  id: string;
  image: string;
  colors: [string, string];
}

export interface HomeState {
  carousels: ICarousel[];
}

interface HomeModel extends Model {
  namespace: 'home';
  state: HomeState;
  reducers: {
    setState: Reducer<HomeState>;
  };
  effects: {
    fetchCarousels: Effect;
  };
}

const initialState = {
  carousels: [],
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
      console.log('carouselList: ', carouselList);
      yield put({
        type: 'setState',
        payload: {
          carousels: carouselList,
        },
      });
    },
  },
};

export default homeModel;

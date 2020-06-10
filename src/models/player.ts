import {RootState} from '@/models/index';
import {Reducer} from 'redux';
import {Effect, Model, EffectWithType, EffectsCommandMap} from 'dva-core-ts';
import axios from 'axios';
import {
  play,
  init,
  pause,
  getCurrentTime,
  getDuration,
  stop,
  initPlayer,
} from '@/config/sound';

const SHOW_URL = 'mock/11/yang/show';

export interface PlayerModelState {
  id: string;
  soundUrl: string;
  playState: string;
  currentTime: number;
  duration: number;
  previousId: string;
  nextId: string;
  sounds: {id: string; title: string}[];
}

export interface PlayerModel extends Model {
  namespace: 'player';
  state: PlayerModelState;
  reducers: {
    setState: Reducer<PlayerModelState>;
  };
  effects: {
    fetchShow: Effect;
    play: Effect;
    pause: Effect;
    previous: Effect;
    next: Effect;
    watcherCurrentTime: EffectWithType;
  };
}

const initialState: PlayerModelState = {
  id: '',
  soundUrl: '',
  playState: '',
  currentTime: 0,
  duration: 0,
  previousId: '',
  nextId: '',
  sounds: [],
};

const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

function* currentTime({call, put}: EffectsCommandMap) {
  while (true) {
    yield call(delay, 1000);
    const currentTime = yield call(getCurrentTime);
    yield put({type: 'setState', payload: {currentTime}});
  }
}

const playerModel: PlayerModel = {
  namespace: 'player',
  state: initialState,
  reducers: {
    setState(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    *fetchShow({payload}, {call, put}) {
      const {data} = yield call(axios.get, SHOW_URL, {
        params: {id: payload.id},
      });
      console.log(33333333);
      yield call(initPlayer, data.soundUrl);
      console.log(44444444444);
      yield put({
        type: 'setState',
        payload: {
          id: payload.id,
          soundUrl: data.soundUrl,
          duration: getDuration(),
        },
      });
      console.log(555555555555);
      yield put({type: 'play'});
    },
    *play({payload}, {call, put}) {
      yield put({type: 'setState', payload: {playState: 'playing'}});
      yield call(play);

      yield put({type: 'setState', payload: {playState: 'paused'}});
    },
    *pause({payload}, {call, put}) {
      yield call(pause);
      yield put({type: 'setState', payload: {playState: 'paused'}});
    },
    watcherCurrentTime: [
      function* (sagaEffects) {
        const {call, take, race} = sagaEffects;
        while (true) {
          yield take('play');
          yield race([call(currentTime, sagaEffects), take('pause')]);
        }
      },
      {type: 'watcher'},
    ],
    *previous({payload}, {call, put, select}) {
      console.log(1111111);
      yield call(stop);
      const {id, sounds}: PlayerModelState = yield select(
        ({player}: RootState) => player,
      );
      console.log(id, 2222222);
      const index = sounds.findIndex((item) => item.id === id);
      const currentIndex = index - 1;
      const currentItem = sounds[currentIndex];
      console.log('currentItem: ', currentItem);
      const previousItem = sounds[currentIndex - 1];
      console.log('previousItem: ', previousItem);
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
          id: currentItem.id,
          title: currentItem.title,
          previousId: previousItem ? previousItem.id : '',
        },
      });
      yield put({type: 'fetchShow', payload: {id: currentItem.id}});
    },
    *next({payload}, {call, put, select}) {
      yield call(stop);
      const {id, sounds}: PlayerModelState = yield select(
        ({player}: RootState) => player,
      );
      const index = sounds.findIndex((item) => item.id === id);
      const currentIndex = index + 1;
      const currentItem = sounds[currentIndex];
      const nextItem = sounds[currentIndex + 1];
      yield put({
        type: 'setState',
        payload: {
          playState: 'paused',
          id: currentItem.id,
          title: currentItem.title,
          previousId: nextItem ? nextItem.id : '',
        },
      });
      yield put({type: 'fetchShow', payload: {id: currentItem.id}});
    },
  },
};

export default playerModel;

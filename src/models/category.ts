import {RootState} from '@/models/index';
import {Model, Effect, SubscriptionsMapObject} from 'dva-core-ts';
import {Reducer} from 'redux';
import axios from 'axios';
import storage, {load} from '@/config/storage';

const CATEGORY_URL = 'mock/11/yang/category';

export interface ICategory {
  id: string;
  name: string;
  classify?: string;
}
export interface CategoryModelState {
  isEdit: boolean;
  myCategorys: ICategory[];
  categorys: ICategory[];
}
interface CategoryModel extends Model {
  namespace: 'category';
  state: CategoryModelState;
  effects: {
    loadData: Effect;
    toggleEditBtn: Effect;
  };
  reducers: {
    setState: Reducer<CategoryModelState>;
  };
  subscriptions: SubscriptionsMapObject;
}

const initialState = {
  isEdit: false,
  myCategorys: [
    {
      id: 'home',
      name: '推荐',
    },
    {
      id: 'vip',
      name: 'Vip',
    },
  ],
  categorys: [],
};

const categoryModel: CategoryModel = {
  namespace: 'category',
  state: initialState,
  effects: {
    *loadData(_, {call, put}) {
      //从storage获取数据
      const myCategorys = yield call(load, {key: 'myCategorys'});
      const categorys = yield call(load, {key: 'categorys'});
      if (myCategorys) {
        yield put({
          type: 'setState',
          payload: {
            myCategorys,
            categorys,
          },
        });
      } else {
        yield put({
          type: 'setState',
          payload: {
            categorys,
          },
        });
      }
    },
    *toggleEditBtn(_, {put, select}) {
      const category = yield select(({category}: RootState) => category);
      yield put({
        type: 'setState',
        payload: {
          isEdit: !category.isEdit,
          myCategorys:category.myCategorys,
        },
      });
      if (category.isEdit) {
        storage.save({
          key: 'myCategorys',
          data: category.myCategorys,
        });
      }
    },
  },
  reducers: {
    setState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({dispatch}) {
      dispatch({type: 'loadData'});
    },
    asyncStorage() {
      storage.sync.categorys = async () => {
        const {data} = await axios.get(CATEGORY_URL);
        return data;
      };
      storage.sync.myCategorys = async () => {
        return null;
      };
    },
  },
};

export default categoryModel;

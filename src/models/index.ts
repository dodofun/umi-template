import { apiTest } from '@/services';

const IndexModel = {
  namespace: 'index',
  state: {
    count: 0,
  },
  effects: {
    *query({ payload }, { call, put, select }) {
      let res = yield apiTest();

      console.log('payload', payload, res);

      yield put({
        type: 'save',
        payload: {
          data: payload,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      console.log('action', action);
      let count = state.count + 1;
      return {
        ...state,
        count,
      };
    },
  },
  subscriptions: {
    // 监听页面访问
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // history 更新时，触发
        console.log('pathname', pathname);
        if (pathname === '/demo') {
          dispatch({
            type: 'query',
          });
        }
      });
    },
  },
};

export default IndexModel;

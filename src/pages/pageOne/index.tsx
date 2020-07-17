import React, { Suspense, useEffect, useMemo, useState } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Link } from 'umi';
const LazyComponent = React.lazy(() => import('@/components/DemoLazy.tsx'));
// context生产
export const Context = React.createContext('light');

// @ts-ignore
export default connect(({ index }) => ({
  index,
}))((props: any) => {
  const {
    dispatch,
    index: { count },
  } = props;

  const [stateDemo, setStateDemo] = useState(() => {
    // 当初始化逻辑复杂时，可通过匿名函数来惰性初始化，该函数当且仅当初始化时被调用
    return {};
  });

  // 注意：useMemo 会缓存上一次的结果，使用时需评估开销和收益
  // 使用 useMemo 优化性能，且避免组件拆分
  const lazuComponent = useMemo(() => <LazyComponent count={count} />, [count]);

  useEffect(() => {
    console.log('count change: ', count);
    return () => {
      console.log('清除副作用：此处在退出页面时调用');
    };
  }, []);

  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          dispatch({
            type: 'index/query',
            payload: 'Page demo clicked',
          });
        }}
      >
        Page Demo {count}
      </h1>
      <Link to="/">To Index Page</Link>
      <Context.Provider value="dark">
        <Suspense fallback={<div>Loading...</div>}>{lazuComponent}</Suspense>
      </Context.Provider>
    </div>
  );
});

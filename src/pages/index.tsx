import React, { useMemo, useState, Suspense } from 'react';
import styles from './index.less';
import Demo, { DemoAsync } from '@/components/Demo';
import { useHistory, useLocation, useParams, useRouteMatch } from 'umi';
import cloneDeep from 'lodash/cloneDeep';

const LazyComponent = React.lazy(() => import('@/components/DemoLazy'));

export default (props: any) => {
  // @ts-ignore
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  const [count, setCount] = useState(0);

  console.log('page props', props);
  console.log('params', params, location);

  let cloneRes = cloneDeep({ name: 'TEST' });
  console.log('cloneRes', cloneRes);

  // 注意：useMemo 会缓存上一次的结果，使用时需评估开销和收益
  // 使用 useMemo 优化性能，且避免组件拆分
  const lazuComponent = useMemo(() => <LazyComponent count={count} />, [count]);

  return (
    <div className={styles.index}>
      <h1
        className={styles.title}
        onClick={() => {
          history.push('/pageOne');
        }}
      >
        Welcome to index page
      </h1>
      <ul>
        <li>location: {location.pathname}</li>
        <li>match: {JSON.stringify(match.params)}</li>
      </ul>
      <Demo />
      <DemoAsync />
      <Suspense fallback={<div>Loading...</div>}>{lazuComponent}</Suspense>
    </div>
  );
};

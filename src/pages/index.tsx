import React, { useMemo, useState, Suspense } from 'react';
import styles from './index.less';
import Demo, { DemoAsync } from '@/components/demo';
const LazyComponent = React.lazy(() => import('@/components/demoLazy'));

export default (props: any) => {
  // @ts-ignore
  console.log('page props', props, process.env, NODE_ENV);

  const [count, setCount] = useState(0);

  // 注意：useMemo 会缓存上一次的结果，使用时需评估开销和收益
  // 使用 useMemo 优化性能，且避免组件拆分
  const lazuComponent = useMemo(() => <LazyComponent count={count} />, [count]);

  return (
    <div className={styles.index}>
      <h1 className={styles.title}>Welcome to index page ...</h1>
      <Demo />
      <DemoAsync />
      <Suspense fallback={<div>Loading...</div>}>{lazuComponent}</Suspense>
    </div>
  );
};

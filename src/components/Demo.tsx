import React from 'react';
import { dynamic } from 'umi';
import { useModel } from '@@/plugin-model/useModel';

const Demo = () => {
  const { count, increment } = useModel('useDemoModel', model => ({
    count: model.count,
    increment: model.increment,
  }));

  return (
    <div
      onClick={() => {
        increment();
      }}
    >
      I will render after {count}s
    </div>
  );
};

export default Demo;

// 异步化
export const DemoAsync = dynamic({
  loader: async function() {
    // 动态 import
    const { default: DemoLazy } = await import('./DemoLazy');
    return () => (
      <div>
        <Demo />
        <DemoLazy />
      </div>
    );
  },
});

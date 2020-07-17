import React from 'react';
import { dynamic } from 'umi';

const Demo = () => <div>I will render after 1s</div>;

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

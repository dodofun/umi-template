import React from 'react';
import { dynamic } from 'umi';
import logProps from '@/utils/logProps';

const Demo = () => <div>I will render after 1s</div>;

export default Demo;

// 异步化
export const DemoAsync = dynamic({
  loader: async function() {
    return () => <div>I will render after 1s</div>;
  },
});

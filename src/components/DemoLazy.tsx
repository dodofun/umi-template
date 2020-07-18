import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '@/utils/context';

const DemoLazy = (props: any) => {
  console.log('props', props);
  // context消费
  const themeContext = useContext(ThemeContext);
  console.log('themeContext', themeContext);

  useEffect(() => {
    return () => {
      console.log('清除副作用：此处在卸载组件时调用');
    };
  }, []);

  return (
    <div>
      <h1>Lazy component {props.count}</h1>
    </div>
  );
};

export default React.memo(
  DemoLazy,
  (prevProps, nextProps) => prevProps === nextProps,
);

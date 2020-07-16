import React from 'react';

const Layout = (props: any) => {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, { foo: 'bar' }); // 传递参数给子路由
  });
}

export default Layout;

import React, { useState } from 'react';
import { history } from 'umi';

// 权限验证
export default (props: any) => {
  const [isLogin, setIsLogin] = useState(true); // 验证是否登录
  if (isLogin) {
    return props.children;
  } else {
    console.log('Login failed');
    // 跳转到登录页
    history.replace('/');
    return <div>Loading...</div>
  }
};

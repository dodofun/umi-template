import { request } from '@/utils/request';
import { getInitialState } from './getInitialState';

/***
 * 复写 render 渲染之前
 * @param oldRender
 */
const render = (oldRender: any) => {
  // TODO 通过复写 render 可用于渲染之前做权限校验、获取初始化参数等操作
  oldRender();
};

/***
 * 修改路由
 * @param routes
 */
const patchRoutes = async (props: any) => {
  // TODO 动态插入路由
  props.routes.unshift({
    path: '/foo',
    exact: true,
    component: require('@/pages/index').default,
  });
};

/***
 * 路由更新时触发
 * @param props
 */
const onRouteChange = (props: any) => {
  const { routes, matchedRoutes, location, action } = props;
  console.log('onRouteChange', props, matchedRoutes);
  if (matchedRoutes.length) {
    //  路由更新时，更新 title
    // document.title = matchedRoutes[matchedRoutes.length - 1].route.title || '';
  }

  // TODO 动态路由

  // TODO 埋点统计

  // TODO 其他
};

export { render, request, getInitialState, patchRoutes, onRouteChange };

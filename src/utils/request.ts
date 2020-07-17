import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  timeout: 30000,
  errorConfig: {
    // 当后端接口不满足该规范的时候你需要通过该配置把后端接口数据转换为该格式，该配置只是用于错误处理，不会影响最终传递给页面的数据格式
    // adaptor: (resData) => {
    //   return resData;
    // },
  },
  // 中间件，可配置多个
  middlewares: [
    async (ctx, next) => {
      console.log('before request');
      await next();
      console.log('after request');
    },
  ],
  // request 拦截器，可配置多个
  requestInterceptors: [
    (url, options) => {
      console.log('url, options', url, options);
      options.headers = { contentType: 'json', accept: 'json' };
      return {
        url: `${url}`,
        options: { ...options, interceptors: true },
      };
    },
  ],
  // response 拦截器，可配置多个
  responseInterceptors: [
    (response, options) => {
      console.log('response', response);
      console.log('options', options);
      return response;
    },
  ],
};

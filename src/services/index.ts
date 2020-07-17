import { request } from 'umi';

export const apiTest = () => {
  return request('/api/citys', {});
};

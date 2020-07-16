export const routes = [
  {
    title: '',
    path: '/',
    component: '@/pages/index',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        title: 'Index',
        path: '/index',
        component: '@/pages/index',
        // redirect: '/', // 路由重定向
        wrappers: ['@/routes/wrappers/auth'],
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];

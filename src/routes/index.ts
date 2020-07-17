export const routes = [
  {
    title: '',
    path: '/',
    component: '@/pages/index',
  },
  {
    path: '/',
    component: '@/layouts/index',
    wrappers: ['@/routes/wrappers/auth'],
    routes: [
      {
        title: 'Index',
        path: '/index',
        component: '@/pages/index',
        // redirect: '/', // 路由重定向
      },
      {
        title: 'pageOne',
        path: '/pageOne',
        component: '@/pages/pageOne',
      },
      {
        title: 'pageTwo',
        path: '/pageTwo',
        component: '@/pages/pageTwo',
      },
      {
        component: '@/pages/404',
      },
    ],
  },
];

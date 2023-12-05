const admin: AuthRoute.Route = {
  name: 'user',
  path: '/user',
  component: 'self',
  meta: {
    title: '用户管理',
    requiresAuth: true,
    singleLayout: 'basic',
    // permissions: ['super', 'admin', 'user'],
    icon: 'fluent:book-information-24-regular',
    order: 2
  }
};

export default admin;

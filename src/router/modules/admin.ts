const admin: AuthRoute.Route = {
  name: 'admin',
  path: '/admin',
  component: 'self',
  meta: {
    title: '管理员',
    requiresAuth: true,
    singleLayout: 'basic',
    // permissions: ['super', 'admin', 'user'],
    icon: 'fluent:book-information-24-regular',
    order: 2
  }
};

export default admin;

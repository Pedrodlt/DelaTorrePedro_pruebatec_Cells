export const routes = [

  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: 'landing-home',
    action: () => import('../pages/landigHome/index.js'),
  },
  {
    path: '/productForm',
    component: 'product-form',
    action: () => import('../pages/productForm/index.js'),
  },

];

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FontControlView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/frontDesk/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/frontDesk/AboutView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/frontDesk/LoginView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontDesk/ProductsView.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontDesk/ProductView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/frontDesk/CartView.vue')
      },
      {
        path: 'checkout',
        component: () => import('../views/frontDesk/CheckoutView.vue')
      },
      {
        path: 'order/:id',
        component: () => import('../views/frontDesk/OrderView.vue')
      },
      {
        path: 'thankyou/:id',
        component: () => import('../views/frontDesk/ThankYouView.vue')
      },
      {
        path: 'faq',
        component: () => import('../views/frontDesk/FaqView.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/BackControlView.vue'),
    children: [
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/backDesk/OrderView.vue')
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/backDesk/ProductView.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backDesk/CouponsView.vue')
      }
    ]
  },
  {
    // 重新導向 到登入頁面
    path: '/admin/:pathMatch(.*)*',
    redirect: {
      name: 'Product'
    }
  },
  {
    // 404
    // * 代表全部 跟子路徑
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router

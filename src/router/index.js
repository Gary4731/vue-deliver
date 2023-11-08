import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: () => import('../views/homes/Home.vue')
        },
        {
            path: '/home',
            component: () => import('../views/homes/Home.vue')
        },
        {
            path: '/cart',
            component: () => import('../views/cart/cart.vue')
        },
        {
            path: '/order',
            component: () => import('../views/order/Order.vue')
        },
        {
            path: '/mine',
            component: () => import('../views/mine/Mine.vue')
        },
        {
            path: '/store',
            component: () => import('../views/store')
        }
    ]
})

export default router;
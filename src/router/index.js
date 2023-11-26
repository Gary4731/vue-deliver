import { createRouter, createWebHashHistory } from "vue-router";
import { showToast } from 'vant';

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
            component: () => import('../views/cart/cart.vue'),
            meta:{isAuth:true}
        },
        {
            path: '/order',
            component: () => import('../views/order/Order.vue'),
            meta:{isAuth:true}
        },
        {
            path: '/mine',
            component: () => import('../views/mine/Mine.vue'),
            meta:{isAuth:true}
        },
        {
            path: '/store',
            component: () => import('../views/store')
        },
        {
            path: '/createorder',
            component: () => import('../views/creatOrder'),
            meta:{isAuth:true}
        },
        {
            path: '/userinfoedit',
            component: () => import('../views/userinfoedit'),
            meta:{isAuth:true}
        },
        {
            path: '/login',
            component: () => import('../views/login')
        },
        {
            path: '/register',
            component: () => import('../views/register')
        },
    ]
})
router.beforeEach((to,from,next) => {
if(to.meta.isAuth){
    // when login ,then will store a sign in local storage
    if(localStorage.isLogin === 'login') {
        next()
    } else{
        next('/login');
        showToast('Please Log in first');
    } 
}else{
    next()
}
})

export default router;
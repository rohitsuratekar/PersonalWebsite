import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/About')
    },
    {
        path: '/research',
        name: 'Research',
        component: () => import('../components/Research')
    },
    {
        path: '/developer',
        name: 'Developer',
        component: () => import('../components/Developer')
    },
    {
        path: '/professional',
        name: 'Professional',
        component: () => import('../components/Professional')
    },
    {
        path: '/artist',
        name: 'Artist',
        component: () => import('../components/Artist')
    },
    {
        path: '/photography',
        name: 'Photography',
        component: () => import('../components/Photography')
    },
    {
        path: '/draw',
        name: 'Drawing',
        component: () => import('../components/Drawing')
    },
    {
        path: '/design',
        name: 'Designing',
        component: () => import('../components/Digital')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // Following needed to adjust the scroll behaviour of the router
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
});

export default router

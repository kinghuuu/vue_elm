import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const login = req => require.ensure([], () => req(require('@/pages/login')), 'login')
const leftNav = req => require.ensure([], () => req(require('@/components/leftNav')), 'leftNav')
const home = req => require.ensure([], () => req(require('@/pages/home')), 'home')

const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/leftNav',
        component: leftNav
    },
    {
        path: '/home',
        component: home
    },
]

const router = new VueRouter({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})

export default router
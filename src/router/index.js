import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const login = req => require.ensure([], () => req(require('@/pages/login')), 'login')
const main = req => require.ensure([], () => req(require('@/components/main')), 'main')
const home = req => require.ensure([], () => req(require('@/pages/home')), 'home')
const userList = req => require.ensure([], () => req(require('@/pages/userList')), 'userList')

const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/main',
        component: main
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/userList',
        component: userList
    },
]

const router = new VueRouter({
    routes,
    strict: process.env.NODE_ENV !== 'production',
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
import Roles from '../components/role/Roles'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            component: Home,
            redirect: '/welcome',
            children: [
                { path: '/welcome', component: Welcome },
                { path: '/users', component: Users },
                { path: '/roles', component: Roles }
            ]
        }
    ]
})

//导航守卫
// router.beforeEach((to, from, next) => {
//     // to 将要访问的路径
//     // from 代表从哪个路径跳转而来
//     // next 是一个函数, 表示放行 next()放行   next('/login')强制跳转到登录页
// })

export default router
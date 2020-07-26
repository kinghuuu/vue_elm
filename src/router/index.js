import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => (/* webpackChunkName:"login_home_welcome" */ '../components/Login')
const Home = () => (/* webpackChunkName:"login_home_welcome" */ '../components/Home')
const Welcome = () => (/* webpackChunkName:"login_home_welcome" */ '../components/Welcome')
const Users = () => (/* webpackChunkName:"users_roles_rights" */ '../components/Users')
const Roles = () => (/* webpackChunkName:"users_roles_rights" */ '../components/Roles')
const Rights = () => (/* webpackChunkName:"users_roles_rights" */ '../components/Rights')
const Cate = () => (/* webpackChunkName:"cate_params" */ '../components/Cate')
const Params = () => (/* webpackChunkName:"cate_params" */ '../components/Params')
const GoodsList = () => (/* webpackChunkName:"goodslist_orders_report" */ '../components/GoodsList')
const Orders = () => (/* webpackChunkName:"goodslist_orders_report" */ '../components/Orders')
const Report = () => (/* webpackChunkName:"goodslist_orders_report" */ '../components/Report')

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
                { path: '/roles', component: Roles },
                { path: '/rights', component: Rights },
                { path: '/categories', component: Cate },
                { path: '/params', component: Params },
                { path: '/goodsList', component: GoodsList },
                { path: '/orders', component: Orders },
                { path: '/report', component: Report }
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
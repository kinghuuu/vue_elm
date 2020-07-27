import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Login')
const Home = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Home')
const Welcome = () => import(/* webpackChunkName:"login_home_welcome" */ '../components/Welcome')
const Users = () => import(/* webpackChunkName:"users_roles_rights" */ '../components/user/Users')
const Roles = () => import(/* webpackChunkName:"users_roles_rights" */ '../components/power/Roles')
const Rights = () => import(/* webpackChunkName:"users_roles_rights" */ '../components/power/Rights')
const Cate = () => import(/* webpackChunkName:"cate_params" */ '../components/goods/Cate')
const Params = () => import(/* webpackChunkName:"cate_params" */ '../components/goods/Params')
const GoodsList = () => import(/* webpackChunkName:"goodslist_orders_report" */ '../components/goods/GoodsList')
const Orders = () => import(/* webpackChunkName:"goodslist_orders_report" */ '../components/orders/Orders')
const Report = () => import(/* webpackChunkName:"goodslist_orders_report" */ '../components/reports/Report')

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
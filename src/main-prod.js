import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

//全局初始化日期
Vue.filter('dataFormat', function (originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = ((dt.getMonth() + 1) + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, 0)

    const hh = (dt.getHours() + '').padStart(2, 0)
    const mm = (dt.getMinutes() + '').padStart(2, 0)
    const ss = (dt.getSeconds() + '').padStart(2, 0)

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#root')

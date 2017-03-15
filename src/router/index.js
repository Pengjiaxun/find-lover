import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/register',
        component: resolve => require(['../components/register'], resolve)
    }, {
        path: '/infoPatch',
        component: resolve => require(['../components/infoPatch'], resolve)
    }, {
        path: '/index',
        component: resolve => require(['../components/index'], resolve)
    }, {
        path: '/myInfo',
        component: resolve => require(['../components/myInfo'], resolve)
    }, {
        path: '/condition',
        component: resolve => require(['../components/condition'], resolve)
    }, {
        path: '/infoView',
        component: resolve => require(['../components/infoView'], resolve)
    }, {
        path: '/conditionView',
        component: resolve => require(['../components/conditionView'], resolve)
    }]
})

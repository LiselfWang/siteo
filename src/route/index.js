import Router from 'vue-router';
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/site/index'
        },
        {
            path: '/site',
            component: resolve => require(['../components/front/siteLayout.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: 'index',
                    component: resolve => require(['../page/front/index.vue'], resolve),
                    meta: { title: '网站首页' }
                }
            ]
        },
        {
            path: '/manager/',
            redirect: '/manager/home'
        },
        {
            path: '/manager/login',
            component: resolve => require(['../page/manager/login.vue'], resolve)
        },
        {
            path: '/manager',
            component: resolve => require(['../components/manager/managerLayout.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: 'home',
                    component: resolve => require(['../page/manager/home.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: 'about',
                    component: resolve => require(['../page/manager/test.vue'], resolve),
                    meta: { title: '关于我们' }
                },
                {
                    path: 'contact',
                    component: resolve => require(['../page/manager/test2.vue'], resolve),
                    meta: { title: '联系我们' }
                },
                {
                    path: 'banner',
                    component: resolve => require(['../page/manager/test2.vue'], resolve),
                    meta: { title: 'banner图' }
                }
            ]
        }
    ]
})

// import Layout from '/@/layout/index.vue';
const remainingRouter = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'message.hslogin',
            rank: 101,
            showLink: false
        },
        component: () => import('/@/views/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: {
            title: 'message.hsregister',
            rank: 102,
            showLink: false
        },
        component: () => import('/@/views/register.vue')
    }
]

export default remainingRouter;
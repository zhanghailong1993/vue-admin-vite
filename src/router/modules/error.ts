import Layout from "/@/layout/index.vue";

const errorRouter = {
  path: '/error',
  name: 'error',
  component: Layout,
  redirect: '/error/401',
  meta: {
    icon: 'el-icon-position',
    title: 'message.hserror',
    showLink: true,
    savedPosition: true,
    rank: 7
  },
  children: [
    {
      path: '/error/401',
      name: '401',
      meta: {
        title: 'message.hsfourZeroOne',
        showLink: true,
        savedPosition: true
      }
    },
    {
      path: '/error/404',
      name: '404',
      meta: {
        title: 'message.hsfourZeroFour',
        showLink: true,
        savedPosition: true
      }
    }
  ]
}

export default errorRouter
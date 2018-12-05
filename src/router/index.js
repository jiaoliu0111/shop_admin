// 导入Vue
import Vue from 'vue'

// 1-导入路由
import VueRouter from 'vue-router'

// 5- 导入组件，配置路由
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'
import Users from '@/components/users/Users'
import Roles from '@/components/roles/Roles'

// 2- 将路由作为Vue的插件安装
Vue.use(VueRouter)

//  3-创建路由实例，配置路由
const router = new VueRouter({
  routes: [
    {path: '/login', component: Login},
    {
      path: '/home',
      component: Home,
      children: [
        {path: '/users', component: Users},
        {path: '/roles', component: Roles}
      ]
    }
  ]
})
//  添加路由守卫，用来实现登录访问限制
router.beforeEach((to, from, next) => {
  console.log('路由守卫启用了')
  // console.log('to:', to)
  // console.log('from:', from)
  if (to.path === '/login') {
    return next()
  }

  const token = localStorage.getItem('token')
  if (token) {
    next()
  } else {
    next('/login')
  }
  // next()
})

// 导出路由
export default router

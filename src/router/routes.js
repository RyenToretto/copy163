/*
路由懒加载:
  1. 使用 import 函数: 被引入的模块单独打包(生成一个单独的打包文件)
  2. 配置的component是: 返回import()得到的模块的函数, 只有当请求对应的path, 才会执行此函数, 从后台获取对应的包
好处:
  减小首屏需要加载的js
 */
const Home = ()=>import('../pages/Home/Home.vue')
const SearchGoods = ()=>import('../pages/Home/SearchGoods/SearchGoods.vue')

const Category = ()=>import('../pages/Category/Category.vue')
const Things = ()=>import('../pages/Things/Things.vue')
const Shopcar = ()=>import('../pages/Shopcar/Shopcar.vue')

const Personal = ()=>import('../pages/Personal/Personal.vue')
const PhoneLogin = ()=>import('../pages/Personal/PhoneLogin/PhoneLogin.vue')
const EmailLogin = ()=>import('../pages/Personal/EmailLogin/EmailLogin.vue')

export default [
  {
    path: '/home',
    component: Home,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path: '/search',
    component: SearchGoods
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcar',
    component: Shopcar,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path: '/personal/phonelogin',
        component: PhoneLogin,
      },
      {
        path: '/personal/emaillogin',
        component: EmailLogin,
      }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]

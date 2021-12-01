import Vue from 'vue'
import VueRouter from 'vue-router'
import Home1 from '../views/Home1.vue'
import Home from '../components/Home'
import jewelery from '@/components/jewelery'
import product from '@/components/product'
import carts from '@/components/carts'
import Layout from '@/components/Layout'
import electronics from '@/components/electronics'
import womencloth from '@/components/womencloth'
import mencloth from '@/components/mencloth'
import products from '@/components/products'
import userprofile from '@/components/userprofile'



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home1',
    component: Home1
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    component: Layout,
    children:[
      {
        path:'/1',
        component:Home,
        name:'Home'
      },
      {
        path:'/jewelery',
        component:jewelery,
        name:'jewelery'
      },
      {
        path: '/electronics',
        name: 'electronics',
        component: electronics
      },
      {
        path: '/mencloth',
        name: 'mencloth',
        component: mencloth
      },
      {
        path: '/womencloth',
        name: 'womencloth',
        component: womencloth
      },
      {
        path:'/products',
        component:products,
        name:'products'
      },
      {
        path:'/product/:id',
        component:product,
        name:'product',
        props : true,
    
      },
      {
        path:'/userprofile',
        component:userprofile,
        name:'userprofile'
      },
      {
        path:'/carts',
        component:carts,
        name:'carts'
      }
    ]

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



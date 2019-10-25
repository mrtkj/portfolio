import Vue from 'vue'
// eslint-disable-next-line
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

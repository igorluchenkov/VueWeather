import Vue from 'vue'
import Router from 'vue-router'
import WeatherPage from '@/components/WeatherPage/WeatherPage.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    	path: '*',
    	redirect: '/'
    },
    {
      path: '/',
      name: 'weather',
      component: WeatherPage,
    },
  ]
})
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueValidator  from 'vue-validator'
import infiniteScroll from 'vue-infinite-scroll'
import routerConfig from './router'
import * as filters from './filters'
import 'assets/css/mint-ui.css';

import app from './main'


// Router
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

routerConfig(router)

// Resource
Vue.use(VueResource)

Vue.use(infiniteScroll)

// VueValidator
Vue.use(VueValidator)

//Vue.http.options.root = process.env.NODE_ENV === 'development' ? 'src/assets/data' : '/vue-sui-demo/static/data'
//Vue.http.options.emulateJSON = true

// Directive
//Vue.directive('util', util)

// Filters
Vue.filter('date', filters.dateFilter)

router.start(app, '#app')

window.router = router

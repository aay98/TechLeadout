import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store.js'
import Post from './components/Post.vue'
//import PostPage from './components/PostPage'
import Router from'vue-router'
//import Hello from './components/HelloWorld.vue'
//import Vuex from 'vuex'
Vue.use(Router)
Vue.config.productionTip = false
//Vue.use(Vuex)
const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      //component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ]
 })
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

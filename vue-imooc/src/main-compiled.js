// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VRouter from 'vue-router';
import Vuex from 'vuex';
import Apple from './components/apple';
import Banana from './components/banana';
import RedApple from './components/redapple';
import GreenApple from './components/greenapple';

Vue.use(VRouter);
Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  mutations: {
    getters: {},
    // +-价格
    increment: function increment(state, price) {
      state.totalPrice += price;
    },
    decrement: function decrement(state, price) {
      state.totalPrice -= price;
    }
  }
});

var router = new VRouter({
  mode: 'history',
  routes: [
  // 重定向
  {
    path: '/',
    redirect: 'apple'
  }, {
    /* path是路径 ,:color设定参数,带引号的都是参数 */
    path: '/apple/:color/detail/:type',
    /* component是组件 */
    component: {
      viewA: Apple,
      viewB: RedApple
    },
    name: 'appPage',
    /* 子组件 */
    children: [{
      path: '/red',
      component: RedApple
    }, {
      path: '/green',
      component: GreenApple
    }]
  }, {
    /* path是路径 */
    path: '/banana',
    /* component是组件 */
    component: Banana
  }]
});
// 检查客户信息，没有登录的话，通过router.push直接导航到登录页
// router.brforeEach()

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map
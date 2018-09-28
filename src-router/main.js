import Vue from 'vue';
import App from './App.vue';
import router from './router'

new Vue ({
  el: '#app',
  data () {

  },
  components: {
    App
  },
  template: '<App/>', // 将<App/>渲染到页面的el元素中

   router //注册路由器
});

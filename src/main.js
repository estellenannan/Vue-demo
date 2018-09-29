import Vue from 'vue';
import {Button} from 'mint-ui';

import App from './App.vue';
import router from './router'

//全局定义组件
Vue.component(Button.name,Button);

new Vue({
  el: '#app',
  data() {

  },
  components: {
    App
  },
  template: '<App/>', // 将<App/>渲染到页面的el元素中

  router //注册路由器
});

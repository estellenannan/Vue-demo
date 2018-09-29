/*
*路由器对象模块
* */

import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
import MessageDetails from '../pages/MessageDetails.vue';

Vue.use(VueRouter);

export default new VueRouter({
  //配置所有路由
  routes: [
    {//配置一般路由
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/news',
          component: News,
        },
        {
          path: '/home/message',
          component: Message,
          children: [

            {
              path: '/home/message/messageDetails/:id',
              component: MessageDetails,
            }
          ]
        },
        {
          path: '',//点击home时直接显示news
          redirect: '/home/news'
        }
      ]

    },
    {
      path: '/about',
      component: About
    },
    {//每次一打开自动跳转到 about
      path: '/',
      redirect: '/about'
    }

  ]

})







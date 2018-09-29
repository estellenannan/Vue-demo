<template>
  <div>
    <ul >

      <li v-for="(m, index) in messages" :key="index">

        <router-link :to="`/home/message/MessageDetails/${m.id}`"> {{m.title}}</router-link>

       <button @click="showPush(m.id)">push查看</button>
        <button @click="showReplace(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <!--$router: 代表路由器对象, 包含控制路由跳转的方法(push/replce/back())-->
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: []
      }
    },

    mounted() {   // 模拟从后台获取数据
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'}
        ];

        this.messages = messages;

      }, 1000)
    },
    methods: {

//      <!--$router: 代表路由器对象, 包含控制路由跳转的方法(push/replce/back())-->
      showPush (id ) {
        console.log(this.$router);
       this.$router.push(`/home/message/messageDetails/${id}`);
     },
      showReplace (id) {
       this.$router.replace(`/home/message/messageDetails/${id}`);
      }

    }

  }
</script>

<style>

</style>

<template>
  <div>
    <h4 v-if="!details.id">LOADING>>>></h4>
    <ul v-else>
      <li>id:{{details.id}}</li>
      <li>title:{{details.title}}</li>
      <li>content:{{details.content}}</li>
    </ul>
  </div>
</template>

<script>

  const messageDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'}
  ];
  export default {


    data() {
      return {
        details: {}
      }
    },
    mounted() {
      //把获取的id和找到的id做对比 再更新detail
      const id = this.$route.params.id * 1; //获取的id是字符串要变成数字
      setTimeout(() => {
        const details = messageDetails.find((details) => details.id === id);
        this.details = details;
      }, 1000)
    },
    watch: {
      //点击另外一条信息时重新请求 $route.params.id要有变化 显示当前id号的数据
      $route: function (value) {//value 是$route 最新的值
//        this.details = {};//要记得清空之前的其它id数据
        const id = value.params.id * 1;
        setTimeout(() => {
          const details = messageDetails.find((details) => details.id === id);
          this.details = details;
        }, 1000)
      }

    }
  }
</script>

<style>

</style>

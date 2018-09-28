<template>
  <div>
    <HelloWorld></HelloWorld>
    <HelloWorld></HelloWorld>
    <img class="logo"  src="./assets/logo.png" alt="logo">
  </div>
</template>

<script>
  import HelloWorld from './components/heloWord.vue'
  // 向外默认暴露一个配置对象: 前vm能写哪些它就能写哪些
  export default {
    data () {

    },
    components: {//注册组件标签 引入vue组件后不能立即调用
      HelloWorld
    }
  }
</script>

<style>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>

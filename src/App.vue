<template>

  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Router Basic - 01</h2></div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--路由链接-->
          <router-link class="list-group-item" to="/about">About</router-link>
          <router-link class="list-group-item" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">

              <!--显示当前路由组件界面-->
              <router-view msg="abc"/>


          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
  import About from './pages/About.vue';
  import Home from './pages/Home.vue';

  export default {
    data() {
      return {}
    },
    component: {
      About,
      Home

    }
  }
</script>

<style>

  .router-link-active {
    color: red !important;
  }
</style>

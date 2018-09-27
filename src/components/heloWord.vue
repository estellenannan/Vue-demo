<template>
  <div>
  <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>

  export default {
    data () {
     return {
       title: 'hello Vue'
     }
    }
  }
</script>

<style>
.title {
  color: lightcoral;
}
  body {
    background: gray;
  }
</style>

<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">

        <TodoHeader :addTodo="addTodo"></TodoHeader>
        <List ：todos="todos"></List>
        <TodoFooter></TodoFooter>

      </div>
    </div>
  </div>

</template>

<script>
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'

  export default {
    data() {
      return {
        todos: [
          {title: '吃饭', complete: false},
          {title: '睡觉', complete: true},
          {title: '敲代码', complete: false},
        ]
      }
    },
    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo);
      }
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>

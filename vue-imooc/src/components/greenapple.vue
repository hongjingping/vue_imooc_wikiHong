<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'i am greenapple'
      }
    },
    methods: {
    }
  }
</script>

<style>

</style>

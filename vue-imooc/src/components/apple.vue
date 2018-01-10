<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="getParam">getParam</button>
    <!-- 子组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'i am apple'
      }
    },
    methods: {
      getParam () {
        // this.$route.params当前页面hash后面的参数
        console.log(this.$route.params)
      }
    }
  }
</script>

<style>

</style>

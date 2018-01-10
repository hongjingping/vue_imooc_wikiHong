<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <p>my color is {{ $route.params.color }}</p>
    <p>my size is {{ $route.query.size }}</p>
    <button @click="showDetail">detail</button>
    <!-- 带参数的导航，必须是具名路由 -->
    <router-link :to="{name: 'dog', params: {color: 'brown'}, query: {size: 'medium'}}">Dog</router-link>
    <router-link :to="{name: 'cat', params: {color: 'yellow'}, query: {size: 'small'}}">Cat</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showDetail () {
      console.log('color is %s, size is %s', this.$route.params.color, this.$route.query.size)
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
.ab {
  position: absolute;
  left: 150px;
  top: 300px;
}
</style>

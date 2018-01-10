<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 带参数的导航，必须是具名路由 -->
    <router-link :to="{name: 'dog', params: {color: 'brown'}, query: {size: 'medium'}}">Dog</router-link>
    <router-link :to="{name: 'cat', params: {color: 'yellow'}, query: {size: 'small'}}">Cat</router-link>
    <p>各种类型的导航</p>
    <!-- 通过 path字段跳转 -->
    <router-link :to="{path: '/cat'}">Cat</router-link>
    <br>
    <!-- 通过 字符串跳转 -->
    <router-link :to="'/cat'">Cat</router-link>
    <br>
    <!-- 设置导航链接tag -->
    <router-link :to="'/cat'" tag="li">Cat</router-link>

    <h2 @click="toDog">点我去狗的页面</h2>
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
    //  编程式导航
    toDog () {
      this.$router.push({name: 'dog', params: {color: 'brown'}, query: {size: 'medium'}})
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

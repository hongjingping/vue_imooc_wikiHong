<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{ totalPrice }}
    <router-view name='viewA'></router-view>
    <router-view name='viewB'></router-view>
    <!--transition过渡，keep-alive是进行缓存-->
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <router-link :to="{name:'applePage'}">to apple</router-link>
    <router-link :to="{path:'banana'}">to banana</router-link>
    <!--子路由-->
    <router-link :to="{path:'apple/red'}">to redapple</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    totalPrice () {
      return this.$store.state.totalPrice
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
